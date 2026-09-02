import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MODEL = "google/gemini-3.1-flash-lite";

export const LANGUAGE_NAMES: Record<string, string> = {
  es: "español",
  en: "inglés",
  fr: "francés",
  it: "italiano",
  pt: "portugués",
  de: "alemán",
  ca: "catalán",
  "zh-CN": "chino simplificado",
  ar: "árabe",
};

const inputSchema = z.object({
  lang: z.string().min(2).max(8),
  texts: z.array(z.string()).min(1).max(120),
});

/** Hash estable (FNV-1a) del texto original. */
export function hashText(text: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(36) + "-" + text.length.toString(36);
}

async function translateWithAi(texts: string[], lang: string): Promise<string[]> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("LOVABLE_API_KEY missing");

  const target = LANGUAGE_NAMES[lang] ?? lang;
  const payload = texts.map((t, i) => ({ i, t }));

  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "X-Lovable-AIG-SDK": "fetch",
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: "system",
          content:
            `Eres un traductor profesional para la web de un podcast de negocios y liderazgo llamado "Diario del Poder". ` +
            `Traduce del español al ${target}. Reglas: conserva el tono editorial y sobrio; ` +
            `NO traduzcas nombres propios, marcas ni títulos de episodios entre comillas; ` +
            `conserva mayúsculas/minúsculas del original cuando sean estilísticas (por ejemplo TODO EN MAYÚSCULAS); ` +
            `conserva números, símbolos y espacios inicial/final; ` +
            `si un fragmento no necesita traducción, devuélvelo idéntico. ` +
            `Devuelve SOLO un JSON con la forma {"items":[{"i":0,"t":"..."}]} con exactamente los mismos índices.`,
        },
        { role: "user", content: JSON.stringify({ items: payload }) },
      ],
      response_format: { type: "json_object" },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`AI gateway ${res.status}: ${body.slice(0, 300)}`);
  }

  const data = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const raw = data.choices?.[0]?.message?.content ?? "{}";
  let parsed: { items?: Array<{ i: number; t: string }> } = {};
  try {
    parsed = JSON.parse(raw);
  } catch {
    const m = raw.match(/\{[\s\S]*\}/);
    if (m) parsed = JSON.parse(m[0]);
  }

  const out = [...texts];
  for (const item of parsed.items ?? []) {
    if (typeof item?.i === "number" && typeof item?.t === "string" && out[item.i] !== undefined) {
      out[item.i] = item.t;
    }
  }
  return out;
}

export const translateTexts = createServerFn({ method: "POST" })
  .inputValidator((data) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const { lang } = data;
    const result: Record<string, string> = {};
    if (lang === "es") {
      for (const t of data.texts) result[hashText(t)] = t;
      return { translations: result };
    }

    // Deduplicar por hash
    const byHash = new Map<string, string>();
    for (const t of data.texts) byHash.set(hashText(t), t);
    const hashes = [...byHash.keys()];

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: cached } = await supabaseAdmin
      .from("translations")
      .select("source_hash, translated_text")
      .eq("lang", lang)
      .in("source_hash", hashes);

    for (const row of cached ?? []) {
      result[row.source_hash] = row.translated_text;
    }

    const missing = hashes.filter((h) => !(h in result));
    if (missing.length === 0) return { translations: result };

    const missingTexts = missing.map((h) => byHash.get(h)!);
    const translated = await translateWithAi(missingTexts, lang);

    const rows = missing.map((h, i) => ({
      lang,
      source_hash: h,
      source_text: missingTexts[i],
      translated_text: translated[i] ?? missingTexts[i],
    }));
    for (const row of rows) result[row.source_hash] = row.translated_text;

    await supabaseAdmin
      .from("translations")
      .upsert(rows, { onConflict: "lang,source_hash", ignoreDuplicates: true });

    return { translations: result };
  });

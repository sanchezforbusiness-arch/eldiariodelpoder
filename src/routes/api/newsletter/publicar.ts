import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://eldiariodelpoder.com";
const TOKEN_SHA256 = "454d06669a4b3a732f6dcca298193fe0e41256fd29b3b211d4ffaf84d3584395";

async function sha256Hex(value: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function equalConstantTime(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function base64ToBytes(b64: string) {
  const clean = b64.includes(",") ? b64.slice(b64.indexOf(",") + 1) : b64;
  const bin = atob(clean);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function contentTypeFor(nombre: string) {
  if (nombre.endsWith(".png")) return "image/png";
  if (nombre.endsWith(".webp")) return "image/webp";
  if (nombre.endsWith(".gif")) return "image/gif";
  return "image/jpeg";
}

/** Sustituye recursivamente los valores exactos `storage:<nombre>` por su URL pública. */
function resolverStorage<T>(value: T, urls: Record<string, string>): T {
  if (typeof value === "string") {
    if (value.startsWith("storage:")) {
      const nombre = value.slice("storage:".length);
      return (urls[nombre] ?? value) as unknown as T;
    }
    return value;
  }
  if (Array.isArray(value)) return value.map((v) => resolverStorage(v, urls)) as unknown as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = resolverStorage(v, urls);
    }
    return out as unknown as T;
  }
  return value;
}

export const Route = createFileRoute("/api/newsletter/publicar")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const authHeader = request.headers.get("authorization") ?? "";
        if (!authHeader.startsWith("Bearer ")) {
          return Response.json({ error: "No autorizado" }, { status: 401 });
        }
        const hash = await sha256Hex(authHeader.slice(7).trim());
        if (!equalConstantTime(hash, TOKEN_SHA256)) {
          return Response.json({ error: "No autorizado" }, { status: 401 });
        }

        let body: Record<string, unknown>;
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return Response.json({ error: "JSON no válido" }, { status: 400 });
        }

        const { imagenes, ...edicion } = body as {
          imagenes?: { nombre: string; base64: string }[];
        } & Record<string, unknown>;

        for (const campo of ["slug", "numero", "fecha", "titulo", "entradilla"]) {
          if (edicion[campo] === undefined || edicion[campo] === null || edicion[campo] === "") {
            return Response.json({ error: `Falta el campo obligatorio: ${campo}` }, { status: 400 });
          }
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        const urls: Record<string, string> = {};
        if (Array.isArray(imagenes)) {
          for (const img of imagenes) {
            if (!img?.nombre || !img?.base64) continue;
            if (!/^[A-Za-z0-9._-]+$/.test(img.nombre)) {
              return Response.json({ error: `Nombre de imagen no válido: ${img.nombre}` }, { status: 400 });
            }
            const { error } = await supabaseAdmin.storage
              .from("newsletter")
              .upload(img.nombre, base64ToBytes(img.base64), {
                contentType: contentTypeFor(img.nombre),
                upsert: true,
              });
            if (error) {
              return Response.json({ error: `Error al subir ${img.nombre}: ${error.message}` }, { status: 500 });
            }
            urls[img.nombre] = `${SITE}/newsletter/imagen/${img.nombre}`;
          }
        }

        const contenido = resolverStorage(edicion, urls) as Record<string, unknown>;

        const fila = {
          slug: String(contenido["slug"]),
          numero: Number(contenido["numero"]),
          fecha: String(contenido["fecha"]),
          titulo: String(contenido["titulo"]),
          entradilla: String(contenido["entradilla"]),
          contenido,
          imagen_social: (contenido["imagen_social"] as string | undefined) ?? null,
          publicada: contenido["publicada"] === false ? false : true,
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabaseAdmin
          .from("newsletter_ediciones")
          .upsert(fila, { onConflict: "slug" });

        if (error) {
          return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json({ ok: true, url: `${SITE}/newsletter/${fila.slug}` });
      },
    },
  },
});

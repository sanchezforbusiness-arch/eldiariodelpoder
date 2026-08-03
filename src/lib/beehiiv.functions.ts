import { createServerFn } from "@tanstack/react-start";

function normalizePubId(id: string) {
  return id.startsWith("pub_") ? id : `pub_${id}`;
}

export type SubscribeResult = { ok: boolean; message: string };

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((input: { email: string }) => {
    const email = String(input?.email ?? "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      throw new Error("Email no válido");
    }
    return { email };
  })
  .handler(async ({ data }): Promise<SubscribeResult> => {
    const apiKey = process.env["BEEHIIV_API_KEY"];
    const pubId = process.env["BEEHIIV_PUBLICATION_ID"];
    if (!apiKey || !pubId) {
      return { ok: false, message: "Newsletter no configurada." };
    }
    try {
      const res = await fetch(
        `https://api.beehiiv.com/v2/publications/${normalizePubId(pubId)}/subscriptions`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            reactivate_existing: true,
            send_welcome_email: true,
            utm_source: "eldiariodelpoder.com",
            utm_medium: "web",
          }),
        },
      );
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        console.error("Beehiiv subscribe error", res.status, body);
        return { ok: false, message: "No hemos podido suscribirte. Inténtalo de nuevo." };
      }
      return { ok: true, message: "Hecho. Revisa tu correo para confirmar." };
    } catch (e) {
      console.error("Beehiiv subscribe failed", e);
      return { ok: false, message: "No hemos podido suscribirte. Inténtalo de nuevo." };
    }
  });

export type BeehiivPost = {
  id: string;
  title: string;
  subtitle: string | null;
  slug: string | null;
  web_url: string;
  thumbnail_url: string | null;
  preview_text: string | null;
  publish_date: number | null;
};

export const getBeehiivPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ posts: BeehiivPost[]; error: string | null }> => {
    const apiKey = process.env.BEEHIIV_API_KEY;
    const pubId = process.env.BEEHIIV_PUBLICATION_ID;
    if (!apiKey || !pubId) {
      return { posts: [], error: "Beehiiv no configurado." };
    }
    try {
      const url = `https://api.beehiiv.com/v2/publications/${pubId}/posts?status=confirmed&limit=12&order_by=publish_date&direction=desc&audience=free&platform=web&hidden_from_feed=false`;
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${apiKey}`, Accept: "application/json" },
      });
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        console.error("Beehiiv API error", res.status, body);
        return { posts: [], error: `Beehiiv ${res.status}` };
      }
      const json = (await res.json()) as { data?: Array<Record<string, unknown>> };
      const posts: BeehiivPost[] = (json.data ?? []).map((p) => ({
        id: String(p.id ?? ""),
        title: String(p.title ?? ""),
        subtitle: (p.subtitle as string | null) ?? null,
        slug: (p.slug as string | null) ?? null,
        web_url: String(p.web_url ?? ""),
        thumbnail_url: (p.thumbnail_url as string | null) ?? null,
        preview_text: (p.preview_text as string | null) ?? null,
        publish_date:
          typeof p.publish_date === "number"
            ? p.publish_date
            : p.publish_date
              ? Number(p.publish_date)
              : null,
      }));
      return { posts, error: null };
    } catch (e) {
      console.error("Beehiiv fetch failed", e);
      return { posts: [], error: "No se pudieron cargar las publicaciones." };
    }
  },
);
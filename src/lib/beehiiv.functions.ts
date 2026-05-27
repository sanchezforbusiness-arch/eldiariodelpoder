import { createServerFn } from "@tanstack/react-start";

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
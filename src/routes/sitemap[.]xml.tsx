import { createFileRoute } from "@tanstack/react-router";
import { episodeList, guestList } from "@/data/podcast";

const SITE = "https://eldiariodelpoder.com";

type Entry = { loc: string; lastmod?: string; changefreq: string; priority: string };

function buildSitemap(newsletter: Entry[] = []) {
  const today = new Date().toISOString().slice(0, 10);

  const staticPages: Entry[] = [
    { loc: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
    { loc: "/episodios", changefreq: "weekly", priority: "0.9", lastmod: today },
    { loc: "/invitados", changefreq: "weekly", priority: "0.9", lastmod: today },
    { loc: "/newsletter", changefreq: "daily", priority: "0.9", lastmod: today },
    { loc: "/nosotros", changefreq: "monthly", priority: "0.8" },
    { loc: "/manifiesto", changefreq: "monthly", priority: "0.7" },
    { loc: "/prensa", changefreq: "monthly", priority: "0.8" },
    { loc: "/patrocinadores", changefreq: "monthly", priority: "0.7" },
    { loc: "/agenda", changefreq: "monthly", priority: "0.6" },
    { loc: "/alejandro-sanchez-martinez", changefreq: "monthly", priority: "0.8" },
    { loc: "/victor-hugo-gandarilla-de-andres", changefreq: "monthly", priority: "0.8" },
  ];

  const episodes: Entry[] = episodeList.map((e) => ({
    loc: `/episodios/${e.slug}`,
    lastmod: e.date,
    changefreq: "monthly",
    priority: "0.8",
  }));

  const guests: Entry[] = guestList.map((g) => ({
    loc: `/invitados/${g.slug}`,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const all = [...staticPages, ...episodes, ...guests, ...newsletter];

  const body = all
    .map(
      (u) =>
        `  <url>\n    <loc>${SITE}${u.loc}</loc>\n${u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : ""}    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        let newsletter: Entry[] = [];
        try {
          const { createPublicServerClient } = await import("@/lib/supabase-public.server");
          const { data } = await createPublicServerClient()
            .from("newsletter_ediciones")
            .select("slug, fecha")
            .eq("publicada", true)
            .order("fecha", { ascending: false });
          newsletter = (data ?? []).map((e) => ({
            loc: `/newsletter/${e.slug}`,
            lastmod: e.fecha,
            changefreq: "monthly",
            priority: "0.8",
          }));
        } catch {
          newsletter = [];
        }

        return new Response(buildSitemap(newsletter), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

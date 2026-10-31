import { createFileRoute } from "@tanstack/react-router";
import { episodeList, guestList } from "@/data/podcast";
import { countryList } from "@/data/countries";

const SITE = "https://eldiariodelpoder.com";

type Entry = { loc: string; lastmod?: string; changefreq: string; priority: string };

function buildSitemap(newsletter: Entry[] = []) {
  const staticPages: Entry[] = [
    { loc: "/", changefreq: "weekly", priority: "1.0" },
    { loc: "/en", changefreq: "weekly", priority: "0.8" },
    { loc: "/ar", changefreq: "weekly", priority: "0.8" },
    { loc: "/mejores-podcasts-de-liderazgo-en-espanol", changefreq: "monthly", priority: "0.9", lastmod: "2026-10-27" },
    { loc: "/podcast-de-liderazgo-en-espanol", changefreq: "monthly", priority: "0.9" },
    { loc: "/episodios", changefreq: "weekly", priority: "0.9", lastmod: "2026-10-27" },
    { loc: "/invitados", changefreq: "weekly", priority: "0.9" },
    { loc: "/newsletter", changefreq: "daily", priority: "0.9" },
    { loc: "/paises", changefreq: "weekly", priority: "0.8" },
    { loc: "/nosotros", changefreq: "monthly", priority: "0.8" },
    { loc: "/manifiesto", changefreq: "monthly", priority: "0.7" },
    { loc: "/prensa", changefreq: "monthly", priority: "0.8", lastmod: "2026-10-31" },
    { loc: "/patrocinadores", changefreq: "monthly", priority: "0.7" },
    { loc: "/agenda", changefreq: "monthly", priority: "0.6" },
    { loc: "/alejandro-sanchez-martinez", changefreq: "monthly", priority: "0.8", lastmod: "2026-10-31" },
    { loc: "/victor-hugo-gandarilla-de-andres", changefreq: "monthly", priority: "0.8", lastmod: "2026-10-31" },
  ];

  const episodes: Entry[] = episodeList.map((e) => ({
    loc: `/episodios/${e.slug}`,
    lastmod: e.date,
    changefreq: "monthly",
    priority: "0.8",
  }));

  const guests: Entry[] = guestList.map((g) => ({
    loc: `/invitados/${g.slug}`,
    ...(g.slug === "rosa-lagarrigue" ? { lastmod: "2026-09-22" } : {}),
    ...(g.slug === "daniela-macarena" ? { lastmod: "2026-10-27" } : {}),
    ...(g.slug === "federica-fornaciari" ? { lastmod: "2026-10-19" } : {}),
    ...(g.slug === "jose-carlos-gonzalez-hurtado" ? { lastmod: "2026-10-13" } : {}),
    changefreq: "monthly",
    priority: "0.7",
  }));

  const countries: Entry[] = countryList.map((country) => ({
    loc: `/paises/${country.slug}`,
    changefreq: "monthly", priority: "0.7", lastmod: "2026-10-27",
  }));
  const all = [...staticPages, ...episodes, ...guests, ...countries, ...newsletter];

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
        const { createPublicServerClient } = await import("@/lib/supabase-public.server");
        const client = createPublicServerClient();
        const pageSize = 500;
        for (let offset = 0; ; offset += pageSize) {
          const { data, error } = await client
            .from("newsletter_ediciones")
            .select("slug, fecha")
            .eq("publicada", true)
            .order("fecha", { ascending: false })
            .order("slug", { ascending: true })
            .range(offset, offset + pageSize - 1);
          if (error || !data) {
            return new Response("Sitemap temporalmente no disponible", { status: 503 });
          }
          newsletter.push(...data.map((e) => ({
            loc: `/newsletter/${e.slug}`,
            lastmod: e.fecha,
            changefreq: "monthly",
            priority: "0.8",
          })));
          if (data.length < pageSize) break;
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

import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://eldiariodelpoder.com";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const Route = createFileRoute("/newsletter/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { createPublicServerClient } = await import("@/lib/supabase-public.server");
        const supabase = createPublicServerClient();
        const { data, error } = await supabase
          .from("newsletter_ediciones")
          .select("slug, numero, fecha, titulo, entradilla")
          .eq("publicada", true)
          .order("fecha", { ascending: false })
          .limit(50);

        if (error) return new Response(error.message, { status: 500 });

        const items = (data ?? [])
          .map((e) => {
            const url = `${SITE}/newsletter/${e.slug}`;
            const pub = new Date(`${e.fecha}T07:30:00+02:00`).toUTCString();
            return `    <item>\n      <title>${esc(e.titulo)}</title>\n      <link>${url}</link>\n      <guid isPermaLink="true">${url}</guid>\n      <pubDate>${pub}</pubDate>\n      <description>${esc(e.entradilla)}</description>\n    </item>`;
          })
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Primera Mano — El Diario del Poder</title>\n    <link>${SITE}/newsletter</link>\n    <description>Los secretos de los mayores referentes, todos los domingos.</description>\n    <language>es-ES</language>\n${items}\n  </channel>\n</rss>\n`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=300",
          },
        });
      },
    },
  },
});

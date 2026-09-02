// Regenera public/sitemap.xml y las secciones de enlaces de public/llms.txt
// a partir de src/data/podcast.ts. Ejecutar: bun scripts/gen-seo.mjs
import { readFileSync, writeFileSync } from "node:fs";

const SITE = "https://eldiariodelpoder.com";
const src = readFileSync("src/data/podcast.ts", "utf8");

const block = (start, end) => src.slice(src.indexOf(start), src.indexOf(end));

const parse = (text, re) => {
  const out = [];
  let m;
  while ((m = re.exec(text))) out.push(m.groups);
  return out;
};

const episodesSrc = block("const episodesRaw", "export type GuestEntry");
const guestsSrc = src.slice(src.indexOf("export const guestList"));

const episodes = parse(
  episodesSrc,
  /slug: "(?<slug>[^"]+)",[\s\S]*?guest: "(?<guest>[^"]+)",[\s\S]*?(?:date: "(?<date>[^"]+)",[\s\S]*?)?title: "(?<title>[^"]+)"/g,
);

const guests = parse(
  guestsSrc,
  /slug: "(?<slug>[^"]+)",\s*\n\s*name: "(?<name>[^"]+)",\s*\n\s*role: "(?<role>[^"]+)"/g,
);

const staticPages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/episodios", changefreq: "weekly", priority: "0.9" },
  { path: "/invitados", changefreq: "weekly", priority: "0.9" },
  { path: "/nosotros", changefreq: "monthly", priority: "0.8" },
  { path: "/manifiesto", changefreq: "monthly", priority: "0.7" },
  { path: "/prensa", changefreq: "monthly", priority: "0.8" },
  { path: "/patrocinadores", changefreq: "monthly", priority: "0.7" },
  { path: "/agenda", changefreq: "monthly", priority: "0.6" },
  { path: "/alejandro-sanchez-martinez", changefreq: "monthly", priority: "0.8" },
  { path: "/victor-hugo-gandarilla-de-andres", changefreq: "monthly", priority: "0.8" },
];

const entries = [
  ...staticPages,
  ...episodes.map((e) => ({
    path: `/episodios/${e.slug}`,
    lastmod: e.date,
    changefreq: "monthly",
    priority: "0.8",
  })),
  ...guests.map((g) => ({ path: `/invitados/${g.slug}`, changefreq: "monthly", priority: "0.8" })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${SITE}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      `    <changefreq>${e.changefreq}</changefreq>`,
      `    <priority>${e.priority}</priority>`,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
  ``,
].join("\n");

writeFileSync("public/sitemap.xml", xml);

// --- llms.txt: reescribe las secciones de enlaces manteniendo la cabecera ---
const llms = readFileSync("public/llms.txt", "utf8");
const head = llms.slice(0, llms.indexOf("## Páginas") === -1 ? llms.length : llms.indexOf("## Páginas")).trimEnd();

const pages = `
## Páginas

- [Inicio](${SITE}/): Qué es Diario del Poder, últimos episodios e invitados.
- [Episodios](${SITE}/episodios): Archivo completo de conversaciones, con fecha, duración y enlace al vídeo.
- [Invitados](${SITE}/invitados): Ficha de cada invitado con resumen de su conversación y temas tratados.
- [Nosotros](${SITE}/nosotros): Equipo, fundadores, asesores y patronato.
- [Manifiesto](${SITE}/manifiesto): Por qué existe el medio y cómo se hacen las entrevistas.
- [Prensa](${SITE}/prensa): Apariciones en La Sexta, Antena 3, Univision, La Vanguardia, El Español, Infobae y HuffPost.
- [Patrocinadores](${SITE}/patrocinadores): Cómo colaborar con el medio.
- [Agenda](${SITE}/agenda): Reservar una llamada con la redacción.
- [Alejandro Sánchez Martínez](${SITE}/alejandro-sanchez-martinez): Co-fundador y host. Web personal: https://alejandrosanchezmartinez.com
- [Víctor Hugo Gandarilla de Andrés](${SITE}/victor-hugo-gandarilla-de-andres): Co-fundador y host.

## Episodios

${episodes
  .map(
    (e) =>
      `- [${e.guest} — ${e.title}](${SITE}/episodios/${e.slug})${e.date ? `: publicado el ${e.date}.` : "."}`,
  )
  .join("\n")}

## Invitados

${guests.map((g) => `- [${g.name}](${SITE}/invitados/${g.slug}): ${g.role}.`).join("\n")}

## Opcional

- [Spotify](https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ): Audio de todos los episodios.
- [YouTube](https://www.youtube.com/@eldiariodelpoder): Vídeo completo de las entrevistas.
- [Sitemap](${SITE}/sitemap.xml): Índice de todas las URLs públicas.
`;

writeFileSync("public/llms.txt", `${head}\n${pages}`);

console.log(`sitemap: ${entries.length} urls · episodios: ${episodes.length} · invitados: ${guests.length}`);

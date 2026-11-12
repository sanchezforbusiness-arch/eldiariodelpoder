import { ALEJANDRO_ID, VICTOR_ID } from "./press";
import { HEMEROTECA_FREE_DAYS } from "./premium";

export const SITE = "https://eldiariodelpoder.com";
export const NEWS_NAME = "El Diario del Poder";
export const NEWS_TZ = "Europe/Madrid";
export const NEWS_PAGE_SIZE = 24;
export const ORGANIZATION_REF = { "@id": `${SITE}/#organization` };

export const SECCIONES = [
  { slug: "internacional", nombre: "Internacional" },
  { slug: "espana", nombre: "España" },
  { slug: "politica", nombre: "Política" },
  { slug: "economia", nombre: "Economía" },
  { slug: "empresas", nombre: "Empresas" },
  { slug: "cultura", nombre: "Cultura" },
  { slug: "sociedad", nombre: "Sociedad" },
  { slug: "tecnologia", nombre: "Tecnología" },
  { slug: "ciencia", nombre: "Ciencia" },
  { slug: "deportes", nombre: "Deportes" },
  { slug: "opinion", nombre: "Opinión" },
] as const;
export type SeccionSlug = (typeof SECCIONES)[number]["slug"];

export function seccionNombre(slug: string) {
  return SECCIONES.find((s) => s.slug === slug)?.nombre ?? slug;
}
export function isSeccion(slug: string): slug is SeccionSlug {
  return SECCIONES.some((s) => s.slug === slug);
}

export const AUTORES = {
  alejandro: {
    clave: "alejandro",
    slug: "alejandro-sanchez-martinez",
    nombre: "Alejandro Sánchez Martínez",
    firma: "Alejandro Sánchez Martínez",
    id: ALEJANDRO_ID,
    ficha: "/alejandro-sanchez-martinez",
    bio: "Cofundador y host de Diario del Poder. Redactor de la sección de Noticias.",
  },
  victor: {
    clave: "victor",
    slug: "victor-hugo-gandarilla-de-andres",
    nombre: "Víctor Hugo Gandarilla de Andrés",
    firma: "Víctor Gandarilla",
    id: VICTOR_ID,
    ficha: "/victor-hugo-gandarilla-de-andres",
    bio: "Cofundador y host de Diario del Poder. Redactor de la sección de Noticias.",
  },
} as const;
export type AutorClave = keyof typeof AUTORES;
export const autorPorSlug = (slug: string) => Object.values(AUTORES).find((a) => a.slug === slug);
export const autorPath = (clave: AutorClave) => `/noticias/autor/${AUTORES[clave].slug}`;

export type Fuente = { nombre: string; url: string };

/** Ficha de noticia sin cuerpo (tarjetas, listas, feeds). */
export type NoticiaCard = {
  id: string;
  slug: string;
  seccion: string;
  antetitulo: string | null;
  titular: string;
  subtitulo: string;
  autor: AutorClave;
  coautor: AutorClave | null;
  fecha_publicacion: string;
  fecha_actualizacion: string;
  edicion: string;
  imagen_url: string | null;
  imagen_alt: string | null;
  imagen_credito: string | null;
  etiquetas: string[];
  lugar: string | null;
  es_premium: boolean;
  destacada: boolean;
  prioridad: number;
  tiempo_lectura: number | null;
};
export type Noticia = NoticiaCard & { cuerpo: string; fuentes: Fuente[] };

export const CARD_COLUMNS = "id,slug,seccion,antetitulo,titular,subtitulo,autor,coautor,fecha_publicacion,fecha_actualizacion,edicion,imagen_url,imagen_alt,imagen_credito,etiquetas,lugar,es_premium,destacada,prioridad,tiempo_lectura";
export const FULL_COLUMNS = `${CARD_COLUMNS},cuerpo,fuentes`;

export const noticiaPath = (n: Pick<NoticiaCard, "seccion" | "slug">) => `/noticias/${n.seccion}/${n.slug}`;
export const noticiaUrl = (n: Pick<NoticiaCard, "seccion" | "slug">) => `${SITE}${noticiaPath(n)}`;
export const seccionImage = (seccion: string) => `${SITE}/noticias/secciones/${isSeccion(seccion) ? seccion : "internacional"}.jpg`;
export function noticiaImage(n: Pick<NoticiaCard, "imagen_url" | "seccion">) {
  if (!n.imagen_url) return seccionImage(n.seccion);
  return n.imagen_url.startsWith("http") ? n.imagen_url : `${SITE}${n.imagen_url.startsWith("/") ? "" : "/"}${n.imagen_url}`;
}
export const noticiaImageAlt = (n: Pick<NoticiaCard, "imagen_url" | "imagen_alt" | "seccion" | "titular">) =>
  n.imagen_url ? (n.imagen_alt ?? n.titular) : `${seccionNombre(n.seccion)} — El Diario del Poder`;

/** Normaliza una etiqueta a slug kebab-case sin tildes. */
export function tagSlug(etiqueta: string) {
  return etiqueta.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const SUFFIX = " | El Diario del Poder";
/** <title> ≤ 70 caracteres: añade la marca solo si cabe; si no, corta por palabra. */
export function newsTitle(titular: string, max = 70) {
  const t = titular.trim();
  if (t.length + SUFFIX.length <= max) return `${t}${SUFFIX}`;
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const space = cut.lastIndexOf(" ");
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,;:.–—-]+$/, "")}…`;
}

const parts = (date: Date, opts: Intl.DateTimeFormatOptions, locale = "es-ES") =>
  Object.fromEntries(new Intl.DateTimeFormat(locale, { timeZone: NEWS_TZ, ...opts }).formatToParts(date).map((p) => [p.type, p.value]));

/** Fecha civil (yyyy-mm-dd) en Madrid: misma regla que el valor por defecto de `edicion`. */
export function madridDate(date: Date = new Date()) {
  const p = parts(date, { year: "numeric", month: "2-digit", day: "2-digit" }, "en-CA");
  return `${p.year}-${p.month}-${p.day}`;
}
export function tzAbbr(date: Date) {
  const off = parts(date, { timeZoneName: "shortOffset" }, "en-US").timeZoneName;
  return off === "GMT+2" ? "CEST" : "CET";
}
export function horaMadrid(iso: string) {
  const p = parts(new Date(iso), { hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
  return `${p.hour}:${p.minute}`;
}
/** «12/11/2026 07:00 CET» */
export function fechaHoraMadrid(iso: string) {
  const d = new Date(iso);
  const p = parts(d, { year: "numeric", month: "2-digit", day: "2-digit" });
  return `${p.day}/${p.month}/${p.year} ${horaMadrid(iso)} ${tzAbbr(d)}`;
}
/** «Jueves, 12 de noviembre de 2026» a partir de un instante o de una fecha civil. */
export function fechaLarga(value: Date | string) {
  const d = typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T12:00:00Z`) : new Date(value);
  const s = new Intl.DateTimeFormat("es-ES", { timeZone: NEWS_TZ, weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(d);
  return s.charAt(0).toUpperCase() + s.slice(1);
}
export const isEdicionDate = (v: string) => /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(`${v}T00:00:00Z`)) && new Date(`${v}T00:00:00Z`).toISOString().startsWith(v);

/** Ediciones con más de HEMEROTECA_FREE_DAYS días solo se leen completas con premium. */
export function isHemeroteca(edicion: string, today = madridDate()) {
  const diff = (Date.parse(`${today}T00:00:00Z`) - Date.parse(`${edicion}T00:00:00Z`)) / 86_400_000;
  return diff > HEMEROTECA_FREE_DAYS;
}

export function readingMinutes(text: string, stored?: number | null) {
  if (stored && stored > 0) return stored;
  const words = text.replace(/[#>*_\[\]()`-]/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Primeros párrafos de un Markdown (parte libre de piezas de hemeroteca). */
export function freeMarkdown(md: string, paragraphs = 3) {
  return md.split(/\n{2,}/).filter((b) => b.trim()).slice(0, paragraphs).join("\n\n");
}

export const pageNumber = (raw: unknown) => {
  const n = Number(raw);
  return Number.isInteger(n) && n > 1 && n < 10_000 ? n : 1;
};
export const withPage = (path: string, pagina: number) => (pagina > 1 ? `${path}?pagina=${pagina}` : path);

export function autoresDe(n: Pick<NoticiaCard, "autor" | "coautor">) {
  return [AUTORES[n.autor], ...(n.coautor && n.coautor !== n.autor ? [AUTORES[n.coautor]] : [])];
}

export function newsArticleSchema(n: Noticia) {
  const url = noticiaUrl(n);
  const img = noticiaImage(n);
  const sources = n.fuentes.map((f) => f.url).filter(Boolean);
  return {
    "@type": "NewsArticle",
    "@id": `${url}#article`,
    headline: n.titular,
    ...(n.antetitulo ? { alternativeHeadline: n.antetitulo } : {}),
    description: n.subtitulo,
    image: [img],
    datePublished: new Date(n.fecha_publicacion).toISOString(),
    dateModified: new Date(n.fecha_actualizacion).toISOString(),
    author: autoresDe(n).map((a) => ({ "@type": "Person", "@id": a.id, name: a.nombre, url: `${SITE}/noticias/autor/${a.slug}` })),
    publisher: { ...ORGANIZATION_REF, "@type": "NewsMediaOrganization", name: NEWS_NAME, logo: { "@type": "ImageObject", url: `${SITE}/icon-512.png`, width: 512, height: 512 } },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    articleSection: seccionNombre(n.seccion),
    keywords: n.etiquetas,
    inLanguage: "es-ES",
    ...(sources.length ? { isBasedOn: sources, citation: sources } : {}),
    ...(n.lugar ? { dateline: n.lugar, contentLocation: { "@type": "Place", name: n.lugar } } : {}),
    isAccessibleForFree: !n.es_premium,
    ...(n.es_premium ? { hasPart: { "@type": "WebPageElement", isAccessibleForFree: false, cssSelector: ".ddp-paywall" } } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return { "@type": "BreadcrumbList", itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })) };
}

export function collectionSchema(url: string, name: string, description: string, items: NoticiaCard[]) {
  return {
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url, name, description,
    inLanguage: "es-ES",
    isPartOf: { "@id": `${SITE}/#website` },
    publisher: ORGANIZATION_REF,
    mainEntity: { "@type": "ItemList", itemListElement: items.map((n, i) => ({ "@type": "ListItem", position: i + 1, url: noticiaUrl(n), name: n.titular })) },
  };
}

export const xmlEscape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

/** RSS 2.0 sin contenido premium: solo entradilla. */
export function buildRss(title: string, link: string, description: string, items: NoticiaCard[]) {
  const body = items.map((n) => `    <item>
      <title>${xmlEscape(n.titular)}</title>
      <link>${noticiaUrl(n)}</link>
      <guid isPermaLink="true">${noticiaUrl(n)}</guid>
      <description>${xmlEscape(n.subtitulo)}</description>
      <category>${xmlEscape(seccionNombre(n.seccion))}</category>
      <dc:creator>${xmlEscape(autoresDe(n).map((a) => a.nombre).join(" y "))}</dc:creator>
      <pubDate>${new Date(n.fecha_publicacion).toUTCString()}</pubDate>
      <enclosure url="${xmlEscape(noticiaImage(n))}" type="image/jpeg" length="0"/>
    </item>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${xmlEscape(title)}</title>
    <link>${link}</link>
    <description>${xmlEscape(description)}</description>
    <language>es-ES</language>
    <atom:link href="${link.replace(/\/$/, "")}/rss.xml" rel="self" type="application/rss+xml"/>
${items[0] ? `    <lastBuildDate>${new Date(items[0].fecha_actualizacion).toUTCString()}</lastBuildDate>\n` : ""}${body}
  </channel>
</rss>
`;
}

/** Sitemap Google News: noticias de las últimas 48 horas, máximo 1000. */
export function buildNewsSitemap(items: NoticiaCard[], now = new Date()) {
  const since = now.getTime() - 48 * 3_600_000;
  const recent = items.filter((n) => Date.parse(n.fecha_publicacion) >= since).slice(0, 1000);
  const body = recent.map((n) => `  <url>
    <loc>${noticiaUrl(n)}</loc>
    <news:news>
      <news:publication>
        <news:name>${NEWS_NAME}</news:name>
        <news:language>es</news:language>
      </news:publication>
      <news:publication_date>${new Date(n.fecha_publicacion).toISOString()}</news:publication_date>
      <news:title>${xmlEscape(n.titular)}</news:title>
    </news:news>
  </url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${body}
</urlset>
`;
}

export type Fuente = { id?: string; url?: string; detalle?: string };

export type NewsletterContenido = {
  slug?: string;
  numero?: number;
  fecha?: string;
  titulo?: string;
  entradilla?: string;
  lectura_min?: number;
  saludo?: string;
  subrayado?: {
    imagen?: string;
    imagen_alt?: string;
    pie_imagen?: string;
    texto?: string;
    vinetas?: { etiqueta?: string; texto?: string }[];
    importa?: string;
    fuente?: Fuente;
  };
  firmado?: { titulo?: string; texto?: string; fuente?: Fuente }[];
  quien?: { texto?: string; items?: { etiqueta?: string; texto?: string }[] };
  dato?: { cifra?: string; texto?: string; fuente?: Fuente };
  voz?: { cita?: string; autor?: string; cargo?: string; enlace?: string; enlace_texto?: string };
  viene?: { cuando?: string; texto?: string }[];
  metodo?: string;
  aviso_ia?: string;
};

export type Edicion = {
  slug: string;
  numero: number;
  fecha: string;
  titulo: string;
  entradilla: string;
  contenido: NewsletterContenido;
  imagen_social: string | null;
};

export const SITE = "https://eldiariodelpoder.com";
export const SUBSCRIBE_URL = "https://eldiariodelpoder.beehiiv.com/subscribe";
export const NEWSLETTER_EMAIL = "contactoeldiariodelpoder@gmail.com";

export const SECCIONES = [
  "El subrayado",
  "Firmado ayer",
  "Quién sube, quién baja",
  "El dato",
  "La voz del poder",
  "Lo que viene",
] as const;

/** Todas las URLs de fuente citadas en una edición (para `citation` del JSON-LD). */
export function fuentesDeEdicion(c: NewsletterContenido): string[] {
  const urls: string[] = [];
  const push = (f?: Fuente) => {
    if (f?.url) urls.push(f.url);
  };
  push(c.subrayado?.fuente);
  c.firmado?.forEach((f) => push(f.fuente));
  push(c.dato?.fuente);
  return Array.from(new Set(urls));
}

export function absolutizar(url?: string | null): string | undefined {
  if (!url) return undefined;
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE}${url.startsWith("/") ? "" : "/"}${url}`;
}

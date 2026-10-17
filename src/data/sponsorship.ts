import { z } from "zod";
import { countryList } from "./countries";

export const SPONSOR_MARKETS = ["España", "México", "Colombia", "Argentina", "Chile", "Perú", "Estados Unidos (comunidad hispana)", "Centroamérica y Caribe", "Todo el mundo hispanohablante"] as const;
export const SPONSOR_BUDGETS = ["Menos de 5.000 €", "5.000 – 15.000 €", "15.000 – 50.000 €", "Más de 50.000 €", "Aún no lo sé"] as const;
export const SPONSOR_COUNTRIES = [...countryList.map((country) => country.name), "Otro"];

export const sponsorshipSchema = z.object({
  nombre: z.string().trim().min(1, "Escribe tu nombre.").max(120, "Máximo 120 caracteres."),
  empresa: z.string().trim().min(1, "Escribe tu empresa.").max(120, "Máximo 120 caracteres."),
  cargo: z.string().trim().max(120, "Máximo 120 caracteres.").default(""),
  email: z.string().trim().max(200, "Máximo 200 caracteres.").email("Escribe un correo válido."),
  web: z.string().trim().max(2048, "La dirección es demasiado larga.").refine((value) => {
    if (!value) return true;
    try { return ["http:", "https:"].includes(new URL(value).protocol); } catch { return false; }
  }, "Escribe una dirección web completa (https://…).").default(""),
  pais: z.string().refine((value) => SPONSOR_COUNTRIES.includes(value), "Selecciona el país de tu empresa."),
  mercados: z.array(z.enum(SPONSOR_MARKETS)).min(1, "Selecciona al menos un mercado.").max(22, "Máximo 22 mercados.").refine((values) => new Set(values).size === values.length, "No repitas mercados."),
  presupuesto: z.enum(SPONSOR_BUDGETS, { error: "Selecciona un presupuesto orientativo." }),
  objetivo: z.string().trim().min(10, "Cuéntanos tu objetivo en al menos 10 caracteres.").max(2000, "Máximo 2000 caracteres."),
  origen: z.string().max(4000).default(""),
  acepta: z.literal(true, { error: "Acepta el tratamiento de datos para enviar la solicitud." }),
  website_url: z.string().max(2048).default(""),
});

export const sponsorshipServerSchema = z.union([
  z.object({ website_url: z.string().trim().min(1).max(2048) }),
  sponsorshipSchema,
]);

export const SPONSOR_FORMATS = [
  { t: "Patrocinio de temporada", d: "Tu marca presenta Diario del Poder: mención de los hosts en la apertura y el cierre de cada episodio de la temporada y presencia en la web." },
  { t: "Patrocinio de episodio", d: "Una conversación concreta, elegida por su encaje con tu sector y tu público." },
  { t: "Clips y piezas cortas", d: "Cada entrevista se convierte en 15 a 20 piezas para YouTube, Instagram, TikTok y LinkedIn. Tu marca puede acompañar esa distribución." },
  { t: "Newsletter Primera Mano", d: "Patrocinio de edición en la newsletter del medio, leída por la parte más fiel de la audiencia." },
  { t: "Encuentros", d: "Conversaciones en directo y encuentros privados con invitados y comunidad." },
  { t: "Campañas por país", d: "Activa tu marca en los mercados que te importan: España, México, Colombia, Argentina, la comunidad hispana de Estados Unidos y el resto del mundo hispanohablante." },
];

export function sponsorshipFaq(brands: string[]) {
  const brandNames = brands.length > 1 ? `${brands.slice(0, -1).join(", ")} y ${brands.at(-1)}` : brands.join("");
  return [
    { q: "¿Cuánto cuesta patrocinar Diario del Poder?", a: "Depende del formato, la duración y los mercados. Preparamos una propuesta a medida tras una llamada de 30 minutos; el formulario de esta página nos da el contexto para hacerla." },
    { q: "¿En qué países se escucha Diario del Poder?", a: "En todo el mundo hispanohablante. La base de la audiencia está en España y crece en América Latina y en la comunidad hispana de Estados Unidos." },
    { q: "¿Puede la marca elegir al invitado o las preguntas?", a: "No. La línea editorial es de la redacción. Sí trabajamos contigo para elegir las conversaciones que mejor encajan con tu sector." },
    { q: "¿Qué marcas han colaborado con Diario del Poder?", a: `${brandNames}, entre otras.` },
    { q: "¿Qué formatos de patrocinio hay?", a: "Patrocinio de temporada, patrocinio de episodio, clips y piezas cortas, newsletter Primera Mano, encuentros y campañas por país." },
    { q: "¿Cómo empezamos?", a: "Rellena el formulario de esta página o reserva una llamada de 30 minutos. Te respondemos con el media kit y una propuesta." },
  ];
}

export function sponsorshipOrigin(referrer: string, search: string) {
  const utm = new URLSearchParams();
  for (const [key, value] of new URLSearchParams(search)) {
    if (/^utm_[a-z0-9_]{1,60}$/i.test(key)) utm.append(key, value.slice(0, 500));
  }
  return [referrer.slice(0, 2000), utm.toString()].filter(Boolean).join(" | ").slice(0, 4000);
}
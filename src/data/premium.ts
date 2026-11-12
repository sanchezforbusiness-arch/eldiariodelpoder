import { z } from "zod";

/** Interruptor único: mientras sea false, «Suscribirme» abre la lista de acceso. */
export const PREMIUM_CHECKOUT_ENABLED = false;

export const PREMIUM_NAME = "DDP Premium";

export const PREMIUM_PLANS = [
  { id: "mensual", nombre: "Mensual", precio: "4,99 €", periodo: "al mes", importe: 4.99, nota: "Cancela cuando quieras." },
  { id: "anual", nombre: "Anual", precio: "49 €", periodo: "al año", importe: 49, nota: "Equivale a 4,08 € al mes." },
] as const;

export type PremiumPlanId = (typeof PREMIUM_PLANS)[number]["id"];

export const PREMIUM_BENEFITS = [
  { t: "El Análisis del Poder", d: "Piezas diarias de interpretación: quién gana, quién pierde y qué viene después." },
  { t: "Hemeroteca completa", d: "Acceso íntegro a las ediciones de hace más de 30 días." },
  { t: "Antes que nadie en el podcast", d: "Acceso anticipado a episodios y contenidos exclusivos de Diario del Poder." },
] as const;

/** Días tras los que una edición pasa a la hemeroteca premium. */
export const HEMEROTECA_FREE_DAYS = 30;

export const premiumRequestSchema = z.object({
  email: z.string().trim().max(200, "Máximo 200 caracteres.").email("Escribe un correo válido."),
  plan: z.enum(["mensual", "anual"]).optional(),
  website_url: z.string().max(2048).default(""),
});

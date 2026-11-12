import { z } from "zod";

export const correctionSchema = z.object({
  nombre: z.string().trim().min(1, "Escribe tu nombre.").max(120, "Máximo 120 caracteres."),
  email: z.string().trim().max(200, "Máximo 200 caracteres.").email("Escribe un correo válido."),
  url: z.string().trim().min(1, "Indica la pieza.").max(2048, "La dirección es demasiado larga.").refine((value) => {
    try { return ["http:", "https:"].includes(new URL(value).protocol); } catch { return false; }
  }, "Escribe la dirección completa de la pieza (https://…)."),
  descripcion: z.string().trim().min(10, "Explica el error en al menos 10 caracteres.").max(4000, "Máximo 4000 caracteres."),
  website_url: z.string().max(2048).default(""),
});

import { createServerFn } from "@tanstack/react-start";
import { sponsorshipServerSchema } from "@/data/sponsorship";

export const enviarSolicitudPatrocinio = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => sponsorshipServerSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website_url.trim()) return { ok: true };
    if (!("nombre" in data)) return { ok: true };
    const { createPublicServerClient } = await import("./supabase-public.server");
    const client = createPublicServerClient();
    // Insert-only public policy and database trigger enforce validation and rate limits.
    const { error } = await client.from("solicitudes_patrocinio").insert({
      nombre: data.nombre, empresa: data.empresa, cargo: data.cargo || null,
      email: data.email, web: data.web || null, pais: data.pais,
      mercados: data.mercados, presupuesto: data.presupuesto,
      objetivo: data.objetivo, origen: data.origen || null,
    });
    if (error) return { ok: false };
    return { ok: true };
  });
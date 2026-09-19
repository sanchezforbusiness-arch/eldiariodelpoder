import { createServerFn } from "@tanstack/react-start";
import type { Edicion } from "./newsletter";

const CAMPOS = "slug, numero, fecha, titulo, entradilla, contenido, imagen_social";

/** Lista de ediciones publicadas, de la más reciente a la más antigua. */
export const listarEdiciones = createServerFn({ method: "GET" }).handler(async () => {
  const { createPublicServerClient } = await import("./supabase-public.server");
  const supabase = createPublicServerClient();
  const { data, error } = await supabase
    .from("newsletter_ediciones")
    .select(CAMPOS)
    .eq("publicada", true)
    .order("fecha", { ascending: false })
    .order("numero", { ascending: false })
    .limit(200);

  if (error) throw new Error(error.message);
  return (data ?? []) as unknown as Edicion[];
});

/** Una edición publicada por slug, o null. */
export const obtenerEdicion = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => data)
  .handler(async ({ data }) => {
    const { createPublicServerClient } = await import("./supabase-public.server");
    const supabase = createPublicServerClient();
    const { data: row, error } = await supabase
      .from("newsletter_ediciones")
      .select(CAMPOS)
      .eq("publicada", true)
      .eq("slug", data.slug)
      .maybeSingle();

    if (error) throw new Error(error.message);
    return (row ?? null) as unknown as Edicion | null;
  });

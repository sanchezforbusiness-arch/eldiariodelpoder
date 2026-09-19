import { createFileRoute } from "@tanstack/react-router";

/** Sirve públicamente las imágenes subidas por la automatización al almacenamiento privado. */
export const Route = createFileRoute("/newsletter/imagen/$nombre")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const nombre = params.nombre;
        if (!/^[A-Za-z0-9._-]+$/.test(nombre)) {
          return new Response("Nombre no válido", { status: 400 });
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data, error } = await supabaseAdmin.storage.from("newsletter").download(nombre);
        if (error || !data) return new Response("No encontrada", { status: 404 });

        return new Response(await data.arrayBuffer(), {
          headers: {
            "Content-Type": data.type || "application/octet-stream",
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});

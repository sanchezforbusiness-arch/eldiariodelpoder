import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/newsletter/feed.json")({
  server: {
    handlers: {
      GET: async () => {
        const { createPublicServerClient } = await import("@/lib/supabase-public.server");
        const supabase = createPublicServerClient();
        const { data, error } = await supabase
          .from("newsletter_ediciones")
          .select("slug, numero, fecha, titulo, entradilla, contenido, imagen_social")
          .eq("publicada", true)
          .order("fecha", { ascending: false })
          .limit(50);

        if (error) {
          return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json(
          { newsletter: "Primera Mano", ediciones: data ?? [] },
          { headers: { "Cache-Control": "public, max-age=300" } },
        );
      },
    },
  },
});

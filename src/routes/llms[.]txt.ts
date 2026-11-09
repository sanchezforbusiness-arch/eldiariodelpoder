import { createFileRoute } from "@tanstack/react-router";
import source from "@/data/llms-source.txt?raw";
import { newsletterText } from "@/data/newsletter";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: () => new Response(newsletterText(source), {
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache" },
      }),
    },
  },
});
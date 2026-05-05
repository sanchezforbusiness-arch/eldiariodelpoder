import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { Episodes } from "@/components/ddp/Episodes";
import { Footer } from "@/components/ddp/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/episodios")({
  head: () => ({
    meta: [
      { title: "Episodios — Diario del Poder" },
      { name: "description", content: "Todos los episodios de Diario del Poder: conversaciones con expresidentes, CEOs y líderes institucionales." },
      { property: "og:title", content: "Episodios — Diario del Poder" },
      { property: "og:description", content: "Conversaciones con criterio. Expresidentes, CEOs y líderes institucionales." },
      { property: "og:url", content: "https://eldiariodelpoder.com/episodios" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/episodios" }],
  }),
  component: EpisodiosPage,
});

function EpisodiosPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <Episodes />
      </main>
      <Footer />
    </div>
  );
}
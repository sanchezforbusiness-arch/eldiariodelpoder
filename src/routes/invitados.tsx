import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { GuestsCarousel } from "@/components/ddp/GuestsCarousel";
import { Footer } from "@/components/ddp/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/invitados")({
  head: () => ({
    meta: [
      { title: "Invitados — Diario del Poder" },
      { name: "description", content: "Expresidentes, CEOs y líderes que han pasado por Diario del Poder." },
      { property: "og:title", content: "Invitados — Diario del Poder" },
      { property: "og:description", content: "Gente que ha estado donde se decide." },
      { property: "og:url", content: "https://eldiariodelpoder.com/invitados" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/invitados" }],
  }),
  component: InvitadosPage,
});

function InvitadosPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <GuestsCarousel />
      </main>
      <Footer />
    </div>
  );
}
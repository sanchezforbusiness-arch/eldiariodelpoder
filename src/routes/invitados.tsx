import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { GuestsCarousel } from "@/components/ddp/GuestsCarousel";
import { Footer } from "@/components/ddp/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/invitados")({
  head: () => ({
    meta: [
      { title: "Invitados — Diario del Poder" },
      { name: "description", content: "Presidentes, CEOs y referentes que se han sentado a conversar con nosotros, sin prisa y sin guion." },
      { property: "og:title", content: "Invitados — Diario del Poder" },
      { property: "og:description", content: "Voces que están construyendo lo que viene." },
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
      <main className="pt-40 md:pt-44">
        <header className="container-ddp pt-8 pb-4">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-light tracking-[-0.03em]">
            Nuestros <span className="">invitados</span>
          </h1>
        </header>
        <GuestsCarousel />
      </main>
      <Footer />
    </div>
  );
}
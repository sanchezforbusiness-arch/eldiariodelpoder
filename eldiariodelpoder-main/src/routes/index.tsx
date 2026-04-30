import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { Hero } from "@/components/ddp/Hero";
import { About } from "@/components/ddp/About";
import { Guests } from "@/components/ddp/Guests";
import { PullQuote } from "@/components/ddp/PullQuote";
import { Episodes } from "@/components/ddp/Episodes";
import { WhyDDP } from "@/components/ddp/WhyDDP";
import { Sponsors } from "@/components/ddp/Sponsors";
import { Team } from "@/components/ddp/Team";
import { Newsletter } from "@/components/ddp/Newsletter";
import { Footer } from "@/components/ddp/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diario del Poder — La voz del legado" },
      { name: "description", content: "Conversaciones con expresidentes, CEOs y líderes que dejan criterio, no ruido. El podcast premium para una generación con ambición." },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0A0A0B" },
      { property: "og:title", content: "Diario del Poder — La voz del legado" },
      { property: "og:description", content: "Conversaciones con líderes que dejan criterio, no ruido." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Diario del Poder" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Diario del Poder — La voz del legado" },
      { name: "twitter:description", content: "Conversaciones con líderes que dejan criterio, no ruido." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Guests />
        <PullQuote />
        <Episodes />
        <WhyDDP />
        <Sponsors />
        <Team />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Press } from "@/components/ddp/Press";
import { useReveal } from "@/hooks/use-reveal";

const Footer = lazy(() => import("@/components/ddp/Footer").then((m) => ({ default: m.Footer })));

export const Route = createFileRoute("/prensa")({
  head: () => ({
    meta: [
      { title: "Prensa — Diario del Poder" },
      { name: "description", content: "Cobertura de prensa de Diario del Poder: medios, televisión y referencias digitales que están hablando del podcast en España." },
      { property: "og:title", content: "Prensa — Diario del Poder" },
      { property: "og:description", content: "Cobertura, partners y apariciones en prensa." },
      { property: "og:url", content: "https://eldiariodelpoder.com/prensa" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/prensa" }],
  }),
  component: PrensaPage,
});

function PrensaPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground page-enter">
      <Navbar />
      <main className="pt-24">
        <div className="container-ddp pt-6">
          <Link to="/" className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-muted-foreground hover:text-gold transition-colors">
            <ArrowLeft size={14} /> Volver
          </Link>
        </div>
        <header className="container-ddp pt-8 pb-2">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-light tracking-[-0.03em]">
            Prensa & <span className="italic text-gold">medios</span>
          </h1>
        </header>
        <Press />
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
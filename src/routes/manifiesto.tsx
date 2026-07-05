import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Manifesto } from "@/components/ddp/Manifesto";
import { About } from "@/components/ddp/About";
import { useReveal } from "@/hooks/use-reveal";

const Team = lazy(() => import("@/components/ddp/Team").then((m) => ({ default: m.Team })));
const Sponsors = lazy(() => import("@/components/ddp/Sponsors").then((m) => ({ default: m.Sponsors })));
const Footer = lazy(() => import("@/components/ddp/Footer").then((m) => ({ default: m.Footer })));

export const Route = createFileRoute("/manifiesto")({
  head: () => ({
    meta: [
      { title: "Manifiesto — Diario del Poder" },
      { name: "description", content: "Por qué hacemos Diario del Poder. Quiénes lo hacemos y cómo lo entendemos." },
      { property: "og:title", content: "Manifiesto — Diario del Poder" },
      { property: "og:description", content: "Conversaciones con quienes dejan huella. Sin guion." },
      { property: "og:url", content: "https://eldiariodelpoder.com/manifiesto" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/manifiesto" }],
  }),
  component: ManifiestoPage,
});

function ManifiestoPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground page-enter">
      <Navbar />
      <main className="pt-40 md:pt-44">
        <div className="container-ddp pt-6">
          <Link to="/" className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-muted-foreground hover:text-gold transition-colors">
            <ArrowLeft size={14} /> Volver
          </Link>
        </div>
        <header className="container-ddp pt-8 pb-2">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-light tracking-[-0.03em]">
            Nuestro <span className="">manifiesto</span>
          </h1>
        </header>
        <Manifesto />
        <About />
        <Suspense fallback={null}>
          <Team />
          <Sponsors />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
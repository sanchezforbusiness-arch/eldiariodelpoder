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
      { name: "description", content: "Los medios que han hablado de Diario del Poder." },
      { property: "og:title", content: "Prensa — Diario del Poder" },
      { property: "og:description", content: "Cobertura, partners y apariciones en prensa." },
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
        <Press />
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
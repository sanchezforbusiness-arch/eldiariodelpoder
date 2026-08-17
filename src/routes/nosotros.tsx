import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Team } from "@/components/ddp/Team";
import { useReveal } from "@/hooks/use-reveal";

const Sponsors = lazy(() => import("@/components/ddp/Sponsors").then((m) => ({ default: m.Sponsors })));
const Footer = lazy(() => import("@/components/ddp/Footer").then((m) => ({ default: m.Footer })));

const URL = "https://eldiariodelpoder.com/nosotros";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Diario del Poder" },
      {
        name: "description",
        content:
          "Las personas detrás de Diario del Poder: Alejandro Sánchez Martínez y Víctor Hugo Gandarilla, hosts; y los advisors que acompañan el proyecto. Hecho en Madrid.",
      },
      { property: "og:title", content: "Nosotros — Diario del Poder" },
      {
        property: "og:description",
        content: "Dos fundadores, dos asesores y una conversación. Hecho en Madrid.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${URL}#aboutpage`,
          url: URL,
          inLanguage: "es-ES",
          name: "Nosotros — Diario del Poder",
          description:
            "Las personas detrás de Diario del Poder: fundadores, hosts y advisors. Hecho en Madrid.",
          mainEntity: { "@id": "https://eldiariodelpoder.com/#organization" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://eldiariodelpoder.com/" },
            { "@type": "ListItem", position: 2, name: "Nosotros", item: URL },
          ],
        }),
      },
    ],
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground page-enter">
      <Navbar />
      <main className="pt-24">
        <div className="container-ddp pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-2xs tracking-label uppercase text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft size={14} /> Volver
          </Link>
        </div>

        <header className="container-ddp pt-6 sm:pt-8 pb-12 md:pb-16 border-b border-border">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-light tracking-tight">
                Quiénes <span className="italic text-gold">somos</span>.
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Dos fundadores, dos advisors. Un podcast hecho en Madrid.
              </p>
            </div>
          </div>
        </header>

        <Team />

        {/* Manifiesto pull-quote — enlace, no duplicación */}
        <section className="border-t border-border py-24 md:py-36">
          <div className="container-ddp">
            <div className="grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-8 reveal">
                <span className="eyebrow block mb-6">El porqué</span>
                <p className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-light tracking-tight">
                  Grabamos la conversación entera y la publicamos{" "}
                  <span className="italic text-gold">sin recortes</span>.
                </p>
              </div>
              <div className="md:col-span-4 md:justify-self-end reveal">
                <Link
                  to="/manifiesto"
                  className="group inline-flex items-center gap-3 text-2xs tracking-label uppercase text-gold border-b border-gold/40 pb-2 hover:border-gold transition-colors"
                >
                  Leer el manifiesto
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Firma geográfica */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="container-ddp flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <p className="font-serif text-2xl md:text-3xl font-light tracking-tight">
              Hecho en <span className="italic text-gold">Madrid</span>.
            </p>
            <p className="mono-label">Diario del Poder · 2026</p>
          </div>
        </section>

        <Suspense fallback={null}>
          <Sponsors />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

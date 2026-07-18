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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://eldiariodelpoder.com/" },
            { "@type": "ListItem", position: 2, name: "Manifiesto", item: "https://eldiariodelpoder.com/manifiesto" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://eldiariodelpoder.com/manifiesto#alejandro-sanchez-martinez",
              name: "Alejandro Sánchez Martínez",
              alternateName: ["Alejandro Sánchez", "Alejandro Sanchez Martinez"],
              jobTitle: "Co-fundador y host de Diario del Poder",
              description:
                "Co-fundador y host del podcast Diario del Poder. Presidente de Kifaru Club y miembro de Nova 111. Ha entrevistado a José María Aznar, Guillermo Lasso, Andrés Rodríguez (Forbes) y Tomás Villén (Porsche).",
              gender: "Male",
              nationality: "ES",
              worksFor: { "@id": "https://eldiariodelpoder.com/#organization" },
              affiliation: [
                { "@type": "Organization", name: "Kifaru Club" },
                { "@type": "Organization", name: "Nova 111" },
              ],
              url: "https://eldiariodelpoder.com/manifiesto",
              sameAs: [
                "https://www.linkedin.com/in/alejandrosanchezmartinez",
              ],
            },
            {
              "@type": "Person",
              "@id": "https://eldiariodelpoder.com/manifiesto#victor-hugo-gandarilla-de-andres",
              name: "Víctor Hugo Gandarilla de Andrés",
              alternateName: [
                "Víctor Hugo Gandarilla",
                "Victor Hugo Gandarilla de Andres",
                "Víctor Gandarilla",
              ],
              jobTitle: "Co-fundador y host de Diario del Poder",
              description:
                "Co-fundador y host del podcast Diario del Poder. Top 10 de España en Marketing y Comunicación (Nova 111). Estudiante en la Universidad de Navarra.",
              gender: "Male",
              nationality: "ES",
              worksFor: { "@id": "https://eldiariodelpoder.com/#organization" },
              alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad de Navarra" },
              affiliation: [{ "@type": "Organization", name: "Nova 111" }],
              url: "https://eldiariodelpoder.com/manifiesto",
              sameAs: [
                "https://www.linkedin.com/in/victor-hugo-gandarilla-de-andres",
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ManifiestoPage,
});

function ManifiestoPage() {
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
        <header className="container-ddp pt-6 sm:pt-8 pb-2">
          <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-light tracking-[-0.03em]">
            Nuestro <span className="italic text-gold">manifiesto</span>
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
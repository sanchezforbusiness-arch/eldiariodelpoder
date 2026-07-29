import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Press } from "@/components/ddp/Press";
import { useReveal } from "@/hooks/use-reveal";
import { pressArticles } from "@/data/press";

const Footer = lazy(() => import("@/components/ddp/Footer").then((m) => ({ default: m.Footer })));

export const Route = createFileRoute("/prensa")({
  head: () => ({
    meta: [
      { title: "Prensa: Diario del Poder en los medios | Noticias y cobertura" },
      { name: "description", content: "Todas las noticias sobre Diario del Poder y sus fundadores Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés en La Vanguardia, Antena 3, La Sexta, El Español, Infobae y HuffPost." },
      { property: "og:title", content: "Diario del Poder en los medios — Prensa" },
      { property: "og:description", content: "Cobertura en La Vanguardia, Antena 3, La Sexta, El Español, Infobae, Voz Pópuli y HuffPost." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://eldiariodelpoder.com/prensa" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/prensa" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://eldiariodelpoder.com/" },
            { "@type": "ListItem", position: 2, name: "Prensa", item: "https://eldiariodelpoder.com/prensa" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Diario del Poder en los medios",
          itemListElement: pressArticles.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "NewsArticle",
              headline: a.headline,
              url: a.url,
              datePublished: a.date,
              description: a.summary,
              inLanguage: "es-ES",
              publisher: { "@type": "NewsMediaOrganization", name: a.outlet },
              about: { "@id": "https://eldiariodelpoder.com/#organization" },
              mentions: [
                { "@type": "Person", name: "Alejandro Sánchez Martínez", url: "https://eldiariodelpoder.com/alejandro-sanchez-martinez" },
                { "@type": "Person", name: "Víctor Hugo Gandarilla de Andrés", url: "https://eldiariodelpoder.com/victor-hugo-gandarilla-de-andres" },
              ],
            },
          })),
        }),
      },
    ],
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
        <header className="container-ddp pt-6 sm:pt-8 pb-2">
          <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-light tracking-[-0.03em]">
            Prensa & <span className="italic text-gold">medios</span>
          </h1>
        </header>
        <Press />
        <section className="container-ddp py-16 md:py-24 border-t border-border">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
            Noticias publicadas sobre <span className="italic text-gold">Diario del Poder</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground leading-relaxed mb-10">
            Cobertura en medios españoles sobre el podcast y sus fundadores,{" "}
            <Link to="/alejandro-sanchez-martinez" className="text-gold hover:underline">Alejandro Sánchez Martínez</Link>{" "}
            y{" "}
            <Link to="/victor-hugo-gandarilla-de-andres" className="text-gold hover:underline">Víctor Hugo Gandarilla de Andrés</Link>.
          </p>
          <ul className="space-y-8 max-w-3xl">
            {pressArticles.map((a) => (
              <li key={a.url}>
                <p className="text-[11px] tracking-[0.24em] uppercase text-gold/90 mb-2">{a.outlet}</p>
                <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                  <a href={a.url} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                    {a.headline}
                  </a>
                </h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{a.summary}</p>
              </li>
            ))}
          </ul>
        </section>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
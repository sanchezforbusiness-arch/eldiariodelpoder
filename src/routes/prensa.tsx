import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Press } from "@/components/ddp/Press";
import { TvAppearances } from "@/components/ddp/TvAppearances";
import { useReveal } from "@/hooks/use-reveal";
import { pressArticles } from "@/data/press";
import { tvAppearances, SITE_URL } from "@/data/tv";

const FooterGrid = lazy(() => import("@/components/ddp/FooterGrid").then((m) => ({ default: m.FooterGrid })));

export const Route = createFileRoute("/prensa")({
  head: () => ({
    meta: [
      { title: "Prensa y TV: Diario del Poder en La Sexta, Antena 3 y Univision" },
      { name: "description", content: "Entrevistas en directo de Diario del Poder en Zapeando (La Sexta), Espejo Público con Susanna Griso (Antena 3) y Univision, más la cobertura en La Vanguardia, El Español, Infobae y HuffPost." },
      { property: "og:title", content: "Diario del Poder en TV: La Sexta, Antena 3 y Univision" },
      { property: "og:description", content: "Entrevistas en directo en Zapeando, Espejo Público y Univision, y cobertura en La Vanguardia, El Español, Infobae y HuffPost." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://eldiariodelpoder.com/prensa" },
      { property: "og:image", content: `${SITE_URL}${tvAppearances[0].image}` },
      { name: "twitter:image", content: `${SITE_URL}${tvAppearances[0].image}` },
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Diario del Poder en televisión",
          itemListElement: tvAppearances.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "TVClip",
              name: t.title,
              description: t.caption,
              inLanguage: "es",
              datePublished: t.date,
              thumbnailUrl: `${SITE_URL}${t.image}`,
              image: `${SITE_URL}${t.image}`,
              partOfSeries: { "@type": "TVSeries", name: t.program },
              publication: {
                "@type": "BroadcastEvent",
                isLiveBroadcast: true,
                startDate: t.date,
                publishedOn: { "@type": "BroadcastService", name: `${t.channel} — ${t.program}`, broadcastDisplayName: t.channel },
              },
              about: { "@id": "https://eldiariodelpoder.com/#organization" },
              actor: [
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
          <Link to="/" className="inline-flex items-center gap-2 text-2xs tracking-label uppercase text-muted-foreground hover:text-signal transition-colors">
            <ArrowLeft size={14} /> Volver
          </Link>
        </div>
        <header className="container-ddp pt-6 sm:pt-8 pb-2">
          <h1 className="text-2xl sm:text-display md:text-display lg:text-display leading-[0.95] font-medium tracking-tight">
            Prensa & medios
          </h1>
        </header>
        <Press />
        <TvAppearances />
 <section className="container-ddp py-12 md:py-24 border-t border-border">
          <h2 className="tracking-tight text-2xl md:text-2xl font-medium mb-4">
            Noticias publicadas sobre Diario del Poder
          </h2>
          <p className="max-w-2xl text-muted-foreground leading-relaxed mb-10">
            Cobertura en medios españoles sobre el podcast y sus fundadores,{" "}
            <Link to="/alejandro-sanchez-martinez" className="text-foreground hover:underline">Alejandro Sánchez Martínez</Link>{" "}
            y{" "}
            <Link to="/victor-hugo-gandarilla-de-andres" className="text-foreground hover:underline">Víctor Hugo Gandarilla de Andrés</Link>.
          </p>
          <ul className="space-y-8 max-w-3xl">
            {pressArticles.map((a) => (
              <li key={a.url}>
                <p className="text-2xs tracking-label uppercase text-muted-foreground mb-2">{a.outlet}</p>
                <h3 className="tracking-tight text-2xl md:text-2xl leading-tight">
                  <a href={a.url} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">
                    {a.headline}
                  </a>
                </h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{a.summary}</p>
              </li>
            ))}
          </ul>
        </section>
        <Suspense fallback={null}>
          <FooterGrid />
        </Suspense>
      </main>
    </div>
  );
}
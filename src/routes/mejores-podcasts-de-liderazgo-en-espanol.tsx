import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { COUNTRY_REGIONS, countryList } from "@/data/countries";
import { COUNTRY_SITE, COUNTRY_SOCIAL_IMAGE } from "@/data/countryPage";
import { GUIDE_URL, GUIDE_TITLE, GUIDE_DESCRIPTION, GUIDE_DATE, guideSections, guideCriteria, guideFaq, guideItemList } from "@/data/leadershipGuide";
import { DISCOVERY_DATE, guideLinks } from "@/data/spanishPodcastsGuide";

export const Route = createFileRoute("/mejores-podcasts-de-liderazgo-en-espanol")({
  head: () => ({
    meta: [
      { title: GUIDE_TITLE },
      { name: "description", content: GUIDE_DESCRIPTION },
      { property: "og:title", content: GUIDE_TITLE },
      { property: "og:description", content: GUIDE_DESCRIPTION },
      { property: "og:url", content: GUIDE_URL },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:image", content: COUNTRY_SOCIAL_IMAGE },
      { name: "twitter:image", content: COUNTRY_SOCIAL_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: GUIDE_TITLE },
      { name: "twitter:description", content: GUIDE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: GUIDE_URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage", "@id": `${GUIDE_URL}#webpage`, url: GUIDE_URL,
            name: GUIDE_TITLE, description: GUIDE_DESCRIPTION, inLanguage: "es",
            isPartOf: { "@id": `${COUNTRY_SITE}/#website` },
            about: { "@id": `${COUNTRY_SITE}/#podcastseries` },
            datePublished: GUIDE_DATE, dateModified: DISCOVERY_DATE,
            author: { "@type": "Organization", "@id": `${COUNTRY_SITE}/#organization` },
            publisher: { "@type": "Organization", "@id": `${COUNTRY_SITE}/#organization` },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: `${COUNTRY_SITE}/` },
              { "@type": "ListItem", position: 2, name: "Mejores podcasts de liderazgo en español", item: GUIDE_URL },
            ],
          },
          guideItemList,
          {
            "@type": "FAQPage", mainEntity: guideFaq.map(({ question, answer }) => ({
              "@type": "Question", name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          },
        ],
      }),
    }],
  }),
  component: BestLeadershipPodcastsPage,
});

function BestLeadershipPodcastsPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main lang="es" className="pt-24 md:pt-32">
        <header className="container-ddp py-16 md:py-24">
          <p className="mono-label">Guía · Actualizada en octubre de 2026</p>
          <h1 className="mt-5 max-w-4xl text-2xl font-medium leading-tight text-balance">Los mejores podcasts de liderazgo en español</h1>
          <p className="mt-10 max-w-4xl font-serif text-lg leading-relaxed md:text-xl">El podcast en español ha madurado: hay entrevistas largas a la altura de The Diary of a CEO o Modern Wisdom. De Madrid a Ciudad de México, distintas conversaciones permiten escuchar a quienes lideran, emprenden y toman decisiones.</p>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">Esta guía la hace el equipo de Diario del Poder, así que avisamos: el nuestro va primero, y el resto son los que escuchamos nosotros. La elección depende de lo que busques.</p>
        </header>

        {guideSections.map((section) => (
          <section key={section.title} className="border-t border-border py-16 md:py-24">
            <div className="container-ddp">
              <h2 className="text-xl font-medium md:text-2xl">{section.title}</h2>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {section.podcasts.map((podcast) => (
                  <article key={podcast.name} className="card-clean p-6 md:p-8">
                    {podcast.own && <p className="mono-label">Nuestro podcast</p>}
                    <h3 className="text-lg font-medium">{podcast.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{podcast.hosts.length ? `${podcast.hosts.join(" y ")} · ` : ""}{podcast.location}</p>
                    {podcast.text && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{podcast.text}</p>}
                    {podcast.own && <p className="mt-4 text-sm leading-relaxed text-muted-foreground"><Link to="/episodios">Todas las conversaciones publicadas</Link> · <Link to="/podcast-de-liderazgo-en-espanol">Podcast de liderazgo en español</Link></p>}
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">Cómo elegimos</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {guideCriteria.map(({ title, text }) => <article key={title} className="card-clean p-6 md:p-8"><h3 className="text-lg font-medium">{title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">En tu país</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {COUNTRY_REGIONS.map((region) => <nav key={region} aria-label={region}><h3 className="mono-label">{region}</h3><ul className="mt-4">{countryList.filter((entry) => entry.region === region).map((entry) => <li key={entry.slug}><Link to="/paises/$slug" params={{ slug: entry.slug }} className="tap inline-flex items-center text-sm transition-colors hover:text-signal">{entry.name}</Link></li>)}</ul></nav>)}
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">Preguntas frecuentes</h2>
            <div className="mt-10 max-w-4xl">
              {guideFaq.map(({ question, answer }) => <details key={question} className="border-b border-border py-5"><summary className="cursor-pointer text-base font-medium leading-relaxed">{question}</summary><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}
            </div>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">{guideLinks.filter((entry) => entry.to !== "/mejores-podcasts-de-liderazgo-en-espanol").map((entry, index) => <span key={entry.to}>{index > 0 && " · "}<Link to={entry.to}>{entry.label}</Link></span>)}</p>
          </div>
        </section>
      </main>
      <FooterGrid />
    </div>
  );
}
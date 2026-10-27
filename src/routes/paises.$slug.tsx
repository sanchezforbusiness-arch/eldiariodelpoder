import { createFileRoute, Link, notFound, useRouter, type ErrorComponentProps } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Mail } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/data/contact";
import { COUNTRY_REGIONS, countryList, getCountryBySlug } from "@/data/countries";
import { countryPageData, COUNTRY_SITE, COUNTRY_SOCIAL_IMAGE } from "@/data/countryPage";
import { podcastSeriesSchema } from "@/data/podcastSeries";

export const Route = createFileRoute("/paises/$slug")({
  loader: ({ params }) => {
    const country = getCountryBySlug(params.slug);
    if (!country) throw notFound();
    return countryPageData(country);
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "País no disponible — Diario del Poder" }, { name: "robots", content: "noindex" }] };
    const { country, episodes } = loaderData;
    const faq = loaderData.faq;
    const url = `${COUNTRY_SITE}/paises/${country.slug}`;
    return {
      meta: [
        { title: country.metaTitle },
        { name: "description", content: country.metaDescription },
        { property: "og:title", content: country.metaTitle },
        { property: "og:description", content: country.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: country.locale.replace("-", "_") },
        { property: "og:image", content: COUNTRY_SOCIAL_IMAGE },
        { name: "twitter:image", content: COUNTRY_SOCIAL_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            podcastSeriesSchema,
            {
              "@type": "WebPage", "@id": `${url}#webpage`, url,
              inLanguage: country.locale, name: country.headline, description: country.metaDescription,
              isPartOf: { "@id": `${COUNTRY_SITE}/#website` },
              about: { "@id": `${COUNTRY_SITE}/#podcastseries` },
              audience: { "@type": "Audience", geographicArea: { "@type": "Country", name: country.name, identifier: country.iso } },
              spatialCoverage: { "@type": "Country", name: country.name },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: `${COUNTRY_SITE}/` },
                { "@type": "ListItem", position: 2, name: "Países", item: `${COUNTRY_SITE}/paises` },
                { "@type": "ListItem", position: 3, name: country.name, item: url },
              ],
            },
            {
              "@type": "ItemList", numberOfItems: episodes.length,
              itemListElement: episodes.map((episode, index) => ({
                "@type": "ListItem", position: index + 1,
                item: {
                  "@type": "PodcastEpisode", name: `${episode.guest} — ${episode.title}`,
                  url: `${COUNTRY_SITE}/episodios/${episode.slug}`,
                  partOfSeries: { "@id": `${COUNTRY_SITE}/#podcastseries` },
                },
              })),
            },
            {
              "@type": "FAQPage", mainEntity: faq.map((item) => ({
                "@type": "Question", name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ],
        }),
      }],
    };
  },
  component: CountryPage,
  notFoundComponent: CountryMissing,
  errorComponent: CountryError,
});

function CountryMissing() {
  return <><Navbar /><main className="container-ddp py-32"><h1 className="text-2xl">País no encontrado</h1><Link to="/paises" className="btn-outline mt-6">Todos los países</Link></main><FooterGrid /></>;
}

function CountryError({ reset }: ErrorComponentProps) {
  const router = useRouter();
  return <><Navbar /><main className="container-ddp py-32"><h1 className="text-2xl">No se ha podido cargar el país</h1><Button className="mt-6" onClick={async () => { await router.invalidate(); reset(); }}>Reintentar</Button></main><FooterGrid /></>;
}

function CountryPage() {
  const { country, zones, episodes, faq } = Route.useLoaderData();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main lang={country.locale} className="pt-24 md:pt-32">
        <header className="container-ddp py-16 md:py-24">
          <p className="mono-label">Diario del Poder · {country.region}</p>
          <h1 className="mt-5 max-w-4xl text-2xl font-medium leading-tight text-balance md:text-3xl">{country.headline}</h1>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {country.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" className="btn-primary">Escuchar en Spotify<ArrowUpRight size={16} aria-hidden /></a>
            <a href="https://www.youtube.com/@eldiariodelpoder" className="btn-outline">Ver en YouTube<ArrowUpRight size={16} aria-hidden /></a>
          </div>
          {country.listenNote && <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">{country.listenNote}</p>}
        </header>

        <section className="border-y border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">Estreno semanal</h2>
            <ul className="mt-6 space-y-3">
              {zones.map((zone) => <li key={zone.tz} className="font-(family-name:--font-mono) text-sm leading-relaxed">{zone.label}: cada {zone.weekday} a las {zone.time}</li>)}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">La Vanguardia publica una nueva conversación cada lunes a las 15:00, hora de Madrid</p>
          </div>
        </section>

        <section className="container-ddp py-16 md:py-24">
          <h2 className="text-xl font-medium md:text-2xl">Por qué escucharlo en {country.name}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {country.keys.map((key) => <article key={key.t} className="card-clean p-6 md:p-8"><h3 className="text-lg font-medium leading-snug">{key.t}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{key.d}</p></article>)}
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">Por dónde empezar en {country.name}</h2>
            <ul className="mt-8 border-t border-border">
              {episodes.map((episode) => (
                <li key={episode.slug}>
                  <Link to="/episodios/$slug" params={{ slug: episode.slug }} className="row-index grid-cols-[2rem_1fr] md:grid-cols-[3rem_1fr_1fr]">
                    <span className="mono-label self-start">{String(episode.episodeNumber).padStart(2, "0")}</span>
                    <div className="min-w-0"><p className="text-sm font-medium">{episode.guest}</p><h3 className="mt-2 text-lg font-medium leading-snug">{episode.title}</h3></div>
                    <p className="col-start-2 text-sm leading-relaxed opacity-75 md:col-start-auto">{episode.why}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container-ddp py-16 md:py-24">
          <div className="panel p-6 md:p-10">
            <h2 className="text-xl font-medium md:text-2xl">Para marcas en {country.name}</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">{country.sponsor}</p>
            <Link to="/patrocinadores" className="btn-primary mt-7 w-full whitespace-normal sm:w-auto">Ver opciones de patrocinio<ArrowUpRight size={16} className="shrink-0" aria-hidden /></Link>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">Preguntas frecuentes</h2>
            <div className="mt-8 space-y-3">
              {faq.map((item, index) => (
                <details key={item.question} className="card-clean group p-6 md:p-8">
                  <summary className="flex cursor-pointer list-none items-start gap-4 text-base font-medium [&::-webkit-details-marker]:hidden">
                    <span className="mono-label mt-1 shrink-0">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1">{item.question}</span><ChevronDown size={18} className="mt-1 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="container-ddp py-16 md:py-24">
          <h2 className="text-xl font-medium md:text-2xl">Propón un invitado de {country.name}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">¿A quién deberíamos escuchar? Envíanos tu propuesta.</p>
          <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Propuesta de invitado — ${country.name}`)}`} className="btn-outline mt-7"><Mail size={16} aria-hidden />Proponer un invitado</a>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">Diario del Poder en otros países</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {COUNTRY_REGIONS.map((region) => {
                const others = countryList.filter((entry) => entry.region === region && entry.slug !== country.slug);
                return others.length ? <nav key={region} aria-label={region}><h3 className="mono-label">{region}</h3><ul className="mt-4">{others.map((entry) => <li key={entry.slug}><Link to="/paises/$slug" params={{ slug: entry.slug }} className="tap inline-flex items-center text-sm transition-colors hover:text-signal">{entry.name}</Link></li>)}</ul></nav> : null;
              })}
            </div>
          </div>
        </section>
      </main>
      <FooterGrid />
    </div>
  );
}
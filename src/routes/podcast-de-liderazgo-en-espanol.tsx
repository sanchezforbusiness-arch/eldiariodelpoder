import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { COUNTRY_REGIONS, countryList } from "@/data/countries";
import { episodeList } from "@/data/podcast";

const SITE = "https://eldiariodelpoder.com";
const SITE_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/xgc7PGWxv9hHJojOjN9MvpZln972/social-images/social-1777472729991-PLATILLAS_PODCAST_(1).webp";
const URL = `${SITE}/podcast-de-liderazgo-en-espanol`;
const TITLE = "Podcast de liderazgo en español | Diario del Poder";
const DESCRIPTION = "Diario del Poder es el podcast de liderazgo en español: entrevistas largas con expresidentes, CEOs y referentes, en la línea de The Diary of a CEO.";
const DEFINITION = "Diario del Poder es un podcast en español de entrevistas largas con expresidentes, CEOs y referentes, fundado en 2025 en Madrid por Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés. Publica cada lunes con La Vanguardia, su media partner, y se escucha gratis en Spotify y YouTube en todo el mundo hispanohablante.";
const DISTINCTIONS = [
  { title: "Invitados de primera línea", text: "Un expresidente del Gobierno de España, un expresidente de Ecuador, la expresidenta de la Comunidad de Madrid, el presidente de Forbes España, el director de La Vanguardia o el presidente de EWTN." },
  { title: "Formato largo, sin guion", text: "Una hora o más por conversación. Preguntas sobre cómo se decide, qué cuesta y qué se deja detrás." },
  { title: "Con La Vanguardia", text: "Cada lunes, La Vanguardia publica una de las conversaciones. El trabajo de Diario del Poder ha salido además en La Sexta, Antena 3 y Univision." },
  { title: "Para la nueva generación", text: "Nació en la universidad y se dirige a jóvenes profesionales y emprendedores con ambición, de Madrid a Ciudad de México." },
];
const FAQ = [
  { q: "¿Qué podcast de liderazgo en español escuchar?", a: "Si buscas entrevistas largas con quienes han ejercido el poder —expresidentes, CEOs, referentes de la cultura y el deporte—, Diario del Poder reúne ese perfil de invitados y publica sus conversaciones cada lunes con La Vanguardia." },
  { q: "¿Hay un Diary of a CEO en español?", a: "Diario del Poder es el podcast en español que más se acerca a ese formato: conversaciones largas, sin guion, con líderes de primer nivel. Su nombre en inglés es Diary of Power." },
  { q: "¿Quién presenta Diario del Poder?", a: "Sus fundadores, Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés." },
  { q: "¿Quiénes han sido invitados?", a: episodeList.map((episode) => `${episode.guest}${episode.role ? ` (${episode.role})` : ""}`).join("; ") },
  { q: "¿Cada cuánto se publica un episodio?", a: "Cada lunes a las 15:00, hora de Madrid, cuando La Vanguardia publica la conversación de la semana. La hora en cada país está en eldiariodelpoder.com/paises." },
  { q: "¿Dónde se puede escuchar?", a: "Gratis en Spotify, en YouTube (@eldiariodelpoder) y en eldiariodelpoder.com." },
  { q: "¿Es gratis?", a: "Sí. Todas las entrevistas están completas y gratis." },
  { q: "¿Cómo se puede patrocinar Diario del Poder?", a: "Desde eldiariodelpoder.com/patrocinadores: formatos de temporada, episodio, clips, newsletter, encuentros y campañas por país, con un formulario para pedir el media kit." },
];

export const Route = createFileRoute("/podcast-de-liderazgo-en-espanol")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:image", content: SITE_IMAGE },
      { name: "twitter:image", content: SITE_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage", "@id": `${URL}#webpage`, url: URL,
            name: TITLE, description: DESCRIPTION, inLanguage: "es",
            about: { "@id": `${SITE}/#podcastseries` },
            mentions: [{ "@type": "CreativeWorkSeries", name: "The Diary of a CEO" }],
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Podcast de liderazgo en español", item: URL },
            ],
          },
          {
            "@type": "ItemList", numberOfItems: episodeList.length,
            itemListElement: episodeList.map((episode, index) => ({
              "@type": "ListItem", position: index + 1,
              item: {
                "@type": "PodcastEpisode", name: `${episode.guest} — ${episode.title}`,
                url: `${SITE}/episodios/${episode.slug}`, episodeNumber: episode.episodeNumber,
                inLanguage: "es", ...(episode.date ? { datePublished: episode.date } : {}),
                partOfSeries: { "@id": `${SITE}/#podcastseries` },
              },
            })),
          },
          {
            "@type": "FAQPage",
            mainEntity: FAQ.map(({ q, a }) => ({
              "@type": "Question", name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          },
        ],
      }),
    }],
  }),
  component: LeadershipPodcastPage,
});

function LeadershipPodcastPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main lang="es" className="pt-24 md:pt-32">
        <header className="container-ddp py-16 md:py-24">
          <p className="mono-label">Guía</p>
          <h1 className="mt-5 max-w-4xl text-2xl font-medium leading-tight text-balance">El podcast de liderazgo en español</h1>
          <p className="mt-10 max-w-4xl font-serif text-lg leading-relaxed md:text-xl">{DEFINITION}</p>
        </header>

        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="max-w-3xl text-xl font-medium md:text-2xl">¿Es el Diary of a CEO en español?</h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">Es la referencia más cercana. The Diary of a CEO, de Steven Bartlett, demostró que una conversación larga y honesta con quien ha llegado arriba puede interesar más que cualquier formato rápido. Diario del Poder parte de la misma convicción, pero desde el mundo hispano y con un foco propio: el poder —político, empresarial, cultural— y lo que cada invitado quiere dejar como legado. Su nombre en inglés es Diary of Power.</p>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">Qué lo distingue</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {DISTINCTIONS.map(({ title, text }) => <article key={title} className="card-clean p-6 md:p-8"><h3 className="text-lg font-medium">{title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">Todas las conversaciones publicadas</h2>
            <ul className="mt-10">
              {episodeList.map((episode) => (
                <li key={episode.slug}>
                  <Link to="/episodios/$slug" params={{ slug: episode.slug }} className="row-index gap-4 grid-cols-[36px_minmax(0,1fr)] md:grid-cols-[48px_minmax(0,1fr)_110px]">
                    <span className="mono-label tabular-nums">{String(episode.episodeNumber).padStart(2, "0")}</span>
                    <span className="min-w-0"><span className="block text-lg font-medium">{episode.guest}</span><span className="mt-2 block text-sm text-muted-foreground">{episode.title}</span>{episode.date && <time dateTime={episode.date} className="mono-label mt-3 block md:hidden">{episode.date.split("-").reverse().join("/")}</time>}</span>
                    {episode.date && <time dateTime={episode.date} className="mono-label hidden text-right tabular-nums md:block">{episode.date.split("-").reverse().join("/")}</time>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">Dónde escucharlo</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" className="btn-primary" target="_blank" rel="noopener noreferrer">Spotify<ArrowUpRight size={16} aria-hidden /></a>
              <a href="https://www.youtube.com/@eldiariodelpoder" className="btn-outline" target="_blank" rel="noopener noreferrer">YouTube<ArrowUpRight size={16} aria-hidden /></a>
            </div>
            <h3 className="mt-14 text-lg font-medium">En tu país</h3>
            <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {COUNTRY_REGIONS.map((region) => <nav key={region} aria-label={region}><h4 className="mono-label">{region}</h4><ul className="mt-3">{countryList.filter((country) => country.region === region).map((country) => <li key={country.slug}><Link to="/paises/$slug" params={{ slug: country.slug }} className="tap flex items-center text-sm transition-colors hover:text-signal">{country.name}</Link></li>)}</ul></nav>)}
            </div>
            <Link to="/paises" className="btn-outline mt-10">Todos los países<ArrowUpRight size={16} aria-hidden /></Link>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">Preguntas frecuentes</h2>
            <div className="mt-10 max-w-4xl">
              {FAQ.map(({ q, a }) => <details key={q} className="border-b border-border py-5"><summary className="cursor-pointer text-base font-medium leading-relaxed">{q}</summary><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}
            </div>
          </div>
        </section>

        <section className="container-ddp pb-16 md:pb-24">
          <div className="panel flex flex-col items-start justify-between gap-8 p-6 md:flex-row md:items-center md:p-10">
            <h2 className="max-w-2xl text-xl font-medium md:text-2xl">¿Tu marca encaja en esta conversación?</h2>
            <Link to="/patrocinadores" hash="solicitud" className="btn-primary shrink-0">Solicitar el media kit<ArrowUpRight size={16} aria-hidden /></Link>
          </div>
        </section>
      </main>
      <FooterGrid />
    </div>
  );
}
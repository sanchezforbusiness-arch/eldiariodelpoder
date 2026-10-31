import { Link } from '@tanstack/react-router';
import { Navbar } from './Navbar';
import { FooterGrid } from './FooterGrid';
import { COUNTRY_REGIONS, countryList } from '@/data/countries';
import { guideLinks, type DiscoveryGuide } from '@/data/spanishPodcastsGuide';

export function PodcastDiscoveryGuide({ guide }: { guide: DiscoveryGuide }) {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main lang="es" className="pt-24 md:pt-32">
        <header className="container-ddp py-16 md:py-24">
          <p className="mono-label">Guía · Actualizada en octubre de 2026</p>
          <h1 className="mt-5 max-w-4xl text-2xl font-medium leading-tight text-balance">{guide.heading}</h1>
          <p className="mt-10 max-w-4xl font-serif text-lg leading-relaxed md:text-xl">{guide.intro[0]}</p>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">{guide.intro[1]}</p>
          {guide.source && <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">Alejandro Sánchez Martínez: «{guide.source.quote}». <a href={guide.source.url}>Reportaje de Dircomfidencial, 28/10/2026</a>.</p>}
        </header>
        {guide.sections.map((section) => (
          <section key={section.title} className="border-t border-border py-16 md:py-24">
            <div className="container-ddp">
              <h2 className="text-xl font-medium md:text-2xl">{section.title}</h2>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {section.podcasts.map((podcast) => (
                  <article key={podcast.name} className="card-clean p-6 md:p-8">
                    {podcast.own && <p className="mono-label">Nuestro podcast</p>}
                    <h3 className="text-lg font-medium">{podcast.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{podcast.hosts.length ? `${podcast.hosts.join(' y ')} · ` : ''}{podcast.location}</p>
                    {podcast.text && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{podcast.text}</p>}
                    {podcast.own && <p className="mt-4 text-sm leading-relaxed text-muted-foreground"><Link to="/episodios">Todas las conversaciones publicadas</Link> · <Link to="/podcast-de-liderazgo-en-espanol">Podcast de liderazgo en español</Link></p>}
                    {podcast.own && guide.episodes && <ul className="mt-4">{guide.episodes.map((episode) => <li key={episode.slug}><Link to="/episodios/$slug" params={{ slug: episode.slug }} className="tap inline-flex items-center text-sm transition-colors hover:text-signal">{episode.guest} — {episode.title}</Link></li>)}</ul>}
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">Cómo elegimos</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">{guide.criteria.map(({ title, text }) => <article key={title} className="card-clean p-6 md:p-8"><h3 className="text-lg font-medium">{title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
          </div>
        </section>
        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">En tu país</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{COUNTRY_REGIONS.map((region) => <nav key={region} aria-label={region}><h3 className="mono-label">{region}</h3><ul className="mt-4">{countryList.filter((entry) => entry.region === region).map((entry) => <li key={entry.slug}><Link to="/paises/$slug" params={{ slug: entry.slug }} className="tap inline-flex items-center text-sm transition-colors hover:text-signal">{entry.name}</Link></li>)}</ul></nav>)}</div>
          </div>
        </section>
        <section className="border-t border-border py-16 md:py-24">
          <div className="container-ddp">
            <h2 className="text-xl font-medium md:text-2xl">Preguntas frecuentes</h2>
            <div className="mt-10 max-w-4xl">{guide.faq.map(({ question, answer }) => <details key={question} className="border-b border-border py-5"><summary className="cursor-pointer text-base font-medium leading-relaxed">{question}</summary><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}</div>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">{guideLinks.filter((entry) => entry.to !== guide.path).map((entry, index) => <span key={entry.to}>{index > 0 && ' · '}<Link to={entry.to}>{entry.label}</Link></span>)}</p>
          </div>
        </section>
      </main>
      <FooterGrid />
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import type { CountryEntry } from "@/data/countries";
import type { countryPageData } from "@/data/countryPage";

type Snapshot = ReturnType<typeof countryPageData>;

export function CountryBand({ country, zones, episodes }: {
  country: CountryEntry; zones: Snapshot["zones"]; episodes: Snapshot["episodes"];
}) {
  return (
    <section className="section-pad">
      <div className="container-ddp">
        <div className="reveal max-w-4xl">
          <p className="mono-label">Diario del Poder · {country.region}</p>
          <h2 className="type-section mt-5">{country.headline}</h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {country.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="reveal-stagger mt-12 grid gap-4 md:grid-cols-3">
          {country.keys.map((key) => <article key={key.t} className="card-clean p-6 md:p-8"><h3 className="text-lg font-medium leading-snug">{key.t}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{key.d}</p></article>)}
        </div>
        <div className="reveal mt-16 border-y border-border py-16 md:mt-24 md:py-24">
          <h2 className="text-xl font-medium md:text-2xl">Estreno semanal</h2>
          <ul className="mt-6 space-y-3">
            {zones.map((zone) => <li key={zone.tz} className="font-(family-name:--font-mono) text-sm leading-relaxed">{zone.label}: cada {zone.weekday} a las {zone.time}</li>)}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">La Vanguardia publica una nueva conversación cada lunes a las 15:00, hora de Madrid</p>
        </div>
        <div className="reveal mt-16 md:mt-24">
          <h2 className="text-xl font-medium md:text-2xl">Por dónde empezar en {country.name}</h2>
          <ul className="mt-8 border-t border-border">
            {episodes.map((episode) => <li key={episode.slug}>
              <Link to="/episodios/$slug" params={{ slug: episode.slug }} className="row-index grid-cols-[2rem_1fr] md:grid-cols-[3rem_1fr_1fr]">
                <span className="mono-label self-start">{String(episode.episodeNumber).padStart(2, "0")}</span>
                <div className="min-w-0"><p className="text-sm font-medium">{episode.guest}</p><h3 className="mt-2 text-lg font-medium leading-snug">{episode.title}</h3></div>
                <p className="col-start-2 text-sm leading-relaxed opacity-75 md:col-start-auto">{episode.why}</p>
              </Link>
            </li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { COUNTRY_REGIONS, countryList } from "@/data/countries";
import { countryIndexData, COUNTRY_SITE, COUNTRY_SOCIAL_IMAGE } from "@/data/countryPage";

const TITLE = "Diario del Poder en cada país hispanohablante";
const DESCRIPTION = "El podcast de liderazgo en español, país por país: dónde escucharlo, a qué hora se estrena y por qué episodios empezar en México, Colombia, Argentina, España y 18 países más.";
const URL = `${COUNTRY_SITE}/paises`;

export const Route = createFileRoute("/paises/")({
  loader: () => countryIndexData(),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:image", content: COUNTRY_SOCIAL_IMAGE },
      { name: "twitter:image", content: COUNTRY_SOCIAL_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage", "@id": `${URL}#webpage`, url: URL,
            name: TITLE, description: DESCRIPTION, inLanguage: "es-ES",
            isPartOf: { "@id": `${COUNTRY_SITE}/#website` },
            about: { "@id": `${COUNTRY_SITE}/#podcastseries` },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: `${COUNTRY_SITE}/` },
              { "@type": "ListItem", position: 2, name: "Países", item: URL },
            ],
          },
          {
            "@type": "ItemList", numberOfItems: countryList.length,
            itemListElement: countryList.map((country, index) => ({
              "@type": "ListItem", position: index + 1,
              name: country.headline, url: `${URL}/${country.slug}`,
            })),
          },
        ],
      }),
    }],
  }),
  component: CountryIndex,
  errorComponent: () => <CountryIndexUnavailable />,
  notFoundComponent: () => <CountryIndexUnavailable />,
});

function CountryIndexUnavailable() {
  return <><Navbar /><main className="container-ddp py-32"><h1 className="text-2xl">Países no disponibles</h1><Link to="/" className="btn-outline mt-6">Inicio</Link></main><FooterGrid /></>;
}

function CountryIndex() {
  const countries = Route.useLoaderData();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main lang="es-ES" className="pt-24 md:pt-32">
        <header className="container-ddp py-16 md:py-24">
          <p className="mono-label">Diario del Poder · Países</p>
          <h1 className="mt-5 max-w-4xl text-2xl font-medium leading-tight text-balance md:text-3xl">Un podcast en español, escuchado en cada país</h1>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">Diario del Poder se graba en Madrid y se escucha en todo el mundo hispanohablante. Elige tu país para ver a qué hora se estrena cada episodio, por qué conversaciones empezar y cómo pueden participar las marcas locales.</p>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">Consulta nuestra <Link to="/mejores-podcasts-de-liderazgo-en-espanol">guía de los mejores podcasts de liderazgo en español</Link> y la <Link to="/mejores-podcasts-en-espanol">guía de mejores podcasts en español por temas</Link>.</p>
        </header>
        {COUNTRY_REGIONS.map((region) => (
          <section key={region} className="border-t border-border py-16 md:py-24">
            <div className="container-ddp">
              <h2 className="text-xl font-medium md:text-2xl">{region}</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {countries.filter((country) => country.region === region).map((country) => (
                  <li key={country.slug}>
                    <Link to="/paises/$slug" params={{ slug: country.slug }} className="card-clean flex h-full min-h-36 flex-col justify-between gap-6 p-6">
                      <span className="flex items-start justify-between gap-4"><span className="text-lg font-medium">{country.name}</span><ArrowUpRight size={18} className="shrink-0" aria-hidden /></span>
                      <span className="mono-label">Cada {country.release.weekday} · {country.release.time}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </main>
      <FooterGrid />
    </div>
  );
}
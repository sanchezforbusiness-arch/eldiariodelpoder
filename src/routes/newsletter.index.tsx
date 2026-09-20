import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { formatDateEs } from "@/lib/utils";
import { listarEdiciones } from "@/lib/newsletter.functions";
import { SITE, SUBSCRIBE_URL, absolutizar, type Edicion } from "@/lib/newsletter";

const TITLE = "Primera Mano — la newsletter diaria de El Diario del Poder";
const DESCRIPTION =
  "Primera Mano: lo que el poder decidió ayer, contado desde el documento original. Cinco minutos, cada mañana a las 7:30, sin opinión.";
const URL = `${SITE}/newsletter`;
const LEMA =
  "Lo que el poder decidió ayer, contado desde el documento original. Cinco minutos, a las 7:30, sin opinión.";

function newsletterImageSrc(value: string) {
  return value.startsWith("storage:")
    ? `/newsletter/imagen/${encodeURIComponent(value.slice("storage:".length))}`
    : value;
}

export const Route = createFileRoute("/newsletter/")({
  loader: async () => ({ ediciones: await listarEdiciones() }),
  head: ({ loaderData }) => {
    const ediciones = (loaderData?.ediciones ?? []) as Edicion[];
    const ultima = ediciones[0];
    const img = absolutizar(ultima?.imagen_social);

    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:url", content: URL },
        ...(img ? [{ property: "og:image", content: img }, { name: "twitter:image", content: img }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: URL }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Primera Mano",
            description: DESCRIPTION,
            url: URL,
            inLanguage: "es-ES",
            isPartOf: { "@id": `${SITE}/#website` },
            mainEntity: {
              "@type": "ItemList",
              name: "Ediciones de Primera Mano",
              itemListElement: ediciones.map((e, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: e.titulo,
                url: `${SITE}/newsletter/${e.slug}`,
              })),
            },
          }),
        },
      ],
    };
  },
  component: NewsletterIndex,
});

function NewsletterIndex() {
  const { ediciones } = Route.useLoaderData() as { ediciones: Edicion[] };
  const [ultima, ...anteriores] = ediciones;

  return (
    <div className="newsletter-shell">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <div className="container-ddp">
          <header className="newsletter-hero">
            <div className="newsletter-hero-copy">
              <p className="newsletter-kicker">Newsletter diaria · 7:30</p>
              <h1 className="newsletter-masthead">Primera<br className="hidden sm:block" /> Mano</h1>
              <p className="newsletter-deck">{LEMA}</p>
              <a className="newsletter-button" href={SUBSCRIBE_URL} target="_blank" rel="noopener noreferrer">
                Suscríbete gratis
                <span aria-hidden>↗</span>
              </a>
            </div>

            {ultima?.imagen_social && (
              <Link
                to="/newsletter/$slug"
                params={{ slug: ultima.slug }}
                className="newsletter-cover"
                aria-label={`Leer ${ultima.titulo}`}
              >
                <img src={newsletterImageSrc(ultima.imagen_social)} alt="" />
              </Link>
            )}
          </header>

          <section className="newsletter-archive" aria-label="Ediciones">
            <div className="newsletter-archive-heading">
              <p className="newsletter-kicker">Archivo</p>
              <h2>Últimas ediciones</h2>
            </div>

            {!ultima ? (
              <p className="newsletter-muted newsletter-empty">Todavía no hay ediciones publicadas.</p>
            ) : (
              <>
                <article className="newsletter-featured">
                  <div className="newsletter-featured-meta">
                    <p>Nº {ultima.numero}</p>
                    <time dateTime={ultima.fecha}>{formatDateEs(ultima.fecha)}</time>
                  </div>
                  <div className="newsletter-featured-copy">
                    <h3>
                      <Link to="/newsletter/$slug" params={{ slug: ultima.slug }}>
                        {ultima.titulo}
                      </Link>
                    </h3>
                    <p>{ultima.entradilla}</p>
                    <Link className="newsletter-read-link" to="/newsletter/$slug" params={{ slug: ultima.slug }}>
                      Leer la edición <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>

                {anteriores.length > 0 && (
                  <ul className="newsletter-previous">
                    {anteriores.map((e) => (
                      <li key={e.slug}>
                        <article>
                          {e.imagen_social && (
                            <Link to="/newsletter/$slug" params={{ slug: e.slug }} className="newsletter-thumbnail">
                              <img src={newsletterImageSrc(e.imagen_social)} alt="" loading="lazy" />
                            </Link>
                          )}
                          <p className="newsletter-kicker">Nº {e.numero} · {formatDateEs(e.fecha)}</p>
                          <h3>
                            <Link to="/newsletter/$slug" params={{ slug: e.slug }}>{e.titulo}</Link>
                          </h3>
                          <p>{e.entradilla}</p>
                        </article>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </section>
        </div>
      </main>
      <div className="mt-20 bg-background text-foreground md:mt-28">
        <FooterGrid />
      </div>
    </div>
  );
}

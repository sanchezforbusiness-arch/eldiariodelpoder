import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { Masthead } from "@/components/ddp/Masthead";
import { formatDateEs } from "@/lib/utils";
import { listarEdiciones } from "@/lib/newsletter.functions";
import { SECCIONES, SITE, SUBSCRIBE_URL, absolutizar, type Edicion } from "@/lib/newsletter";

const TITLE = "Primera Mano — la newsletter diaria de El Diario del Poder";
const DESCRIPTION =
  "Primera Mano: lo que el poder decidió ayer, contado desde el documento original. Cinco minutos, cada mañana a las 7:30, sin opinión.";
const URL = `${SITE}/newsletter`;
const LEMA =
  "Lo que el poder decidió ayer, contado desde el documento original. Cinco minutos, a las 7:30, sin opinión.";

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
  const ultima = ediciones[0];

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-28 md:pt-32">
        <div className="container-ddp">
          <header className="max-w-[68ch]">
            <Masthead edition="7:30 cada mañana" date="Newsletter diaria" />
            <h1 className="mt-6 text-3xl sm:text-display leading-[0.98] font-medium tracking-tight">
              Primera Mano
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{LEMA}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href={SUBSCRIBE_URL} target="_blank" rel="noopener noreferrer">
                Suscríbete gratis
              </a>
            </div>
          </header>

          <section className="mt-16 max-w-[68ch]" aria-label="Qué recibes">
            <p className="mono-label">Qué recibes</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {SECCIONES.map((s) => (
                <li key={s} className="border-t border-border py-3 text-sm tracking-tight">
                  {s}
                </li>
              ))}
            </ul>
          </section>

          {(ultima?.contenido?.metodo || ultima?.contenido?.aviso_ia) && (
            <section className="mt-16 max-w-[68ch]" aria-label="Cómo se hace">
              <p className="mono-label">Cómo se hace</p>
              {ultima.contenido.metodo && (
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">{ultima.contenido.metodo}</p>
              )}
              {ultima.contenido.aviso_ia && (
                <p className="mt-4 font-mono text-2xs leading-relaxed text-muted-foreground">
                  {ultima.contenido.aviso_ia}
                </p>
              )}
            </section>
          )}

          <section className="mt-20 md:mt-24" aria-label="Ediciones">
            <p className="mono-label">Ediciones</p>
            {ediciones.length === 0 ? (
              <p className="mt-6 text-muted-foreground">Todavía no hay ediciones publicadas.</p>
            ) : (
              <ul className="mt-4">
                {ediciones.map((e) => (
                  <li key={e.slug} className="border-t border-border py-8 max-w-[68ch]">
                    <div className={e.imagen_social ? "grid gap-5 sm:grid-cols-[12rem_minmax(0,1fr)] sm:items-start" : undefined}>
                      {e.imagen_social && (
                          <img
                            src={e.imagen_social}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover transition-opacity hover:opacity-90"
                          />
                        </Link>
                      )}
                      <div>
                        <p className="font-mono text-2xs uppercase tracking-label tabular-nums text-muted-foreground">
                          Nº {e.numero} · {formatDateEs(e.fecha)}
                        </p>
                        <h2 className="mt-3 text-xl md:text-2xl font-medium leading-tight tracking-tight">
                          <Link
                            to="/newsletter/$slug"
                            params={{ slug: e.slug }}
                            className="transition-colors hover:text-signal"
                          >
                            {e.titulo}
                          </Link>
                        </h2>
                        <p className="mt-3 text-base text-muted-foreground leading-relaxed">{e.entradilla}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
      <FooterGrid />
    </div>
  );
}

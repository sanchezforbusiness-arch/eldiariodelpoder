import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { formatDateEs } from "@/lib/utils";
import { listarEdiciones } from "@/lib/newsletter.functions";
import { SECCIONES, SITE, SUBSCRIBE_URL, absolutizar, type Edicion } from "@/lib/newsletter";

const TITLE = "Primera Mano — la newsletter diaria de El Diario del Poder";
const DESCRIPTION =
  "Primera Mano: lo que el poder decidió ayer, contado desde el documento original. Cinco minutos, cada mañana a las 7:30, sin opinión.";
const URL = `${SITE}/newsletter`;
const LEMA =
  "Lo que el poder decidió ayer, contado desde el documento original. Cinco minutos, a las 7:30, sin opinión.";
const SECTION_ACCENTS = [
  "newsletter-pill-ube",
  "newsletter-pill-lime",
  "newsletter-pill-mandarin",
  "newsletter-pill-blueberry",
] as const;

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
  const ultima = ediciones[0];

  return (
    <div className="newsletter-shell">
      <Navbar />
      <main className="pt-24 md:pt-28">
        <div className="container-ddp">
          <header className="newsletter-card px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-[68ch]">
                <p className="newsletter-pill newsletter-pill-ube">Newsletter diaria · 7:30</p>
                <h1 className="newsletter-title mt-7 font-semibold">Primera Mano</h1>
                <p className="newsletter-muted mt-6 max-w-[58ch] text-lg leading-relaxed">{LEMA}</p>
              </div>
              <a className="newsletter-button" href={SUBSCRIBE_URL} target="_blank" rel="noopener noreferrer">
                Suscríbete gratis
              </a>
            </div>
          </header>

          <section className="mt-16 md:mt-20" aria-label="Qué recibes">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="newsletter-muted text-xs font-semibold">Cada mañana</p>
                <h2 className="mt-2 text-2xl">Qué recibes</h2>
              </div>
              <span className="newsletter-muted hidden text-xs sm:block">Documento, dato y contexto</span>
            </div>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SECCIONES.map((section, index) => (
                <li key={section} className="newsletter-card newsletter-section-card flex flex-col justify-between">
                  <span className={`newsletter-pill ${SECTION_ACCENTS[index % SECTION_ACCENTS.length]}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 text-xl leading-tight">{section}</h3>
                </li>
              ))}
            </ul>
          </section>

          {(ultima?.contenido?.metodo || ultima?.contenido?.aviso_ia) && (
            <section className="newsletter-card mt-16 max-w-[68ch] p-6 sm:p-8" aria-label="Cómo se hace">
              <p className="newsletter-pill newsletter-pill-lime">Cómo se hace</p>
              {ultima.contenido.metodo && (
                <p className="newsletter-muted mt-5 text-base leading-relaxed">{ultima.contenido.metodo}</p>
              )}
              {ultima.contenido.aviso_ia && (
                <p className="newsletter-muted mt-4 text-xs leading-relaxed">
                  {ultima.contenido.aviso_ia}
                </p>
              )}
            </section>
          )}

          <section className="mt-20 md:mt-24" aria-label="Ediciones">
            <p className="newsletter-muted text-xs font-semibold">Archivo</p>
            <h2 className="mt-2 text-2xl">Ediciones</h2>
            {ediciones.length === 0 ? (
              <p className="newsletter-muted mt-6">Todavía no hay ediciones publicadas.</p>
            ) : (
              <ul className="mt-7 grid gap-5 md:grid-cols-2">
                {ediciones.map((e) => (
                  <li key={e.slug}>
                    <article className="newsletter-card newsletter-edition-card">
                      <Link
                        to="/newsletter/$slug"
                        params={{ slug: e.slug }}
                        className="newsletter-element block aspect-video overflow-hidden"
                      >
                        {e.imagen_social ? (
                          <img
                            src={newsletterImageSrc(e.imagen_social)}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full bg-[var(--newsletter-ube-soft)]" aria-hidden />
                        )}
                      </Link>
                      <div className="flex flex-1 flex-col p-3 pt-5 sm:p-5 sm:pt-6">
                        <p className="newsletter-pill">Nº {e.numero} · {formatDateEs(e.fecha)}</p>
                        <h3 className="mt-5 text-xl leading-tight">
                          <Link to="/newsletter/$slug" params={{ slug: e.slug }} className="hover:text-[var(--newsletter-ube)]">
                            {e.titulo}
                          </Link>
                        </h3>
                        <p className="newsletter-muted mt-4 text-sm leading-relaxed">{e.entradilla}</p>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
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

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { Masthead } from "@/components/ddp/Masthead";
import { formatDateEs } from "@/lib/utils";
import { obtenerEdicion } from "@/lib/newsletter.functions";
import {
  NEWSLETTER_EMAIL,
  SITE,
  SUBSCRIBE_URL,
  absolutizar,
  fuentesDeEdicion,
  type Edicion,
  type Fuente,
} from "@/lib/newsletter";

export const Route = createFileRoute("/newsletter/$slug")({
  loader: async ({ params }) => {
    const edicion = await obtenerEdicion({ data: { slug: params.slug } });
    if (!edicion) throw notFound();
    return { edicion };
  },
  head: ({ loaderData }) => {
    const e = loaderData?.edicion as Edicion | undefined;
    if (!e) {
      return {
        meta: [{ title: "Edición no encontrada — Primera Mano" }, { name: "robots", content: "noindex" }],
      };
    }
    const url = `${SITE}/newsletter/${e.slug}`;
    const title = `${e.titulo} | Primera Mano`;
    const img = absolutizar(e.imagen_social);
    const citas = fuentesDeEdicion(e.contenido ?? {});

    return {
      meta: [
        { title },
        { name: "description", content: e.entradilla },
        { property: "og:title", content: title },
        { property: "og:description", content: e.entradilla },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(img ? [{ property: "og:image", content: img }, { name: "twitter:image", content: img }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Newsletter", item: `${SITE}/newsletter` },
              { "@type": "ListItem", position: 3, name: `Nº ${e.numero}`, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: e.titulo,
            description: e.entradilla,
            url,
            datePublished: e.fecha,
            inLanguage: "es-ES",
            isAccessibleForFree: true,
            ...(img ? { image: img } : {}),
            author: {
              "@type": "Person",
              "@id": "https://alejandrosanchezmartinez.com/#persona",
              name: "Alejandro Sánchez Martínez",
              url: "https://alejandrosanchezmartinez.com/",
            },
            publisher: {
              "@type": "Organization",
              name: "El Diario del Poder",
              url: `${SITE}/`,
            },
            isPartOf: { "@type": "Periodical", name: "Primera Mano" },
            ...(citas.length ? { citation: citas } : {}),
          }),
        },
      ],
    };
  },
  notFoundComponent: EdicionNotFound,
  component: EdicionPage,
});

function EdicionNotFound() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="container-ddp pt-40 pb-24">
        <h1 className="tracking-tight text-2xl font-medium">No encontramos esa edición</h1>
        <Link to="/newsletter" className="btn-outline mt-8 inline-flex">
          Ver todas las ediciones
        </Link>
      </main>
      <FooterGrid />
    </div>
  );
}

function FuenteLink({ fuente }: { fuente?: Fuente }) {
  if (!fuente?.id && !fuente?.url) return null;
  const label = [fuente.id, fuente.detalle].filter(Boolean).join(" · ");
  if (!fuente.url) {
    return <p className="mt-3 font-mono text-2xs uppercase tracking-label text-muted-foreground">{label}</p>;
  }
  return (
    <a
      href={fuente.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-rule tap mt-3 inline-flex font-mono text-2xs uppercase tracking-label text-muted-foreground transition-colors hover:text-signal"
    >
      {label || fuente.url}
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="mono-label text-signal">{children}</p>;
}

function EdicionPage() {
  const { edicion } = Route.useLoaderData() as { edicion: Edicion };
  const c = edicion.contenido ?? {};

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-28 md:pt-32">
        <article className="container-ddp">
          <nav aria-label="Migas de pan" className="text-2xs tracking-label uppercase text-muted-foreground">
            <Link to="/newsletter" className="hover:text-foreground">
              Newsletter
            </Link>
            <span className="mx-2">/</span>
            <span>Nº {edicion.numero}</span>
          </nav>

          <header className="mt-6 max-w-[68ch]">
            <Masthead edition={`Nº ${edicion.numero}`} date={formatDateEs(edicion.fecha)} />
            {c.lectura_min ? (
              <p className="mt-3 font-mono text-2xs uppercase tracking-label tabular-nums text-muted-foreground">
                Lectura: {c.lectura_min} minutos
              </p>
            ) : null}
            <h1 className="mt-4 text-2xl sm:text-display leading-[0.98] font-medium tracking-tight">
              {edicion.titulo}
            </h1>
          </header>

          <div className="max-w-[68ch]">
            {c.saludo && (
              <p className="mt-10 text-base md:text-lg leading-relaxed text-muted-foreground">{c.saludo}</p>
            )}

            {c.subrayado && (
              <section className="mt-16" aria-label="El subrayado">
                <SectionLabel>El subrayado</SectionLabel>

                {c.subrayado.imagen && (
                  <figure className="mt-6">
                    <img
                      src={c.subrayado.imagen}
                      alt={c.subrayado.imagen_alt ?? ""}
                      loading="lazy"
                      className="w-full rounded-sm border border-border"
                    />
                    {c.subrayado.pie_imagen && (
                      <figcaption className="mt-3 font-mono text-2xs leading-relaxed text-muted-foreground">
                        {c.subrayado.pie_imagen}
                      </figcaption>
                    )}
                  </figure>
                )}

                {c.subrayado.texto && (
                  <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground">
                    {c.subrayado.texto}
                  </p>
                )}

                {c.subrayado.vinetas && c.subrayado.vinetas.length > 0 && (
                  <ul className="mt-8 space-y-5">
                    {c.subrayado.vinetas.map((v, i) => (
                      <li key={i} className="border-t border-border pt-5 text-base leading-relaxed text-muted-foreground">
                        {v.etiqueta && <span className="font-medium text-foreground">{v.etiqueta}. </span>}
                        {v.texto}
                      </li>
                    ))}
                  </ul>
                )}

                {c.subrayado.importa && (
                  <div className="mt-10 border-l-2 border-signal pl-5">
                    <p className="mono-label">Por qué importa</p>
                    <p className="mt-3 text-base leading-relaxed">{c.subrayado.importa}</p>
                  </div>
                )}

                <FuenteLink fuente={c.subrayado.fuente} />
              </section>
            )}

            {c.firmado && c.firmado.length > 0 && (
              <section className="mt-20" aria-label="Firmado ayer">
                <SectionLabel>Firmado ayer</SectionLabel>
                <div className="mt-6 space-y-10">
                  {c.firmado.map((f, i) => (
                    <div key={i}>
                      {f.titulo && <h3 className="text-lg md:text-xl font-medium leading-tight tracking-tight">{f.titulo}</h3>}
                      {f.texto && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.texto}</p>}
                      <FuenteLink fuente={f.fuente} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {c.quien && (c.quien.texto || (c.quien.items && c.quien.items.length > 0)) && (
              <section className="mt-20" aria-label="Quién sube, quién baja">
                <SectionLabel>Quién sube, quién baja</SectionLabel>
                {c.quien.texto && (
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">{c.quien.texto}</p>
                )}
                {c.quien.items && c.quien.items.length > 0 && (
                  <ul className="mt-6 space-y-4">
                    {c.quien.items.map((it, i) => (
                      <li key={i} className="border-t border-border pt-4 text-base leading-relaxed text-muted-foreground">
                        {it.etiqueta && <span className="font-medium text-foreground">{it.etiqueta}. </span>}
                        {it.texto}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {c.dato && (
              <section className="mt-20" aria-label="El dato">
                <SectionLabel>El dato</SectionLabel>
                {c.dato.cifra && (
                  <p className="mt-4 text-display leading-[0.95] font-medium tracking-tight">{c.dato.cifra}</p>
                )}
                {c.dato.texto && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.dato.texto}</p>}
                <FuenteLink fuente={c.dato.fuente} />
              </section>
            )}

            {c.voz?.cita && (
              <section className="mt-20" aria-label="La voz del poder">
                <SectionLabel>La voz del poder</SectionLabel>
                <blockquote className="mt-6 font-serif text-2xl md:text-3xl leading-[1.15] tracking-tight">
                  «{c.voz.cita}»
                </blockquote>
                <p className="mt-5 font-mono text-2xs uppercase tracking-label text-muted-foreground">
                  {[c.voz.autor, c.voz.cargo].filter(Boolean).join(", ")}, en su conversación con El Diario del Poder
                </p>
                {c.voz.enlace && c.voz.enlace_texto && (
                  <a
                    className="btn-outline mt-6 inline-flex"
                    href={c.voz.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.voz.enlace_texto}
                  </a>
                )}
              </section>
            )}

            {c.viene && c.viene.length > 0 && (
              <section className="mt-20" aria-label="Lo que viene">
                <SectionLabel>Lo que viene</SectionLabel>
                <ul className="mt-6 space-y-4">
                  {c.viene.map((v, i) => (
                    <li key={i} className="border-t border-border pt-4 text-base leading-relaxed text-muted-foreground">
                      {v.cuando && <span className="font-medium text-foreground">{v.cuando}. </span>}
                      {v.texto}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="mt-20 border-t border-border pt-10" aria-label="Suscríbete">
              <a className="btn-primary inline-flex" href={SUBSCRIBE_URL} target="_blank" rel="noopener noreferrer">
                Suscríbete gratis
              </a>
              {c.metodo && <p className="mt-8 text-base leading-relaxed text-muted-foreground">{c.metodo}</p>}
              {c.aviso_ia && (
                <p className="mt-5 font-mono text-2xs leading-relaxed text-muted-foreground">
                  {c.aviso_ia.split("Escríbenos").map((parte, i, arr) => (
                    <span key={i}>
                      {parte}
                      {i < arr.length - 1 && (
                        <a
                          href={`mailto:${NEWSLETTER_EMAIL}`}
                          className="underline transition-colors hover:text-signal"
                        >
                          Escríbenos
                        </a>
                      )}
                    </span>
                  ))}
                </p>
              )}
            </section>

            <div className="mt-16 md:mt-20 border-t border-border py-12">
              <Link to="/newsletter" className="link-rule tap inline-flex font-mono text-2xs uppercase tracking-label">
                Todas las ediciones
              </Link>
            </div>
          </div>
        </article>
      </main>
      <FooterGrid />
    </div>
  );
}

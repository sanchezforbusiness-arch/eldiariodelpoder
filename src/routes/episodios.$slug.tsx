import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { Masthead } from "@/components/ddp/Masthead";
import { formatDateEs } from "@/lib/utils";
import { getEpisodeBySlug, getGuestBySlug, formatTimecode, type EpisodeEntry } from "@/data/podcast";
import { guestArticleBySlug, pressItems, ALEJANDRO_ID, VICTOR_ID } from "@/data/press";

import { SITE, isoDuration, episodeId, guestId, episodeClips, episodeHeading, timestampUrl } from "@/data/episodeSchema";
const SPOTIFY = "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ";

export const Route = createFileRoute("/episodios/$slug")({
  loader: ({ params }) => {
    const episode = getEpisodeBySlug(params.slug);
    if (!episode) throw notFound();
    return { episode };
  },
  head: ({ loaderData }) => {
    const ep = loaderData?.episode;
    if (!ep) {
      return { meta: [{ title: "Episodio no encontrado — Diario del Poder" }, { name: "robots", content: "noindex" }] };
    }
    const url = `${SITE}/episodios/${ep.slug}`;
    const title = ep.seoTitle ?? `${ep.guest} — ${ep.title} | Diario del Poder`;
    const description = ep.seoDescription ?? ep.description;
    const guest = ep.guestSlug ? getGuestBySlug(ep.guestSlug) : undefined;
    const img = ep.youtubeId ? `https://i.ytimg.com/vi/${ep.youtubeId}/maxresdefault.jpg` : undefined;
    const article = ep.guestSlug ? guestArticleBySlug[ep.guestSlug] : undefined;
    const pressItem = article ? pressItems.find((p) => p.schemaId === article.schemaId) : undefined;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
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
              { "@type": "ListItem", position: 2, name: "Episodios", item: `${SITE}/episodios` },
              { "@type": "ListItem", position: 3, name: `${ep.guest} — ${ep.title}`, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PodcastEpisode",
            "@id": episodeId(ep),
            name: `${ep.guest} — ${ep.title}`,
            description,
            url,
            inLanguage: "es-ES",
            episodeNumber: ep.episodeNumber,
            ...(ep.date ? { datePublished: ep.date } : {}),
            ...(isoDuration(ep.duration) ? { timeRequired: isoDuration(ep.duration) } : {}),
            partOfSeries: { "@type": "PodcastSeries", "@id": `${SITE}/#podcastseries`, name: "Diario del Poder", url: `${SITE}/` },
            author: { "@id": ALEJANDRO_ID },
            creator: [{ "@id": ALEJANDRO_ID }, { "@id": VICTOR_ID }],
            ...(article
              ? {
                  subjectOf: {
                    "@type": "NewsArticle",
                    "@id": article.schemaId,
                    url: article.url,
                    ...(pressItem?.headline ? { headline: pressItem.headline } : {}),
                    ...(pressItem?.date ? { datePublished: pressItem.date } : {}),
                    inLanguage: "es",
                    publisher: { "@type": "NewsMediaOrganization", name: "La Vanguardia" },
                  },
                }
              : {}),
            ...(ep.guestSlug ? { about: [{ "@id": guestId(ep.guestSlug) }, ...(guest?.organization ? [{ "@id": guest.organization.id }] : [])] } : {}),
            actor: {
              ...(ep.guestSlug ? { "@id": guestId(ep.guestSlug) } : {}),
              "@type": "Person",
              name: ep.guest,
              ...(ep.role ? { jobTitle: ep.role } : {}),
              ...(ep.guestSlug ? { url: `${SITE}/invitados/${ep.guestSlug}` } : {}),
            },
            ...(ep.youtubeId
              ? {
                  associatedMedia: {
                    "@type": "VideoObject",
                    name: `${ep.guest} — ${ep.title}`,
                    description,
                    embedUrl: `https://www.youtube.com/embed/${ep.youtubeId}`,
                    contentUrl: `https://www.youtube.com/watch?v=${ep.youtubeId}`,
                    thumbnailUrl: `https://i.ytimg.com/vi/${ep.youtubeId}/maxresdefault.jpg`,
                    ...(isoDuration(ep.duration) ? { duration: isoDuration(ep.duration) } : {}),
                    ...(ep.date ? { uploadDate: ep.date } : {}),
                    ...(ep.chapters?.length ? { hasPart: episodeClips(ep) } : {}),
                  },
                }
              : {}),
          }),
        },
        ...(ep.faq?.length ? [{
          type: "application/ld+json",
          children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage",
            mainEntity: ep.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }),
        }] : []),
      ],
    };
  },
  notFoundComponent: EpisodeNotFound,
  component: EpisodePage,
});

function EpisodeNotFound() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="container-ddp pt-40 pb-24">
        <h1 className="tracking-tight text-2xl font-medium">No encontramos ese episodio</h1>
        <Link to="/episodios" className="btn-outline mt-8 inline-flex">Ver todos los episodios</Link>
      </main>
      <FooterGrid />
    </div>
  );
}

function EpisodePage() {
  const { episode: ep } = Route.useLoaderData() as { episode: EpisodeEntry };
  const guest = ep.guestSlug ? getGuestBySlug(ep.guestSlug) : undefined;

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-28 md:pt-32">
        <article className="container-ddp">
          <nav aria-label="Migas de pan" className="text-2xs tracking-label uppercase text-muted-foreground">
            <Link to="/episodios" className="hover:text-foreground">Episodios</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-muted-foreground">Episodio {ep.n}</span>
          </nav>

          <header className="mt-6 max-w-3xl">
            <Masthead edition={`Nº ${ep.n}`} date={ep.date ? formatDateEs(ep.date) : undefined} />
            {ep.duration && (
              <p className="mt-3 font-mono text-2xs uppercase tracking-label tabular-nums text-muted-foreground">
                {ep.duration}
              </p>
            )}
            <h1 className="mt-4 text-2xl sm:text-display md:text-display leading-[0.98] font-medium tracking-tight">
              {episodeHeading(ep)}
            </h1>
            <p className="mt-5 text-2xs tracking-label uppercase text-muted-foreground">
              {guest ? (
                <Link to="/invitados/$slug" params={{ slug: guest.slug }} className="hover:text-foreground">
                  {ep.guest}
                </Link>
              ) : (
                ep.guest
              )}
              {ep.role ? ` · ${ep.role}` : ""}
            </p>
          </header>

          <p className="mt-5 text-2xs leading-relaxed text-muted-foreground">
            Presentado por{" "}
            <a
              href="https://alejandrosanchezmartinez.com/"
              className="underline decoration-border underline-offset-2 hover:text-foreground hover:decoration-foreground"
            >
              Alejandro Sánchez Martínez
            </a>{" "}
            y{" "}
            <Link
              to="/victor-hugo-gandarilla-de-andres"
              className="underline decoration-border underline-offset-2 hover:text-foreground hover:decoration-foreground"
            >
              Víctor Hugo Gandarilla de Andrés
            </Link>
          </p>

          {ep.youtubeId && (
            <section className="mt-12 md:mt-16" aria-label="Episodio en vídeo">
              <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-border bg-card/30">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${ep.youtubeId}`}
                  title={`${ep.guest} — ${ep.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                />
              </div>
            </section>
          )}

          <section className="mt-12 md:mt-16 max-w-[68ch]">
            <h2 className="tracking-tight text-2xl md:text-2xl font-medium">
              De qué va la conversación
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{ep.description}</p>

            {ep.transcript && ep.transcript.length > 0 && (
              <div className="mt-10">
                <h2 className="tracking-tight text-2xl md:text-2xl font-medium">Transcripción</h2>
                <div className="mt-6 space-y-5 text-base text-muted-foreground leading-relaxed">
                  {ep.transcript.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              {ep.youtubeId && (
                <a className="btn-primary" href={`https://www.youtube.com/watch?v=${ep.youtubeId}`} target="_blank" rel="noopener noreferrer">
                  Ver en YouTube
                </a>
              )}
              <a className="btn-outline" href={SPOTIFY} target="_blank" rel="noopener noreferrer">
                Escuchar en Spotify
              </a>
              {guest && (
                <Link to="/invitados/$slug" params={{ slug: guest.slug }} className="btn-outline">
                  Ficha de {guest.name}
                </Link>
              )}
              {ep.chapters?.length && ep.url.includes("lavanguardia.com") && (
                <a className="btn-outline" href={ep.url} target="_blank" rel="noopener noreferrer">Leer la entrevista en La Vanguardia</a>
              )}
            </div>
          </section>

          {ep.chapters?.length && ep.youtubeId ? (
            <section className="mt-12 md:mt-16 max-w-[68ch]">
              <h2 className="tracking-tight text-2xl font-medium">Momentos clave</h2>
              <ol className="mt-6 divide-y divide-border border-y border-border">
                {ep.chapters.map((chapter) => (
                  <li key={chapter.start} className="py-3">
                    <a href={timestampUrl(ep.youtubeId ?? "", chapter.start)} className="group flex items-baseline gap-4 tap" target="_blank" rel="noopener noreferrer">
                      <span className="font-mono text-xs tabular-nums text-signal">{formatTimecode(chapter.start).padStart(5, "0")}</span>
                      <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors">{chapter.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {ep.quotes?.length ? (
            <section className="mt-12 md:mt-16 max-w-[68ch]">
              <h2 className="tracking-tight text-2xl font-medium">Citas</h2>
              <div className="mt-6 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                {ep.quotes.map((quote) => (
                  <figure key={quote.start}>
                    <blockquote>«{quote.text}»</blockquote>
                    <figcaption className="mt-3 text-xs">{ep.guest}{ep.youtubeId && <> · <a className="font-mono text-signal tabular-nums" href={timestampUrl(ep.youtubeId, quote.start)} target="_blank" rel="noopener noreferrer">{formatTimecode(quote.start).padStart(5, "0")}</a></>}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          {ep.faq?.length ? (
            <section className="mt-12 md:mt-16 max-w-[68ch]">
              <h2 className="tracking-tight text-2xl font-medium">Preguntas sobre el episodio</h2>
              <div className="mt-6">
                {ep.faq.map((item) => (
                  <details key={item.question} className="border-b border-border py-5">
                    <summary className="cursor-pointer text-base font-medium leading-relaxed">{item.question}</summary>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">{item.answer}</p>
                    {ep.youtubeId && item.start !== undefined && <a className="mt-3 inline-flex font-mono text-xs tabular-nums text-signal" href={timestampUrl(ep.youtubeId, item.start)} target="_blank" rel="noopener noreferrer">{formatTimecode(item.start).padStart(5, "0")}</a>}
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-16 md:mt-24 py-12 border-t border-border">
            <Link to="/episodios" className="link-rule tap inline-flex font-mono text-2xs uppercase tracking-label">Todos los episodios</Link>
          </div>
        </article>
      </main>
      <FooterGrid />
    </div>
  );
}

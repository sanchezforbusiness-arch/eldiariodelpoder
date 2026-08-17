import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";
import { getEpisodeBySlug, getGuestBySlug, type EpisodeEntry } from "@/data/podcast";

const SITE = "https://eldiariodelpoder.com";
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
    const title = `${ep.guest} — ${ep.title} | Diario del Poder`;
    const description = ep.description;
    const img = ep.youtubeId ? `https://i.ytimg.com/vi/${ep.youtubeId}/maxresdefault.jpg` : undefined;

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
            name: `${ep.guest} — ${ep.title}`,
            description,
            url,
            inLanguage: "es-ES",
            episodeNumber: Number(ep.n),
            ...(ep.date ? { datePublished: ep.date } : {}),
            partOfSeries: { "@type": "PodcastSeries", name: "Diario del Poder", url: `${SITE}/` },
            actor: { "@type": "Person", name: ep.guest, ...(ep.role ? { jobTitle: ep.role } : {}) },
            ...(ep.youtubeId
              ? {
                  associatedMedia: {
                    "@type": "VideoObject",
                    name: `${ep.guest} — ${ep.title}`,
                    description,
                    embedUrl: `https://www.youtube.com/embed/${ep.youtubeId}`,
                    contentUrl: `https://www.youtube.com/watch?v=${ep.youtubeId}`,
                    thumbnailUrl: `https://i.ytimg.com/vi/${ep.youtubeId}/maxresdefault.jpg`,
                    uploadDate: ep.date ?? "2026-01-01",
                  },
                }
              : {}),
          }),
        },
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
        <h1 className="font-serif text-2xl font-light">No encontramos ese episodio</h1>
        <Link to="/episodios" className="btn-outline mt-8 inline-flex">Ver todos los episodios</Link>
      </main>
      <Footer />
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
            <span className="mx-2 text-gold/60">/</span>
            <span className="text-gold/80">Episodio {ep.n}</span>
          </nav>

          <header className="mt-6 max-w-3xl">
            <p className="text-2xs tracking-label uppercase text-gold/90">
              Episodio {ep.n}
              {ep.date ? ` · ${ep.date}` : ""}
              {ep.duration ? ` · ${ep.duration}` : ""}
            </p>
            <h1 className="mt-4 font-serif text-2xl sm:text-display md:text-display leading-[0.98] font-light tracking-tight">
              {ep.title}
            </h1>
            <p className="mt-5 text-2xs tracking-label uppercase text-gold/80">
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

          <section className="mt-12 md:mt-16 max-w-3xl">
            <h2 className="font-serif text-2xl md:text-2xl font-light">
              De qué va la <span className="italic text-gold">conversación</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{ep.description}</p>

            {ep.transcript && ep.transcript.length > 0 && (
              <div className="mt-10">
                <h2 className="font-serif text-2xl md:text-2xl font-light">Transcripción</h2>
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
            </div>
          </section>

          <div className="mt-16 md:mt-24 py-12 border-t border-border">
            <Link to="/episodios" className="btn-outline inline-flex">Todos los episodios</Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

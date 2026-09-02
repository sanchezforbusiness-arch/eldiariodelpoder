import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { Masthead } from "@/components/ddp/Masthead";
import {
  getGuestBySlug,
  guestList,
  episodeList,
  formatTimecode,
  type GuestEntry,
} from "@/data/podcast";
import { formatDateEs } from "@/lib/utils";
import { guestCardImageBySlug } from "@/data/guestImages";

const SITE = "https://eldiariodelpoder.com";
const SPOTIFY = "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ";

/** Preguntas frecuentes construidas solo con datos reales del invitado y su episodio. */
function buildFaq(guest: GuestEntry) {
  const ep = episodeList.find((e) => e.guestSlug === guest.slug);
  const items: { q: string; a: string }[] = [
    {
      q: `¿Quién es ${guest.name}?`,
      a: `${guest.name} es ${guest.role.toLowerCase()}. ${guest.bio}`,
    },
    {
      q: `¿De qué habla ${guest.name} en Diario del Poder?`,
      a: guest.summary.join(" "),
    },
    {
      q: `¿Dónde ver o escuchar la entrevista completa a ${guest.name}?`,
      a: guest.youtubeId
        ? `La conversación completa está publicada en el canal de YouTube de Diario del Poder y en Spotify, sin recortes. También puede verse en esta página: ${SITE}/invitados/${guest.slug}`
        : `La conversación con ${guest.name} está disponible en Diario del Poder, en YouTube y en Spotify: ${SITE}/invitados/${guest.slug}`,
    },
  ];
  if (ep?.date) {
    items.push({
      q: `¿Cuándo se publicó la entrevista a ${guest.name}?`,
      a: `El episodio «${ep.title}» se publicó el ${formatDateEs(ep.date)}${ep.duration ? ` y dura ${ep.duration}` : ""}.`,
    });
  }
  items.push({
    q: `¿Qué temas se tratan con ${guest.name}?`,
    a: `${guest.topics.join(", ")}.`,
  });
  return [...items, ...(guest.qa ?? [])];
}

export const Route = createFileRoute("/invitados/$slug")({
  loader: ({ params }) => {
    const guest = getGuestBySlug(params.slug);
    if (!guest) throw notFound();
    return { guest };
  },
  head: ({ loaderData }) => {
    const guest = loaderData?.guest;
    if (!guest) {
      return { meta: [{ title: "Invitado no encontrado — Diario del Poder" }, { name: "robots", content: "noindex" }] };
    }
    const url = `${SITE}/invitados/${guest.slug}`;
    const title = `${guest.name} en Diario del Poder | Entrevista completa`;
    const description = `${guest.name}, ${guest.role}. Entrevista completa, resumen, ideas clave y preguntas frecuentes en el podcast Diario del Poder: ${guest.topics.slice(0, 4).join(", ")}.`;
    const img = guestCardImageBySlug[guest.slug];
    const absImg = img ? (img.startsWith("http") ? img : `${SITE}${img}`) : undefined;
    const ep = episodeList.find((e) => e.guestSlug === guest.slug);
    const epUrl = ep ? `${SITE}/episodios/${ep.slug}` : undefined;
    const faq = buildFaq(guest);

    const clips = (guest.chapters ?? []).map((c, i) => ({
      "@type": "Clip",
      name: c.title,
      startOffset: c.seconds,
      ...(guest.chapters?.[i + 1] ? { endOffset: guest.chapters[i + 1]!.seconds } : {}),
      url: `https://www.youtube.com/watch?v=${guest.youtubeId}&t=${c.seconds}s`,
    }));

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: [guest.name, `${guest.name} entrevista`, `${guest.name} podcast`, `${guest.name} Diario del Poder`, ...guest.topics].join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: url },
        ...(absImg ? [{ property: "og:image", content: absImg }, { name: "twitter:image", content: absImg }] : []),
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
              { "@type": "ListItem", position: 2, name: "Invitados", item: `${SITE}/invitados` },
              { "@type": "ListItem", position: 3, name: guest.name, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            url,
            name: title,
            description,
            inLanguage: "es-ES",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "#resumen"] },
            mainEntity: {
              "@type": "Person",
              name: guest.name,
              jobTitle: guest.role,
              description: guest.bio,
              ...(absImg ? { image: absImg } : {}),
              knowsAbout: guest.topics,
              subjectOf: {
                "@type": "PodcastEpisode",
                name: ep ? `${guest.name} — ${ep.title}` : `${guest.name} — Diario del Poder`,
                url: epUrl ?? url,
                description: ep?.description ?? guest.summary[0],
                inLanguage: "es-ES",
                ...(ep?.date ? { datePublished: ep.date } : {}),
                ...(ep?.episodeNumber ? { episodeNumber: ep.episodeNumber } : {}),
                partOfSeries: { "@type": "PodcastSeries", name: "Diario del Poder", url: `${SITE}/` },
                ...(guest.youtubeId
                  ? {
                      associatedMedia: {
                        "@type": "VideoObject",
                        name: `${guest.name} en Diario del Poder`,
                        description: guest.summary[0],
                        embedUrl: `https://www.youtube.com/embed/${guest.youtubeId}`,
                        contentUrl: `https://www.youtube.com/watch?v=${guest.youtubeId}`,
                        thumbnailUrl: `https://i.ytimg.com/vi/${guest.youtubeId}/maxresdefault.jpg`,
                        ...(ep?.date ? { uploadDate: ep.date } : {}),
                        ...(clips.length ? { hasPart: clips } : {}),
                        ...(guest.transcript?.length ? { transcript: guest.transcript.join("\n\n") } : {}),
                      },
                    }
                  : {}),
              },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: GuestNotFound,
  component: GuestPage,
});

function GuestNotFound() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="container-ddp pt-40 pb-24">
        <h1 className="tracking-tight text-2xl font-medium">No encontramos a ese invitado</h1>
        <Link to="/invitados" className="btn-outline mt-8 inline-flex">Ver todos los invitados</Link>
      </main>
      <FooterGrid />
    </div>
  );
}

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 tracking-tight text-2xl font-medium">
      {children}
    </h2>
  );
}

function GuestPage() {
  const { guest } = Route.useLoaderData() as { guest: GuestEntry };
  const img = guestCardImageBySlug[guest.slug];
  const episode = episodeList.find((e) => e.guestSlug === guest.slug);
  const faq = buildFaq(guest);

  const related = (guest.relatedSlugs?.length
    ? guest.relatedSlugs.map((s) => guestList.find((g) => g.slug === s)).filter(Boolean as unknown as (g?: GuestEntry) => g is GuestEntry)
    : guestList.filter((g) => g.slug !== guest.slug && g.topics.some((t) => guest.topics.includes(t)))
  ).slice(0, 6);
  const others = (related.length ? related : guestList.filter((g) => g.slug !== guest.slug)).slice(0, 6);

  const toc = [
    guest.youtubeId ? { id: "entrevista", label: "Entrevista en vídeo" } : null,
    { id: "resumen", label: "Resumen" },
    guest.keyIdeas?.length ? { id: "ideas", label: "Ideas clave" } : null,
    guest.chapters?.length ? { id: "capitulos", label: "Capítulos" } : null,
    { id: "temas", label: "Temas" },
    guest.transcript?.length ? { id: "transcripcion", label: "Transcripción" } : null,
    { id: "faq", label: "Preguntas frecuentes" },
    { id: "relacionados", label: "Relacionados" },
  ].filter(Boolean) as { id: string; label: string }[];

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-28 md:pt-32">
        <article className="container-ddp">
          <Masthead
            edition={episode ? `Nº ${episode.n}` : undefined}
            date={episode?.date ? formatDateEs(episode.date) : undefined}
          />

          <nav aria-label="Migas de pan" className="mt-6 text-2xs tracking-label uppercase text-muted-foreground">
            <Link to="/invitados" className="tap hover:text-foreground">Invitados</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-muted-foreground">{guest.name}</span>
          </nav>

          <header className="mt-6 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <h1 className="text-2xl sm:text-display md:text-display leading-[0.98] font-medium tracking-tight">
                {guest.name}
              </h1>
              <p className="mt-4 font-serif text-base font-light text-muted-foreground">{guest.role}</p>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">{guest.bio}</p>
            </div>
            {img && (
              <img
                src={img}
                alt={`${guest.name}, ${guest.role}, en el podcast Diario del Poder`}
                width={512}
                height={640}
                className="w-full max-w-[320px] aspect-[4/5] object-cover rounded-sm contrast-110"
              />
            )}
          </header>

          {guest.youtubeId && (
            <section id="entrevista" className="mt-12 md:mt-16 scroll-mt-28" aria-label="Entrevista en vídeo">
              <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-border bg-card/30">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${guest.youtubeId}`}
                  title={`Entrevista completa a ${guest.name} en Diario del Poder`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                />
              </div>
            </section>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {guest.youtubeId && (
              <a
                className="btn-primary"
                href={`https://www.youtube.com/watch?v=${guest.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en YouTube
              </a>
            )}
            <a className="btn-outline" href={SPOTIFY} target="_blank" rel="noopener noreferrer">
              Escuchar en Spotify
            </a>
            {episode && (
              <Link to="/episodios/$slug" params={{ slug: episode.slug }} className="btn-outline">
                Ver el episodio
              </Link>
            )}
            {guest.externalUrl && (
              <a className="btn-outline" href={guest.externalUrl} target="_blank" rel="noopener noreferrer">
                Leer la entrevista
              </a>
            )}
          </div>

          <nav aria-label="En esta página" className="mt-10 border-y border-border py-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-2xs tracking-label uppercase text-muted-foreground">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="tap hover:text-foreground transition-colors">{t.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="mt-12 md:mt-16 grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-start">
            <div>
              <SectionTitle id="resumen">Resumen de la conversación</SectionTitle>
              <div className="mt-6 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                {guest.summary.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              {guest.keyIdeas?.length ? (
                <div className="mt-12">
                  <SectionTitle id="ideas">Ideas clave</SectionTitle>
                  <ul className="mt-6 space-y-4">
                    {guest.keyIdeas.map((k) => (
                      <li key={k.slice(0, 24)} className="flex gap-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {guest.chapters?.length ? (
                <div className="mt-12">
                  <SectionTitle id="capitulos">Capítulos</SectionTitle>
                  <ol className="mt-6 divide-y divide-border border-y border-border">
                    {guest.chapters.map((c) => (
                      <li key={c.seconds} className="py-3">
                        <a
                          className="group flex items-baseline gap-4 tap"
                          href={`https://www.youtube.com/watch?v=${guest.youtubeId}&t=${c.seconds}s`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="font-mono text-xs tabular-nums text-signal">{formatTimecode(c.seconds)}</span>
                          <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors">{c.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </div>

            <aside className="panel rounded-sm p-6 h-fit md:sticky md:top-28">
              <h2 id="temas" className="scroll-mt-28 text-2xs tracking-label uppercase text-muted-foreground">Temas</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {guest.topics.map((t) => (
                  <li key={t} className="rounded-sm border border-border px-3 py-1.5 font-serif text-xs font-light text-muted-foreground">{t}</li>
                ))}
              </ul>
              {episode && (
                <dl className="mt-6 space-y-2 text-xs text-muted-foreground">
                  {episode.date && (
                    <div className="flex justify-between gap-4">
                      <dt>Publicado</dt>
                      <dd className="tabular-nums text-foreground">{formatDateEs(episode.date)}</dd>
                    </div>
                  )}
                  {episode.duration && (
                    <div className="flex justify-between gap-4">
                      <dt>Duración</dt>
                      <dd className="tabular-nums text-foreground">{episode.duration}</dd>
                    </div>
                  )}
                  <div className="flex justify-between gap-4">
                    <dt>Idioma</dt>
                    <dd className="text-foreground">Español</dd>
                  </div>
                </dl>
              )}
            </aside>
          </section>

          {guest.transcript?.length ? (
            <section className="mt-16 md:mt-24 border-t border-border pt-12">
              <SectionTitle id="transcripcion">Transcripción de la entrevista</SectionTitle>
              <div className="mt-6 max-w-3xl space-y-5 text-base text-muted-foreground leading-relaxed">
                {guest.transcript.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-16 md:mt-24 border-t border-border pt-12">
            <SectionTitle id="faq">Preguntas frecuentes</SectionTitle>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faq.map((f) => (
                <details key={f.q} className="card-clean group rounded-[20px] p-6">
                  <summary className="cursor-pointer list-none text-base font-medium tracking-tight marker:hidden">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="relacionados" className="scroll-mt-28 mt-16 md:mt-24 py-12 md:py-24 border-t border-border">
            <h2 className="tracking-tight text-2xl font-medium">Otras conversaciones</h2>
            <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
              {others.map((g) => (
                <li key={g.slug}>
                  <Link to="/invitados/$slug" params={{ slug: g.slug }} className="group block">
                    <h3 className="tracking-tight text-xl leading-tight group-hover:text-signal transition-colors">{g.name}</h3>
                    <p className="mt-1.5 font-serif text-xs font-light text-muted-foreground">{g.role}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/invitados" className="btn-outline">Todos los invitados</Link>
              <Link to="/episodios" className="btn-outline">Todos los episodios</Link>
            </div>
          </section>
        </article>
      </main>
      <FooterGrid />
    </div>
  );
}

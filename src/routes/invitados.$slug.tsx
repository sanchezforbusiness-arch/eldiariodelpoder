import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";
import { getGuestBySlug, guestList, type GuestEntry } from "@/data/podcast";
import { guestImageBySlug } from "@/data/guestImages";

const SITE = "https://eldiariodelpoder.com";

export const Route = createFileRoute("/invitados/$slug")({
  loader: ({ params }) => {
    const guest = getGuestBySlug(params.slug);
    if (!guest) throw notFound();
    return { guest };
  },
  head: ({ params, loaderData }) => {
    const guest = loaderData?.guest;
    if (!guest) {
      return { meta: [{ title: "Invitado no encontrado — Diario del Poder" }, { name: "robots", content: "noindex" }] };
    }
    const url = `${SITE}/invitados/${guest.slug}`;
    const title = `${guest.name} en Diario del Poder | Entrevista completa`;
    const description = `${guest.name}, ${guest.role}. Resumen y entrevista completa en el podcast Diario del Poder: ${guest.topics.slice(0, 4).join(", ")}.`;
    const img = guestImageBySlug[guest.slug];
    const absImg = img ? (img.startsWith("http") ? img : `${SITE}${img}`) : undefined;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: [guest.name, `${guest.name} entrevista`, `${guest.name} podcast`, ...guest.topics].join(", ") },
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
            mainEntity: {
              "@type": "Person",
              name: guest.name,
              jobTitle: guest.role,
              description: guest.bio,
              ...(absImg ? { image: absImg } : {}),
              knowsAbout: guest.topics,
              subjectOf: {
                "@type": "PodcastEpisode",
                name: `${guest.name} — Diario del Poder`,
                url,
                description: guest.summary[0],
                inLanguage: "es-ES",
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
                        uploadDate: "2026-01-01",
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
            mainEntity: [
              {
                "@type": "Question",
                name: `¿Dónde ver la entrevista completa a ${guest.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: guest.youtubeId
                    ? `La conversación completa con ${guest.name} está publicada en el canal de YouTube de Diario del Poder y en esta página: ${url}`
                    : `La conversación con ${guest.name} está disponible en Diario del Poder: ${url}`,
                },
              },
              {
                "@type": "Question",
                name: `¿De qué habla ${guest.name} en Diario del Poder?`,
                acceptedAnswer: { "@type": "Answer", text: guest.summary.join(" ") },
              },
            ],
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
        <h1 className="font-serif text-4xl font-light">No encontramos a ese invitado</h1>
        <Link to="/invitados" className="btn-outline mt-8 inline-flex">Ver todos los invitados</Link>
      </main>
      <Footer />
    </div>
  );
}

function GuestPage() {
  const { guest } = Route.useLoaderData() as { guest: GuestEntry };
  const img = guestImageBySlug[guest.slug];
  const others = guestList.filter((g) => g.slug !== guest.slug).slice(0, 6);

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-28 md:pt-32">
        <article className="container-ddp">
          <nav aria-label="Migas de pan" className="text-2xs tracking-label uppercase text-muted-foreground">
            <Link to="/invitados" className="hover:text-foreground">Invitados</Link>
            <span className="mx-2 text-gold/60">/</span>
            <span className="text-gold/80">{guest.name}</span>
          </nav>

          <header className="mt-6 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl leading-[0.98] font-light tracking-tight">
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
                className="w-full max-w-[320px] aspect-[4/5] object-cover rounded-sm grayscale"
              />
            )}
          </header>

          {guest.youtubeId && (
            <section className="mt-12 md:mt-16" aria-label="Entrevista en vídeo">
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

          <section className="mt-12 md:mt-16 grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-light">
                Resumen de la <span className="italic text-gold">conversación</span>
              </h2>
              <div className="mt-6 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                {guest.summary.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
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
                {guest.externalUrl && (
                  <a className="btn-outline" href={guest.externalUrl} target="_blank" rel="noopener noreferrer">
                    Leer la entrevista
                  </a>
                )}
                <Link to="/carta" className="btn-outline">Recibir la carta</Link>
              </div>
            </div>

            <aside className="panel rounded-sm p-6 h-fit">
              <h2 className="text-2xs tracking-label uppercase text-gold/80">Temas</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {guest.topics.map((t) => (
                  <li key={t} className="rounded-sm border border-border px-3 py-1.5 font-serif text-xs font-light text-muted-foreground">{t}</li>
                ))}
              </ul>
            </aside>
          </section>

 <section className="mt-16 md:mt-24 py-16 md:py-24 border-t border-border">
            <h2 className="font-serif text-2xl md:text-3xl font-light">Más invitados</h2>
            <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
              {others.map((g) => (
                <li key={g.slug}>
                  <Link to="/invitados/$slug" params={{ slug: g.slug }} className="group block">
                    <h3 className="font-serif text-xl leading-tight group-hover:text-gold transition-colors">{g.name}</h3>
                    <p className="mt-1.5 font-serif text-xs font-light text-muted-foreground">{g.role}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

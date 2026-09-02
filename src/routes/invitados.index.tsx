import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { GuestsCarousel } from "@/components/ddp/GuestsCarousel";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { useReveal } from "@/hooks/use-reveal";
import { guestList } from "@/data/podcast";

export const Route = createFileRoute("/invitados/")({
  head: () => ({
    meta: [
      { title: "Invitados del podcast Diario del Poder | Presidentes y CEOs" },
      { name: "description", content: "Aznar, Lasso, Esperanza Aguirre, Javier Tebas, Marcos de Quinto, Sonsoles Ónega y más invitados del podcast Diario del Poder." },
      { property: "og:title", content: "Invitados del podcast Diario del Poder" },
      { property: "og:description", content: "Expresidentes, CEOs y referentes que se han sentado a hablar sin guion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://eldiariodelpoder.com/invitados" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/invitados" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://eldiariodelpoder.com/" },
            { "@type": "ListItem", position: 2, name: "Invitados", item: "https://eldiariodelpoder.com/invitados" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Invitados de Diario del Poder",
          itemListElement: guestList.map((g, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Person",
              name: g.name,
              jobTitle: g.role,
              description: g.bio,
              url: `https://eldiariodelpoder.com/invitados/${g.slug}`,
              subjectOf: {
                "@type": "PodcastSeries",
                name: "Diario del Poder",
                url: "https://eldiariodelpoder.com/",
              },
            },
          })),
        }),
      },
    ],
  }),
  component: InvitadosPage,
});

function InvitadosPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <header className="container-ddp pt-6 sm:pt-8 pb-4">
          <h1 className="text-2xl sm:text-display md:text-display lg:text-display leading-[0.95] font-medium tracking-tight">
            Nuestros invitados
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Expresidentes, CEOs, deportistas y periodistas que se han sentado en Diario del Poder
            a contar cómo se decide, cómo se lidera y qué queda después.
          </p>
        </header>
        <GuestsCarousel />
 <section className="container-ddp py-12 md:py-24 border-t border-border">
          <h2 className="tracking-tight text-2xl md:text-2xl font-medium mb-10">
            Quién ha pasado por el micrófono
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 reveal-stagger">
            {guestList.map((g) => {
              const img = guestCardImageBySlug[g.slug] ?? guestImageBySlug[g.slug];
              return (
                <li key={g.slug}>
                  <Link
                    to="/invitados/$slug"
                    params={{ slug: g.slug }}
                    className="card-clean group flex h-full flex-col"
                  >
                    {img && (
                      <div className="aspect-[4/3] overflow-hidden bg-background-alt">
                        <img
                          src={img}
                          alt={`${g.name}, invitado de Diario del Poder`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6 md:p-7">
                      <h3 className="text-xl leading-tight tracking-tight transition-colors group-hover:text-signal md:text-2xl">
                        {g.name}
                      </h3>
                      <p className="mt-1.5 text-2xs uppercase tracking-label text-muted-foreground">{g.role}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{g.bio}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-2xs uppercase tracking-label text-muted-foreground transition-colors group-hover:text-foreground">
                        Ver entrevista
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <FooterGrid />
    </div>
  );
}
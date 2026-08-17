import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { GuestsCarousel } from "@/components/ddp/GuestsCarousel";
import { Footer } from "@/components/ddp/Footer";
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
          <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-light tracking-tight">
            Nuestros <span className="italic text-gold">invitados</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Expresidentes, CEOs, deportistas y periodistas que se han sentado en Diario del Poder
            a contar cómo se decide, cómo se lidera y qué queda después.
          </p>
        </header>
        <GuestsCarousel />
 <section className="container-ddp py-16 md:py-24 border-t border-border">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-10">
            Quién ha pasado por el <span className="italic text-gold">micrófono</span>
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
            {guestList.map((g) => (
              <li key={g.slug}>
                <Link to="/invitados/$slug" params={{ slug: g.slug }} className="group block">
                  <h3 className="font-serif text-xl md:text-2xl leading-tight group-hover:text-gold transition-colors">{g.name}</h3>
                  <p className="mt-1.5 text-2xs tracking-label uppercase text-gold/80">{g.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{g.bio}</p>
                  <span className="mt-3 inline-block text-2xs tracking-label uppercase text-gold/70">Ver entrevista →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
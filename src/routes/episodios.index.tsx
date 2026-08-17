import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { Episodes } from "@/components/ddp/Episodes";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { useReveal } from "@/hooks/use-reveal";
import { episodeList } from "@/data/podcast";

export const Route = createFileRoute("/episodios/")({
  head: () => ({
    meta: [
      { title: "Episodios del podcast Diario del Poder | Aznar, Lasso, Forbes" },
      { name: "description", content: "Todos los episodios del podcast Diario del Poder: entrevistas largas con expresidentes, CEOs y referentes. Escúchalos en YouTube y Spotify." },
      { property: "og:title", content: "Episodios del podcast Diario del Poder" },
      { property: "og:description", content: "Entrevistas completas con José María Aznar, Guillermo Lasso, Andrés Rodríguez (Forbes), Jordi Juan y más." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://eldiariodelpoder.com/episodios" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/episodios" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://eldiariodelpoder.com/" },
            { "@type": "ListItem", position: 2, name: "Episodios", item: "https://eldiariodelpoder.com/episodios" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Episodios de Diario del Poder",
          itemListElement: episodeList.map((e, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "PodcastEpisode",
              name: `${e.guest} — ${e.title}`,
              description: e.description,
              url: `https://eldiariodelpoder.com/episodios/${e.slug}`,
              inLanguage: "es-ES",
              episodeNumber: Number(e.n),
              partOfSeries: {
                "@type": "PodcastSeries",
                name: "Diario del Poder",
                url: "https://eldiariodelpoder.com/",
              },
              actor: { "@type": "Person", name: e.guest },
            },
          })),
        }),
      },
    ],
  }),
  component: EpisodiosPage,
});

function EpisodiosPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <header className="container-ddp pt-6 sm:pt-8 pb-4">
          <h1 className="text-2xl sm:text-display md:text-display lg:text-display leading-[0.95] font-medium tracking-tight">
            Todas las conversaciones
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Diario del Poder es un podcast en español de entrevistas largas con expresidentes,
            CEOs y referentes. Cada episodio es una conversación sin guion sobre liderazgo,
            decisiones difíciles y legado. Disponible en YouTube y Spotify.
          </p>
        </header>
        <Episodes />
 <section className="container-ddp py-16 md:py-24 border-t border-border">
          <h2 className="tracking-tight text-2xl md:text-2xl font-medium mb-10">
            Todos los episodios
          </h2>
          <ul className="space-y-10 max-w-3xl">
            {episodeList.map((e) => (
              <li key={e.n}>
                <p className="text-2xs tracking-label uppercase text-muted-foreground mb-2">
                  Episodio {e.n} · {e.guest}
                </p>
                <h3 className="tracking-tight text-2xl md:text-2xl leading-tight">
                  <Link to="/episodios/$slug" params={{ slug: e.slug }} className="hover:text-signal transition-colors">
                    {e.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{e.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <FooterGrid />
    </div>
  );
}
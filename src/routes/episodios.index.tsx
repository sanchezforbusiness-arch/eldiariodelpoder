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
              episodeNumber: e.episodeNumber,
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
 <section className="container-ddp py-12 md:py-24 border-t border-border">
          <h2 className="tracking-tight text-2xl md:text-2xl font-medium mb-10">
            Archivo completo
          </h2>
          <div className="hairline" />
          <div className="mono-label hidden grid-cols-[64px_1.4fr_1fr_110px] gap-4 px-3 py-4 md:grid">
            <span>Nº</span>
            <span>Título</span>
            <span>Invitado</span>
            <span className="text-right">Duración</span>
          </div>
          <ul>
            {episodeList.map((e) => (
              <li key={e.n}>
                <Link
                  to="/episodios/$slug"
                  params={{ slug: e.slug }}
                  className="row-index tap grid-cols-1 md:grid-cols-[64px_1.4fr_1fr_110px]"
                >
                  <span className="flex items-baseline gap-3 md:block">
                    <span className="font-mono text-2xs tracking-label tabular-nums opacity-70">{e.n}</span>
                    <span className="text-lg font-medium tracking-tight md:hidden">{e.title}</span>
                  </span>
                  <span className="hidden text-lg font-medium tracking-tight md:block md:text-xl">{e.title}</span>
                  <span className="hidden font-mono text-2xs uppercase tracking-label opacity-80 md:block">{e.guest}</span>
                  <span className="mt-1 font-mono text-2xs uppercase tracking-label tabular-nums opacity-60 md:hidden">
                    {e.guest}{e.duration ? ` — ${e.duration}` : ""}
                  </span>
                  <span className="hidden font-mono text-2xs tracking-label tabular-nums opacity-70 md:block md:text-right">
                    {e.duration ?? ""}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <FooterGrid />
    </div>
  );
}
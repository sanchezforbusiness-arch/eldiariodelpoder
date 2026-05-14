import { createFileRoute } from "@tanstack/react-router";
import { Music2, Youtube, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";
import { useReveal } from "@/hooks/use-reveal";

const SITE = "https://eldiariodelpoder.com";

const TikTok = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.62a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84z" />
  </svg>
);

const platforms = [
  { name: "Spotify", desc: "Episodios completos en audio", icon: Music2, url: "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ", cta: "Ir a Spotify" },
  { name: "YouTube", desc: "Episodios completos en vídeo", icon: Youtube, url: "https://www.youtube.com/@eldiariodelpoder", cta: "Ver en YouTube" },
  { name: "Instagram", desc: "Cortes, BTS y novedades", icon: Instagram, url: "https://www.instagram.com/eldiariodelpoder/", cta: "Seguir en Instagram" },
  { name: "LinkedIn", desc: "Análisis y perspectiva profesional", icon: Linkedin, url: "https://www.linkedin.com/company/eldiariodelpoder", cta: "Seguir en LinkedIn" },
  { name: "TikTok", desc: "Momentos virales del podcast", icon: TikTok, url: "https://www.tiktok.com/@eldiariodelpoder", cta: "Ver en TikTok" },
  { name: "Newsletter", desc: "Lo mejor de cada episodio en tu email", icon: Mail, url: "https://eldiariodelpoder.beehiiv.com", cta: "Suscribirme" },
];

export const Route = createFileRoute("/escuchanos")({
  head: () => ({
    meta: [
      { title: "Escúchanos — Diario del Poder | Spotify, YouTube, Instagram" },
      { name: "description", content: "Escucha Diario del Poder en Spotify, YouTube, Apple Podcasts. Síguenos en Instagram, LinkedIn, TikTok. Suscríbete a la newsletter." },
      { property: "og:title", content: "Escúchanos — Diario del Poder" },
      { property: "og:description", content: "En todas partes donde escuches: Spotify, YouTube, Instagram, LinkedIn, TikTok, Newsletter." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/escuchanos` },
      { name: "twitter:title", content: "Escúchanos — Diario del Poder" },
      { name: "twitter:description", content: "Spotify, YouTube, Instagram, LinkedIn, TikTok, Newsletter." },
    ],
    links: [{ rel: "canonical", href: `${SITE}/escuchanos` }],
  }),
  component: EscuchanosPage,
});

function EscuchanosPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Grid />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 overflow-hidden grain">
      <div className="gold-glow w-[520px] h-[520px] -top-32 left-1/2 -translate-x-1/2 float-slow opacity-40" />
      <div className="container-ddp relative text-center max-w-3xl mx-auto fade-up">
        <div className="flex items-center justify-center gap-4 mb-7">
          <span className="h-px w-10 bg-gold/70" />
          <span className="eyebrow">Escúchanos</span>
          <span className="h-px w-10 bg-gold/70" />
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] font-bold tracking-[-0.035em]">
          En todas partes<br />donde <span className="italic shimmer-gold">escuches</span>.
        </h1>
        <p className="mt-7 text-base md:text-[1.05rem] text-foreground/75 leading-[1.7]">
          Audio, vídeo, redes y newsletter. Elige tu canal.
        </p>
      </div>
    </section>
  );
}

function Grid() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container-ddp">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border reveal reveal-stagger">
          {platforms.map((p) => (
            <li key={p.name} className="bg-background">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col h-full p-10 hover:bg-card/40 transition-colors"
              >
                <span className="text-gold mb-7 inline-flex">
                  <p.icon size={28} />
                </span>
                <h2 className="font-serif text-3xl md:text-4xl group-hover:text-gold transition-colors">{p.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-foreground/80 group-hover:text-gold transition-colors">
                  {p.cta}
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
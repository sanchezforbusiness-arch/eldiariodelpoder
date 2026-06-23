import heroMobileAsset from "@/assets/hero-mobile.jpg.asset.json";
import { Play, ArrowDown, ListMusic } from "lucide-react";
import { SplitText } from "./SplitText";

const YT_ID = "nTtgtxG7UNs";
const YT_START = 8;

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden grain">
      {/* Desktop: YouTube background video (muted, loop, no controls) */}
      <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          title="Diario del Poder — trailer"
          src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&start=${YT_START}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={false}
          frameBorder={0}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full opacity-60"
        />
      </div>
      {/* Mobile: static image (videos drain battery / data) */}
      <img
        src={heroMobileAsset.url}
        alt="Diario del Poder — conversación con un referente"
        width={1182}
        height={1576}
        fetchPriority="high"
        decoding="async"
        className="sm:hidden absolute inset-0 w-full h-full object-cover object-[50%_35%] opacity-70 ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-background/20" />

      <div className="gold-glow float-slow w-[520px] h-[520px] -top-32 -left-24 opacity-50" />
      <div className="gold-glow float-slower w-[600px] h-[600px] top-1/3 -right-40 opacity-30" />

      <div className="container-ddp relative z-10 pt-28 sm:pt-32 pb-32 md:pb-52 fade-up">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <span className="h-px w-14 bg-[var(--color-orange)]/70" />
            <span className="eyebrow flex items-center gap-2">
              <span className="dot-gold" /> Podcast · Madrid
            </span>
          </div>

          <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6.75rem] leading-[0.95] sm:leading-[0.92] tracking-[-0.03em] font-light">
            <SplitText text="La voz del legado." goldWords={["legado"]} italicWords={["legado"]} />
          </h1>

          <p className="mt-7 md:mt-9 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed">
            Conversaciones sin guion con expresidentes, CEOs y líderes que están dejando huella.
            Donde los mayores referentes del mundo entregan su legado a la juventud.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] tracking-[0.18em] uppercase">
            <span className="text-[var(--color-luxury)] font-semibold">15+ episodios</span>
            <span className="text-[var(--color-cyan)] font-semibold">50M+ minutos escuchados</span>
            <span className="text-[var(--color-success)] font-semibold">4 plataformas</span>
          </div>

          <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-3 sm:gap-5">
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="ring-pulse group inline-flex items-center gap-3 bg-[var(--color-orange)] text-white px-7 sm:px-9 py-3.5 sm:py-4 text-[11px] tracking-[0.24em] sm:tracking-[0.28em] uppercase font-semibold hover:bg-[var(--color-orange)]/90 hover:scale-[1.03] transition-all shadow-[0_8px_30px_-8px_rgba(255,107,53,0.55)]"
            >
              <Play size={14} className="fill-current" />
              Escuchar en Spotify
            </a>
            <a
              href="#episodes"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 text-[11px] tracking-[0.24em] sm:tracking-[0.28em] uppercase text-foreground border border-[var(--color-orange)]/60 hover:bg-[var(--color-orange)] hover:text-white transition-all"
            >
              <ListMusic size={14} />
              Ver episodios
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--color-orange)]/15 border border-[var(--color-orange)]/40 backdrop-blur-sm animate-[ring-pulse_2.6s_ease-out_infinite]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-orange)] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-orange)]" />
            </span>
            <span className="text-[11px] tracking-[0.22em] uppercase text-foreground font-medium">
              Nuevo · Andrés Rodríguez (Forbes)
            </span>
          </div>
        </div>
      </div>

      {/* Bottom proof strip */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-[var(--color-orange)]/30 bg-background/60 backdrop-blur-md">
        <div className="container-ddp py-4 sm:py-5 flex items-center justify-between gap-4 sm:gap-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-6 md:gap-10 text-[10px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.24em] uppercase text-muted-foreground overflow-hidden">
            <span className="text-[var(--color-cyan)] hidden sm:inline">En este episodio →</span>
            <span className="text-foreground/85 truncate">Andrés Rodríguez</span>
            <span className="text-[var(--color-orange)]/60 hidden sm:inline">·</span>
            <span className="hidden md:inline text-muted-foreground">Presidente Forbes</span>
          </div>
          <a
            href="#guests"
            aria-label="Bajar"
            className="flex items-center gap-2 shrink-0 text-[10px] tracking-[0.24em] sm:tracking-[0.28em] uppercase text-[var(--color-orange)] hover:text-[var(--color-cyan)] transition-colors"
          >
            Scroll
            <ArrowDown size={14} className="bounce-down" />
          </a>
        </div>
      </div>
    </section>
  );
}

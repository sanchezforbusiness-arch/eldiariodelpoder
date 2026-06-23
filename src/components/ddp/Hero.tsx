import heroAsset from "@/assets/hero-portada-nueva.jpg.asset.json";
import heroMobileAsset from "@/assets/hero-mobile.jpg.asset.json";
import { Play, ArrowDown } from "lucide-react";
import { SplitText } from "./SplitText";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden grain">
      {/* Video de fondo (desktop) */}
      <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/nTtgtxG7UNs?autoplay=1&mute=1&loop=1&playlist=nTtgtxG7UNs&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&start=9&end=60"
          title="Diario del Poder — fondo"
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="eager"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full opacity-70"
          style={{ border: 0 }}
        />
        <img
          src={heroAsset.url}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center opacity-0"
        />
      </div>
      <img
        src={heroMobileAsset.url}
        alt="Diario del Poder — conversación con un referente"
        width={1182}
        height={1576}
        fetchPriority="high"
        decoding="async"
        className="sm:hidden absolute inset-0 w-full h-full object-cover object-[50%_35%] opacity-80 ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />

      <div className="gold-glow float-slow w-[520px] h-[520px] -top-32 -left-24 opacity-60" />
      <div className="gold-glow float-slower w-[600px] h-[600px] top-1/3 -right-40 opacity-40" />

      <div className="container-ddp relative z-10 pt-28 sm:pt-32 pb-32 md:pb-52 fade-up">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <span className="h-px w-14 bg-gold/70" />
            <span className="eyebrow flex items-center gap-2">
              <span className="dot-gold" /> Podcast · Madrid
            </span>
          </div>


          <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6.75rem] leading-[0.95] sm:leading-[0.92] tracking-[-0.03em] font-light">
            <SplitText text="La voz del legado." goldWords={["legado"]} italicWords={["legado"]} />
          </h1>

          <p className="mt-7 md:mt-9 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
            Donde los mayores referentes del mundo dejan su legado a la juventud.
          </p>

          <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-3 sm:gap-5">
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="ring-pulse group inline-flex items-center gap-3 bg-gold text-gold-foreground px-7 sm:px-9 py-3.5 sm:py-4 text-[11px] tracking-[0.24em] sm:tracking-[0.28em] uppercase font-medium hover:bg-gold-bright transition-all hover:-translate-y-0.5"
            >
              <Play size={14} className="fill-current" />
              Escuchar último episodio
            </a>
            <a
              href="#episodes"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 text-[11px] tracking-[0.24em] sm:tracking-[0.28em] uppercase text-foreground/85 border border-foreground/25 hover:border-gold hover:text-gold transition-colors"
            >
              Ver episodios
            </a>
          </div>
        </div>
      </div>

      {/* Bottom proof strip */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-foreground/10 bg-background/40 backdrop-blur-sm">
        <div className="container-ddp py-4 sm:py-5 flex items-center justify-between gap-4 sm:gap-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-6 md:gap-10 text-[10px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.24em] uppercase text-muted-foreground overflow-hidden">
            <span className="text-gold/90 hidden sm:inline">En este episodio →</span>
            <span className="text-foreground/85 truncate">Andrés Rodríguez</span>
            <span className="text-gold/40 hidden sm:inline">·</span>
            <span className="hidden md:inline text-muted-foreground">Presidente Forbes</span>
          </div>
          <a
            href="#guests"
            aria-label="Bajar"
            className="flex items-center gap-2 shrink-0 text-[10px] tracking-[0.24em] sm:tracking-[0.28em] uppercase text-gold/80 hover:text-gold transition-colors"
          >
            Scroll
            <ArrowDown size={14} className="bounce-down" />
          </a>
        </div>
      </div>
    </section>
  );
}

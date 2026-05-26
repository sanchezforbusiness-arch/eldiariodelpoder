import heroImg from "@/assets/hero-studio.webp";
import { Play, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden grain">
      <img
        src={heroImg}
        alt="Estudio de Diario del Poder"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-80 ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />

      <div className="gold-glow float-slow w-[520px] h-[520px] -top-32 -left-24 opacity-60" />
      <div className="gold-glow float-slower w-[600px] h-[600px] top-1/3 -right-40 opacity-40" />

      <div className="container-ddp relative z-10 pt-32 pb-44 md:pb-52 fade-up">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-14 bg-gold/70" />
            <span className="eyebrow">Podcast · Madrid</span>
          </div>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9.75rem] leading-[0.88] tracking-[-0.045em] font-light">
            La voz<br />del <span className="italic shimmer-gold">legado</span>.
          </h1>

          <p className="mt-12 max-w-xl text-base md:text-[1.05rem] text-foreground/75 leading-[1.7]">
            El podcast donde expresidentes, CEOs y fundadores hablan sin guion sobre liderazgo, decisiones y legado.
          </p>

          <div className="mt-14 flex flex-wrap items-center gap-5">
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="ring-pulse group inline-flex items-center gap-3 bg-gold text-gold-foreground px-9 py-4 text-[11px] tracking-[0.28em] uppercase font-medium hover:bg-gold-bright transition-all hover:-translate-y-0.5"
            >
              <Play size={14} className="fill-current" />
              Escuchar
            </a>
            <a
              href="#episodes"
              className="inline-flex items-center gap-2 px-7 py-4 text-[11px] tracking-[0.28em] uppercase text-foreground/85 border border-foreground/25 hover:border-gold hover:text-gold transition-colors"
            >
              Ver episodios
            </a>
          </div>
        </div>
      </div>

      {/* Bottom proof strip */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-foreground/10 bg-background/40 backdrop-blur-sm">
        <div className="container-ddp py-5 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6 md:gap-10 text-[10px] md:text-[11px] tracking-[0.24em] uppercase text-muted-foreground overflow-hidden">
            <span className="text-gold/90 hidden sm:inline">En este episodio →</span>
            <span className="text-foreground/85">Andrés Rodríguez</span>
            <span className="text-gold/40">·</span>
            <span className="hidden md:inline text-foreground/60">Presidente Forbes</span>
          </div>
          <a
            href="#guests"
            aria-label="Bajar"
            className="flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-gold/80 hover:text-gold transition-colors"
          >
            Scroll
            <ArrowDown size={14} className="bounce-down" />
          </a>
        </div>
      </div>
    </section>
  );
}

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

      <div className="container-ddp relative z-10 pt-32 pb-32 md:pb-40 fade-up">
        <div className="max-w-5xl">
          <span className="eyebrow block mb-8">Podcast · Madrid</span>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.92] tracking-[-0.035em] font-light">
            La voz<br />del <span className="italic shimmer-gold">legado</span>.
          </h1>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="ring-pulse group inline-flex items-center gap-3 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-gold-bright transition-all hover:-translate-y-0.5"
            >
              <Play size={14} className="fill-current" />
              Escuchar
            </a>
            <a
              href="#episodes"
              className="inline-flex items-center gap-2 px-6 py-4 text-[12px] tracking-[0.22em] uppercase text-foreground border border-foreground/30 hover:border-gold hover:text-gold transition-colors"
            >
              Ver episodios
            </a>
          </div>
        </div>
      </div>

      <a
        href="#guests"
        aria-label="Bajar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold/80 hover:text-gold"
      >
        <ArrowDown size={20} className="bounce-down" />
      </a>
    </section>
  );
}

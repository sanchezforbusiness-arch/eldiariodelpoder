import heroImg from "@/assets/hero-studio.webp";
import { ArrowUpRight, Play } from "lucide-react";
import { GuestsMarquee } from "./GuestsMarquee";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden grain pb-40 md:pb-44">
      <img
        src={heroImg}
        alt="Estudio de Diario del Poder"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />

      {/* Ambient gold lights */}
      <div className="gold-glow float-slow w-[520px] h-[520px] -top-32 -left-24" />
      <div className="gold-glow float-slower w-[600px] h-[600px] top-1/3 -right-40 opacity-80" />
      <div className="gold-glow float-slow w-[360px] h-[360px] bottom-0 left-1/3" style={{ animationDelay: "-4s" }} />

      <div className="container-ddp relative z-10 pt-32 pb-12">
        <div className="max-w-3xl fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="accent-line w-10" />
            <span className="eyebrow">El Podcast · ES / 2025</span>
          </div>

          <h1 className="font-serif text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] leading-[0.92] tracking-[-0.025em]">
            La voz<br />
            <span className="italic shimmer-gold">del legado</span>.
          </h1>

          <p className="mt-8 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
            Conversaciones con expresidentes, CEOs y líderes que mueven el país.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gold text-gold-foreground px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-gold-bright transition-all shadow-[0_0_0_0_color-mix(in_oklab,var(--color-gold-bright)_60%,transparent)] hover:shadow-[0_0_38px_4px_color-mix(in_oklab,var(--color-gold-bright)_55%,transparent)] hover:-translate-y-0.5"
            >
              <Play size={14} className="fill-current" />
              Escucha el podcast
            </a>
            <a
              href="#newsletter"
              className="group inline-flex items-center gap-2 px-7 py-4 text-[12px] tracking-[0.22em] uppercase border border-border text-foreground hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all"
            >
              Únete a la comunidad
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>

      {/* Guest names marquee — DOAC-inspired credibility band */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/40 bg-background/40 backdrop-blur-sm">
        <div className="text-center pt-4 pb-1 text-[10px] tracking-[0.3em] uppercase text-gold/80">
          Han pasado por la mesa
        </div>
        <GuestsMarquee />
      </div>
    </section>
  );
}

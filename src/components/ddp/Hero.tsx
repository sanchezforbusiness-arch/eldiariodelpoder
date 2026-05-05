import heroImg from "@/assets/hero-studio.webp";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden grain pb-20 md:pb-28">
      <img
        src={heroImg}
        alt="Estudio de Diario del Poder"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />

      <div className="gold-glow float-slow w-[520px] h-[520px] -top-32 -left-24 opacity-60" />
      <div className="gold-glow float-slower w-[600px] h-[600px] top-1/3 -right-40 opacity-50" />

      <div className="container-ddp relative z-10 pt-32 pb-12">
        <div className="max-w-4xl fade-up">
          <span className="eyebrow block mb-8">Podcast · Madrid</span>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] tracking-[-0.03em] font-light">
            La voz del <span className="italic text-gold">legado</span>.
          </h1>

          <p className="mt-10 max-w-xl text-lg md:text-xl text-foreground/75 leading-relaxed">
            Expresidentes, CEOs, líderes institucionales. Sin guion, sin titulares. Solo visión, experiencia y legado para la nueva generación.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-gold-bright transition-all hover:-translate-y-0.5"
            >
              <Play size={14} className="fill-current" />
              Escuchar ahora
            </a>
            <a
              href="#episodes"
              className="inline-flex items-center gap-2 px-6 py-4 text-[12px] tracking-[0.22em] uppercase text-foreground border border-foreground/30 hover:border-gold hover:text-gold transition-colors"
            >
              Ver episodios
            </a>
          </div>

          <p className="mt-10 text-[11px] tracking-[0.32em] uppercase text-gold/80">
            La voz del legado
          </p>
        </div>
      </div>

    </section>
  );
}

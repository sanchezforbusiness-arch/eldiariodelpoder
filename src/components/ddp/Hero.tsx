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
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent" />

      <div className="gold-glow float-slow w-[520px] h-[520px] -top-32 -left-24 opacity-60" />
      <div className="gold-glow float-slower w-[600px] h-[600px] top-1/3 -right-40 opacity-50" />

      <div className="container-ddp relative z-10 pt-32 pb-12">
        <div className="max-w-4xl fade-up">
          <span className="eyebrow block mb-8">Podcast · Madrid</span>

          <h1 className="font-serif text-[3.75rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.92] tracking-[-0.03em] font-light">
            La voz<br />
            <span className="italic text-gold">del legado</span>.
          </h1>

          <p className="mt-10 max-w-lg text-lg md:text-xl text-foreground/75 leading-relaxed">
            Expresidentes, CEOs, fundadores, deportistas, artistas. Sin guion, sin titulares. Una conversación de verdad.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-gold-bright transition-all hover:-translate-y-0.5"
            >
              <Play size={14} className="fill-current" />
              Escuchar
            </a>
            <a
              href="#episodes"
              className="inline-flex items-center gap-2 px-2 py-4 text-[12px] tracking-[0.22em] uppercase text-foreground/80 hover:text-gold transition-colors border-b border-transparent hover:border-gold"
            >
              Ver episodios
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

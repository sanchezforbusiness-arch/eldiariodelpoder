import heroImg from "@/assets/hero-studio.jpg";
import { ArrowUpRight, Play } from "lucide-react";

const stats = [
  { v: "+50K", l: "Comunidad" },
  { v: "Top 10", l: "Spotify ES · Negocios" },
  { v: "+1M", l: "Reproducciones" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden grain">
      <img
        src={heroImg}
        alt="Estudio de Diario del Poder"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />

      <div className="container-ddp relative z-10 pt-32 pb-24">
        <div className="max-w-3xl fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">El Podcast · ES / 2025</span>
          </div>

          <h1 className="font-serif text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] leading-[0.95] tracking-[-0.02em]">
            La voz<br />
            <span className="italic text-gold">del legado</span>.
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Conversaciones con expresidentes, CEOs y referentes del mundo político,
            empresarial e institucional. Para una generación con ambición que busca
            criterio, no ruido.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-gold text-gold-foreground px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-gold-bright transition-colors"
            >
              <Play size={14} className="fill-current" />
              Escucha el podcast
            </a>
            <a
              href="#newsletter"
              className="group inline-flex items-center gap-2 px-7 py-4 text-[12px] tracking-[0.22em] uppercase border border-border text-foreground hover:border-gold hover:text-gold transition-all"
            >
              Únete a la comunidad
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-10 max-w-xl border-t border-border/60 pt-8">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl md:text-4xl text-gold leading-none">{s.v}</div>
                <div className="mt-2 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-muted-foreground leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-6 md:left-10 right-6 md:right-10 flex items-end justify-between text-muted-foreground">
          <div className="hidden md:block text-[11px] tracking-[0.3em] uppercase">
            Madrid · Conversaciones de fondo
          </div>
          <div className="text-[11px] tracking-[0.3em] uppercase ml-auto">
            Scroll <span className="text-gold">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}

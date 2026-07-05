import { Play } from "lucide-react";
import jordiAsset from "@/assets/guest-jordi-juan.png.asset.json";
import { Eq } from "@/components/ddp/Eq";

export function FeaturedEpisode() {
  return (
    <section id="featured" className="py-16 md:py-24 bg-background">
      <div className="container-ddp">
        <div className="kicker mb-10 md:mb-14">
          <span className="kicker-num">Sección 01</span>
          <span>El último episodio</span>
          <span className="ml-auto inline-flex items-center gap-2 text-primary">
            <Eq />
            <span className="text-[10px] tracking-[0.3em] uppercase">En emisión</span>
          </span>
        </div>

        <a
          href="https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html"
          target="_blank"
          rel="noreferrer"
          className="group relative block"
        >
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            {/* Big number marginalia */}
            <div className="hidden md:block absolute -top-8 right-0 pointer-events-none select-none z-0">
              <span className="font-serif font-light text-[10rem] lg:text-[14rem] leading-none text-primary/10 tracking-tighter">
                Nº24
              </span>
            </div>

            <div className="col-span-12 md:col-span-7 relative z-10">
              <div className="curtain relative aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-muted">
                <img
                  src={jordiAsset.url}
                  alt="Jordi Juan · Director de La Vanguardia"
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-4 right-4 z-10 pulse-ring w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Play size={16} className="fill-current ml-0.5" />
                </span>
              </div>
              <p className="mt-3 text-[10px] tracking-[0.24em] uppercase text-foreground/55">
                Foto — Jordi Juan · La Vanguardia
              </p>
            </div>

            <div className="col-span-12 md:col-span-5 relative z-10 flex flex-col justify-center">
              <p className="text-[11px] tracking-[0.24em] uppercase text-primary mb-4">
                Jordi Juan · Director de La Vanguardia
              </p>
              <h2 className="font-serif text-[2.4rem] md:text-5xl lg:text-6xl leading-[0.98] tracking-[-0.02em] font-light text-foreground">
                La teoría de los <span className="italic">cajones</span> para afrontar la crisis.
              </h2>
              {/* Decorative waveform */}
              <svg
                aria-hidden
                viewBox="0 0 400 24"
                className="mt-4 w-full max-w-md h-4 text-foreground/60"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 12 Q 10 2 20 12 T 40 12 T 60 12 T 80 12 T 100 12 T 120 12 T 140 12 T 160 12 T 180 12 T 200 12 T 220 12 T 240 12 T 260 12 T 280 12 T 300 12 T 320 12 T 340 12 T 360 12 T 380 12 T 400 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <path
                  d="M0 12 Q 10 6 20 12 T 40 12 Q 50 20 60 12 T 80 12 Q 90 4 100 12 T 120 12 Q 130 18 140 12 T 160 12 Q 170 4 180 12 T 200 12 Q 210 20 220 12 T 240 12 Q 250 6 260 12 T 280 12 Q 290 18 300 12 T 320 12 Q 330 4 340 12 T 360 12 Q 370 20 380 12 T 400 12"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="1"
                  opacity="0.9"
                />
              </svg>
              <p className="mt-6 text-base md:text-lg text-foreground/75 leading-relaxed max-w-md drop-cap">
                Cómo separar problemas para tomar mejores decisiones bajo presión. Un método concreto explicado por uno de los directores de referencia del periodismo español.
              </p>
              <div className="mt-8 inline-flex items-center gap-4">
                <span className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <Play size={14} className="fill-current ml-0.5" />
                </span>
                <span className="text-[12px] tracking-[0.22em] uppercase text-foreground press-underline">
                  Ver en La Vanguardia
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
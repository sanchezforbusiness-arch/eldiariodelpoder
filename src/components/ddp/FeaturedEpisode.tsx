import { Play } from "lucide-react";
import jordiAsset from "@/assets/guest-jordi-juan.png.asset.json";

export function FeaturedEpisode() {
  return (
    <section id="featured" className="py-16 md:py-24 bg-background">
      <div className="container-ddp">
        <div className="kicker mb-10 md:mb-14">
          <span className="kicker-num">Sección 01</span>
          <span>El último episodio</span>
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
              <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-muted">
                <img
                  src={jordiAsset.url}
                  alt="Jordi Juan · Director de La Vanguardia"
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
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
import { Play } from "lucide-react";
import jordiAsset from "@/assets/guest-jordi-juan.png.asset.json";

export function FeaturedEpisode() {
  return (
    <section id="featured" className="py-16 md:py-28 bg-background">
      <div className="container-ddp">
        <div className="flex items-end justify-between gap-6 mb-8 md:mb-12">
          <span className="eyebrow">Último episodio</span>
          <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground hidden sm:inline">
            Nº 01 · Diciembre 2025
          </span>
        </div>

        <a
          href="https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html"
          target="_blank"
          rel="noreferrer"
          className="group block bg-card border border-border overflow-hidden reveal transition-all duration-300 hover:border-primary/40"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden bg-muted">
              <img
                src={jordiAsset.url}
                alt="Jordi Juan · Director de La Vanguardia"
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-[11px] tracking-[0.24em] uppercase text-primary mb-4">
                Jordi Juan · Director de La Vanguardia
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[3rem] leading-[1.05] tracking-[-0.02em] font-light text-foreground">
                La teoría de los cajones para afrontar la crisis
              </h2>
              <p className="mt-5 text-base text-muted-foreground max-w-md leading-relaxed">
                Cómo separar problemas para tomar mejores decisiones bajo presión. Un método concreto explicado por uno de los directores de referencia del periodismo español.
              </p>
              <div className="mt-8 inline-flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play size={14} className="fill-current ml-0.5" />
                </span>
                <span className="text-[12px] tracking-[0.22em] uppercase text-foreground group-hover:text-primary transition-colors">
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
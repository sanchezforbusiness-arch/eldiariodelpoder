import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

import { BrandMark, BRANDS } from "@/components/ddp/BrandsMarquee";

const sponsors = BRANDS;
const partners = ["La Vanguardia"];

export function Sponsors() {
  return (
 <section id="sponsors" className="py-16 md:py-32 border-t border-border">
      <div className="container-ddp space-y-20">
        <div>
          <div className="text-center mb-12">
            <span className="eyebrow block mb-5">Sponsors</span>
            <h2 className="tracking-tight text-2xl md:text-display lg:text-display leading-[1.02] font-medium">
              Marcas que van con nosotros.
            </h2>
          </div>

          {/* Cinta continua, igual que la portada */}
          <div className="mask-fade-x -mx-4 overflow-hidden md:-mx-6">
            <div className="marquee items-center">
              {[...sponsors, ...sponsors].map((s, i) => (
                <span key={i} className="flex h-10 items-center gap-8 whitespace-nowrap px-8 md:gap-10 md:px-10">
                  <span className="flex items-center gap-3 opacity-70 transition-opacity duration-300 hover:opacity-100">
                    <BrandMark domain={s.domain} logo={s.logo} name={s.name} />
                    <span className="notranslate text-lg font-medium tracking-tight" translate="no">{s.name}</span>
                    
                  </span>
                  <span aria-hidden className="h-1 w-1 rounded-full bg-signal/70" />
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            <Button asChild className="btn-primary h-auto">
              <Link to="/patrocinadores" hash="solicitud">Solicitar el media kit</Link>
            </Button>
          </div>
        </div>

        <div>
          <p className="text-center text-2xs tracking-label uppercase text-muted-foreground mb-8">MEDIA PARTNERS</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {partners.map((p) => (
              <span key={p} className="notranslate font-serif text-2xl md:text-2xl text-muted-foreground hover:text-signal transition-colors cursor-default" translate="no">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

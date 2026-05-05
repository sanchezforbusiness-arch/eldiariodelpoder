import { ArrowUpRight } from "lucide-react";
import dialogos from "@/assets/bts-aznar-dialogos.jpg";
import hosts from "@/assets/bts-hosts-palco.jpg";
import signing from "@/assets/bts-signing-pen.jpg";

export function Club() {
  return (
    <section id="club" className="relative py-24 md:py-36 border-t border-border bg-card/20 overflow-hidden">
      <div className="container-ddp">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 reveal">
            <span className="eyebrow block mb-5">El Club del Poder</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.98] font-light">
              Una red <span className="italic text-gold">real</span>.<br />
              No de LinkedIn.
            </h2>
            <p className="mt-8 text-base text-muted-foreground max-w-md">
              Dos eventos al año en Madrid. Contenido cerrado. Acceso por invitación.
            </p>
            <a
              href="/club"
              className="mt-10 group inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-gold-bright transition-colors ring-pulse"
            >
              Descubre el Club
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="md:col-span-7 grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 aspect-[6/5] reveal-stagger">
            <div className="col-span-4 row-span-4 relative overflow-hidden hover-cinema">
              <img src={dialogos} alt="" className="absolute inset-0 w-full h-full object-cover grayscale-[0.15]" />
            </div>
            <div className="col-span-2 row-span-3 relative overflow-hidden hover-cinema drift-y">
              <img src={signing} alt="" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]" />
            </div>
            <div className="col-span-2 row-span-3 relative overflow-hidden hover-cinema">
              <img src={hosts} alt="" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]" />
            </div>
            <div className="col-span-4 row-span-2 relative overflow-hidden bg-background border border-gold/20 flex items-center justify-center">
              <p className="font-serif italic text-2xl md:text-3xl text-gold/90 px-4 text-center">
                "Quienes ya están, deciden quién entra."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

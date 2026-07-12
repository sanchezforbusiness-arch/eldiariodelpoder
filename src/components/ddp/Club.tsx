import { ArrowUpRight } from "lucide-react";
import hosts from "@/assets/bts-hosts-palco.webp";
import dialogos from "@/assets/bts-aznar-dialogos.webp";
import signing from "@/assets/bts-signing-pen.webp";

const stats = [
  { k: "2", l: "Eventos / año" },
  { k: "Madrid", l: "Sede" },
  { k: "By invite", l: "Acceso" },
];

export function Club() {
  return (
    <section id="club" className="relative border-t border-border overflow-hidden">
      {/* Full-bleed cinematic background */}
      <div className="relative min-h-[88vh] flex items-end">
        <img
          src={hosts}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
        <div className="gold-glow float-slow w-[600px] h-[600px] -bottom-40 -right-40 opacity-40" />

        <div className="container-ddp relative z-10 py-24 md:py-32 w-full">
          <div className="max-w-4xl reveal">
            <span className="eyebrow block mb-6 text-gold">El Club del Poder</span>
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-light tracking-[-0.025em]">
              Una <span className="italic shimmer-gold">comunidad real</span>.<br />
              No una agenda de contactos.
            </h2>

            <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
              Fundadores y líderes que se ven en Madrid. Sin cámaras. Sin prisa. A veces, solo para compartir mesa.
            </p>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-3 gap-4 md:gap-10 max-w-2xl reveal-stagger">
              {stats.map((s) => (
                <div key={s.l} className="border-t border-gold/40 pt-4">
                  <div className="font-serif text-2xl md:text-4xl text-gold">{s.k}</div>
                  <div className="mt-1 text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a href="/club" className="btn-primary">
                Solicitar acceso
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="font-serif italic text-base md:text-lg text-foreground/70 max-w-xs">
                "Quienes ya están dentro, abren la puerta a los que vienen."
              </p>
            </div>
          </div>
        </div>

        {/* Floating side images */}
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-10 space-y-4 reveal">
          <div className="relative w-44 h-56 overflow-hidden hover-cinema drift-y">
            <img src={dialogos} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-gold/30" />
          </div>
          <div className="relative w-44 h-56 overflow-hidden hover-cinema ml-10">
            <img src={signing} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Play, ArrowUpRight } from "lucide-react";
import g1 from "@/assets/guest-1.jpg";
import g5 from "@/assets/guest-5.jpg";

const episodes = [
  { n: "EP. 02", guest: "José María Aznar", title: "Liderazgo, Estado y la responsabilidad de gobernar", img: g1, dur: "1h 12m", url: "https://youtu.be/ZydPM-xkYvA" },
  { n: "EP. 01", guest: "Guillermo Lasso", title: "Gestión de crisis y visión de país", img: g5, dur: "1h 04m", url: "https://youtu.be/2XZuIBfyBH0" },
];

export function Episodes() {
  return (
    <section id="episodes" className="py-28 md:py-40">
      <div className="container-ddp">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow">El Podcast</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Últimos <span className="italic text-gold">episodios</span>
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@eldiariodelpoder"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-gold hover:text-foreground transition-colors"
          >
            Ver todos
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {episodes.map((e) => (
            <a
              key={e.n}
              href={e.url}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden bg-card border border-border hover-lift">
                <img
                  src={e.img}
                  alt={e.guest}
                  width={512}
                  height={640}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                <div className="absolute top-4 left-4 text-[11px] tracking-[0.3em] uppercase text-gold">{e.n}</div>
                <div className="absolute top-4 right-4 flex items-center gap-2 text-[11px] tracking-wide text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-gold/50 text-gold text-[10px] tracking-[0.22em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    Nuevo
                  </span>
                  <span>{e.dur}</span>
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm bg-background/40">
                  <Play size={16} className="fill-current ml-0.5" />
                </div>
              </div>
              <div className="pt-5">
                <p className="text-[11px] tracking-[0.22em] uppercase text-gold/90 mb-2">{e.guest}</p>
                <h3 className="font-serif text-xl md:text-2xl leading-snug group-hover:text-gold transition-colors">
                  {e.title}
                </h3>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] tracking-[0.22em] uppercase text-muted-foreground group-hover:text-gold transition-colors">
                  Ver en YouTube <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 border border-dashed border-border/70 px-6 py-8 text-center">
          <p className="text-[11px] tracking-[0.32em] uppercase text-gold mb-2">Próximamente</p>
          <p className="font-serif text-xl md:text-2xl text-foreground/85">
            Nuevos episodios con <span className="italic text-gold">Javier Tebas</span>, <span className="italic text-gold">Iván Duque</span>, <span className="italic text-gold">Andrés Rodríguez</span> y más.
          </p>
        </div>
      </div>
    </section>
  );
}

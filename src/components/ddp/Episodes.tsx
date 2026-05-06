import { Play, ArrowUpRight } from "lucide-react";
import g1 from "@/assets/guest-1.jpg";
import g5 from "@/assets/guest-5.jpg";
import gEchavarren from "@/assets/guest-echavarren.jpg";
import gAndres from "@/assets/bts-andres-rodriguez.jpg";

const episodes = [
  { n: "01", guest: "Andrés Rodríguez", title: "Forbes, lujo y poder desde la Forbes House", img: gAndres, url: "https://youtu.be/nTtgtxG7UNs", isNew: true },
  { n: "02", guest: "Guillermo Lasso", title: "Gobernar en plena crisis", img: g5, url: "https://youtu.be/2XZuIBfyBH0" },
  { n: "03", guest: "José María Aznar", title: "Liderar un país", img: g1, url: "https://youtu.be/ZydPM-xkYvA" },
  { n: "04", guest: "Mikel Echavarren", title: "Real estate, ciclos y dinero inteligente", img: gEchavarren, url: "https://youtu.be/ARO5S1I5cg8" },
];

export function Episodes() {
  const [featured, ...rest] = episodes;
  return (
    <section id="episodes" className="pt-20 md:pt-28 pb-12 md:pb-16 border-t border-border">
      <div className="container-ddp">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <span className="eyebrow block mb-5">Episodios</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.02em]">
              Lo último que hemos <span className="italic text-gold">grabado</span>.
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@eldiariodelpoder"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-foreground/70 hover:text-gold transition-colors self-start md:self-end"
          >
            Ver todos
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Featured episode */}
        <a
          href={featured.url}
          target="_blank"
          rel="noreferrer"
          className="group block relative overflow-hidden mb-10 md:mb-12 reveal"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-card">
            <img
              src={featured.img}
              alt={featured.guest}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1100ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

            <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3">
              <span className="text-[10px] tracking-[0.28em] uppercase text-gold border border-gold/60 px-3 py-1.5">
                Nuevo episodio
              </span>
              <span className="font-serif text-3xl text-gold/80">{featured.n}</span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
              <p className="text-[11px] md:text-[12px] tracking-[0.28em] uppercase text-gold/90 mb-3">{featured.guest}</p>
              <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.02] font-light max-w-3xl">
                {featured.title}
              </h3>
              <div className="mt-6 inline-flex items-center gap-3 text-[12px] tracking-[0.22em] uppercase text-foreground group-hover:text-gold transition-colors">
                <span className="w-12 h-12 rounded-full bg-gold text-gold-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={14} className="fill-current ml-0.5" />
                </span>
                Reproducir
              </div>
            </div>
          </div>
        </a>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal-stagger">
          {rest.map((e) => (
            <a key={e.n} href={e.url} target="_blank" rel="noreferrer" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-card hover-lift">
                <img
                  src={e.img}
                  alt={e.guest}
                  width={512}
                  height={640}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <span className="font-serif text-3xl text-gold/90">{e.n}</span>
                  {e.isNew && (
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold border-l border-gold/50 pl-3">
                      Nuevo
                    </span>
                  )}
                </div>
                <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-gold text-gold-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={14} className="fill-current ml-0.5" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="text-[11px] tracking-[0.22em] uppercase text-gold/90 mb-2">{e.guest}</p>
                  <h3 className="font-serif text-2xl md:text-[1.7rem] leading-tight">
                    {e.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          <span>Pronto: <span className="text-gold/90">Javier Tebas · Iván Duque</span></span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  );
}

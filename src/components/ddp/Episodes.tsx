import { Play, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import g1 from "@/assets/guest-1.webp";
import g5 from "@/assets/guest-5.webp";
import gEchavarren from "@/assets/guest-echavarren.webp";
import gAndres from "@/assets/bts-andres-rodriguez.webp";
import jordiAsset from "@/assets/guest-jordi-juan.png.asset.json";

const episodes = [
  { n: "01", guest: "Jordi Juan", title: "La teoría de los cajones para afrontar la crisis", img: jordiAsset.url, url: "https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html", isNew: true },
  { n: "02", guest: "Andrés Rodríguez", title: "Forbes, lujo y poder desde la Forbes House", img: gAndres, url: "https://youtu.be/nTtgtxG7UNs" },
  { n: "03", guest: "Guillermo Lasso", title: "Gobernar en plena crisis", img: g5, url: "https://youtu.be/2XZuIBfyBH0" },
  { n: "04", guest: "José María Aznar", title: "Liderar un país", img: g1, url: "https://youtu.be/ZydPM-xkYvA" },
  { n: "05", guest: "Mikel Echavarren", title: "Real estate, ciclos y dinero inteligente", img: gEchavarren, url: "https://youtu.be/ARO5S1I5cg8" },
];

export function Episodes() {
  const [featured, ...rest] = episodes;
  return (
 <section id="episodes" className="py-24 md:py-32 border-t border-border">
      <div className="container-ddp">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="eyebrow block mb-4"><span className="dot-gold mr-2" />Episodios</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-tight">
              Conversaciones <span className="italic text-gold">recientes</span>.
            </h2>
          </div>
          <Link
            to="/episodios"
            className="group inline-flex items-center gap-2 text-2xs tracking-label uppercase text-foreground/70 hover:text-gold transition-colors self-start md:self-end"
          >
            Ver todos
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured episode */}
        <a
          href={featured.url}
          target="_blank"
          rel="noreferrer"
          className="group block relative overflow-hidden rounded-sm mb-10 md:mb-12 reveal"
        >
          <div className="relative aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm bg-card">
            <img
              src={featured.img}
              alt={featured.guest}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1100ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

            <div className="absolute top-5 left-5 md:top-8 md:left-8 flex items-center gap-3">
              <span className="text-2xs sm:text-2xs tracking-label sm:tracking-label uppercase text-gold border border-gold/60 px-2.5 sm:px-3 py-1 sm:py-1.5">
                Recién publicado
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-gold/80">{featured.n}</span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-12">
              <p className="text-2xs md:text-2xs tracking-label md:tracking-label uppercase text-gold/90 mb-2 md:mb-3">{featured.guest}</p>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.05] md:leading-[1.02] font-light max-w-3xl">
                {featured.title}
              </h3>
              <div className="mt-4 md:mt-6 inline-flex items-center gap-3 text-2xs md:text-2xs tracking-label md:tracking-label uppercase text-foreground group-hover:text-gold transition-colors">
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold text-gold-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={14} className="fill-current ml-0.5" />
                </span>
                Reproducir
              </div>
            </div>
          </div>
        </a>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 reveal-stagger">
          {rest.map((e) => (
            <a key={e.n} href={e.url} target="_blank" rel="noreferrer" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-card hover-lift">
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
                    <span className="text-2xs tracking-label uppercase text-gold border-l border-gold/50 pl-3">
                      Nuevo
                    </span>
                  )}
                </div>
                <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-gold text-gold-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={14} className="fill-current ml-0.5" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6">
                  <p className="text-2xs sm:text-2xs tracking-label sm:tracking-label uppercase text-gold/90 mb-1.5 sm:mb-2">{e.guest}</p>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-lg leading-tight">
                    {e.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

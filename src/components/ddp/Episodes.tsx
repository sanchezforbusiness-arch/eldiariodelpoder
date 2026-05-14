import { Play, ArrowUpRight } from "lucide-react";
import g1 from "@/assets/guest-1.jpg";
import g5 from "@/assets/guest-5.jpg";
import gEchavarren from "@/assets/guest-echavarren.jpg";
import gAndres from "@/assets/bts-andres-rodriguez.jpg";

const episodes = [
  { n: "01", guest: "Andrés Rodríguez", role: "Presidente Forbes España", title: "Forbes, lujo y poder desde la Forbes House", img: gAndres, url: "https://youtu.be/nTtgtxG7UNs" },
  { n: "02", guest: "Guillermo Lasso", role: "Expresidente de Ecuador", title: "Gobernar en plena crisis", img: g5, url: "https://youtu.be/2XZuIBfyBH0" },
  { n: "03", guest: "José María Aznar", role: "Expresidente de España", title: "Liderar un país", img: g1, url: "https://youtu.be/ZydPM-xkYvA" },
  { n: "04", guest: "Mikel Echavarren", role: "CEO de Colliers", title: "Real estate, ciclos y dinero inteligente", img: gEchavarren, url: "https://youtu.be/ARO5S1I5cg8" },
];

export function Episodes() {
  const [featured, ...rest] = episodes;
  return (
    <section id="episodes" className="py-20 md:py-28 bg-white border-t border-border">
      <div className="container-ddp">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center reveal">
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className="md:col-span-7 group block relative overflow-hidden bg-card hover-lift"
          >
            <div className="relative aspect-[5/6] overflow-hidden">
              <img
                src={featured.img}
                alt={`${featured.guest} — ${featured.title}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </a>

          <div className="md:col-span-5">
            <span className="eyebrow block mb-4">Episodio destacado</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
              {featured.guest}
            </h2>
            <p className="mt-3 text-[15px] font-semibold text-primary">{featured.role}</p>
            <p className="mt-6 text-base md:text-[17px] text-muted-foreground leading-[1.7] max-w-md">
              {featured.title}. Una conversación sin guion sobre liderazgo, decisiones difíciles y construcción de legado.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={featured.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-[13px] font-semibold tracking-[0.06em] uppercase hover:opacity-90 transition-opacity"
              >
                <Play size={14} className="fill-current" /> Ver en YouTube
              </a>
              <a
                href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[13px] font-semibold tracking-[0.06em] uppercase border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Spotify
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <div className="flex items-end justify-between mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-[-0.02em]">Más episodios</h3>
            <a
              href="https://www.youtube.com/@eldiariodelpoder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              Ver todos
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal-stagger reveal">
            {rest.map((e) => (
              <a key={e.n} href={e.url} target="_blank" rel="noreferrer" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-card hover-lift">
                  <img
                    src={e.img}
                    alt={`${e.guest} — ${e.title}`}
                    loading="lazy"
                    width={500}
                    height={625}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-primary">Episodio {e.n}</p>
                  <h4 className="mt-1.5 font-display text-lg md:text-xl font-semibold text-foreground leading-snug">{e.guest}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{e.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

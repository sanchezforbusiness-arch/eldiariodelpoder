import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Play } from "lucide-react";
import g1 from "@/assets/guest-1.webp";
import g5 from "@/assets/guest-5.webp";
import gEchavarren from "@/assets/guest-echavarren.webp";
import gAndres from "@/assets/bts-andres-rodriguez.webp";

const episodes = [
  { n: "02", guest: "Andrés Rodríguez", role: "Presidente de Forbes España", title: "Forbes, lujo y poder desde la Forbes House", img: gAndres, url: "https://youtu.be/nTtgtxG7UNs" },
  { n: "03", guest: "Guillermo Lasso", role: "Expresidente de Ecuador", title: "Gobernar en plena crisis", img: g5, url: "https://youtu.be/2XZuIBfyBH0" },
  { n: "04", guest: "José María Aznar", role: "Expresidente del Gobierno", title: "Liderar un país", img: g1, url: "https://youtu.be/ZydPM-xkYvA" },
  { n: "05", guest: "Mikel Echavarren", role: "CEO Colliers España", title: "Real estate, ciclos y dinero inteligente", img: gEchavarren, url: "https://youtu.be/ARO5S1I5cg8" },
];

export function RecentEpisodes() {
  return (
    <section id="episodes" className="py-16 md:py-28 border-t border-border bg-background">
      <div className="container-ddp">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="eyebrow block mb-4">Episodios recientes</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.025em]">
              Conversaciones para <span className="italic text-primary">volver</span>.
            </h2>
          </div>
          <Link
            to="/episodios"
            className="group inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors self-start md:self-end border-b border-primary/40 pb-1"
          >
            Ver todos los episodios
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <ul className="divide-y divide-border border-t border-b border-border">
          {episodes.map((e) => (
            <li key={e.n}>
              <a
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[auto_72px_minmax(0,1fr)_auto] items-center gap-4 md:gap-6 py-5 md:py-7 hover:bg-card transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
              >
                <span className="font-serif text-2xl md:text-3xl text-primary/80 tabular-nums w-10">{e.n}</span>
                <div className="w-14 h-14 md:w-16 md:h-16 overflow-hidden bg-muted shrink-0">
                  <img src={e.img} alt={e.guest} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-primary mb-1 truncate">
                    {e.guest} <span className="text-muted-foreground normal-case tracking-normal">· {e.role}</span>
                  </p>
                  <h3 className="font-serif text-lg md:text-2xl leading-tight text-foreground group-hover:text-primary transition-colors">
                    {e.title}
                  </h3>
                </div>
                <span className="hidden sm:inline-flex w-11 h-11 rounded-full border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground items-center justify-center text-foreground/70 transition-all shrink-0">
                  <Play size={13} className="fill-current ml-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
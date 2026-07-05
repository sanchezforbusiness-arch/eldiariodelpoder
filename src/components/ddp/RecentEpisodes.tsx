import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const episodes = [
  { n: "02", guest: "Andrés Rodríguez", role: "Presidente de Forbes España", title: "Forbes, lujo y poder desde la Forbes House", url: "https://youtu.be/nTtgtxG7UNs" },
  { n: "03", guest: "Guillermo Lasso", role: "Expresidente de Ecuador", title: "Gobernar en plena crisis", url: "https://youtu.be/2XZuIBfyBH0" },
  { n: "04", guest: "José María Aznar", role: "Expresidente del Gobierno", title: "Liderar un país", url: "https://youtu.be/ZydPM-xkYvA" },
  { n: "05", guest: "Mikel Echavarren", role: "CEO Colliers España", title: "Real estate, ciclos y dinero inteligente", url: "https://youtu.be/ARO5S1I5cg8" },
];

export function RecentEpisodes() {
  return (
    <section id="episodes" className="py-16 md:py-24 filete bg-background">
      <div className="container-ddp">
        <div className="kicker mb-10 md:mb-14">
          <span className="kicker-num">Sección 02</span>
          <span>Conversaciones recientes</span>
        </div>

        <ul className="filete-b">
          {episodes.map((e) => (
            <li key={e.n} className="filete">
              <a
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-6 md:gap-10 py-6 md:py-8"
              >
                <span className="font-serif text-2xl md:text-4xl text-primary tabular-nums w-14 md:w-20">{e.n}</span>
                <div className="min-w-0">
                  <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] font-light text-foreground group-hover:italic group-hover:text-primary transition-all">
                    {e.title}
                  </h3>
                  <p className="mt-2 md:mt-3 text-[11px] tracking-[0.22em] uppercase text-foreground/70">
                    {e.guest} <span className="text-foreground/45 normal-case tracking-normal">— {e.role}</span>
                  </p>
                </div>
                <ArrowRight
                  size={22}
                  className="shrink-0 text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            to="/episodios"
            className="inline-flex items-baseline gap-3 text-[12px] tracking-[0.24em] uppercase text-foreground press-underline hover:text-primary"
          >
            Ver todos los episodios <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
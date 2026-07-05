import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import g4 from "@/assets/guest-4.webp";
import g5 from "@/assets/guest-5.webp";
import g1 from "@/assets/guest-1.webp";
import echavarrenImg from "@/assets/guest-echavarren.webp";

const episodes = [
  { n: "02", guest: "Andrés Rodríguez", role: "Presidente de Forbes España", title: "Forbes, lujo y poder desde la Forbes House", url: "https://youtu.be/nTtgtxG7UNs", img: g4 },
  { n: "03", guest: "Guillermo Lasso", role: "Expresidente de Ecuador", title: "Gobernar en plena crisis", url: "https://youtu.be/2XZuIBfyBH0", img: g5 },
  { n: "04", guest: "José María Aznar", role: "Expresidente del Gobierno", title: "Liderar un país", url: "https://youtu.be/ZydPM-xkYvA", img: g1 },
  { n: "05", guest: "Mikel Echavarren", role: "CEO Colliers España", title: "Real estate, ciclos y dinero inteligente", url: "https://youtu.be/ARO5S1I5cg8", img: echavarrenImg },
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
                className="group grid grid-cols-[auto_auto_minmax(0,1fr)_auto] items-center gap-4 md:gap-10 py-6 md:py-8"
              >
                <span className="relative shrink-0 w-12 h-12 md:w-16 md:h-16 overflow-hidden bg-muted">
                  <img
                    src={e.img}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="photo-bw absolute inset-0 w-full h-full object-cover"
                  />
                </span>
                <span className="font-serif text-2xl md:text-4xl text-primary tabular-nums w-10 md:w-16 self-baseline">{e.n}</span>
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
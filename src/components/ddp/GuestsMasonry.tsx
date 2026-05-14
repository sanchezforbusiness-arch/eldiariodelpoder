import { Link } from "@tanstack/react-router";
import { Play, ArrowUpRight } from "lucide-react";
import g1 from "@/assets/guest-1.jpg";
import g2 from "@/assets/guest-2.jpg";
import g3 from "@/assets/guest-3.jpg";
import g4 from "@/assets/guest-4.jpg";
import g5 from "@/assets/guest-5.jpg";
import g6 from "@/assets/guest-6.jpg";
import g7 from "@/assets/guest-7.jpg";
import gEcha from "@/assets/guest-echavarren.jpg";

const SPOTIFY = "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ";

type Guest = {
  name: string;
  role: string;
  img: string;
  url: string;
  span?: "tall" | "wide" | "normal";
};

const guests: Guest[] = [
  { name: "José María Aznar", role: "Expresidente de España", img: g1, url: "https://youtu.be/ZydPM-xkYvA", span: "tall" },
  { name: "Guillermo Lasso", role: "Expresidente de Ecuador", img: g5, url: "https://youtu.be/2XZuIBfyBH0" },
  { name: "Andrés Rodríguez", role: "Presidente de Forbes España", img: g4, url: "https://youtu.be/nTtgtxG7UNs" },
  { name: "Mikel Echavarren", role: "CEO de Colliers", img: gEcha, url: "https://youtu.be/ARO5S1I5cg8", span: "tall" },
  { name: "Iván Duque", role: "Expresidente de Colombia", img: g2, url: SPOTIFY },
  { name: "Javier Tebas", role: "Presidente de LaLiga", img: g3, url: SPOTIFY },
  { name: "Esperanza Aguirre", role: "Expresidenta de Madrid", img: g7, url: SPOTIFY },
  { name: "Martín Sellés", role: "CEO J&J España", img: g6, url: SPOTIFY },
];

export function GuestsMasonry() {
  return (
    <section id="invitados" className="py-24 md:py-32 border-t border-border">
      <div className="container-ddp">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20 reveal">
          <div className="max-w-2xl">
            <span className="eyebrow block mb-5">Últimos invitados</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.02em]">
              Gente que ha estado <span className="italic text-gold">donde se decide</span>.
            </h2>
          </div>
          <Link
            to="/invitados"
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-gold hover:text-gold-bright transition-colors group self-start md:self-end"
          >
            Ver el roster completo
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 reveal reveal-stagger">
          {guests.map((g) => (
            <a
              key={g.name}
              href={g.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Escuchar episodio con ${g.name}`}
              className={`group relative overflow-hidden bg-card hover-cinema ${
                g.span === "tall" ? "row-span-2 aspect-[3/5]" : "aspect-square"
              }`}
            >
              <img
                src={g.img}
                alt={`${g.name}, ${g.role}, invitado en Diario del Poder podcast`}
                loading="lazy"
                width={600}
                height={600}
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/15 to-transparent" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/55 transition-colors duration-300" />

              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <h3 className="font-serif text-base md:text-xl leading-tight">{g.name}</h3>
                <p className="mt-1 text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-gold/85">{g.role}</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold border border-gold/60 px-5 py-3">
                  <Play size={12} className="fill-current" /> Escuchar
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
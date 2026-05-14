import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
};

const guests: Guest[] = [
  { name: "José María Aznar", role: "Expresidente de España", img: g1, url: "https://youtu.be/ZydPM-xkYvA" },
  { name: "Guillermo Lasso", role: "Expresidente de Ecuador", img: g5, url: "https://youtu.be/2XZuIBfyBH0" },
  { name: "Andrés Rodríguez", role: "Presidente de Forbes España", img: g4, url: "https://youtu.be/nTtgtxG7UNs" },
  { name: "Mikel Echavarren", role: "CEO de Colliers", img: gEcha, url: "https://youtu.be/ARO5S1I5cg8" },
  { name: "Iván Duque", role: "Expresidente de Colombia", img: g2, url: SPOTIFY },
  { name: "Javier Tebas", role: "Presidente de LaLiga", img: g3, url: SPOTIFY },
  { name: "Esperanza Aguirre", role: "Expresidenta de Madrid", img: g7, url: SPOTIFY },
  { name: "Martín Sellés", role: "CEO J&J España", img: g6, url: SPOTIFY },
];

export function GuestsMasonry() {
  return (
    <section id="invitados" className="py-20 md:py-28 bg-white">
      <div className="container-ddp">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16 reveal">
          <div className="max-w-2xl">
            <span className="eyebrow block mb-4">Expresidentes y líderes</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-foreground">
              Quiénes hablan<br />con nosotros.
            </h2>
          </div>
          <Link
            to="/invitados"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-tight text-primary hover:opacity-80 transition-opacity group self-start md:self-end"
          >
            Ver el roster completo
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 reveal reveal-stagger">
          {guests.map((g) => (
            <a
              key={g.name}
              href={g.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Escuchar episodio con ${g.name}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-card hover-lift">
                <img
                  src={g.img}
                  alt={`${g.name}, ${g.role}, invitado en Diario del Poder`}
                  loading="lazy"
                  width={500}
                  height={625}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground leading-tight">{g.name}</h3>
                <p className="mt-1 text-[13px] text-muted-foreground">{g.role}</p>
                <span className="mt-2 inline-block text-[12px] font-semibold tracking-tight text-primary group-hover:opacity-80 transition-opacity">
                  Escuchar episodio →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

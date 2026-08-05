import g3 from "@/assets/guest-3.webp";
import g4 from "@/assets/guest-4.webp";
import g5 from "@/assets/guest-5.webp";
import g6 from "@/assets/guest-6.webp";
import g8 from "@/assets/guest-8.webp";
import g1 from "@/assets/guest-1.webp";
import coelloAsset from "@/assets/guest-coello.png.asset.json";
import jordiAsset from "@/assets/guest-jordi-juan.png.asset.json";
import rosaAsset from "@/assets/guest-rosa-lagarrigue.png.asset.json";
import jcghAsset from "@/assets/guest-jc-gonzalez-hurtado.png.asset.json";
import aguirreAsset from "@/assets/guest-esperanza-aguirre.jpg.asset.json";
import miguelAsset from "@/assets/guest-miguel-anxo-bastos.png.asset.json";
import danielaAsset from "@/assets/guest-daniela-macarena.png.asset.json";
import marcosAsset from "@/assets/guest-marcos-de-quinto.png.asset.json";
import sonsolesAsset from "@/assets/guest-sonsoles-onega.png.asset.json";
import { Link } from "@tanstack/react-router";
import { guestList } from "@/data/podcast";

const slugByName = new Map(guestList.map((g) => [g.name, g.slug]));


const guests = [
  { name: "José María Aznar", role: "Expresidente del Gobierno", img: g1 },
  { name: "Guillermo Lasso", role: "Expresidente de Ecuador", img: g5 },
  { name: "Esperanza Aguirre", role: "Expresidenta de la Comunidad de Madrid", img: aguirreAsset.url },
  { name: "Marcos de Quinto", role: "Exvicepresidente de Coca-Cola · Empresario", img: marcosAsset.url },
  { name: "Javier Tebas", role: "Presidente de La Liga", img: g3 },
  { name: "Andrés Rodríguez", role: "Presidente de Forbes", img: g4 },
  { name: "Arturo Coello", role: "Nº 1 del mundo de pádel", img: coelloAsset.url },
  { name: "Martín Sellés", role: "CEO Johnson & Johnson", img: g6 },
  { name: "Jordi Juan", role: "Director de La Vanguardia", img: jordiAsset.url },
  { name: "Rosa Lagarrigue", role: "Manager · RLM Music", img: rosaAsset.url },
  { name: "José Carlos González Hurtado", role: "Dueño de EWTN · Ex CEO P&G", img: jcghAsset.url },
  { name: "Federica Fornaciari", role: "CEO SenYours · Estratega", img: g8 },
  { name: "Miguel Anxo Bastos", role: "Economista y conferenciante", img: miguelAsset.url },
  { name: "Daniela Macarena", role: "Co-fundadora de Ac2ality", img: danielaAsset.url },
  { name: "Sonsoles Ónega", role: "Periodista y presentadora", img: sonsolesAsset.url },
];



export function GuestsCarousel() {
  const loop = [...guests, ...guests];
  return (
    <section id="guests" className="relative py-20 md:py-32 border-t border-border bg-card/20 overflow-hidden">
      <div className="container-ddp relative mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <span className="eyebrow block mb-4"><span className="dot-gold mr-2" />Invitados</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.02em]">
              Voces que <span className="italic text-gold">construyen</span>.
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-lg">
              Gente que ha estado ahí. Y se sienta a contarlo.
            </p>
          </div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold/70 max-w-[14rem]">
            Presidentes · CEOs · Fundadores
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden mask-fade-x">
        <div className="marquee marquee-fast gap-3 sm:gap-4 md:gap-5">
          {loop.map((g, i) => (
            <Link
              key={i}
              to="/invitados/$slug"
              params={{ slug: slugByName.get(g.name) ?? "" }}
              disabled={!slugByName.get(g.name)}
              className="group relative block shrink-0 w-[200px] sm:w-[260px] md:w-[300px] aspect-[4/5] overflow-hidden rounded-2xl bg-background hover-cinema"
              aria-label={`Ver la entrevista con ${g.name}`}
            >
              <img
                src={g.img}
                alt={g.name}
                width={512}
                height={640}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-lg md:text-xl leading-tight">{g.name}</h3>
                <p className="mt-1.5 text-[10px] md:text-[11px] tracking-[0.18em] text-gold/80 uppercase">{g.role}</p>
                <span className="mt-2 inline-block text-[10px] tracking-[0.18em] uppercase text-gold/70 opacity-0 group-hover:opacity-100 transition-opacity">Ver entrevista →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}

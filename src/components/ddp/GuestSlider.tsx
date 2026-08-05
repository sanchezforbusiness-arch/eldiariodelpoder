import coelloAsset from "@/assets/guest-coello.png.asset.json";
import jordiAsset from "@/assets/guest-jordi-juan.png.asset.json";
import rosaAsset from "@/assets/guest-rosa-lagarrigue.png.asset.json";
import jcghAsset from "@/assets/guest-jc-gonzalez-hurtado.png.asset.json";
import aguirreAsset from "@/assets/guest-esperanza-aguirre.jpg.asset.json";
import miguelAsset from "@/assets/guest-miguel-anxo-bastos.png.asset.json";
import danielaAsset from "@/assets/guest-daniela-macarena.png.asset.json";
import marcosAsset from "@/assets/guest-marcos-de-quinto.png.asset.json";
import sonsolesAsset from "@/assets/guest-sonsoles-onega.png.asset.json";

const GUESTS = [
  { name: "Esperanza Aguirre", role: "Expresidenta de la Comunidad de Madrid", img: aguirreAsset.url },
  { name: "Marcos de Quinto", role: "Exvicepresidente de Coca-Cola", img: marcosAsset.url },
  { name: "Jordi Juan", role: "Director de La Vanguardia", img: jordiAsset.url },
  { name: "Rosa Lagarrigue", role: "Manager, RLM Music", img: rosaAsset.url },
  { name: "José Carlos González Hurtado", role: "Presidente de EWTN", img: jcghAsset.url },
  { name: "Arturo Coello", role: "Nº 1 del mundo de pádel", img: coelloAsset.url },
  { name: "Miguel Anxo Bastos", role: "Economista", img: miguelAsset.url },
  { name: "Daniela Macarena", role: "Cofundadora de Ac2ality", img: danielaAsset.url },
  { name: "Sonsoles Ónega", role: "Periodista", img: sonsolesAsset.url },
];

function Track() {
  return (
    <div className="flex shrink-0">
      {GUESTS.map((g) => (
        <article key={g.name} className="group relative w-[220px] shrink-0 px-2 sm:w-[300px] sm:px-3">
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <img
              src={g.img}
              alt={g.name}
              width={560}
              height={700}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-110 transition-[filter] duration-700 group-hover:grayscale-0"
            />
          </div>
          <h3 className="mt-3 text-[15px] font-medium tracking-[-0.02em]">{g.name}</h3>
          <p className="mono-label mt-1 text-muted-foreground">{g.role}</p>
        </article>
      ))}
    </div>
  );
}

export function GuestSlider() {
  return (
    <section id="invitados" aria-label="Invitados" className="border-b border-border py-12 md:py-16">
      <div className="container-ddp flex items-center justify-between gap-4">
        <p className="mono-label">Han pasado por aquí</p>
        <a href="/invitados" className="link-rule tap font-mono text-[10px] uppercase tracking-[0.12em] md:text-[11px]">
          Ver todos
        </a>
      </div>

      <div className="mask-fade-x mt-8 overflow-hidden">
        <div className="marquee marquee-slow">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}

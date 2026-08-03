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

export function GuestSlider() {
  const loop = [...GUESTS, ...GUESTS];
  return (
    <section id="invitados" aria-label="Invitados" className="border-b border-border py-12 md:py-16">
      <div className="container-ddp flex items-baseline justify-between gap-6">
        <p className="mono-label">Invitados</p>
        <p className="mono-label text-muted-foreground">Presidentes · CEOs · Fundadores</p>
      </div>

      <div className="mask-fade-x mt-8 overflow-hidden">
        <div className="marquee gap-px">
          {loop.map((g, i) => (
            <article key={i} className="group relative w-[220px] shrink-0 sm:w-[280px]">
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
      </div>
    </section>
  );
}

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

const guests = [
  { name: "José María Aznar", role: "Expresidente del Gobierno", img: g1 },
  { name: "Guillermo Lasso", role: "Expresidente de Ecuador", img: g5 },
  { name: "Esperanza Aguirre", role: "Expresidenta de la Comunidad de Madrid", img: aguirreAsset.url },
  { name: "Javier Tebas", role: "Presidente de La Liga", img: g3 },
  { name: "Andrés Rodríguez", role: "Presidente de Forbes", img: g4 },
  { name: "Arturo Coello", role: "Nº 1 del mundo de pádel", img: coelloAsset.url },
  { name: "Martín Sellés", role: "CEO Johnson & Johnson", img: g6 },
  { name: "Jordi Juan", role: "Director de La Vanguardia", img: jordiAsset.url },
  { name: "Rosa Lagarrigue", role: "Manager · RLM Music", img: rosaAsset.url },
  { name: "José Carlos González Hurtado", role: "Dueño de EWTN · Ex CEO P&G", img: jcghAsset.url },
  { name: "Federica Fornaciari", role: "CEO SenYours · Estratega", img: g8 },
  { name: "Miguel Anxo Bastos", role: "Economista y conferenciante", img: miguelAsset.url },
];


export function GuestsCarousel() {
  const loop = [...guests, ...guests];
  return (
    <section id="guests" className="relative py-16 md:py-24 border-t border-white/5 bg-background overflow-hidden">
      <div className="container-ddp relative mb-10 md:mb-14">
        <p className="eyebrow mb-6">Los invitados</p>
        <div className="grid grid-cols-12 gap-6 items-end">
          <h2 className="col-span-12 md:col-span-8 display-lg text-foreground">
            Presidentes, CEOs<br />y referentes.
          </h2>
          <p className="col-span-12 md:col-span-4 text-[11px] tracking-[0.26em] uppercase text-foreground/60 md:text-right">
            Presidentes · CEOs · Fundadores
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden mask-fade-x">
        <div className="marquee marquee-slow gap-6 sm:gap-8 md:gap-12 items-start">
          {loop.map((g, i) => (
            <article key={i} className="group shrink-0 w-[180px] sm:w-[220px] md:w-[260px]">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={g.img}
                  alt={g.name}
                  width={512}
                  height={640}
                  loading="lazy"
                  className="photo-bw absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 font-display text-base md:text-lg leading-tight text-foreground">{g.name}</h3>
              <p className="mt-1 text-[10px] tracking-[0.2em] uppercase text-foreground/60">{g.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

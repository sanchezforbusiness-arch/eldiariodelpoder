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
    <section id="guests" className="relative py-16 md:py-28 border-t border-border bg-card overflow-hidden">
      <div className="container-ddp relative mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <span className="eyebrow block mb-4">Invitados</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.02em]">
              Voces que <span className="italic text-primary">construyen</span>.
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Presidentes, CEOs y referentes que han construido lo que otros estudian.
            </p>
          </div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground max-w-[14rem]">
            Presidentes · CEOs · Fundadores
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden mask-fade-x">
        <div className="marquee marquee-slow gap-3 sm:gap-4 md:gap-5">
          {loop.map((g, i) => (
            <article
              key={i}
              className="group relative shrink-0 w-[200px] sm:w-[260px] md:w-[300px] aspect-[4/5] overflow-hidden bg-background border border-border"
            >
              <img
                src={g.img}
                alt={g.name}
                width={512}
                height={640}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <h3 className="font-serif text-base md:text-lg leading-tight text-foreground">{g.name}</h3>
                <p className="mt-1.5 text-[10px] tracking-[0.16em] text-primary uppercase">{g.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}

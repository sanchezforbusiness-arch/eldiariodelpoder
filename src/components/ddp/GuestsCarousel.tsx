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
              Líderes que dan conversación a conversación.
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
            <article
              key={i}
              className="group relative shrink-0 w-[200px] sm:w-[260px] md:w-[300px] aspect-[4/5] overflow-hidden bg-background hover-cinema"
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
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}

import g1 from "@/assets/guest-1.jpg";
import g2 from "@/assets/guest-2.jpg";
import g3 from "@/assets/guest-3.jpg";
import g4 from "@/assets/guest-4.jpg";
import g5 from "@/assets/guest-5.jpg";
import g6 from "@/assets/guest-6.jpg";
import g7 from "@/assets/guest-7.jpg";
import g8 from "@/assets/guest-8.jpg";

const guests = [
  { name: "José María Aznar", role: "Expresidente del Gobierno", img: g1 },
  { name: "Guillermo Lasso", role: "Expresidente de Ecuador", img: g5 },
  { name: "Javier Tebas", role: "Presidente de La Liga", img: g3 },
  { name: "Andrés Rodríguez", role: "Presidente de Forbes", img: g4 },
  { name: "Iván Duque", role: "Expresidente de Colombia", img: g2 },
  { name: "Martín Sellés", role: "CEO Johnson & Johnson", img: g6 },
  { name: "Esperanza Aguirre", role: "Expresidenta de Madrid", img: g7 },
  { name: "Federica Fornaciari", role: "CEO SenYours · Estratega", img: g8 },
];

export function GuestsCarousel() {
  const loop = [...guests, ...guests];
  return (
    <section id="guests" className="relative py-20 md:py-28 border-t border-border bg-card/20 overflow-hidden">
      <div className="container-ddp relative mb-10 md:mb-14">
        <div className="max-w-3xl">
          <span className="eyebrow block mb-5">Invitados</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light">
            Gente que ha estado <span className="italic text-gold">donde se decide</span>.
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden mask-fade-x">
        <div className="marquee gap-4 md:gap-5">
          {loop.map((g, i) => (
            <article
              key={i}
              className="group relative shrink-0 w-[230px] sm:w-[260px] md:w-[300px] aspect-[4/5] overflow-hidden bg-background"
            >
              <img
                src={g.img}
                alt={g.name}
                width={512}
                height={640}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
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

import { Link } from "@tanstack/react-router";
import { guestList } from "@/data/podcast";
import { guestCardImageBySlug } from "@/data/guestImages";

export function GuestsCarousel() {
  const guests = guestList.filter((g) => guestCardImageBySlug[g.slug]);
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
              key={`${g.slug}-${i}`}
              to="/invitados/$slug"
              params={{ slug: g.slug }}
              className="group relative block shrink-0 w-[200px] sm:w-[260px] md:w-[300px] aspect-[4/5] overflow-hidden rounded-2xl bg-background hover-cinema"
            >
              <img
                src={guestCardImageBySlug[g.slug]}
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

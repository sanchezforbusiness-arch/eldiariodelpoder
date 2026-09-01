import { Link } from "@tanstack/react-router";
import { guestList } from "@/data/podcast";
import { guestCardImageBySlug } from "@/data/guestImages";

export function GuestsCarousel() {
  const guests = guestList.filter((g) => guestCardImageBySlug[g.slug]);
  const loop = [...guests, ...guests];

  const card = (g: (typeof guests)[number], key: string, extra: string) => (
    <Link
      key={key}
      to="/invitados/$slug"
      params={{ slug: g.slug }}
      className={`group relative block shrink-0 aspect-[4/5] overflow-hidden rounded-sm bg-background hover-cinema ${extra}`}
    >
      <img
        src={guestCardImageBySlug[g.slug]}
        alt={g.name}
        width={512}
        height={640}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover contrast-110 transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3 className="tracking-tight text-lg leading-tight">{g.name}</h3>
        <p className="mt-1.5 font-serif text-sm font-light text-muted-foreground">{g.role}</p>
      </div>
    </Link>
  );

  return (
 <section id="guests" className="relative overflow-hidden border-t border-border bg-card/20 py-16 md:py-32">

      {/* Móvil: carrusel con anclaje, sin movimiento automático */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-[11vw] md:hidden">
        {guests.map((g) => card(g, g.slug, "w-[78vw] snap-center"))}
      </div>

      {/* Escritorio: cinta continua */}
      <div className="mask-fade-x relative hidden overflow-hidden md:block">
        <div className="marquee marquee-fast">
          {loop.map((g, i) => card(g, `${g.slug}-${i}`, "w-[300px] mr-5"))}
        </div>
      </div>
    </section>
  );
}

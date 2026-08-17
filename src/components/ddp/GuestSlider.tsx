import { Link } from "@tanstack/react-router";
import { guestList } from "@/data/podcast";
import { guestCardImageBySlug } from "@/data/guestImages";

const GUESTS = guestList.filter((g) => guestCardImageBySlug[g.slug]);

function Track() {
  return (
    <div className="flex shrink-0">
      {GUESTS.map((g) => (
        <Link
          key={g.slug}
          to="/invitados/$slug"
          params={{ slug: g.slug }}
          className="group relative block w-[220px] shrink-0 px-2 sm:w-[300px] sm:px-3"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <img
              src={guestCardImageBySlug[g.slug]}
              alt={g.name}
              width={560}
              height={700}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-110 transition-[filter] duration-700 group-hover:grayscale-0"
            />
          </div>
          <h3 className="mt-3 text-xs font-medium tracking-tight">{g.name}</h3>
          <p className="mono-label mt-1 text-muted-foreground">{g.role}</p>
        </Link>
      ))}
    </div>
  );
}

export function GuestSlider() {
  return (
    <section id="invitados" aria-label="Invitados" className="border-b border-border py-12 md:py-16">
      <div className="container-ddp flex items-center justify-between gap-4">
        <p className="mono-label">Han pasado por aquí</p>
        <Link to="/invitados" className="link-rule tap font-mono text-2xs uppercase tracking-label md:text-2xs">
          Ver todos
        </Link>
      </div>

      <div className="mask-fade-x mt-8 overflow-hidden">
        <div className="marquee marquee-fast">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}

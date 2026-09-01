import { Link } from "@tanstack/react-router";
import { guestList } from "@/data/podcast";
import { guestCardImageBySlug } from "@/data/guestImages";

const GUESTS = guestList.filter((g) => guestCardImageBySlug[g.slug]);

type Guest = (typeof GUESTS)[number];

function GuestCard({ guest, className }: { guest: Guest; className: string }) {
  return (
    <Link
      to="/invitados/$slug"
      params={{ slug: guest.slug }}
      className={`group relative block shrink-0 ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden border border-border">
        <img
          src={guestCardImageBySlug[guest.slug]}
          alt={guest.name}
          width={560}
          height={700}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover contrast-110 transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <h3 className="mt-3 text-sm font-medium tracking-tight">{guest.name}</h3>
      <p className="mt-1 font-serif text-xs font-light italic text-muted-foreground">
        «{guest.role}»
      </p>

    </Link>
  );
}

function Track() {
  return (
    <div className="flex shrink-0">
      {GUESTS.map((g) => (
        <GuestCard key={g.slug} guest={g} className="w-[220px] px-2 sm:w-[300px] sm:px-3" />
      ))}
    </div>
  );
}

export function GuestSlider() {
  return (
 <section id="invitados" aria-label="Invitados" className="border-b border-border py-16 md:py-32">
      <div className="container-ddp flex items-center justify-between gap-4">
        <p className="mono-label">Quién se ha sentado</p>
        <Link to="/invitados" className="link-rule tap font-mono text-2xs uppercase tracking-label md:text-2xs">
          Todos los invitados
        </Link>
      </div>

      <div className="mt-6 overflow-hidden border-y border-border py-3 md:mt-8">
        <div className="ticker" aria-hidden>
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-serif text-xl font-light italic text-muted-foreground md:text-2xl"
            >
              Nuestros invitados
              <span className="ml-10 text-signal not-italic">·</span>
            </span>
          ))}
        </div>
      </div>


      {/* Móvil: carrusel con anclaje, sin movimiento automático */}
      <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-[11vw] md:hidden">
        {GUESTS.map((g) => (
          <GuestCard key={g.slug} guest={g} className="w-[78vw] snap-center" />
        ))}
      </div>

      {/* Escritorio: cinta continua */}
      <div className="mask-fade-x mt-8 hidden overflow-hidden md:block">
        <div className="marquee marquee-fast">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { guestList } from "@/data/podcast";
import { guestCardImageBySlug } from "@/data/guestImages";

const ALL_GUESTS = guestList;

// Orden explícito de la cinta, tal como lo define Alejandro.
const SLUG_ORDER = [
  "jose-maria-aznar",
  "guillermo-lasso",
  "alvaro-uribe",
  "esperanza-aguirre",
  "marcos-de-quinto",
  "mariano-barbacid",
  "rosa-lagarrigue",
  "narcis-rebollo",
  "manuel-falco",
  "katalin-kariko",
  "javier-tebas",
  "andres-rodriguez",
  "arturo-coello",
  "martin-selles",
  "miguel-anxo-bastos",
  "daniela-macarena",
  "mikel-echavarren",
  "rocio-monasterio",
  "jose-carlos-gonzalez-hurtado",
  "anne-lange",
  "eduardo-martinez-cardona",
  "laura-gonzalez-molero",
  "federica-fornaciari",
  "sonsoles-onega",
  "massimiliano-squillace",
  "arturo-de-las-heras",
  "jordi-juan",
];

const bySlug = new Map(ALL_GUESTS.map((g) => [g.slug, g]));
const GUESTS = SLUG_ORDER.map((slug) => bySlug.get(slug)).filter(
  (g): g is (typeof ALL_GUESTS)[number] => Boolean(g),
);

type Guest = (typeof GUESTS)[number];

function GuestCard({ guest, className }: { guest: Guest; className: string }) {
  const image = guestCardImageBySlug[guest.slug];
  return (
    <Link
      to="/invitados/$slug"
      params={{ slug: guest.slug }}
      className={`group relative block shrink-0 ${className}`}
    >
      <div className="media-zoom relative aspect-[4/5] overflow-hidden rounded-[18px] bg-card shadow-soft">
        {image ? (
          <img
            src={image}
            alt={guest.name}
            width={560}
            height={700}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover contrast-110 transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 border border-border bg-card p-6 text-center">
            <span aria-hidden className="font-serif text-6xl font-light leading-none tracking-tight text-foreground">
              {guest.name.split(" ").filter(Boolean).map((w) => w[0]).slice(0, 2).join("")}
            </span>
            <span className="text-2xs uppercase leading-relaxed tracking-label text-muted-foreground">
              {guest.role}
            </span>
          </div>
        )}
      </div>
      <h3 className="notranslate mt-3 text-sm font-medium tracking-tight" translate="no">{guest.name}</h3>
      <p className="mt-1 font-serif text-xs font-light text-muted-foreground">
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
 <section id="invitados" aria-label="Invitados" className="section-pad">
      <div className="container-ddp flex items-center justify-end gap-4">
        <Link to="/invitados" className="link-rule tap font-mono text-2xs uppercase tracking-label md:text-2xs">
          Todos los invitados
        </Link>
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

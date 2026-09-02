import { Link } from "@tanstack/react-router";
import { guestList } from "@/data/podcast";
import { guestCardImageBySlug } from "@/data/guestImages";

/**
 * Muro de frases en movimiento (tres columnas verticales que se desplazan en
 * direcciones alternas, con desvanecido arriba y abajo).
 * El texto de cada tarjeta sale del propio contenido de la ficha del invitado.
 */

type Item = {
  slug: string;
  name: string;
  role: string;
  line: string;
  image?: string;
};

const ITEMS: Item[] = guestList.map((g) => ({
  slug: g.slug,
  name: g.name,
  role: g.role,
  line: g.bio,
  image: guestCardImageBySlug[g.slug],
}));

/** Reparte en n columnas manteniendo variedad */
function split(items: Item[], n: number): Item[][] {
  const cols: Item[][] = Array.from({ length: n }, () => []);
  items.forEach((it, i) => cols[i % n].push(it));
  return cols;
}

function QuoteCard({ item }: { item: Item }) {
  return (
    <Link
      to="/invitados/$slug"
      params={{ slug: item.slug }}
      className="card-clean block p-5 md:p-6"
    >
      <p className="text-sm leading-relaxed text-foreground">{item.line}</p>
      <div className="mt-5 flex items-center gap-3">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 shrink-0 rounded-[10px] object-cover"
          />
        ) : (
          <span
            aria-hidden
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-muted font-mono text-2xs"
          >
            {item.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </span>
        )}
        <div className="min-w-0">
          <p className="notranslate truncate text-sm font-medium tracking-tight" translate="no">
            {item.name}
          </p>
          <p className="truncate text-xs text-muted-foreground">{item.role}</p>
        </div>
      </div>
    </Link>
  );
}

function Column({ items, reverse, duration }: { items: Item[]; reverse?: boolean; duration: number }) {
  return (
    <div className="quote-col">
      <div
        className={`quote-track ${reverse ? "quote-track-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex flex-col gap-5" aria-hidden={dup === 1}>
            {items.map((it) => (
              <QuoteCard key={`${dup}-${it.slug}`} item={it} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function QuoteWall() {
  const cols = split(ITEMS, 3);

  return (
    <section aria-label="Lo que cuentan nuestros invitados" className="cv-auto">
      <div className="container-ddp py-20 md:py-28">
        <div className="reveal-stagger max-w-[46ch]">
          <span className="mono-label">Voces</span>
          <h2 className="type-section mt-4 font-medium">
            Lo que se cuenta en la mesa
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Una idea de cada conversación. Entra en la ficha para escucharla entera.
          </p>
        </div>

        <div className="quote-wall mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          <Column items={cols[0]} duration={52} />
          <Column items={cols[1]} reverse duration={64} />
          <Column items={cols[2]} duration={58} />
        </div>
      </div>
    </section>
  );
}

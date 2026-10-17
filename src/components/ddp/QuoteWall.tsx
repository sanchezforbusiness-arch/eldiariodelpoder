import { useLanding, landingText } from "@/i18n/LandingContext";
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

/** Reparte en n columnas manteniendo variedad */
function split(items: Item[], n: number): Item[][] {
  const cols: Item[][] = Array.from({ length: n }, () => []);
  items.forEach((it, i) => cols[i % n].push(it));
  return cols;
}

function QuoteCardBody({ item }: { item: Item }) {
  const { dict } = useLanding();
  return (
    <>
      <p className="min-w-0 break-words text-sm leading-relaxed text-foreground">
        <em className="italic">{landingText(dict.quotes.quoteFormat, { line: item.line })}</em>
      </p>
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
    </>
  );
}

function QuoteCard({ item }: { item: Item }) {
  const isExternal = item.slug === "club-osasuna";
  if (isExternal) {
    return (
      <div className="card-clean block w-full max-w-full p-4 md:p-6">
        <QuoteCardBody item={item} />
      </div>
    );
  }
  return (
    <Link
      to="/invitados/$slug"
      params={{ slug: item.slug }}
      className="card-clean block w-full max-w-full p-4 md:p-6"
    >
      <QuoteCardBody item={item} />
    </Link>
  );
}

function Column({ items, reverse, duration }: { items: Item[]; reverse?: boolean; duration: number }) {
  return (
    <div className="quote-col min-w-0">
      <div
        className={`quote-track min-w-0 ${reverse ? "quote-track-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex min-w-0 flex-col gap-5" aria-hidden={dup === 1}>
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
  const { dict } = useLanding();
  const ITEMS: Item[] = [
    ...guestList.filter((g) => dict.quotes.linesBySlug[g.slug]).map((g) => ({
      slug: g.slug, name: g.name, role: dict.guestRoleBySlug?.[g.slug] ?? g.role,
      line: dict.quotes.linesBySlug[g.slug] ?? "", image: guestCardImageBySlug[g.slug],
    })),
    { slug: "club-osasuna", ...dict.quotes.osasuna, image: undefined },
  ];
  const cols = split(ITEMS, 3);

  return (
    <section aria-label={dict.quotes.ariaLabel} className="cv-auto">
      <div className="container-ddp py-20 md:py-28">
        <div className="reveal-stagger max-w-[46ch]">
          <span className="mono-label">{dict.quotes.label}</span>
          <h2 className="type-section mt-4 font-medium">
            {dict.quotes.heading}
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            {dict.quotes.description}
          </p>
        </div>

        <div className="quote-wall mt-12 grid min-w-0 gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Mobile: una sola hilera; tablet+: tres columnas */}
          <div className="min-w-0 md:hidden">
            <Column items={ITEMS} duration={64} />
          </div>
          <div className="hidden min-w-0 md:block">
            <Column items={cols[0]} duration={52} />
          </div>
          <div className="hidden min-w-0 md:block">
            <Column items={cols[1]} reverse duration={64} />
          </div>
          <div className="hidden min-w-0 md:block">
            <Column items={cols[2]} duration={58} />
          </div>
        </div>
      </div>
    </section>
  );
}

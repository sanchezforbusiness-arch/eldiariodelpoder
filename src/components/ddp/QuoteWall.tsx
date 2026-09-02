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

/** Citas textuales de los invitados. Se muestran en cursiva en el muro. */
const QUOTES: Record<string, string> = {
  "jose-maria-aznar": "El poder nunca debe ser un fin en sí mismo.",
  "guillermo-lasso":
    "Tenéis que aspirar a más invitados de nivel para vuestro podcast. Hace mucha falta dejar un legado a las futuras generaciones.",
  "esperanza-aguirre": "Los jóvenes tenéis que cambiar el país.",
  "marcos-de-quinto":
    "Para aportar a la sociedad tienes que trabajar para generar un cambio.",
  "jordi-juan":
    "Cuando tengáis el podcast, pasádmelo que se lo quiero enseñar a mis hijos.",
  "rosa-lagarrigue":
    "Me ha encantado la entrevista y sobre todo hacerla con jóvenes que representan a su generación.",
  "jose-carlos-gonzalez-hurtado":
    "La fe es esencial para encontrar tu propósito en la vida.",
  "federica-fornaciari":
    "Los jóvenes son la clave para el futuro y estos chicos son una muestra de ello.",
  "miguel-anxo-bastos":
    "Capitalismo, ahorro y trabajo duro. La energía que tenéis siendo jóvenes no la volveréis a tener.",
  "daniela-macarena":
    "Para ser una persona con poder tienes que manifestarlo.",
  "andres-rodriguez":
    "Me gustaría ilusionar a los jóvenes para que se den cuenta de que son capaces de hacer lo que se propongan.",
  "martin-selles":
    "Yo veo a muchos jóvenes con un proyecto de vida claro, agradecidos por su primera oportunidad y dispuestos a esforzarse. Los jóvenes reales no son la caricatura desganada que a veces nos quieren vender.",
  "mikel-echavarren":
    "Muy buena entrevista con unos jóvenes muy simpáticos y preparados",
};

const CLUB_OSASUNA: Item = {
  slug: "club-osasuna",
  name: "Club Osasuna",
  role: "Patrocinador oficial",
  line: "Increíble experiencia organizando junto con estos jóvenes el primer evento entre empresarios y jóvenes.",
  image: undefined,
};

const ITEMS: Item[] = [
  ...guestList
    .filter((g) => QUOTES[g.slug])
    .map((g) => ({
      slug: g.slug,
      name: g.name,
      role: g.role,
      line: QUOTES[g.slug]!,
      image: guestCardImageBySlug[g.slug],
    })),
  CLUB_OSASUNA,
];

/** Reparte en n columnas manteniendo variedad */
function split(items: Item[], n: number): Item[][] {
  const cols: Item[][] = Array.from({ length: n }, () => []);
  items.forEach((it, i) => cols[i % n].push(it));
  return cols;
}

function QuoteCardBody({ item }: { item: Item }) {
  return (
    <>
      <p className="text-sm leading-relaxed text-foreground">
        <em className="italic">“{item.line}”</em>
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
      <div className="card-clean block p-5 md:p-6">
        <QuoteCardBody item={item} />
      </div>
    );
  }
  return (
    <Link
      to="/invitados/$slug"
      params={{ slug: item.slug }}
      className="card-clean block p-5 md:p-6"
    >
      <QuoteCardBody item={item} />
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
            Reflexiones
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Lo que han dicho quienes han pasado por el programa. Y el impacto que estas conversaciones están teniendo.
          </p>
        </div>

        <div className="quote-wall mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Mobile: una sola hilera; tablet+: tres columnas */}
          <div className="md:hidden">
            <Column items={ITEMS} duration={64} />
          </div>
          <div className="hidden md:block">
            <Column items={cols[0]} duration={52} />
          </div>
          <div className="hidden md:block">
            <Column items={cols[1]} reverse duration={64} />
          </div>
          <div className="hidden md:block">
            <Column items={cols[2]} duration={58} />
          </div>
        </div>
      </div>
    </section>
  );
}

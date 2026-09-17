import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { pressItems } from "@/data/press";

const FEATURED_MEDIA = [
  "La Vanguardia",
  "Antena 3 — Espejo Público",
  "La Sexta — Zapeando",
  "El Español",
  "Infobae",
  "Huffpost",
  "Univision",
];

const SHORT_NAMES: Record<string, string> = {
  "Antena 3 — Espejo Público": "Antena 3",
  "La Sexta — Zapeando": "La Sexta",
};

export function MediaImpact() {
  const media = FEATURED_MEDIA.map((name) => pressItems.find((item) => item.outlet === name)).filter(
    (item): item is NonNullable<typeof item> => Boolean(item),
  );

  return (
    <section aria-labelledby="media-impact-title" className="overflow-hidden bg-teal text-primary-foreground">
      <div className="container-ddp py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-20">
          <div className="reveal">
            <p className="text-xs uppercase tracking-label text-primary-foreground/60">Impacto</p>
            <h2 id="media-impact-title" className="type-section mt-5 max-w-[11ch]">
              Han hablado de nosotros
            </h2>
            <p className="mt-5 max-w-[37ch] text-sm leading-relaxed text-primary-foreground/70">
              Conversaciones que han cruzado la mesa del podcast para llegar a la prensa y la televisión nacional e internacional.
            </p>
            <Link
              to="/prensa"
              className="tap mt-7 inline-flex items-center gap-2 border-b border-primary-foreground/40 text-sm font-medium transition-colors hover:border-primary-foreground"
            >
              Ver todas las apariciones
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>

          <ol className="reveal-stagger grid grid-cols-2 border-l border-t border-primary-foreground/20 md:grid-cols-3" aria-label="Medios destacados">
            {media.map((item, index) => {
              const isInternational = item.outlet === "Univision";
              return (
                <li
                  key={item.outlet}
                  className={`relative flex min-h-36 flex-col justify-between border-b border-r border-primary-foreground/20 p-5 md:min-h-44 md:p-6 ${
                    isInternational ? "bg-signal" : "transition-colors hover:bg-primary-foreground/5"
                  }`}
                >
                  <span className="tabular text-xs text-primary-foreground/50">0{index + 1}</span>
                  <div>
                    <p className="notranslate text-lg font-semibold leading-tight" translate="no">
                      {SHORT_NAMES[item.outlet] ?? item.outlet}
                    </p>
                    <p className={`mt-2 text-xs leading-snug ${isInternational ? "text-primary-foreground/80" : "text-primary-foreground/55"}`}>
                      {isInternational ? "Cobertura internacional · EE. UU." : item.context ?? "Cobertura editorial"}
                    </p>
                  </div>
                </li>
              );
            })}
            <li className="hidden min-h-44 items-end border-b border-r border-primary-foreground/20 p-6 text-xs text-primary-foreground/45 md:flex">
              Prensa · Televisión · Digital
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
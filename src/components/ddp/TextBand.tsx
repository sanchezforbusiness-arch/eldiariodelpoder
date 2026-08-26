import { Star } from "lucide-react";

const WORDS = ["Voces", "Criterio", "Huella", "Sin guion", "Madrid", "Comunidad"];

/** Kinetic editorial marquee — fresh original detail. */
export function TextBand() {
  const loop = [...WORDS, ...WORDS, ...WORDS];
  return (
    <section
      aria-hidden
 className="relative py-12 md:py-24 border-y border-border bg-card/30 overflow-hidden"
    >
      <div className="mask-fade-x">
        <div className="ticker">
          {loop.map((w, i) => (
            <span key={i} className="flex items-center gap-10 text-band-item">
              <span>{w}</span>
              <Star size={20} className="text-foreground shrink-0" strokeWidth={1.25} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
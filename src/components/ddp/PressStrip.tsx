import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const outlets = [
  "La Vanguardia",
  "Antena 3",
  "La Sexta",
  "El Mundo",
  "Forbes España",
  "El Español",
  "Infobae",
];

export function PressStrip() {
  return (
    <section className="py-16 md:py-20 bg-background border-t border-white/5">
      <div className="container-ddp">
        <Link
          to="/prensa"
          className="group block"
        >
          <div className="flex items-baseline justify-between gap-6 mb-8">
            <p className="eyebrow">Han hablado de nosotros</p>
            <span className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-foreground/60 group-hover:text-primary transition-colors">
              Ver dossier de prensa
              <ArrowUpRight size={14} strokeWidth={1.8} />
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 md:gap-x-14 gap-y-4">
            <span className="font-display font-black uppercase text-2xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
              La Vanguardia
            </span>
            <span className="text-[10px] tracking-[0.28em] uppercase text-primary border border-primary/60 px-2.5 py-1">
              Media Partner
            </span>
            <span className="hidden md:inline text-foreground/25">·</span>
            {outlets.slice(1).map((o, i) => (
              <span key={o} className="flex items-center gap-6 md:gap-14">
                <span className="font-display font-semibold uppercase text-lg md:text-2xl text-foreground/70 group-hover:text-foreground transition-colors">
                  {o}
                </span>
                {i < outlets.length - 2 && (
                  <span className="hidden md:inline text-foreground/25">·</span>
                )}
              </span>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowUpRight, KeyRound } from "lucide-react";
import hosts from "@/assets/bts-hosts-palco.webp";
import { SplitText } from "./SplitText";

export function ClubTeaser() {
  return (
    <section id="club" className="relative border-t border-border overflow-hidden">
      <div className="relative min-h-[70vh] flex items-center">
        <img src={hosts} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover ken-burns opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />
        <div className="gold-glow float-slow w-[520px] h-[520px] -bottom-32 -right-32 opacity-40" />

        <div className="container-ddp relative z-10 py-20 md:py-28 w-full">
          <div className="max-w-3xl reveal">
            <span className="eyebrow block mb-5 text-gold flex items-center gap-2">
              <KeyRound size={14} /> El Club del Poder
            </span>
            <SplitText
              as="h2"
              text="Una comunidad real."
              goldWords={["comunidad", "real"]}
              italicWords={["comunidad", "real"]}
              className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-light tracking-[-0.025em]"
            />
            <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed">
              No una red de contactos. Acceso por invitación.
            </p>
            <Link
              to="/club"
              className="ring-pulse group inline-flex items-center gap-3 mt-10 bg-gold text-gold-foreground px-9 py-4 text-[12px] tracking-[0.24em] uppercase font-medium hover:bg-gold-bright transition-all hover:-translate-y-0.5"
            >
              Solicitar acceso
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
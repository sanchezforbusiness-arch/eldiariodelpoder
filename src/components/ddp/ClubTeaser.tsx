import { Link } from "@tanstack/react-router";
import { ArrowUpRight, KeyRound, Check } from "lucide-react";
import hosts from "@/assets/bts-hosts-palco.webp";
import { SplitText } from "./SplitText";

export function ClubTeaser() {
  return (
    <section id="club" className="relative border-t border-border overflow-hidden bg-card">
      <div className="container-ddp py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-7">
            <span className="eyebrow inline-flex items-center gap-2 mb-5">
              <KeyRound size={13} /> El Club del Poder
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.025em] text-foreground">
              Una <span className="italic text-primary">comunidad</span> real.
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              No una red de contactos. Una mesa común para quienes están cambiando lo que viene. Acceso por invitación.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-xl text-sm text-foreground/85">
              {[
                "Acceso anticipado a episodios",
                "Eventos privados en Madrid",
                "Red de contactos verificada",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link to="/club" className="btn-primary mt-8">
              Solicitar acceso
              <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-muted">
              <img src={hosts} alt="Hosts en el palco del Metropolitano" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
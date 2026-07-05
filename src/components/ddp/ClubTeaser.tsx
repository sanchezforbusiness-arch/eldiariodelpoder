import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import hosts from "@/assets/bts-hosts-palco.webp";


export function ClubTeaser() {
  return (
    <section id="club" className="relative border-t border-white/5 overflow-hidden bg-background">
      <div className="container-ddp py-16 md:py-24">
        <p className="eyebrow mb-8">El Club del Poder</p>
        <div className="grid grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="col-span-12 md:col-span-7">
            <h2 className="display-lg text-foreground">
              Una comunidad<br />real.
            </h2>
            <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed">
              Una mesa común para quienes están cambiando lo que viene. Acceso por invitación.
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
          <div className="col-span-12 md:col-span-5 md:pl-10">
            <div className="group relative aspect-[4/5] overflow-hidden bg-muted rounded-md">
              <img src={hosts} alt="Hosts en el palco del Metropolitano" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <p className="mt-3 text-[10px] tracking-[0.24em] uppercase text-foreground/50">
              Alejandro Sánchez y Víctor Gandarilla
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
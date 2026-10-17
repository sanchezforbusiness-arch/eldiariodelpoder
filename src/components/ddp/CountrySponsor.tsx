import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import { COUNTRY_REGIONS, countryList, type CountryEntry } from "@/data/countries";
import { CONTACT_EMAIL } from "@/data/contact";

export function CountrySponsor({ country }: { country: CountryEntry }) {
  return (
    <section className="section-pad">
      <div className="container-ddp">
        <div className="panel reveal p-6 md:p-10">
          <h2 className="text-xl font-medium md:text-2xl">Para marcas en {country.name}</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">{country.sponsor}</p>
          <Link to="/patrocinadores" hash="solicitud" className="btn-primary mt-7 w-full whitespace-normal sm:w-auto">Ver opciones de patrocinio<ArrowUpRight size={16} className="shrink-0" aria-hidden /></Link>
        </div>
        <div className="reveal mt-16 md:mt-24">
          <h2 className="text-xl font-medium md:text-2xl">Propón un invitado de {country.name}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">¿A quién deberíamos escuchar? Envíanos tu propuesta.</p>
          <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Propuesta de invitado — ${country.name}`)}`} className="btn-outline mt-7"><Mail size={16} aria-hidden />Proponer un invitado</a>
        </div>
        <div className="reveal mt-16 border-t border-border pt-16 md:mt-24 md:pt-24">
          <h2 className="text-xl font-medium md:text-2xl">Diario del Poder en otros países</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COUNTRY_REGIONS.map((region) => {
              const others = countryList.filter((entry) => entry.region === region && entry.slug !== country.slug);
              return others.length ? <nav key={region} aria-label={region}><h3 className="mono-label">{region}</h3><ul className="mt-4">{others.map((entry) => <li key={entry.slug}><Link to="/paises/$slug" params={{ slug: entry.slug }} className="tap inline-flex items-center text-sm transition-colors hover:text-signal">{entry.name}</Link></li>)}</ul></nav> : null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
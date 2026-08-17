import { tvAppearances } from "@/data/tv";

export function TvAppearances() {
  return (
 <section id="television" className="border-t border-border py-16 md:py-24">
      <div className="container-ddp">
        <header className="reveal mb-10 md:mb-14 max-w-3xl">
          <span className="eyebrow block mb-5">
            <span className="dot-gold mr-2" />En directo en televisión
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-[1.05] tracking-tight">
            Diario del Poder en <span className="italic text-gold">La Sexta, Antena 3 y Univision</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Nuestras entrevistas y apariciones en directo en algunos de los medios más vistos de
            España y Estados Unidos: Zapeando (La Sexta), Espejo Público con Susanna Griso (Antena 3)
            y los informativos de Univision.
          </p>
        </header>

        <ul className="grid gap-6 md:grid-cols-2 reveal">
          {tvAppearances.map((t) => (
            <li
              key={t.id}
              className="overflow-hidden rounded-sm border border-border bg-card/30 hover:border-gold/50 transition-colors"
            >
              <figure>
                <img
                  src={t.image}
                  alt={t.alt}
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full object-cover"
                />
                <figcaption className="p-6 md:p-7">
                  <p className="text-2xs tracking-label uppercase text-gold/90">
                    {t.channel} · {t.program} · {t.country}
                  </p>
                  <h3 className="mt-3 font-serif text-xl md:text-2xl leading-tight">{t.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.caption}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
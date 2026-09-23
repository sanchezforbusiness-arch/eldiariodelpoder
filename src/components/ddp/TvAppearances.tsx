import { tvAppearances } from "@/data/tv";

export function TvAppearances() {
  return (
 <section id="television" aria-labelledby="television-title" className="pb-12 pt-8 md:pb-24 md:pt-12">
      <div className="container-ddp">
        <h2 id="television-title" className="sr-only">Apariciones de Diario del Poder en televisión</h2>

        <ul className="grid gap-6 md:grid-cols-2 reveal">
          {tvAppearances.map((t) => (
            <li
              key={t.id}
              className="overflow-hidden rounded-sm border border-border bg-card/30 hover:border-foreground/40 transition-colors"
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
                  <p className="text-2xs tracking-label uppercase text-muted-foreground">
                    {t.channel} · {t.program} · {t.country}
                  </p>
                  <h3 className="tracking-tight mt-3 text-xl md:text-2xl leading-tight">{t.title}</h3>
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
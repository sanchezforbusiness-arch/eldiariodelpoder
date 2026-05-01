const events = [
  { t: "Encuentro del Poder", season: "Primavera · Madrid", d: "Cena cerrada. 60–80 personas." },
  { t: "Cumbre del Legado", season: "Otoño · Madrid", d: "Conferencia y paneles. 120–150 asistentes." },
];

export function Club() {
  return (
    <section id="club" className="py-28 md:py-40 border-t border-border">
      <div className="container-ddp">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">El Club del Poder</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            El poder, como <span className="italic text-gold">servicio</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            La comunidad del Diario. Dos eventos al año en Madrid, contenido cerrado y red real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((e) => (
            <article key={e.t} className="border border-border p-8 hover:border-gold/40 transition-colors">
              <div className="text-gold text-xl mb-3">★</div>
              <h3 className="font-serif text-2xl md:text-3xl leading-snug">{e.t}</h3>
              <p className="mt-2 text-[11px] tracking-[0.28em] uppercase text-gold/80">{e.season}</p>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{e.d}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#newsletter"
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-gold-bright transition-colors"
          >
            Unirme →
          </a>
        </div>
      </div>
    </section>
  );
}
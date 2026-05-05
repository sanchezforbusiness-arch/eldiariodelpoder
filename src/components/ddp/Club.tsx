const events = [
  { t: "Encuentro del Poder", season: "Primavera · Madrid", d: "Cena cerrada con 60–80 invitados." },
  { t: "Cumbre del Legado", season: "Otoño · Madrid", d: "Conferencia y paneles. Hasta 150 asistentes." },
];

export function Club() {
  return (
    <section id="club" className="py-24 md:py-36 border-t border-border bg-card/20">
      <div className="container-ddp">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-7">
            <span className="eyebrow block mb-5">Club del Poder</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light">
              La comunidad <span className="italic text-gold">del Diario</span>.
            </h2>
          </div>
          <p className="md:col-span-5 text-base md:text-lg text-muted-foreground leading-relaxed self-end">
            Dos eventos al año en Madrid. Contenido cerrado. Una red real, no de LinkedIn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {events.map((e) => (
            <article key={e.t} className="bg-background p-10 md:p-12 group hover:bg-card transition-colors">
              <p className="text-[11px] tracking-[0.28em] uppercase text-gold/80 mb-4">{e.season}</p>
              <h3 className="font-serif text-3xl md:text-4xl leading-snug">{e.t}</h3>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">{e.d}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/club"
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-gold-bright transition-colors"
          >
            Descubre el Club
          </a>
        </div>
      </div>
    </section>
  );
}

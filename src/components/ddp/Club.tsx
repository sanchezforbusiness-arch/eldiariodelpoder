const pillars = [
  { n: "I", t: "Conversaciones cerradas", d: "Lo que no entra en el podcast, se queda aquí. Con invitados y miembros." },
  { n: "II", t: "Red que construye", d: "Profesionales que usan el poder para hacer cosas. Mentoría y oportunidades reales." },
  { n: "III", t: "Legado en acción", d: "Encuentros en Madrid, contenido exclusivo y acceso a los dos eventos anuales." },
];

const events = [
  { t: "Encuentro del Poder", season: "Primavera · Madrid", d: "Cena cerrada para 60–80 personas. Invitados, sponsors y comunidad." },
  { t: "Cumbre del Legado", season: "Otoño · Madrid", d: "Conferencia y paneles para 120–150 asistentes. Conversación pública y contenido en directo." },
];

export function Club() {
  return (
    <section id="club" className="py-28 md:py-40 border-t border-border">
      <div className="container-ddp">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">✦ El Club del Poder · La Comunidad</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            El poder, entendido como <span className="italic text-gold">servicio</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Decidir bien y dejar huella. El Club es donde la comunidad se encuentra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {pillars.map((p) => (
            <div key={p.n} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors">
              <div className="font-serif text-5xl text-gold/80 mb-6">{p.n}</div>
              <h3 className="font-serif text-2xl mb-4 leading-snug">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-6 bg-gold/60" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold/90">Doble evento anual · Comunidad ↔ Sponsor</span>
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
        </div>

        <div className="mt-14 text-center">
          <a
            href="#newsletter"
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-gold-bright transition-colors"
          >
            Únete a la Comunidad →
          </a>
        </div>
      </div>
    </section>
  );
}
const stats = [
  { k: "+15", l: "Invitados de primer nivel" },
  { k: "+13", l: "Medios que hablan de nosotros" },
  { k: "1M+", l: "Alcance acumulado" },
  { k: "2026", l: "El año en que empezó" },
];

export function StatsStrip() {
  return (
    <section aria-label="Cifras" className="relative py-16 md:py-24 border-t border-border overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--color-gold-bright) 45%, transparent), transparent)" }}
      />
      <div className="container-ddp">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 reveal-stagger">
          {stats.map((s) => (
            <div key={s.l} className="group">
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl leading-none font-light text-gold">
                {s.k}
              </div>
              <div className="mt-4 md:mt-5 text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-muted-foreground max-w-[14rem]">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FIGURES = [
  { v: "18 M", l: "Usuarios únicos / mes" },
  { v: "1881", l: "Fundada en Barcelona" },
  { v: "Nº 1", l: "Referencia en Cataluña" },
];

/**
 * Compact media-partner strip. Replaces the old full-height Vanguardia band:
 * one hairline row, no dead space, figures inline in mono.
 */
export function PartnerStrip() {
  return (
    <section
      aria-label="Media partner"
      className="border-b border-border py-7 md:py-9"
    >
      <div className="container-ddp reveal-stagger flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="mono-label">
          <span className="text-signal">Media partner</span>
          <span className="mx-3 opacity-40">/</span>
          <span className="text-foreground">La Vanguardia</span>
        </p>

        <dl className="flex flex-wrap items-baseline gap-x-8 gap-y-3 md:gap-x-12">
          {FIGURES.map((f) => (
            <div key={f.l} className="flex items-baseline gap-3">
              <dd className="tabular font-mono text-[15px] tracking-[-0.01em] md:text-base">{f.v}</dd>
              <dt className="mono-label text-muted-foreground">{f.l}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
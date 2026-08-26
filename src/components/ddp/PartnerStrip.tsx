const FIGURES = [
  { v: "+500K", l: "Alcance mensual" },
  { v: "4.000", l: "Comunidad" },
  { v: "+40", l: "Conversaciones grabadas" },
  { v: "2025", l: "Desde Madrid" },
];

/**
 * Compact media-partner strip. Replaces the old full-height Vanguardia band:
 * one hairline row, no dead space, figures inline in mono.
 */
export function PartnerStrip() {
  return (
    <section
      aria-label="Media partner"
 className="border-b border-border py-16 md:py-24"
    >
      <div className="container-ddp reveal-stagger flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <a
          href="https://www.lavanguardia.com"
          target="_blank"
          rel="noreferrer"
          className="chip tap self-start"
        >
          <span className="text-signal">Media partner</span>
          <span className="opacity-40">/</span>
          <span className="text-foreground">La Vanguardia</span>
        </a>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-4 lg:flex lg:flex-wrap lg:items-baseline lg:gap-x-12">
          {FIGURES.map((f) => (
            <div key={f.l} className="flex min-w-0 items-baseline gap-3">
              <dd className="tabular w-[4.5rem] shrink-0 font-mono text-xs tracking-tight md:text-base">{f.v}</dd>
              <dt className="mono-label min-w-0 text-muted-foreground">{f.l}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
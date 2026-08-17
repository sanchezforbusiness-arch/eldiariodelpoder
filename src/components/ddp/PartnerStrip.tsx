const FIGURES = [
  { v: "+500K", l: "Alcance mensual" },
  { v: "4.000", l: "Suscriptores de La carta" },
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
      className="border-b border-border py-7 md:py-9"
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

        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-10 md:gap-x-12">
          {FIGURES.map((f) => (
            <div key={f.l} className="min-w-0 sm:flex sm:items-baseline sm:gap-3">
              <dd className="tabular font-mono text-[15px] tracking-[-0.01em] md:text-base">{f.v}</dd>
              <dt className="mono-label mt-1 text-muted-foreground sm:mt-0">{f.l}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
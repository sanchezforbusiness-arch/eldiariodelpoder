const FIGURES = [
  { v: "+500K", l: "Alcance mensual" },
  { v: "+40", l: "Conversaciones grabadas" },
  { v: "2025", l: "Desde Madrid" },
];

/**
 * Compact media-partner strip. Replaces the old full-height Vanguardia band:
 * one hairline row, no dead space, figures inline in mono.
 */
export function PartnerStrip() {
  return (
    <section aria-label="Media partner" className="border-b border-border">
      <div className="container-ddp reveal-stagger py-14 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="mono-label">Media partner</span>
            <a
              href="https://www.lavanguardia.com"
              target="_blank"
              rel="noreferrer"
              className="link-rule tap self-start font-serif text-lg tracking-tight md:text-xl"
            >
              La Vanguardia
              <span aria-hidden className="text-signal">↗</span>
            </a>
          </div>
          <p className="prose-editorial max-w-[38ch] text-sm text-muted-foreground md:text-right">
            Conversaciones grabadas en Madrid y distribuidas sin recortes.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-2 border-t border-border md:mt-16 md:grid-cols-3">
          {FIGURES.map((f, i) => (
            <div
              key={f.l}
              className={[
                "flex flex-col gap-2 border-b border-border py-6 pr-4 md:border-b-0 md:py-8",
                i % 2 === 1 ? "border-l pl-4 md:pl-6" : "",
                "md:border-l md:pl-6",
                i === 0 ? "md:border-l-0 md:pl-0" : "",
              ].join(" ")}
            >
              <dd className="tabular font-sans text-xl font-medium leading-none tracking-tight md:text-2xl">
                {f.v}
              </dd>
              <dt className="mono-label text-balance">{f.l}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

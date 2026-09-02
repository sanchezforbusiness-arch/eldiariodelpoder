/**
 * Compact media-partner strip. Replaces the old full-height Vanguardia band:
 * one hairline row, no dead space, figures inline in mono.
 */
export function PartnerStrip() {
  return (
    <section aria-label="Media partner">
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
            Grabamos en Madrid, publicamos íntegro y lo distribuimos con La Vanguardia. Sin recortes y sin contrapartidas editoriales.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-16 md:gap-4">
          {FIGURES.map((f) => (
            <div
              key={f.l}
              className="card-clean flex flex-col gap-2 rounded-[20px] bg-card px-6 py-7 md:py-9"
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

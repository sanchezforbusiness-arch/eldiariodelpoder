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
            <p className="max-w-[40ch] text-xs text-muted-foreground">
              Diario fundado en 1881 en Barcelona. Uno de los referentes históricos de la prensa en castellano.
            </p>
          </div>
          <p className="prose-editorial max-w-[38ch] text-sm text-muted-foreground md:text-right">
            Grabamos en Madrid, publicamos íntegro y lo distribuimos con La Vanguardia. Sin recortes y sin contrapartidas editoriales.
          </p>
        </div>
      </div>
    </section>
  );
}

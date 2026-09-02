/**
 * Compact media-partner strip. Replaces the old full-height Vanguardia band:
 * one hairline row, no dead space, figures inline in mono.
 */
export function PartnerStrip() {
  return (
    <section aria-label="Media partner">
      <div className="container-ddp reveal-stagger py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
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

          <div className="flex flex-col gap-3">
            <span className="mono-label">Partner estratégico</span>
            <a
              href="https://www.linkedin.com/company/fundacion-fortius"
              target="_blank"
              rel="noreferrer"
              className="link-rule tap self-start font-serif text-lg tracking-tight md:text-xl"
            >
              <span className="notranslate" translate="no">Fundación Fortius</span>
              <span aria-hidden className="text-signal">↗</span>
            </a>
            <p className="max-w-[40ch] text-xs text-muted-foreground">
              Fundada por <span className="notranslate" translate="no">Juan Ángel Soto</span>. Trabaja por una sociedad libre y virtuosa desde Madrid.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

/**
 * Media partner strip — Clay-style metric cards alongside La Vanguardia.
 */
export function PartnerStrip() {
  return (
    <section aria-label="Media partner">
      <div className="container-ddp reveal-stagger py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
          {/* Left: partner identity */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <span className="mono-label">Media partner</span>
            <a
              href="https://www.lavanguardia.com"
              target="_blank"
              rel="noreferrer"
              className="link-rule tap self-start font-serif text-xl tracking-tight md:text-2xl"
            >
              La Vanguardia
              <span aria-hidden className="text-signal">↗</span>
            </a>
            <p className="max-w-[36ch] text-sm text-muted-foreground">
              Diario fundado en 1881 en Barcelona. Uno de los referentes históricos de la prensa en castellano.
            </p>
          </div>

          {/* Right: reach & prestige cards */}
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:gap-4">
            <div className="card-clean p-5 md:p-6">
              <span className="mono-label text-signal">Alcance</span>
              <p className="mt-3 font-sans text-3xl font-medium tracking-tight md:text-4xl">
                151.000
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Suscriptores en 2024: 38.000 en papel y 113.000 en digital.
              </p>
            </div>

            <div className="card-clean p-5 md:p-6">
              <span className="mono-label text-signal">Prestigio</span>
              <p className="mt-3 font-sans text-3xl font-medium tracking-tight md:text-4xl">
                1881
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Más de 140 años de historia. Referente del periodismo en España.
              </p>
            </div>

            <div className="card-clean p-5 md:p-6">
              <span className="mono-label text-signal">Posición</span>
              <p className="mt-3 font-sans text-3xl font-medium tracking-tight md:text-4xl">
                Top 2
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Mayor difusión en Catalunya y segundo diario de España en papel.
              </p>
            </div>

            <div className="card-clean p-5 md:p-6">
              <span className="mono-label text-signal">Edición</span>
              <p className="mt-3 font-sans text-3xl font-medium tracking-tight md:text-4xl">
                Bilingüe
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Publicado en castellano y, desde 2011, también en catalán.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

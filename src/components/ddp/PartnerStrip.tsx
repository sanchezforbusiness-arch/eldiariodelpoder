/**
 * Bloque de partners: titular editorial a la izquierda y tarjetas "pinchadas"
 * ligeramente giradas a la derecha (media partner y partner estratégico).
 */

type Partner = {
  label: string;
  name: string;
  line: string;
  href: string;
  cta: string;
  tilt: string;
};

const PARTNERS: Partner[] = [
  {
    label: "Media partner",
    name: "La Vanguardia",
    line: "«Diario fundado en 1881 en Barcelona. Uno de los referentes históricos de la prensa en castellano.»",
    href: "https://www.lavanguardia.com",
    cta: "Ver medio",
    tilt: "-2.2deg",
  },
  {
    label: "Partner estratégico",
    name: "Fundación Fortius",
    line: "«Fundada por Juan Ángel Soto. Trabaja por una sociedad libre y virtuosa desde Madrid.»",
    href: "https://www.linkedin.com/company/fundacion-fortius",
    cta: "Ver fundación",
    tilt: "2.6deg",
  },
];

export function PartnerStrip() {
  return (
    <section aria-label="Partners">
      <div className="container-ddp py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal-stagger">
            <span className="inline-flex rounded-full bg-foreground px-3 py-1 font-mono text-2xs uppercase tracking-[0.14em] text-background">
              Partners
            </span>
            <h2 className="type-section mt-6 font-medium">
              Nuestro aliados
            </h2>
            <p className="mt-4 max-w-[44ch] text-sm text-muted-foreground">
              La Vanguardia amplifica nuestro alcance. Fundación Fortius nos permite funcionar como institución de impacto social.
            </p>
          </div>

          <div className="reveal-stagger grid gap-8 sm:grid-cols-2">
            {PARTNERS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                style={{ transform: `rotate(${p.tilt})` }}
                className="pin-card block rounded-[20px] border border-border bg-card px-6 pb-6 pt-8 text-center"
              >
                <p className="font-mono text-2xs uppercase tracking-[0.14em] text-muted-foreground">
                  {p.label}
                </p>
                <p className="mt-4 font-serif text-sm leading-relaxed text-foreground">
                  {p.line}
                </p>
                <div className="mx-auto mt-5 h-px w-full border-t border-dotted border-border" />
                <p
                  className="notranslate mt-5 text-lg font-medium tracking-tight"
                  translate="no"
                >
                  {p.name}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
                  {p.cta} <span aria-hidden className="text-signal">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

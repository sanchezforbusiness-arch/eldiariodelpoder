import { useLanding, landingText } from "@/i18n/LandingContext";
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

const PARTNERS = [
  {
    href: "https://www.lavanguardia.com",
    tilt: "-2.2deg",
  },
];

export function PartnerStrip() {
  const { dict } = useLanding();
  return (
    <section aria-label={dict.partner.ariaLabel}>
      <div className="container-ddp py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal-stagger">
            <span className="inline-flex rounded-full bg-foreground px-3 py-1 font-mono text-2xs uppercase tracking-label text-background">
              {dict.partner.ariaLabel}
            </span>
            <h2 className="type-section mt-6 font-medium">
              {dict.partner.heading}
            </h2>
            <p className="mt-4 max-w-[44ch] text-sm text-muted-foreground">
              {dict.partner.description}
            </p>
          </div>

          <div className="reveal-stagger mx-auto w-full max-w-md">
            {PARTNERS.map((config, index) => {
              const p = { ...config, ...dict.partner.items[index] };
              return (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                style={{ transform: `rotate(${p.tilt})` }}
                className="pin-card block rounded-[20px] border border-border bg-card px-6 pb-6 pt-8 text-center"
              >
                <p className="font-mono text-2xs uppercase tracking-label text-muted-foreground">
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
                  {p.cta} <span aria-hidden className="text-signal">{dict.partner.arrow}</span>
                </span>
              </a>
            ); })}
          </div>
        </div>
      </div>
    </section>
  );
}

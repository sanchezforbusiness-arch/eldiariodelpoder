const BRANDS = [
  "Forbes",
  "La Vanguardia",
  "Telefónica",
  "Atlético de Madrid",
  "Osasuna",
  "EWTN",
  "Contents.com",
  "NoBrainer Partners",
  "SenYours",
  "Metlabs",
];

export function BrandsMarquee() {
  return (
    <section aria-label="Marcas colaboradoras" className="border-b border-border py-6">
      <div className="container-ddp">
        <p className="mono-label">Han colaborado</p>
      </div>
      <div className="mask-fade-x mt-4 overflow-hidden">
        <div className="marquee marquee-fast items-center">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="flex items-center gap-6 whitespace-nowrap px-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{b}</span>
              <span className="h-3 w-px bg-border" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

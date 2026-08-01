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
    <section aria-label="Marcas colaboradoras" className="border-b border-border py-10 md:py-14">
      <div className="container-ddp">
        <p className="mono-label">Han colaborado</p>
      </div>
      <div className="mask-fade-x mt-6 overflow-hidden">
        <div className="marquee items-center">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap px-8">
              <span className="text-[clamp(1.05rem,2vw,1.6rem)] font-medium tracking-[-0.03em] text-foreground/60 transition-colors hover:text-foreground">
                {b}
              </span>
              <span className="h-4 w-px bg-border" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const brands: { name: string; domain: string }[] = [
  { name: "Forbes", domain: "forbes.com" },
  { name: "La Vanguardia", domain: "lavanguardia.com" },
  { name: "Telefónica", domain: "telefonica.com" },
  { name: "Atlético de Madrid", domain: "atleticodemadrid.com" },
  { name: "Osasuna FC", domain: "osasuna.es" },
  { name: "EWTN", domain: "ewtn.com" },
  { name: "Contents.com", domain: "contents.com" },
  { name: "NoBrainer Partners", domain: "nobrainerpartners.com" },
  { name: "SenYours Consulting", domain: "senyoursconsulting.com" },
  { name: "Metalabs", domain: "metalabs.io" },
  { name: "Pateberg", domain: "pateberg.com" },
];

export function BrandsMarquee() {
  const loop = [...brands, ...brands];
  return (
    <section
      aria-label="Marcas que han colaborado con nosotros"
      className="relative py-16 md:py-24 border-t border-border bg-background overflow-hidden"
    >
      <div className="container-ddp mb-8 md:mb-12">
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-[0.36em] uppercase text-gold">Han confiado en nosotros</span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>

      <div className="relative overflow-hidden mask-fade-x">
        <div className="marquee gap-3 md:gap-4">
          {loop.map((b, i) => (
            <div
              key={i}
              className="group shrink-0 inline-flex items-center gap-3 md:gap-4 rounded-full border border-border bg-card/40 hover:bg-card hover:border-gold/50 transition-colors px-5 md:px-6 py-3 md:py-3.5"
            >
              <span
                aria-hidden
                className="relative w-7 h-7 md:w-8 md:h-8 rounded-full bg-background/60 overflow-hidden ring-1 ring-border grid place-items-center"
              >
                <img
                  src={`https://unavatar.io/${b.domain}?fallback=false`}
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                  }}
                />
              </span>
              <span className="font-serif text-base md:text-lg text-foreground/85 group-hover:text-gold transition-colors whitespace-nowrap">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

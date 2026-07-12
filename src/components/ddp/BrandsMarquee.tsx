import metlabsLogo from "@/assets/metlabs-logo.png.asset.json";

type Brand = { name: string; domain?: string; src?: string };

const brands: Brand[] = [
  { name: "Forbes", domain: "forbes.com" },
  { name: "La Vanguardia", domain: "lavanguardia.com" },
  { name: "Telefónica", domain: "telefonica.com" },
  { name: "Atlético de Madrid", domain: "atleticodemadrid.com" },
  { name: "Osasuna", domain: "osasuna.es" },
  { name: "EWTN", domain: "ewtn.com" },
  { name: "Contents.com", domain: "contents.com" },
  { name: "NoBrainer Partners", domain: "nobrainerpartners.com" },
  { name: "SenYours", domain: "senyoursconsulting.com" },
  { name: "Metlabs", src: metlabsLogo.url },
];

export function BrandsMarquee() {
  const loop = [...brands, ...brands, ...brands];
  return (
    <section
      aria-label="Marcas que han colaborado con nosotros"
      className="relative py-20 md:py-28 border-t border-border overflow-hidden"
    >
      {/* Header */}
      <div className="container-ddp mb-14 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="eyebrow block mb-4"><span className="dot-gold mr-2" />Colaboraciones</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.02] font-light tracking-[-0.02em]">
              Han confiado <span className="italic text-gold">en nosotros</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
            Marcas y medios que han caminado con Diario del Poder.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="mask-fade-x">
          <div className="marquee items-center gap-14 md:gap-20">
            {loop.map((b, i) => (
              <div
                key={i}
                className="group shrink-0 inline-flex items-center gap-3 h-10 md:h-12 opacity-70 hover:opacity-100 transition-opacity"
                title={b.name}
              >
                {b.src ? (
                  <img
                    src={b.src}
                    alt={b.name}
                    className="h-8 md:h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <img
                    src={`https://unavatar.io/${b.domain}?fallback=false`}
                    alt=""
                    aria-hidden
                    width={28}
                    height={28}
                    loading="lazy"
                    decoding="async"
                    className="h-7 w-7 md:h-8 md:w-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
                {!b.src && (
                  <span className="font-serif text-xl md:text-2xl text-foreground/70 group-hover:text-foreground transition-colors whitespace-nowrap tracking-[-0.01em]">
                    {b.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hairlines */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}

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
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Header */}
      <div className="container-ddp mb-12 md:mb-16">
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
          <div className="marquee items-center gap-16 md:gap-24">
            {loop.map((b, i) => (
              <div
                key={i}
                className="group shrink-0 inline-flex items-center gap-3 h-12 md:h-14"
                title={b.name}
              >
                {b.src ? (
                  <img
                    src={b.src}
                    alt={b.name}
                    className="h-9 md:h-11 w-auto object-contain brightness-100 contrast-100"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <img
                    src={`https://unavatar.io/${b.domain}?fallback=false`}
                    alt=""
                    aria-hidden
                    width={32}
                    height={32}
                    loading="lazy"
                    decoding="async"
                    className="h-8 w-8 md:h-9 md:w-9 object-contain opacity-90"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
                {!b.src && (
                  <span className="font-serif text-xl md:text-2xl text-foreground whitespace-nowrap tracking-[-0.01em]">
                    {b.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

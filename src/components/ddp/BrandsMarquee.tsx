type Brand = { name: string; logo?: string; url?: string };

/**
 * Añade la ruta del SVG/PNG en `logo` cuando se suban los archivos
 * (por ejemplo: logo: "/logos/forbes.svg"). Sin `logo`, se pinta el nombre.
 */
const BRANDS: Brand[] = [
  { name: "Forbes", logo: undefined },
  { name: "La Vanguardia", logo: undefined },
  { name: "Telefónica", logo: undefined },
  { name: "Atlético de Madrid", logo: undefined },
  { name: "Osasuna", logo: undefined },
  { name: "EWTN", logo: undefined },
  { name: "Contents.com", logo: undefined },
  { name: "NoBrainer Partners", logo: undefined },
  { name: "SenYours", logo: undefined },
  { name: "Metlabs", logo: undefined },
];

export function BrandsMarquee() {
  return (
 <section aria-label="Marcas colaboradoras" className="border-b border-border py-16 md:py-24">
      <div className="container-ddp">
        <p className="mono-label">Colaboradores</p>
      </div>
      <div className="mask-fade-x mt-8 overflow-hidden md:mt-10">
        <div className="marquee items-center">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="flex h-8 items-center gap-6 whitespace-nowrap px-6 md:gap-8 md:px-8">
              {b.logo ? (
                <img
                  src={b.logo}
                  alt={b.name}
                  loading="lazy"
                  decoding="async"
                  className="h-7 w-auto object-contain opacity-70 brightness-0 invert transition-opacity duration-300 hover:opacity-100 md:h-8"
                />
              ) : (
                <span className="text-lg font-medium tracking-tight opacity-60 transition-opacity duration-300 hover:opacity-100">
                  {b.name}
                </span>
              )}
              <span className="h-4 w-px bg-border" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

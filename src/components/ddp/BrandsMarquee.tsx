type Brand = { name: string; domain?: string };

/**
 * Marcas que han pasado por la mesa. El logotipo se resuelve por dominio;
 * si no carga, se queda el nombre (siempre visible).
 */
const BRANDS: Brand[] = [
  { name: "Forbes", domain: "forbes.es" },
  { name: "La Vanguardia", domain: "lavanguardia.com" },
  { name: "Telefónica", domain: "telefonica.com" },
  { name: "Atlético de Madrid", domain: "atleticodemadrid.com" },
  { name: "Osasuna", domain: "osasuna.es" },
  { name: "EWTN", domain: "ewtn.com" },
  { name: "Contents.com", domain: "contents.com" },
  { name: "NoBrainer Partners", domain: "nobrainer.partners" },
  { name: "SenYours", domain: "senyours.com" },
  { name: "Metlabs", domain: "metlabs.io" },
];

export function BrandMark({ domain, name, className = "" }: { domain?: string; name: string; className?: string }) {
  if (!domain) return null;
  return (
    <img
      src={`https://www.google.com/s2/favicons?sz=128&domain=${domain}`}
      alt=""
      aria-hidden
      loading="lazy"
      decoding="async"
      width={24}
      height={24}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
      className={`h-6 w-6 shrink-0 rounded-[6px] object-contain ${className}`}
      title={name}
    />
  );
}

export function BrandsMarquee() {
  return (
    <section aria-label="Marcas colaboradoras" className="section-pad">
      <div className="container-ddp">
        <p className="mono-label reveal">Nuestros colaboradores</p>
      </div>
      <div className="mask-fade-x mt-8 overflow-hidden md:mt-10">
        <div className="marquee items-center">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="flex h-10 items-center gap-8 whitespace-nowrap px-8 md:gap-10 md:px-10">
              <span className="flex items-center gap-3 opacity-70 transition-opacity duration-300 hover:opacity-100">
                <BrandMark domain={b.domain} name={b.name} />
                <span className="notranslate text-lg font-medium tracking-tight" translate="no">{b.name}</span>
              </span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-signal/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

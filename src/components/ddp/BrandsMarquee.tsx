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
    <section aria-label="Marcas colaboradoras" className="border-b border-border py-8 md:py-10">
      <div className="container-ddp">
        <p className="mono-label">Colaboradores</p>
      </div>
      <div className="mask-fade-x mt-8 overflow-hidden md:mt-10">
        <div className="marquee marquee-fast items-center md:animate-none md:[animation:marquee_38s_linear_infinite]">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="flex h-8 items-center gap-6 whitespace-nowrap px-6 md:gap-8 md:px-8">
              <span className="text-[clamp(1rem,2vw,1.6rem)] font-medium tracking-[-0.03em] opacity-60 transition-opacity duration-300 hover:opacity-100">
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

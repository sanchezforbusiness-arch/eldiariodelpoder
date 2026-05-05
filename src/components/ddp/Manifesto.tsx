import signing from "@/assets/bts-signing-pen.jpg";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 md:py-48 border-t border-border overflow-hidden">
      <img
        src={signing}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-20 ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="gold-glow float-slow w-[520px] h-[520px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      <div className="container-ddp relative">
        <div className="max-w-5xl mx-auto text-center reveal">
          <span className="eyebrow block mb-8">Manifiesto</span>
          <p className="font-serif font-light text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em]">
            Dejar un <span className="italic shimmer-gold">legado</span><br />
            para las futuras<br className="hidden md:block" /> generaciones.
          </p>
        </div>
      </div>

      <div className="relative mt-20 md:mt-28 overflow-hidden mask-fade-x">
        <div className="text-band">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center">
              {["Criterio", "Visión", "Influencia"].map((w) => (
                <span key={k + w} className="flex items-center">
                  <span className="text-band-item italic text-foreground/85">{w}</span>
                  <span className="text-band-dot" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

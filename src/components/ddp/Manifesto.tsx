import signing from "@/assets/bts-signing-pen.webp";

export function Manifesto() {
  return (
 <section id="manifesto" className="relative py-32 md:py-40 border-t border-border overflow-hidden">
      <img
        src={signing}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-20 ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="gold-glow float-slow w-[520px] h-[520px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      <div className="container-ddp relative">
        <div className="max-w-5xl mx-auto text-center reveal">
          <span className="eyebrow block mb-8">Manifiesto</span>
          <p className="font-serif font-light text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Aprender de quienes <span className="italic shimmer-gold">dejan huella</span>.<br />
            Contárselo a los que <br className="hidden md:block" />vienen detrás.
          </p>
        </div>
      </div>

    </section>
  );
}

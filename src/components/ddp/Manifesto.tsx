export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 md:py-48 border-t border-border overflow-hidden">
      <div className="gold-glow float-slow w-[520px] h-[520px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="container-ddp relative">
        <div className="max-w-4xl mx-auto text-center reveal">
          <span className="eyebrow block mb-8">Manifiesto</span>
          <p className="font-serif font-light text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.02em] text-foreground/90">
            Dejar un legado para las<br className="hidden md:block" /> futuras generaciones.
          </p>
          <p className="mt-10 font-serif italic text-2xl md:text-3xl text-gold">
            La voz del legado.
          </p>
        </div>
      </div>
    </section>
  );
}

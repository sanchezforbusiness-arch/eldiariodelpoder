export function PullQuote() {
  return (
    <section className="relative py-32 md:py-48 border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-card/40 via-background to-background pointer-events-none" />
      <div className="gold-glow float-slow w-[460px] h-[460px] -top-20 -left-20 opacity-60" />
      <div className="gold-glow float-slower w-[500px] h-[500px] -bottom-20 -right-20 opacity-50" />

      <div className="container-ddp relative">
        <div className="max-w-4xl mx-auto text-center reveal">
          <span className="font-serif text-7xl md:text-8xl text-gold/40 leading-none block">"</span>
          <p className="font-serif italic text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-foreground/95 -mt-4">
            No buscamos titulares.<br />
            Buscamos <span className="shimmer-gold not-italic">conversaciones</span><br />
            que duren.
          </p>
          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold">Diario del Poder</span>
            <span className="h-px w-10 bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
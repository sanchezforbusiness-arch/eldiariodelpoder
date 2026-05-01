export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-28 md:py-40 border-t border-border overflow-hidden">
      <div className="gold-glow float-slower w-[520px] h-[520px] -top-32 left-1/2 -translate-x-1/2 opacity-60" />
      <div className="container-ddp relative">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="accent-line w-8" />
            <span className="eyebrow">El Manifiesto</span>
            <span className="accent-line w-8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
            No hay nada como el <span className="italic shimmer-gold">Diario del Poder</span>.
          </h2>
          <p className="mt-6 font-serif italic text-base md:text-lg text-muted-foreground">
            Un manifiesto editorial.
          </p>
        </div>

        <div className="reveal mt-16 max-w-2xl mx-auto border-t border-b border-border/70 py-14 px-2 space-y-7 text-center">
          <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90">
            En España faltaba un sitio donde un expresidente, un CEO o un líder institucional se sentaran <em className="text-gold not-italic font-normal italic">sin guion ni prisa</em>, frente a alguien dispuesto a escucharles de verdad.
          </p>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90">
            Los grandes medios llegan tarde. Los podcasts generalistas no tienen acceso. Hacía falta <em className="text-gold not-italic font-normal italic">otra cosa.</em>
          </p>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90">
            El Diario del Poder es eso: conversaciones largas, hechas por una generación que pregunta distinto, con quienes ya han decidido — y con quienes van a decidir.
          </p>
        </div>

        <p className="mt-10 text-center text-[11px] tracking-[0.32em] uppercase text-gold/90">
          — Alejandro &amp; Víctor · Madrid · 2025
        </p>
      </div>
    </section>
  );
}
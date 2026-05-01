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
            Un manifiesto editorial. La línea que separa lo que somos de lo que está alrededor.
          </p>
        </div>

        <div className="reveal mt-16 max-w-2xl mx-auto border-t border-b border-border/70 py-14 px-2 space-y-7 text-center">
          <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90">
            España no tenía un espacio donde el poder hablara <em className="text-gold not-italic font-normal italic">en voz baja</em> y con criterio. Donde un expresidente, un CEO global y un líder institucional pudieran sentarse sin guion y sin prisa, frente a una generación que escucha de verdad.
          </p>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90">
            Los grandes medios llegan tarde y con el formato equivocado. Los podcasts generalistas no tienen acceso. Lo que existía era ruido. Lo que faltaba <em className="text-gold not-italic font-normal italic">somos nosotros.</em>
          </p>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90">
            El Diario del Poder es una <em className="text-gold not-italic font-normal italic">plataforma editorial premium</em>: conversaciones de fondo, criterio sobre titular, legado sobre tendencia. Hecho por una nueva generación, para hablar con quienes han decidido — y con quienes decidirán.
          </p>
        </div>

        <p className="mt-10 text-center text-[11px] tracking-[0.32em] uppercase text-gold/90">
          — Alejandro &amp; Víctor · Madrid · 2025
        </p>
      </div>
    </section>
  );
}
export function Avanguardia() {
  return (
    <section id="avanguardia" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      <div className="container-ddp relative">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="inline-flex items-center gap-2 border border-gold/50 px-4 py-1.5 mb-8">
            <span className="text-gold">⚑</span>
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold">Anuncio editorial</span>
          </div>
          <p className="eyebrow mb-4">Acuerdo cerrado · La Vanguardia</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
            El Diario del Poder se integra en <span className="italic shimmer-gold">La Vanguardia</span>.
          </h2>
        </div>

        <div className="mt-14 max-w-2xl mx-auto space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed text-center">
          <p>Es oficial: cerramos el acuerdo con <em className="text-foreground/90 italic">La Vanguardia</em>. Un salto que ningún podcast independiente en España había dado.</p>
          <p>El Diario se integra en una cabecera de referencia, con distribución, estudio y respaldo editorial a la altura del proyecto.</p>
          <p>Más alcance para los invitados, más visibilidad para la comunidad y, para los sponsors, asociar su marca <em className="text-foreground/90 italic">desde el primer capítulo</em> de esta etapa.</p>
        </div>

        <p className="mt-12 text-center font-serif italic text-2xl md:text-3xl text-gold">
          — No estamos creciendo. Estamos cambiando de liga.
        </p>
      </div>
    </section>
  );
}
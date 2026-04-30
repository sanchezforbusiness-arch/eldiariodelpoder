export function Avanguardia() {
  return (
    <section id="avanguardia" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      <div className="container-ddp relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-gold/50 px-4 py-1.5 mb-8">
            <span className="text-gold">⚑</span>
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold">Anuncio editorial</span>
          </div>
          <p className="eyebrow mb-4">Próximamente · La avanguardia</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
            Pronto en una <span className="italic text-gold">plataforma media</span> de primera línea.
          </h2>
        </div>

        <div className="mt-14 max-w-2xl mx-auto space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed text-center">
          <p>El Diario del Poder se prepara para un <em className="text-foreground/90 italic">salto editorial</em> que hasta hoy ningún podcast independiente español ha hecho.</p>
          <p>En las próximas semanas anunciaremos la integración del Diario en una plataforma media de referencia nacional, con distribución multimillonaria, infraestructura de estudio y respaldo editorial al nivel del contenido que producimos.</p>
          <p>Para nuestros invitados, significa entrar en una conversación de mayor alcance. Para nuestra comunidad, ver el Diario donde se ven las marcas que importan. Para nuestros sponsors, asociar su nombre <em className="text-foreground/90 italic">antes</em> de que el salto sea público.</p>
        </div>

        <p className="mt-12 text-center font-serif italic text-2xl md:text-3xl text-gold">
          — No estamos creciendo. Estamos cambiando de liga.
        </p>
      </div>
    </section>
  );
}
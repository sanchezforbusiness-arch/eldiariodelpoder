export function DosVoces() {
  return (
    <section id="voces" className="py-28 md:py-40 border-t border-border bg-card/30">
      <div className="container-ddp">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Dos voces · Una plataforma</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            La voz editorial y la voz sponsor <span className="italic text-gold">no se mezclan</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Lo editorial es nuestro. Las marcas acompañan, no entran.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background p-8 md:p-12">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-6">Voz I — Editorial</div>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 leading-snug">Conversaciones de fondo</h3>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>Nosotros elegimos los invitados y las preguntas.</p>
              <p>Aznar, Lasso, Duque, Aguirre, Martín Sellés.</p>
              <p className="text-foreground/85 italic font-serif">Tiempo, escucha y punto de vista.</p>
            </div>
          </div>
          <div className="bg-background p-8 md:p-12">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-6">Voz II — Sponsor</div>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 leading-snug">Marcas que acompañan</h3>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>El sponsor <em className="text-gold not-italic italic font-normal">rodea</em> la conversación. No la interrumpe.</p>
              <p>Una píldora trimestral y acceso a los dos eventos del año.</p>
              <p className="text-foreground/85 italic font-serif">No es publicidad. Es asociación.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
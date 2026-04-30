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
            La voz editorial y la voz sponsor se <span className="italic text-gold">respetan</span>. Y se distinguen.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            El Diario del Poder se construye sobre dos territorios claros que nunca se confunden: la línea editorial — independiente, sin guion comercial — y la línea sponsor — donde marcas con criterio se asocian al ecosistema sin contaminarlo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background p-8 md:p-12">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-6">Voz I — Editorial</div>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 leading-snug">Conversaciones de fondo</h3>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>Aquí mandamos nosotros. Elegimos los invitados, las preguntas, los silencios. Sin guion, sin patrocinio dentro del episodio, sin compromiso con nadie que no sea la conversación.</p>
              <p>Es la línea que ha sentado a Aznar, Guillermo Lasso, Iván Duque, Esperanza Aguirre o Martín Sellés frente a una generación que pregunta distinto.</p>
              <p className="text-foreground/85 italic font-serif">Es lo que un medio tradicional ya no sabe hacer: tiempo, escucha y criterio.</p>
            </div>
          </div>
          <div className="bg-background p-8 md:p-12">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-6">Voz II — Sponsor</div>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 leading-snug">Marcas con criterio</h3>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>El sponsor no entra dentro de la conversación: <em className="text-gold not-italic italic font-normal">la rodea.</em> Aparece en formatos pensados — Píldoras, eventos, presencia editorial — donde la marca aporta criterio, no ruido.</p>
              <p>Cada sponsor activo recibe acceso al doble evento anual, una píldora trimestral con su voz, y la presencia natural en el ecosistema editorial.</p>
              <p className="text-foreground/85 italic font-serif">El sponsor del Diario no compra inserciones. Compra asociación de prestigio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
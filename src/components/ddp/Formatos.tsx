const formats = [
  { t: "El Episodio Largo", tag: "Formato editorial flagship", d: "Conversaciones de 60–90 minutos sin guion ni interrupción comercial. El centro del ecosistema." },
  { t: "Las Píldoras", tag: "Cápsula breve", d: "Clips de 8–10 minutos by sponsor. Thought leadership con voz editorial DDP." },
  { t: "El Boletín del Poder", tag: "Newsletter", d: "Análisis semanal: lo que se ha dicho, lo que no se ha dicho y por qué importa. Para suscriptores del Club." },
  { t: "Los Encuentros", tag: "Off the record", d: "Las dos citas anuales del Diario — Madrid, formato cerrado, prensa cualificada. Networking C-suite real." },
  { t: "Las Series Especiales", tag: "Verticales temáticas", d: "Tandas curadas con un hilo común — España 2030, Liderazgo Femenino, Capital Cross-Border." },
];

export function Formatos() {
  return (
    <section id="formatos" className="py-28 md:py-40 border-t border-border">
      <div className="container-ddp">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Más allá del podcast</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            El Diario del Poder es más que <span className="italic text-gold">una hora</span> de conversación.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
          {formats.map((f) => (
            <article key={f.t} className="bg-background p-7 group hover:bg-card transition-colors">
              <div className="text-gold text-xl mb-4">★</div>
              <h3 className="font-serif text-lg md:text-xl leading-snug">{f.t}</h3>
              <p className="mt-2 text-[10px] tracking-[0.22em] uppercase text-gold/80">{f.tag}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
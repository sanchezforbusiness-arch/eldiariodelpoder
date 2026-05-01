const pillars = [
  { n: "I", t: "Perspectiva", d: "Conversaciones que duran." },
  { n: "II", t: "Invitados de verdad", d: "Han decidido cosas difíciles." },
  { n: "III", t: "Audiencia con propósito", d: "Vienen a aprender." },
  { n: "IV", t: "Producción cuidada", d: "Sin guion comercial." },
];

export function WhyDDP() {
  return (
    <section className="py-28 md:py-40 border-t border-border bg-card/30">
      <div className="container-ddp">
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line w-8" />
            <span className="eyebrow">Por qué DDP</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Lo que nos <span className="italic shimmer-gold">diferencia</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {pillars.map((p) => (
            <div key={p.n} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors">
              <div className="font-serif text-5xl text-gold/80 mb-8">{p.n}</div>
              <h3 className="font-serif text-2xl mb-4 leading-snug">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

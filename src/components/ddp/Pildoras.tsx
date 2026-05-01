const pildoras = [
  { n: "01", area: "Liderazgo & estrategia", by: "by SenYours", t: "Marca, criterio y rumbo.", d: "Cómo el CEO se convierte en interfaz de la marca y vector de criterio en momentos de transformación." },
  { n: "02", area: "M&A & growth", by: "by NoBrainer Partners", t: "Operaciones que cambian compañías.", d: "Lectura cualificada de los movimientos M&A que están marcando España e Italia." },
  { n: "03", area: "Patrimonios & legal", by: "by Le Jeune", t: "Estructurar el legado.", d: "Family offices, sucesiones, gobierno corporativo: la arquitectura legal y patrimonial del poder bien construido." },
  { n: "04", area: "Tecnología & futuro", by: "by Metalabs", t: "El siguiente sistema.", d: "Conversaciones cortas sobre la tecnología que está reescribiendo cómo trabajan, deciden y crecen las empresas." },
  { n: "05", area: "Capital privado", by: "by Pateberg", t: "El dinero que decide.", d: "Inversión privada, family offices, ventures: dónde se está formando hoy el capital que sostendrá la próxima década." },
  { n: "06", area: "Próxima vertical", by: "+ and more", t: "Píldora abierta.", d: "Para una nueva área editorial. Industrias estratégicas, lujo, energía, comunicación institucional." },
];

export function Pildoras() {
  return (
    <section id="pildoras" className="py-28 md:py-40 border-t border-border bg-card/30">
      <div className="container-ddp">
        <div className="max-w-3xl mb-16 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line w-8" />
            <span className="eyebrow">Píldoras del Poder</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Ideas grandes, en <span className="italic shimmer-gold">formato corto</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Clips de 8–10 minutos donde una marca aliada habla de su terreno, con el lenguaje y la producción del Diario. Una píldora trimestral por sponsor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {pildoras.map((p) => (
            <article key={p.n} className="bg-background p-8 group hover:bg-card transition-colors">
              <div className="flex items-baseline justify-between mb-5">
                <span className="text-[11px] tracking-[0.3em] uppercase text-gold">{p.n}</span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground italic">{p.by}</span>
              </div>
              <h3 className="font-serif text-xl md:text-2xl leading-snug">{p.area}</h3>
              <p className="mt-3 font-serif italic text-foreground/85">{p.t}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
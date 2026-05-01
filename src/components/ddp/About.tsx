const pillars = [
  { n: "01", t: "Invitados de primer nivel", d: "Expresidentes, CEOs, deportistas y artistas." },
  { n: "02", t: "Sin guion", d: "Sin prisa. Sin atajos." },
  { n: "03", t: "Audiencia con propósito", d: "Profesionales que vienen a aprender." },
  { n: "04", t: "Producción cuidada", d: "En todas las plataformas." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">
      <div className="container-ddp relative">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow block mb-6">Quiénes somos</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light">
              ¿Qué es <span className="italic text-gold">Diario<br />del Poder</span>?
            </h2>
          </div>

          <div className="md:col-span-7 reveal">
            <p className="text-xl md:text-2xl text-foreground/85 leading-snug font-light">
              Donde los que deciden se sientan a hablar con quienes vienen a escuchar.
            </p>

            <div className="mt-10 h-px bg-border" />

            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-10">
              {pillars.map((p) => (
                <div key={p.n}>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[10px] tracking-[0.22em] uppercase text-gold/80">{p.n}</span>
                    <h3 className="font-serif text-xl md:text-2xl leading-tight">{p.t}</h3>
                  </div>
                  <p className="mt-2 ml-8 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>

            <p className="mt-14 font-serif italic text-xl md:text-2xl text-foreground/80 leading-snug max-w-xl">
              "El poder de verdad no grita. Decide bien y sostiene una visión durante años."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

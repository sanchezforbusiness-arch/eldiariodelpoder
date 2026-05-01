const points = [
  { k: "01", t: "Invitados de primer nivel", d: "Expresidentes, CEOs y líderes." },
  { k: "02", t: "Sin guion", d: "Sin prisa. Sin atajos." },
  { k: "03", t: "Audiencia con propósito", d: "Profesionales que vienen a aprender." },
  { k: "04", t: "Producción cuidada", d: "En todas las plataformas." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <div className="gold-glow float-slow w-[480px] h-[480px] top-10 -left-32 opacity-50" />
      <div className="container-ddp relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="accent-line w-8" />
              <span className="eyebrow">Quiénes somos</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              ¿Qué es <span className="italic shimmer-gold">Diario del Poder</span>?
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8 reveal">
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed font-light">
              Donde los que deciden se sientan a hablar con quienes vienen a escuchar.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 pt-8 border-t border-border">
              {points.map((p) => (
                <div key={p.k}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-gold font-serif text-sm">{p.k}</span>
                    <h3 className="font-serif text-xl">{p.t}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-7">{p.d}</p>
                </div>
              ))}
            </div>

            <p className="pt-6 font-serif italic text-xl md:text-2xl text-foreground/90 leading-snug">
              "El poder de verdad no grita. Decide bien y sostiene una visión durante años."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

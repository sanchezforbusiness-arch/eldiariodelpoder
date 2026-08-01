const FAQ = [
  {
    q: "¿Qué es Diario del Poder?",
    a: "Diario del Poder es un medio español de entrevistas de liderazgo fundado en 2025 por Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés. La Vanguardia es su media partner oficial.",
  },
  {
    q: "¿A quién entrevista Diario del Poder?",
    a: "A jefes de Estado, expresidentes, CEOs de grandes compañías y altos directivos. Entre ellos José María Aznar, Guillermo Lasso, Marcos de Quinto, Jordi Juan y Esperanza Aguirre.",
  },
  {
    q: "¿Cuál es el partnership con La Vanguardia?",
    a: "La Vanguardia publica y distribuye entrevistas de Diario del Poder como media partner oficial del proyecto.",
  },
  {
    q: "¿Cómo contactar con Diario del Poder?",
    a: "Escribiendo a contactoeldiariodelpoder@gmail.com para prensa, patrocinios o propuestas de invitados.",
  },
];

export function FaqBand() {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="container-ddp">
        <div className="flex gap-8">
          <span className="section-index pt-2">09</span>
          <h2 className="text-[9vw] font-medium leading-[0.92] tracking-[-0.035em] sm:text-[5.5vw] lg:text-[3.6vw]">
            Preguntas
          </h2>
        </div>
        <dl className="mt-12 border-t border-border">
          {FAQ.map((f) => (
            <div key={f.q} className="grid gap-4 border-b border-border py-8 md:grid-cols-12">
              <dt className="mono-label md:col-span-4">{f.q}</dt>
              <dd className="prose-editorial md:col-span-8">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
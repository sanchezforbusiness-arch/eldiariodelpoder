const FAQ = [
  {
    q: "¿Qué es Diario del Poder?",
    a: "Un podcast de entrevistas largas, fundado en 2025 en Madrid por Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de Andrés. La Vanguardia es nuestro media partner.",
  },
  {
    q: "¿A quién entrevistáis?",
    a: "Presidentes, CEOs y referentes. Han pasado José María Aznar, Guillermo Lasso, Marcos de Quinto, Jordi Juan o Esperanza Aguirre.",
  },
  {
    q: "¿Dónde se escucha?",
    a: "En YouTube y en Spotify, completo y sin recortes. También publicamos entrevistas con La Vanguardia.",
  },
  {
    q: "¿Cómo os escribo?",
    a: "A redaccion@eldiariodelpoder.com: prensa, patrocinios o propuestas de invitados. Leemos todo.",
  },
];

export function FaqBand() {
  return (
 <section className="border-b border-border py-16 md:py-32">
      <div className="container-ddp">
        <h2 className="font-serif text-2xl font-light leading-[0.95] tracking-tight">Preguntas frecuentes</h2>
        <dl className="mt-10 border-t border-border">
          {FAQ.map((f) => (
            <div key={f.q} className="grid gap-3 border-b border-border py-7 md:grid-cols-12 md:gap-8">
              <dt className="text-sm font-medium tracking-tight md:col-span-4 md:text-base">{f.q}</dt>
              <dd className="prose-editorial md:col-span-8">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
import type { ReactNode } from "react";

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "¿Qué es Diario del Poder?",
    a: (
      <>
        Un podcast de entrevistas largas, fundado en 2025 en Madrid por{" "}
        <a
          href="https://alejandrosanchezmartinez.com"
          rel="me noreferrer"
          className="transition-colors hover:text-signal"
        >
          Alejandro Sánchez Martínez
        </a>{" "}
        y Víctor Hugo Gandarilla de Andrés. La Vanguardia es nuestro media partner.
      </>
    ),
  },
  {
    q: "¿Quién está detrás?",
    a: (
      <>
        Una redacción independiente con respaldo institucional de la{" "}
        <a
          href="https://fortiusfoundation.org"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-signal"
        >
          Fundación Fortius
        </a>
        , cuyo presidente, Juan Ángel Soto, forma parte de nuestro patronato. Eso nos
        permite trabajar con horizonte largo y sin depender del clic.
      </>
    ),
  },
  {
    q: "¿A quién entrevistáis?",
    a: "A quien ha tenido que decidir: jefes de Estado, presidentes, CEOs y referentes. Han pasado José María Aznar, Guillermo Lasso, Marcos de Quinto, Jordi Juan o Esperanza Aguirre.",
  },
  {
    q: "¿Dónde se escucha?",
    a: "En YouTube y en Spotify, completo y sin recortes. También publicamos entrevistas con La Vanguardia.",
  },
  {
    q: "¿Cómo os escribo?",
    a: "A redaccion@eldiariodelpoder.com: prensa, patrocinios o propuestas de invitados. Leemos todo y contestamos.",
  },
];

export function FaqBand() {
  return (
    <section className="border-b border-border py-16 md:py-32">
      <div className="container-ddp">
        <div className="flex items-baseline gap-6">
          <h2 className="font-serif text-2xl font-light leading-[0.95] tracking-tight">
            Preguntas frecuentes
          </h2>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </div>

        <dl className="mt-10 border-t border-border">
          {FAQ.map((f, i) => (
            <div
              key={f.q}
              className="group grid gap-3 border-b border-border py-7 transition-colors duration-300 md:grid-cols-12 md:gap-8"
            >
              <dt className="flex items-start gap-4 md:col-span-4">
                <span className="mono-label mt-1 shrink-0 transition-colors duration-300 group-hover:text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium tracking-tight md:text-base">{f.q}</span>
              </dt>
              <dd className="prose-editorial md:col-span-8">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

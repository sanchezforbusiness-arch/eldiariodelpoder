import { faqSchema } from "@/data/faqSchema";
import type { ReactNode } from "react";

const FAQ: { q: string; a: ReactNode }[] = faqSchema.mainEntity.map((question, index) => ({
    q: question.name,
    a: index === 0 ? (
      <>
        Un podcast en español de entrevistas largas con expresidentes, CEOs y referentes, fundado en 2025 en Madrid por{" "}
        <a
          href="https://alejandrosanchezmartinez.com"
          rel="me noreferrer"
          className="transition-colors hover:text-signal"
        >
          Alejandro Sánchez Martínez
        </a>{" "}
        y Víctor Hugo Gandarilla de Andrés. La Vanguardia es nuestro media partner.
      </>
    ) : question.acceptedAnswer.text,
}));

export function FaqBand() {
  return (
    <section className="section-pad">
      <div className="container-ddp">
        <h2 className="reveal font-serif text-2xl font-light leading-[0.95] tracking-tight">
          Preguntas frecuentes
        </h2>

        <dl className="reveal-stagger mt-10 grid gap-3 md:mt-12 md:gap-4">
          {FAQ.map((f, i) => (
            <div
              key={f.q}
              className="card-clean group grid gap-3 rounded-[20px] bg-card px-6 py-7 md:grid-cols-12 md:gap-8 md:px-8 md:py-8"
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

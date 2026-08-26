import { Link } from "@tanstack/react-router";

const LEAD =
  "Las decisiones que cambian un país no se explican en un titular. Grabamos la conversación entera y la publicamos sin recortes.";

const BLOCKS = [
  "Preguntamos lo que se pregunta en privado y no editamos la respuesta incómoda.",
  "Nos interesa cómo se decide bajo presión y qué queda cuando el cargo termina.",
  "Sin guion, sin recortes, sin favores.",
];

export function ManifestoBand() {
  return (
 <section className="invert-section border-b border-border py-20 md:py-40">
      <div className="container-ddp">
        <h2 className="reveal text-2xl leading-[0.95] tracking-tight">Manifiesto</h2>

        <div aria-hidden className="rule-draw reveal mt-10 bg-[#E5342A]" />

        <p className="reveal mt-10 max-w-[24ch] text-xl font-semibold leading-[1.1] tracking-tight md:text-2xl">
          {LEAD}
        </p>

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
          {BLOCKS.map((text) => (
            <p
              key={text}
              className="reveal max-w-[24ch] text-xl font-semibold leading-[1.1] tracking-tight md:text-2xl"
            >
              {text}
            </p>
          ))}
        </div>

        <Link
          to="/manifiesto"
          className="link-rule tap reveal mt-12 inline-flex items-center font-mono text-2xs uppercase tracking-label"
        >
          Leer el manifiesto
        </Link>
      </div>
    </section>
  );
}

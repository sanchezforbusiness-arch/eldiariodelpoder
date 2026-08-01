import { Link } from "@tanstack/react-router";

export function ManifestoBand() {
  return (
    <section className="invert-section border-b border-border py-20 md:py-32">
      <div className="container-ddp">
        <div className="flex gap-8">
          <span className="section-index pt-2">05</span>
          <h2 className="text-[9vw] font-medium leading-[0.9] tracking-[-0.035em] sm:text-[5.5vw] lg:text-[3.6vw]">
            Manifiesto
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-16">
          <div className="prose-editorial">
            <p>
              Preguntamos lo que se pregunta en privado. Sin recortes de minuto y medio,
              sin titulares fabricados. Una conversación dura lo que tiene que durar.
            </p>
            <p className="mt-6">
              Los invitados llegan sin cuestionario previo. Lo que dicen queda tal cual
              se dijo.
            </p>
          </div>
          <div className="prose-editorial">
            <p>
              Nos interesa cómo se decide bajo presión, qué se aprende cuando se pierde y
              qué queda cuando el cargo termina.
            </p>
            <p className="mt-6">
              Grabado en Madrid por Alejandro Sánchez Martínez y Víctor Hugo Gandarilla de
              Andrés.
            </p>
            <Link to="/manifiesto" className="link-rule mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.12em]">
              Leer el manifiesto completo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

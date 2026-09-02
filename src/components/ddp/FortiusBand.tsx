const FACTS = [
  { k: "Constituida", v: "Madrid, 2023" },
  { k: "Registro", v: "n.º 3033JUS" },
  { k: "Protectorado", v: "Ministerio de Justicia" },
  { k: "Sedes", v: "Madrid · Washington DC" },
];

/**
 * Respaldo institucional. Datos verificables tomados del dosier
 * institucional de la Fundación Fortius. Sin cifras inventadas.
 */
export function FortiusBand() {
  return (
    <section aria-labelledby="fortius-title" className="border-b border-border">
      <div className="container-ddp py-16 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="reveal md:col-span-5">
            <p className="mono-label">Respaldo institucional</p>
            <h2
              id="fortius-title"
              className="mt-5 font-serif text-2xl font-light leading-[0.95] tracking-tight"
            >
              Fundación Fortius
            </h2>
            <a
              href="https://fortiusfoundation.org"
              target="_blank"
              rel="noreferrer"
              className="link-rule tap mt-6 inline-flex font-mono text-2xs uppercase tracking-label"
            >
              fortiusfoundation.org
              <span aria-hidden className="text-signal">↗</span>
            </a>
          </div>

          <div className="reveal md:col-span-7">
            <p className="text-lg font-medium leading-[1.15] tracking-tight md:text-xl">
              Tenemos una alianza con la Fundación Fortius.
            </p>
            <p className="prose-editorial mt-6">
              La Fundación Fortius es una <em>grant-making foundation</em> e incubadora
              constituida en Madrid en 2023, con entidad propia en Washington DC. Trabaja
              con quienes entienden el liderazgo como servicio y quieren construir legado,
              no solo presencia. Ese es también nuestro encargo: dejar por escrito —y en
              vídeo— cómo se decide cuando decidir es caro.
            </p>

            <dl className="mt-10 grid grid-cols-2 border-t border-border md:grid-cols-4">
              {FACTS.map((f, i) => (
                <div
                  key={f.k}
                  className={[
                    "flex flex-col gap-2 border-b border-border py-5 pr-4",
                    i % 2 === 1 ? "border-l pl-4" : "",
                    "md:border-b-0 md:py-6",
                    i === 0 ? "md:border-l-0 md:pl-0" : "md:border-l md:pl-5",
                  ].join(" ")}
                >
                  <dt className="mono-label">{f.k}</dt>
                  <dd className="tabular font-sans text-sm font-medium tracking-tight">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

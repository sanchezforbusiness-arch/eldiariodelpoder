import { Link } from "@tanstack/react-router";

const LEAD =
  "Somos el medio donde los mayores referentes del mundo dejan su legado a las futuras generaciones.";

const BLOCKS = [
  "Queremos comprender quién es la persona detrás del personaje que todos conocen.",
  "Reivindicamos el sentido del poder: no como fuerza, sino como la capacidad de influir positivamente en la sociedad.",
];

export function ManifestoBand() {
  return (
    <section className="section-pad-lg">
      <div className="container-ddp">
        <h2 className="reveal font-serif text-2xl font-light leading-[0.95] tracking-tight">Manifiesto</h2>

        <p className="reveal mt-10 max-w-[26ch] text-xl font-semibold leading-[1.1] tracking-tight md:mt-14 md:text-2xl">
          {LEAD}
        </p>

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
          {BLOCKS.map((text) => (
            <p
              key={text}
              className="reveal max-w-[26ch] text-xl font-semibold leading-[1.1] tracking-tight md:text-2xl"
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

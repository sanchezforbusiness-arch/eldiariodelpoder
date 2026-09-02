const BLOCKS = [
  "Somos el medio donde los mayores referentes del mundo dejan su legado a las futuras generaciones.",
  "Queremos comprender quién es la persona detrás del personaje que todos conocen.",
  "Reivindicamos el sentido del poder: no como fuerza, sino como la capacidad de influir positivamente en la sociedad.",
];

export function Manifesto() {
  return (
    <section id="manifesto" className="section-pad-lg relative overflow-hidden">
      <div className="container-ddp relative">
        <div className="max-w-4xl space-y-12 md:space-y-20">
          {BLOCKS.map((text) => (
            <p
              key={text}
              className="reveal font-serif text-2xl font-light leading-[1.1] tracking-tight md:text-display md:leading-[1.02]"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

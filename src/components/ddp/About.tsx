export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">
      <div className="container-ddp relative">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow block mb-6">Qué hacemos</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light">
              Conversaciones <span className="italic text-gold">largas</span>.<br />
              Sin prisa.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 reveal">
            <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-snug">
              Cada semana nos sentamos con alguien que ha tomado decisiones que importan.
            </p>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Presidentes, CEOs, fundadores. Les preguntamos lo que nadie pregunta y les damos tiempo para responder. Hecho desde Madrid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

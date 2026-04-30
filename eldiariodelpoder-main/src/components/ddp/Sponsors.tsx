const sponsors = ["Metlabs", "Senyours Consulting", "Nobrainer", "Pateberg"];
const partners = ["Forbes España", "La Vanguardia"];

export function Sponsors() {
  return (
    <section id="sponsors" className="py-28 md:py-40">
      <div className="container-ddp space-y-24">
        <div>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Colaboradores</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center leading-tight max-w-3xl mx-auto">
            Marcas que comparten nuestra visión de <span className="italic text-gold">prestigio y criterio</span>.
          </h2>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {sponsors.map((s) => (
              <div
                key={s}
                className="bg-background py-12 px-6 flex items-center justify-center text-center group hover:bg-card transition-colors"
              >
                <span className="font-serif text-xl md:text-2xl text-muted-foreground group-hover:text-gold transition-colors">
                  {s}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:contactoeldiariodelpoder@gmail.com"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-gold border-b border-gold/40 hover:border-gold pb-1 transition-colors"
            >
              ¿Quieres colaborar con nosotros? →
            </a>
          </div>
        </div>

        <div className="gold-divider" />

        <div>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Media Partners</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <p className="font-serif text-xl md:text-2xl text-center max-w-2xl mx-auto text-foreground/85 leading-snug">
            Trabajamos con los medios más respetados para llevar conversaciones de calidad.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-12 md:gap-20">
            {partners.map((p) => (
              <span key={p} className="font-serif text-2xl md:text-3xl text-muted-foreground hover:text-gold transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

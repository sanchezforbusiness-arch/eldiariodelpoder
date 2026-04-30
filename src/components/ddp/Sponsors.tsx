const sponsors = [
  { name: "NoBrainer Partners", tag: "M&A · Advisory" },
  { name: "Le Jeune Asesores & Economistas", tag: "Legal · Patrimonios" },
  { name: "Pateberg", tag: "Capital privado" },
  { name: "SenYours Consulting", tag: "Estrategia · Marca" },
  { name: "Metalabs", tag: "Tecnología" },
];
const partners = ["Forbes España", "La Vanguardia", "ABC"];
const indirect = [
  { t: "Menciones editoriales", d: "Forbes, La Vanguardia, ABC y prensa especializada han hablado del Diario en T1." },
  { t: "Acceso C-suite", d: "Cada episodio abre la puerta a una red de C-Level — sponsors invitados a la mesa antes de la grabación." },
  { t: "Alcance LinkedIn", d: "Los invitados comparten el episodio en sus redes. Multiplicador medio: 3,5× sobre la audiencia base." },
  { t: "Doble evento anual", d: "120–150 asistentes presenciales en cada cita, prensa especializada y derivadas en formato vídeo / píldora." },
  { t: "Forbes House & ecosistema", d: "Asociación natural a la red Forbes Spain Media y futuras integraciones con plataforma media nacional." },
];

export function Sponsors() {
  return (
    <section id="sponsors" className="py-28 md:py-40">
      <div className="container-ddp space-y-24">
        <div>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Aliados editoriales</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center leading-tight max-w-3xl mx-auto">
            Marcas con <span className="italic text-gold">criterio</span> asociadas al ecosistema.
          </h2>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="bg-background py-10 px-5 flex flex-col items-center justify-center text-center group hover:bg-card transition-colors min-h-[140px]"
              >
                <span className="font-serif text-lg md:text-xl text-foreground/85 group-hover:text-gold transition-colors leading-tight">
                  {s.name}
                </span>
                <span className="mt-2 text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{s.tag}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm italic text-muted-foreground">
            + and more → <span className="text-gold/90">Cupos abiertos para nuevos aliados</span>
          </p>

          {/* Lo que no se ve en los KPIs */}
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <span className="h-px w-6 bg-gold/60" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-gold/90">El valor que no se mide en métricas</span>
              <span className="h-px w-6 bg-gold/60" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {indirect.map((i) => (
                <div key={i.t} className="border border-border p-6 hover:border-gold/40 transition-colors">
                  <div className="text-gold mb-3">★</div>
                  <h4 className="font-serif text-lg leading-snug mb-2">{i.t}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{i.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:contactoeldiariodelpoder@gmail.com?subject=Solicitar%20Media%20Kit%20—%20Diario%20del%20Poder"
              className="inline-flex items-center gap-2 px-6 py-3 text-[12px] tracking-[0.22em] uppercase border border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all"
            >
              Solicitar Media Kit →
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

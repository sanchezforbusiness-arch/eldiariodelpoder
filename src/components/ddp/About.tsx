import founderAlejandro from "@/assets/founder-alejandro.webp";
import founderVictor from "@/assets/founder-victor.webp";

const pillars = [
  { n: "01", t: "Conversación", d: "Sin guion. Sin prisa." },
  { n: "02", t: "Invitados", d: "Los que marcan el paso." },
  { n: "03", t: "Producción", d: "Cuidada, palabra a palabra." },
];

export function About() {
  return (
 <section id="about" className="relative py-24 md:py-32 overflow-hidden border-t border-border">
      <div className="container-ddp relative">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-stretch">
          <div className="md:col-span-6 reveal">
            <span className="eyebrow block mb-7">Quiénes somos</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.98] font-light tracking-tight">
              Quienes <span className="italic text-gold">deciden</span>,<br />
              hablando en primera persona.
            </h2>

            <p className="mt-10 text-base md:text-sm text-muted-foreground max-w-xl leading-[1.75]">
              Presidentes, fundadores y líderes que casi nunca se sientan a contar su versión. Aquí lo hacen. Sin guion.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 reveal-stagger">
              {pillars.map((p) => (
                <div key={p.n} className="border-t border-border pt-4">
                  <span className="text-2xs tracking-label uppercase text-gold/80">{p.n}</span>
                  <h3 className="font-serif text-xl md:text-2xl mt-2">{p.t}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 relative reveal">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="relative aspect-[3/4] overflow-hidden hover-cinema mt-10">
                <img
                  src={founderAlejandro}
                  alt="Alejandro — fundador de Diario del Poder"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-2xs tracking-label uppercase text-gold/90">Fundador</p>
                  <p className="font-serif text-xl mt-1">Alejandro</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden hover-cinema">
                <img
                  src={founderVictor}
                  alt="Víctor — fundador de Diario del Poder"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-2xs tracking-label uppercase text-gold/90">Fundador</p>
                  <p className="font-serif text-xl mt-1">Víctor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

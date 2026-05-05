import bts from "@/assets/bts-aznar-dialogos.jpg";

const pillars = [
  { n: "01", t: "Invitados", d: "Presidentes. CEOs. Referentes." },
  { n: "02", t: "Sin guion", d: "Sin prisa. Sin titulares." },
  { n: "03", t: "Producción", d: "Cuidada hasta el último detalle." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">
      <div className="container-ddp relative">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-stretch">
          <div className="md:col-span-6 reveal">
            <span className="eyebrow block mb-6">Quiénes somos</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.98] font-light">
              Donde los que <span className="italic text-gold">deciden</span><br />
              se sientan a hablar.
            </h2>

            <div className="mt-12 grid grid-cols-3 gap-6 reveal-stagger">
              {pillars.map((p) => (
                <div key={p.n} className="border-t border-border pt-4">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-gold/80">{p.n}</span>
                  <h3 className="font-serif text-xl md:text-2xl mt-2">{p.t}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 relative reveal">
            <div className="relative aspect-[4/5] overflow-hidden hover-cinema">
              <img
                src={bts}
                alt="Aznar firmando — Diálogos FAES"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] tracking-[0.28em] uppercase text-gold/90">Diálogos FAES</p>
                <p className="font-serif text-2xl md:text-3xl mt-1 leading-tight">José María Aznar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

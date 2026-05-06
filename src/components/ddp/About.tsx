import founderAlejandro from "@/assets/founder-alejandro.jpg";
import founderVictor from "@/assets/founder-victor.jpg";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden border-t border-border">
      <div className="container-ddp relative">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-stretch">
          <div className="md:col-span-6 reveal">
            <span className="eyebrow block mb-6">Quiénes somos</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.98] font-light tracking-[-0.025em]">
              Donde los que <span className="italic text-gold">deciden</span><br />
              se sientan a hablar.
            </h2>

            <p className="mt-7 text-base md:text-[1.05rem] text-muted-foreground max-w-xl leading-[1.7]">
              Diario del Poder es el podcast de referencia sobre liderazgo, empresa y política en España.
              Sentamos frente al micrófono a las personas que toman las decisiones — y dejamos que hablen.
            </p>
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
                  <p className="text-[10px] tracking-[0.28em] uppercase text-gold/90">Fundador</p>
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
                  <p className="text-[10px] tracking-[0.28em] uppercase text-gold/90">Fundador</p>
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

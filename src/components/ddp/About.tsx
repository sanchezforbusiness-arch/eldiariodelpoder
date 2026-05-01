export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <div className="gold-glow float-slow w-[480px] h-[480px] top-10 -left-32 opacity-50" />
      <div className="container-ddp relative">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="accent-line w-8" />
            <span className="eyebrow">Diario del Poder</span>
            <span className="accent-line w-8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
            Donde los que <span className="italic shimmer-gold">deciden</span> se sientan a hablar.
          </h2>
          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Conversaciones largas, sin guion, con expresidentes, CEOs y líderes
            institucionales. Hecho desde Madrid por una nueva generación.
          </p>
        </div>
      </div>
    </section>
  );
}

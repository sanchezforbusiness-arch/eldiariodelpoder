const phrases = [
  "La voz del legado",
  "Diario del Poder",
  "Conversaciones sin guion",
  "Madrid",
  "Presidentes · CEOs · Fundadores",
  "Podcast",
];

export function Ticker() {
  const loop = [...phrases, ...phrases, ...phrases];
  return (
    <section
      aria-hidden
      className="relative py-8 md:py-10 border-y border-border bg-card/30 overflow-hidden"
    >
      <div className="ticker">
        {loop.map((p, i) => (
          <span key={i} className="inline-flex items-center gap-10">
            <span className="font-serif italic text-3xl md:text-5xl lg:text-6xl leading-none font-light text-foreground/85 whitespace-nowrap">
              {p}
            </span>
            <span className="dot-gold" />
          </span>
        ))}
      </div>
    </section>
  );
}

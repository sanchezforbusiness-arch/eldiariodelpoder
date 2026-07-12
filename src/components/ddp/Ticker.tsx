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
      className="relative py-8 md:py-10 border-y border-border bg-card/30 overflow-hidden mask-fade-x"
    >
      <div className="ticker">
        {loop.map((p, i) => (
          <span key={i} className="inline-flex items-center gap-10">
            <span className="font-display italic text-4xl md:text-6xl lg:text-7xl leading-none font-light text-foreground/85 whitespace-nowrap">
              {p}
            </span>
            <span className={i % 2 === 0 ? "dot-gold" : "dot-gold"} style={i % 3 === 0 ? { background: "var(--color-ice)", boxShadow: "0 0 0 4px color-mix(in oklab, var(--color-ice) 18%, transparent)" } : undefined} />
          </span>
        ))}
      </div>
    </section>
  );
}

interface MarqueeBandProps {
  /** Phrase to repeat across the band */
  text?: string;
  /** Visual variant — solid gold band like Aladetres, or subtle outline-text band */
  variant?: "solid" | "outline";
  /** Optional star/separator glyph between repetitions */
  separator?: string;
}

/**
 * Edge-to-edge horizontal marquee used as a divider between sections.
 * Inspired by Aladetres' repeating brand strip and DOAC's bold typography.
 */
export function MarqueeBand({
  text = "Diario del Poder",
  variant = "outline",
  separator = "✦",
}: MarqueeBandProps) {
  // Repeat content enough times so the -50% translate animation loops seamlessly
  const items = Array.from({ length: 10 }, (_, i) => i);

  if (variant === "solid") {
    return (
      <div className="relative w-full overflow-hidden bg-gold text-gold-foreground py-4 md:py-5 border-y border-gold">
        <div className="marquee whitespace-nowrap">
          {items.map((i) => (
            <span
              key={`a-${i}`}
              className="font-serif italic text-2xl md:text-4xl px-6 md:px-10 inline-flex items-center gap-6 md:gap-10"
            >
              {text}
              <span className="not-italic text-base md:text-xl opacity-70">{separator}</span>
            </span>
          ))}
          {items.map((i) => (
            <span
              key={`b-${i}`}
              className="font-serif italic text-2xl md:text-4xl px-6 md:px-10 inline-flex items-center gap-6 md:gap-10"
              aria-hidden="true"
            >
              {text}
              <span className="not-italic text-base md:text-xl opacity-70">{separator}</span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden border-y border-border/60 bg-background py-6 md:py-8 mask-fade-x">
      <div className="marquee whitespace-nowrap">
        {items.map((i) => (
          <span
            key={`a-${i}`}
            className="font-serif text-4xl md:text-6xl lg:text-7xl px-6 md:px-10 inline-flex items-center gap-6 md:gap-10 text-foreground/15 hover:text-gold/70 transition-colors"
          >
            {text}
            <span className="text-gold/70 text-2xl md:text-3xl">{separator}</span>
          </span>
        ))}
        {items.map((i) => (
          <span
            key={`b-${i}`}
            className="font-serif text-4xl md:text-6xl lg:text-7xl px-6 md:px-10 inline-flex items-center gap-6 md:gap-10 text-foreground/15"
            aria-hidden="true"
          >
            {text}
            <span className="text-gold/70 text-2xl md:text-3xl">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
const names = [
  "José María Aznar",
  "Guillermo Lasso",
  "Javier Tebas",
  "Andrés Rodríguez",
  "Iván Duque",
  "Martín Sellés",
  "Esperanza Aguirre",
  "Mikel Echavarren",
  "Federica I. Fornaciari",
];

/**
 * Bold scrolling band of guest names. Inspired by Diary of a CEO's
 * oversized typographic marquees that signal scale and credibility.
 */
export function GuestsMarquee() {
  const items = [...names, ...names];
  return (
    <div className="relative w-full overflow-hidden py-8 md:py-10 mask-fade-x">
      <div className="marquee whitespace-nowrap">
        {items.map((n, i) => (
          <span
            key={`${n}-${i}`}
            className="font-serif italic text-3xl md:text-5xl lg:text-6xl px-6 md:px-10 inline-flex items-center gap-6 md:gap-10 text-foreground/85"
          >
            {n}
            <span className="not-italic text-gold text-xl md:text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
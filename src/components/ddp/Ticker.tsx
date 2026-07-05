const messages = [
  "Última hora — nuevo episodio: Jordi Juan, director de La Vanguardia",
  "Escúchalo ahora en Spotify y YouTube",
  "Diario del Poder — la voz del legado",
  "Media partner oficial · La Vanguardia",
  "Reserva una llamada con nuestro equipo",
];

export function Ticker() {
  const loop = [...messages, ...messages];
  return (
    <div
      aria-label="Teletipo — actualidad de Diario del Poder"
      className="relative bg-foreground text-background overflow-hidden"
    >
      <div className="ticker px-6 py-2 text-[10px] md:text-[11px] tracking-[0.28em] uppercase">
        {loop.map((m, i) => (
          <span key={i} className="flex items-center gap-6 shrink-0">
            <span className="inline-block w-1.5 h-1.5 bg-primary" aria-hidden />
            <span className="whitespace-nowrap">{m}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
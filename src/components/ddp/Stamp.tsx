export function Stamp({ className = "" }: { className?: string }) {
  const text = "DIARIO DEL PODER · LA VOZ DEL LEGADO · ";
  return (
    <div aria-hidden className={`stamp ${className}`}>
      <svg viewBox="0 0 120 120" className="stamp-spin w-full h-full">
        <defs>
          <path id="stamp-circle" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
        </defs>
        <text fill="currentColor" style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" }}>
          <textPath href="#stamp-circle">{text.repeat(3)}</textPath>
        </text>
      </svg>
      <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full">
        <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <text x="60" y="58" textAnchor="middle" fill="currentColor" style={{ fontFamily: "var(--font-serif)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase" }}>DDP</text>
        <text x="60" y="70" textAnchor="middle" fill="currentColor" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "7px" }}>Nº 24</text>
      </svg>
    </div>
  );
}
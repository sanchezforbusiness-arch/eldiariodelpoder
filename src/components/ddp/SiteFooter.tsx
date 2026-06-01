export function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
        padding: "18px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "rgba(184,147,90,0.4)",
        }}
      >
        DDP · La voz del legado
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 9,
          color: "rgba(240,237,232,0.18)",
        }}
      >
        España 2026 · contactoeldiariodelpoder@gmail.com
      </div>
    </footer>
  );
}
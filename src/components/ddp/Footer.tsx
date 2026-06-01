export function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "24px 24px",
      }}
      className="md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
    >
      <p
        className="font-display uppercase"
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.2)",
        }}
      >
        DDP · La voz del legado
      </p>
      <p
        className="font-sans"
        style={{ fontSize: 11, color: "rgba(255,255,255,0.15)" }}
      >
        España 2026 · contactoeldiariodelpoder@gmail.com
      </p>
    </footer>
  );
}
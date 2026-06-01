import { Link, useRouterState } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/episodios", label: "Episodios" },
  { to: "/invitados", label: "Invitados" },
  { to: "/prensa", label: "Prensa" },
  { to: "/club", label: "Club" },
];

export function SiteNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header
      style={{
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        background: "#0A0A0B",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 13,
          letterSpacing: "0.20em",
          textTransform: "uppercase",
          color: "#B8935A",
          textDecoration: "none",
        }}
      >
        Diario del Poder
      </Link>
      <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {navItems.map((item) => {
          const active = path === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: active ? "#B8935A" : "rgba(240,237,232,0.38)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!active) (e.currentTarget as HTMLElement).style.color = "#F0EDE8";
              }}
              onMouseLeave={(e) => {
                if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(240,237,232,0.38)";
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <a
        href="/#newsletter"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#B8935A",
          border: "0.5px solid rgba(184,147,90,0.4)",
          padding: "8px 14px",
          textDecoration: "none",
          transition: "border-color 0.2s ease",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#B8935A")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(184,147,90,0.4)")}
      >
        Newsletter →
      </a>
    </header>
  );
}
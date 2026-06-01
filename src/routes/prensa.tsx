import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/ddp/SiteNav";
import { SiteFooter } from "@/components/ddp/SiteFooter";

export const Route = createFileRoute("/prensa")({
  head: () => ({
    meta: [
      { title: "Prensa — Diario del Poder" },
      { name: "description", content: "Cómo nos han visto. Cobertura de prensa de Diario del Poder." },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/prensa" }],
  }),
  component: PrensaPage,
});

const GOLD = "#B8935A";

function PrensaPage() {
  return (
    <div className="ddp-page" style={{ background: "#0A0A0B", color: "#F0EDE8", minHeight: "100vh" }}>
      <SiteNav />
      <main style={{ padding: 32 }}>
        <div style={{ fontSize: 9, textTransform: "uppercase", color: GOLD, letterSpacing: "0.2em" }}>Prensa</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 44, fontWeight: 300, margin: "8px 0 28px", letterSpacing: "-0.02em" }}>
          Cómo nos han visto.
        </h1>

        <a
          href="https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            border: "0.5px solid rgba(184,147,90,0.2)",
            padding: 32,
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0F0F11")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
        >
          <div
            style={{
              display: "inline-block",
              border: `0.5px solid ${GOLD}`,
              color: GOLD,
              fontSize: 9,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              padding: "4px 12px",
              marginBottom: 18,
            }}
          >
            Media Partner Oficial
          </div>
          <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(240,237,232,0.35)", marginBottom: 10 }}>
            La Vanguardia · Grupo Godó
          </div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 300, lineHeight: 1.2, marginBottom: 8 }}>
            Jordi Juan, director de La Vanguardia, se sienta en Diario del Poder
          </div>
          <div style={{ fontSize: 10, color: "rgba(240,237,232,0.25)" }}>27 de mayo de 2026</div>
          <div style={{ display: "block", marginTop: 16, color: GOLD, fontSize: 12 }}>Leer en La Vanguardia →</div>
        </a>

        <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", marginTop: 24, paddingTop: 20 }}>
          <div style={{ fontSize: 9, textTransform: "uppercase", color: "rgba(240,237,232,0.2)", letterSpacing: "0.18em", marginBottom: 14 }}>
            También en
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {["Antena 3", "Univision", "Forbes España", "+7 medios"].map((n) => (
              <span key={n} style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "rgba(240,237,232,0.2)" }}>
                {n}
              </span>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
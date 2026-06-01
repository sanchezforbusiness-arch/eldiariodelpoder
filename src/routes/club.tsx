import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/ddp/SiteNav";
import { SiteFooter } from "@/components/ddp/SiteFooter";
import dialogos from "@/assets/bts-aznar-dialogos.jpg";

export const Route = createFileRoute("/club")({
  head: () => ({
    meta: [
      { title: "El Club del Poder — Diario del Poder" },
      { name: "description", content: "Una red real. No de LinkedIn. Acceso solo por invitación." },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/club" }],
  }),
  component: ClubPage,
});

const GOLD = "#B8935A";

function ClubPage() {
  return (
    <div className="ddp-page" style={{ background: "#0A0A0B", color: "#F0EDE8", minHeight: "100vh" }}>
      <SiteNav />
      <main>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "rgba(255,255,255,0.06)",
            minHeight: 480,
          }}
        >
          <div style={{ background: "#0A0A0B", padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32 }}>
            <div>
              <div style={{ fontSize: 9, textTransform: "uppercase", color: GOLD, letterSpacing: "0.2em", marginBottom: 14 }}>
                El Club del Poder
              </div>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 42, fontWeight: 300, lineHeight: 1, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
                Una red real.<br />
                <span style={{ fontStyle: "italic" }}>No de LinkedIn.</span>
              </h1>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: 1.8, color: "rgba(240,237,232,0.38)", fontWeight: 300, marginBottom: 28 }}>
                Un círculo cerrado. Madrid. Sin cámaras, sin agenda, sin protocolo. Solo conversación.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Dos eventos al año", "Acceso solo por invitación", "Quienes ya están, deciden quién entra"].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 11, color: "rgba(240,237,232,0.45)" }}>
                    <span style={{ width: 3, height: 3, background: GOLD, display: "inline-block" }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <a
              href="mailto:contactoeldiariodelpoder@gmail.com?subject=Solicitar%20acceso%20al%20Club"
              style={{
                alignSelf: "flex-start",
                background: GOLD,
                color: "#0A0A0B",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                padding: "11px 22px",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.82")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Solicitar acceso →
            </a>
          </div>

          <div style={{ background: "#0D0D0E", overflow: "hidden", position: "relative" }}>
            <img
              src={dialogos}
              alt="Aznar en Diálogos"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(15%)" }}
            />
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, background: "rgba(10,10,11,0.7)", padding: 24 }}>
              <blockquote
                style={{
                  margin: 0,
                  fontFamily: "var(--font-serif)",
                  fontSize: 16,
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  color: "rgba(240,237,232,0.75)",
                  borderLeft: `1px solid ${GOLD}`,
                  paddingLeft: 14,
                }}
              >
                No buscamos ruido. Buscamos conversaciones que dejen huella.
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
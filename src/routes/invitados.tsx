import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/ddp/SiteNav";
import { SiteFooter } from "@/components/ddp/SiteFooter";

import g1 from "@/assets/guest-1.jpg";
import g2 from "@/assets/guest-2.jpg";
import g3 from "@/assets/guest-3.jpg";
import g4 from "@/assets/guest-4.jpg";
import g5 from "@/assets/guest-5.jpg";
import g6 from "@/assets/guest-6.jpg";
import g7 from "@/assets/guest-7.jpg";
import g8 from "@/assets/guest-8.jpg";

export const Route = createFileRoute("/invitados")({
  head: () => ({
    meta: [
      { title: "Invitados — Diario del Poder" },
      { name: "description", content: "Expresidentes, CEOs y líderes que han pasado por Diario del Poder." },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/invitados" }],
  }),
  component: InvitadosPage,
});

const GOLD = "#B8935A";

const guests = [
  { img: g1, name: "José María Aznar", role: "Expresidente del Gobierno" },
  { img: g2, name: "Iván Duque", role: "Expresidente de Colombia" },
  { img: g5, name: "Guillermo Lasso", role: "Expresidente de Ecuador" },
  { img: g3, name: "Javier Tebas", role: "Presidente de La Liga" },
  { img: g4, name: "Andrés Rodríguez", role: "Presidente de Forbes España" },
  { img: g6, name: "Martín Sellés", role: "CEO Johnson & Johnson" },
  { img: g7, name: "Esperanza Aguirre", role: "Expresidenta de Madrid" },
  { img: g8, name: "Federica Fornaciari", role: "CEO SenYours" },
];

function InvitadosPage() {
  return (
    <div className="ddp-page" style={{ background: "#0A0A0B", color: "#F0EDE8", minHeight: "100vh" }}>
      <SiteNav />
      <main>
        <header style={{ padding: "32px 32px 24px" }}>
          <div style={{ fontSize: 9, textTransform: "uppercase", color: GOLD, letterSpacing: "0.2em" }}>Invitados</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 44, fontWeight: 300, margin: "8px 0 0", letterSpacing: "-0.02em" }}>
            Gente que ha estado donde se decide.
          </h1>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {guests.map((g) => (
            <div
              key={g.name}
              className="ddp-img-hover"
              style={{ background: "#0A0A0B", overflow: "hidden", cursor: "pointer", transition: "background 0.2s ease" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0F0F11")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0A0A0B")}
            >
              <div style={{ overflow: "hidden", aspectRatio: "3 / 4" }}>
                <img
                  src={g.img}
                  alt={g.name}
                  className="ddp-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(18%)" }}
                />
              </div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 15, fontWeight: 400, padding: "12px 12px 2px" }}>
                {g.name}
              </div>
              <div style={{ fontSize: 10, color: "rgba(240,237,232,0.3)", padding: "0 12px 12px" }}>{g.role}</div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
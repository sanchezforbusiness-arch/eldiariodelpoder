import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/ddp/SiteNav";
import { SiteFooter } from "@/components/ddp/SiteFooter";

import e1 from "@/assets/bts-andres-rodriguez.jpg";
import e2 from "@/assets/bts-guillermo-lasso.jpg";
import e3 from "@/assets/bts-aznar-faes.jpg";
import e4 from "@/assets/bts-mikel-palco.jpg";
import e5 from "@/assets/bts-jordi-urbea-talk.jpg";

export const Route = createFileRoute("/episodios")({
  head: () => ({
    meta: [
      { title: "Episodios — Diario del Poder" },
      { name: "description", content: "Todos los episodios: expresidentes, CEOs y líderes institucionales." },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/episodios" }],
  }),
  component: EpisodiosPage,
});

const GOLD = "#B8935A";

type Ep = { img: string; label: string; name: string; role: string; featured?: boolean };
const episodes: Ep[] = [
  { img: e1, label: "01 · Nuevo", name: "Andrés Rodríguez", role: "Presidente de Forbes España", featured: true },
  { img: e2, label: "02", name: "Guillermo Lasso", role: "Expresidente de Ecuador" },
  { img: e3, label: "03", name: "José María Aznar", role: "Expresidente del Gobierno" },
  { img: e4, label: "04", name: "Mikel Echavarren", role: "Real estate, ciclos y dinero" },
  { img: e5, label: "05", name: "Jordi Urbea", role: "CEO de Ogilvy España" },
];

function Card({ ep }: { ep: Ep }) {
  return (
    <div
      className="ddp-img-hover"
      style={{
        background: "#0A0A0B",
        gridColumn: ep.featured ? "1 / -1" : undefined,
        cursor: "pointer",
        overflow: "hidden",
        transition: "background 0.2s ease",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0F0F11")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0A0A0B")}
    >
      <div style={{ overflow: "hidden" }}>
        <img
          src={ep.img}
          alt={ep.name}
          className="ddp-img"
          style={{ width: "100%", height: ep.featured ? 200 : 130, objectFit: "cover", display: "block" }}
        />
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 9, textTransform: "uppercase", color: GOLD, letterSpacing: "0.14em", marginBottom: 8 }}>{ep.label}</div>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 300, lineHeight: 1.1 }}>{ep.name}</div>
        <div style={{ fontSize: 10, color: "rgba(240,237,232,0.3)", marginTop: 4 }}>{ep.role}</div>
      </div>
    </div>
  );
}

function EpisodiosPage() {
  return (
    <div className="ddp-page" style={{ background: "#0A0A0B", color: "#F0EDE8", minHeight: "100vh" }}>
      <SiteNav />
      <main style={{ padding: 32 }}>
        <div style={{ fontSize: 9, textTransform: "uppercase", color: GOLD, letterSpacing: "0.2em" }}>Episodios</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 44, fontWeight: 300, margin: "8px 0 28px", letterSpacing: "-0.02em" }}>
          Lo que hemos grabado.
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {episodes.map((ep) => (
            <Card key={ep.label} ep={ep} />
          ))}
          <div
            style={{
              gridColumn: "1 / -1",
              background: "#0F0F11",
              borderTop: "1px solid rgba(184,147,90,0.15)",
              padding: "14px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span style={{ fontSize: 9, textTransform: "uppercase", color: "rgba(240,237,232,0.3)", letterSpacing: "0.14em" }}>
              Próximamente
            </span>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 14, color: GOLD }}>
              Tebas · Duque · Aguirre
            </span>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
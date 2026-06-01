import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/ddp/SiteNav";
import { SiteFooter } from "@/components/ddp/SiteFooter";

import heroImg from "@/assets/bts-andres-rodriguez.jpg";
import g1 from "@/assets/guest-1.jpg";
import g2 from "@/assets/guest-2.jpg";
import g3 from "@/assets/guest-3.jpg";
import g4 from "@/assets/guest-4.jpg";
import g5 from "@/assets/guest-5.jpg";
import g6 from "@/assets/guest-6.jpg";
import g7 from "@/assets/guest-7.jpg";
import g8 from "@/assets/guest-8.jpg";
import btsAznarFaes from "@/assets/bts-aznar-faes.jpg";
import btsLasso from "@/assets/bts-guillermo-lasso.jpg";
import btsMikel from "@/assets/bts-mikel-palco.jpg";
import btsSet from "@/assets/bts-set-monitors.jpg";
import btsAznarDialogos from "@/assets/bts-aznar-dialogos.jpg";
import btsSigning from "@/assets/bts-signing-hands.jpg";
import btsHosts from "@/assets/bts-hosts-palco.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diario del Poder — La voz del legado" },
      { name: "description", content: "Podcast premium en español. Expresidentes, CEOs y líderes institucionales. Conversaciones con criterio." },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/" }],
  }),
  component: Index,
});

const HAIRLINE = "0.5px solid rgba(255,255,255,0.06)";
const GOLD = "#B8935A";

const row1 = [g1, btsAznarFaes, g5, btsLasso, g3, btsMikel, g2, btsSet];
const row2 = [heroImg, g4, btsAznarDialogos, g7, btsSigning, g6, btsHosts, g8];

const tickerItems: { text: string; gold: boolean }[] = [
  { text: "AZNAR", gold: true },
  { text: "·", gold: false },
  { text: "LASSO", gold: true },
  { text: "·", gold: false },
  { text: "DUQUE", gold: true },
  { text: "·", gold: false },
  { text: "TEBAS", gold: true },
  { text: "·", gold: false },
  { text: "AGUIRRE", gold: true },
  { text: "·", gold: false },
  { text: "SELLÉS", gold: true },
  { text: "·", gold: false },
  { text: "LA VANGUARDIA", gold: false },
  { text: "·", gold: false },
  { text: "500K ALCANCE", gold: false },
  { text: "·", gold: false },
  { text: "TEMPORADA II", gold: false },
  { text: "·", gold: false },
];

function Index() {
  return (
    <div className="ddp-page" style={{ background: "#0A0A0B", color: "#F0EDE8", minHeight: "100vh" }}>
      <SiteNav />
      <main>
        {/* HERO */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 380, borderBottom: HAIRLINE }}>
          <div style={{ padding: "48px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32 }}>
            <div style={{ fontSize: 9, textTransform: "uppercase", color: GOLD, letterSpacing: "0.22em" }}>
              Podcast · España · 2026
            </div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 64, fontWeight: 300, lineHeight: 0.9, margin: 0, letterSpacing: "-0.02em" }}>
              La voz del <span style={{ fontStyle: "italic", color: GOLD }}>legado.</span>
            </h1>
            <div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: 1.75, color: "rgba(240,237,232,0.42)", fontWeight: 300, maxWidth: 280, marginBottom: 28 }}>
                Tres expresidentes. Un presidente de La Liga. El presidente de Forbes. Esto no es casualidad.
              </p>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Link
                  to="/episodios"
                  style={{ background: GOLD, color: "#0A0A0B", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", padding: "11px 22px", textDecoration: "none", transition: "opacity 0.2s ease" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.82")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  Ver episodios →
                </Link>
                <Link
                  to="/invitados"
                  style={{ background: "transparent", color: "rgba(240,237,232,0.4)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", padding: "11px 14px", textDecoration: "none", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0EDE8")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(240,237,232,0.4)")}
                >
                  Invitados
                </Link>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", overflow: "hidden" }} className="ddp-img-hover">
            <img src={heroImg} alt="Andrés Rodríguez en Diario del Poder" className="ddp-img" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 16, left: 16, background: "#0A0A0B", padding: "4px 10px", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(184,147,90,0.7)" }}>
              Último episodio — Andrés Rodríguez
            </div>
          </div>
        </section>

        {/* TICKER */}
        <section style={{ borderBottom: HAIRLINE, padding: "12px 0", overflow: "hidden" }}>
          <div className="ddp-ticker">
            {[0, 1].map((dup) => (
              <div key={dup} style={{ display: "flex" }}>
                {tickerItems.map((it, i) => (
                  <span
                    key={`${dup}-${i}`}
                    style={{
                      padding: "0 20px",
                      fontSize: 10,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: it.gold ? GOLD : "rgba(240,237,232,0.22)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {it.text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* PHOTO ROWS */}
        <section style={{ borderBottom: HAIRLINE, padding: "20px 0", overflow: "hidden", display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ overflow: "hidden" }}>
            <div className="ddp-row-l">
              {[0, 1].map((dup) => (
                <div key={dup} style={{ display: "flex", gap: 8 }}>
                  {row1.map((src, i) => (
                    <img
                      key={`r1-${dup}-${i}`}
                      src={src}
                      alt=""
                      style={{ width: 130, height: 90, objectFit: "cover", filter: "grayscale(18%)", transition: "filter 0.3s ease", display: "block" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.filter = "grayscale(0%)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = "grayscale(18%)")}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="ddp-row-r">
              {[0, 1].map((dup) => (
                <div key={dup} style={{ display: "flex", gap: 8 }}>
                  {row2.map((src, i) => (
                    <img
                      key={`r2-${dup}-${i}`}
                      src={src}
                      alt=""
                      style={{ width: 130, height: 90, objectFit: "cover", filter: "grayscale(18%)", transition: "filter 0.3s ease", display: "block" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.filter = "grayscale(0%)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = "grayscale(18%)")}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST EPISODE */}
        <section style={{ borderBottom: HAIRLINE, padding: 32 }}>
          <div style={{ fontSize: 9, textTransform: "uppercase", color: GOLD, letterSpacing: "0.2em", marginBottom: 16 }}>
            Último episodio
          </div>
          <Link
            to="/episodios"
            style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", textDecoration: "none", color: "inherit", transition: "opacity 0.2s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            <img src={heroImg} alt="Andrés Rodríguez" style={{ width: "100%", height: 200, objectFit: "cover", filter: "grayscale(12%)", display: "block" }} />
            <div style={{ background: "#0F0F11", padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20 }}>
              <div>
                <div style={{ fontSize: 9, textTransform: "uppercase", color: GOLD, letterSpacing: "0.14em", marginBottom: 10 }}>
                  Episodio 01
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 30, fontWeight: 300, lineHeight: 1.05, margin: 0 }}>
                  Andrés Rodríguez
                </h3>
                <p style={{ fontSize: 11, color: "rgba(240,237,232,0.35)", lineHeight: 1.5, marginTop: 8 }}>
                  El hombre detrás de Forbes España. Lujo, poder y periodismo.
                </p>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {["Spotify", "YouTube", "Apple"].map((p) => (
                  <span
                    key={p}
                    style={{
                      fontSize: 9,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      border: "0.5px solid rgba(255,255,255,0.1)",
                      color: "rgba(240,237,232,0.25)",
                      padding: "5px 10px",
                      transition: "color 0.2s ease, border-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = GOLD;
                      el.style.borderColor = "rgba(184,147,90,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "rgba(240,237,232,0.25)";
                      el.style.borderColor = "rgba(255,255,255,0.1)";
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </section>

        {/* STATS */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderBottom: HAIRLINE }}>
          {[
            { n: "500K", l: "Alcance total" },
            { n: "3", l: "Expresidentes" },
            { n: "T. II", l: "En producción" },
          ].map((s, i, arr) => (
            <div
              key={s.l}
              style={{
                padding: "22px 32px",
                borderRight: i < arr.length - 1 ? HAIRLINE : "none",
              }}
            >
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 36, fontWeight: 300, color: GOLD, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(240,237,232,0.28)", marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </section>

        {/* MEDIA BAR */}
        <section style={{ borderBottom: HAIRLINE, padding: "20px 32px", display: "flex", alignItems: "center", gap: 20 }}>
          <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(240,237,232,0.25)" }}>Media partner</span>
          <span style={{ color: "rgba(255,255,255,0.1)" }}>·</span>
          <Link
            to="/prensa"
            style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "rgba(240,237,232,0.5)", textDecoration: "none", transition: "color 0.2s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = GOLD)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(240,237,232,0.5)")}
          >
            La Vanguardia
          </Link>
        </section>

        {/* NEWSLETTER */}
        <section id="newsletter" style={{ borderBottom: HAIRLINE, padding: 32, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 300, marginBottom: 4 }}>
              Un email cuando sube episodio.
            </div>
            <div style={{ fontSize: 11, color: "rgba(240,237,232,0.35)", fontWeight: 300 }}>Nada más.</div>
          </div>
          <form style={{ display: "flex" }} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="tu@email.com"
              style={{
                background: "#131315",
                border: "0.5px solid rgba(255,255,255,0.1)",
                borderRight: "none",
                color: "#F0EDE8",
                fontSize: 11,
                fontFamily: "var(--font-sans)",
                padding: "10px 16px",
                width: 220,
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                background: GOLD,
                color: "#0A0A0B",
                fontFamily: "var(--font-sans)",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "10px 18px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Suscribirse
            </button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
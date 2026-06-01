import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";

import heroStudio from "@/assets/hero-studio.webp";
import g1 from "@/assets/guest-1.jpg";
import g2 from "@/assets/guest-2.jpg";
import g3 from "@/assets/guest-3.jpg";
import g4 from "@/assets/guest-4.jpg";
import g5 from "@/assets/guest-5.jpg";
import g6 from "@/assets/guest-6.jpg";
import g7 from "@/assets/guest-7.jpg";
import g8 from "@/assets/guest-8.jpg";
import btsAndres from "@/assets/bts-andres-rodriguez.jpg";
import btsAznarFaes from "@/assets/bts-aznar-faes.jpg";
import btsAznarDialogos from "@/assets/bts-aznar-dialogos.jpg";
import btsAznarFirma from "@/assets/bts-aznar-firma.jpg";
import btsLasso from "@/assets/bts-guillermo-lasso.jpg";
import btsMikel from "@/assets/bts-mikel-palco.jpg";
import btsMonitor from "@/assets/bts-monitor-aznar.jpg";
import btsSet from "@/assets/bts-set-monitors.jpg";
import btsSigning from "@/assets/bts-signing-hands.jpg";
import btsHosts from "@/assets/bts-hosts-palco.jpg";
import btsOrdi from "@/assets/bts-jordi-urbea-talk.jpg";
import btsMetro from "@/assets/bts-metropolitano.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diario del Poder · La voz del legado" },
      { name: "description", content: "Tres expresidentes. Un presidente de La Liga. El presidente de Forbes. Conversaciones que importan." },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#000000" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Diario del Poder" },
      { property: "og:title", content: "Diario del Poder · La voz del legado" },
      { property: "og:description", content: "Conversaciones donde se decide. España 2026." },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/" }],
  }),
  component: Index,
});

const muted = "rgba(255,255,255,0.45)";
const faint = "rgba(255,255,255,0.2)";
const border = "1px solid rgba(255,255,255,0.06)";
const gold = "#B8935A";

function Label({ children, color = "rgba(255,255,255,0.3)", mb = 0 }: { children: React.ReactNode; color?: string; mb?: number }) {
  return (
    <div
      className="font-sans uppercase"
      style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", color, marginBottom: mb }}
    >
      {children}
    </div>
  );
}

function Img({ src, alt, style }: { src: string; alt: string; style?: React.CSSProperties }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        objectFit: "cover",
        objectPosition: "center top",
        filter: "grayscale(15%)",
        transition: "filter 0.5s ease, transform 0.5s ease",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = "grayscale(0%)";
        e.currentTarget.style.transform = "scale(1.03)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "grayscale(15%)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    />
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section id="top" style={{ background: "#000", minHeight: "100vh" }} className="grid md:grid-cols-2">
      <div className="flex flex-col justify-between" style={{ padding: "80px 64px" }}>
        <div>
          <span
            className="font-display uppercase inline-flex"
            style={{
              background: "rgba(184,147,90,0.1)",
              border: "1px solid rgba(184,147,90,0.25)",
              color: gold,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              padding: "6px 14px",
              marginBottom: 40,
              width: "fit-content",
            }}
          >
            Podcast · España · 2026
          </span>
        </div>
        <div>
          <h1
            className="font-display"
            style={{
              fontWeight: 800,
              fontSize: "clamp(56px, 7vw, 88px)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: 0,
            }}
          >
            La voz
            <br />
            del <span style={{ color: gold }}>legado.</span>
          </h1>
        </div>
        <div>
          <p
            className="font-sans"
            style={{
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.8,
              color: muted,
              maxWidth: 380,
              marginBottom: 36,
              marginTop: 36,
            }}
          >
            Tres expresidentes. Un presidente de La Liga. El presidente de Forbes. Grabamos donde haga falta.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="#episodios"
              className="font-display uppercase transition-opacity"
              style={{
                background: "#fff",
                color: "#000",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                padding: "14px 32px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Ver episodios
            </a>
            <a
              href="#invitados"
              className="font-display uppercase transition-colors"
              style={{
                background: "transparent",
                color: muted,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                padding: "14px 0",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = muted)}
            >
              Invitados
            </a>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden" style={{ minHeight: 400 }}>
        <img
          src={heroStudio}
          alt="Estudio Diario del Poder"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(10%) brightness(0.85)",
            transition: "transform 0.8s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div
          className="font-sans uppercase absolute"
          style={{
            bottom: 20,
            left: 20,
            fontSize: 10,
            letterSpacing: "0.14em",
            color: "rgba(184,147,90,0.8)",
            background: "rgba(0,0,0,0.75)",
            padding: "6px 14px",
          }}
        >
          Último — Andrés Rodríguez · Forbes
        </div>
      </div>
    </section>
  );
}

/* ============ TICKER ============ */
function Ticker() {
  const items = [
    { t: "Aznar", k: "name" },
    { t: "Lasso", k: "name" },
    { t: "Duque", k: "name" },
    { t: "Tebas", k: "name" },
    { t: "Aguirre", k: "name" },
    { t: "Sellés", k: "name" },
    { t: "Rodríguez", k: "name" },
    { t: "500K alcance", k: "stat" },
    { t: "Temporada II", k: "stat" },
    { t: "La Vanguardia", k: "stat" },
  ];
  const Row = () => (
    <div className="flex items-center">
      {items.map((it, i) => (
        <span key={i} className="flex items-center" style={{ padding: "0 24px" }}>
          <span
            className="font-display"
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              fontStyle: it.k === "name" ? "italic" : "normal",
              color: it.k === "name" ? "#fff" : "rgba(255,255,255,0.25)",
            }}
          >
            {it.t}
          </span>
          <span style={{ padding: "0 6px", color: "rgba(184,147,90,0.4)" }}>·</span>
        </span>
      ))}
    </div>
  );
  return (
    <div
      style={{
        background: "#000",
        borderTop: border,
        borderBottom: border,
        padding: "16px 0",
        overflow: "hidden",
      }}
    >
      <div className="marquee marquee-24" style={{ animationDuration: "24s" }}>
        <Row />
        <Row />
      </div>
    </div>
  );
}

/* ============ PHOTO ROWS ============ */
function PhotoRows() {
  const row1 = [g1, btsAznarFaes, g5, btsLasso, g3, btsMikel, g2, btsSet];
  const row2 = [btsAndres, g4, btsAznarDialogos, g7, btsSigning, g6, btsHosts, g8];
  const row3 = [btsMonitor, g4, btsAznarFirma, g1, btsOrdi, g3, btsMetro, g5];

  const renderRow = (imgs: string[], animClass: string, duration: string) => (
    <div
      className={`flex ${animClass}`}
      style={{ gap: 10, animationDuration: duration, width: "max-content" }}
    >
      {[...imgs, ...imgs].map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          style={{
            height: 110,
            width: 170,
            objectFit: "cover",
            objectPosition: "center top",
            flexShrink: 0,
            filter: "grayscale(20%) brightness(0.8)",
            transition: "filter 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%) brightness(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(20%) brightness(0.8)")}
        />
      ))}
    </div>
  );

  return (
    <div
      style={{
        background: "#000",
        borderBottom: border,
        padding: "28px 0",
        overflow: "hidden",
      }}
      className="flex flex-col"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {renderRow(row1, "marquee", "36s")}
        {renderRow(row2, "marquee-right-40", "40s")}
        {renderRow(row3, "marquee", "32s")}
      </div>
    </div>
  );
}

/* ============ LATEST EPISODE ============ */
function LatestEpisode() {
  return (
    <section
      style={{ background: "#000", borderBottom: border, padding: "80px 48px" }}
    >
      <Label mb={32}>Último episodio</Label>
      <a
        href="https://youtu.be/nTtgtxG7UNs"
        target="_blank"
        rel="noreferrer"
        className="grid transition-opacity"
        style={{ gridTemplateColumns: "1.4fr 1fr", gap: 0 }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <div className="overflow-hidden" style={{ height: 320 }}>
          <img
            src={btsAndres}
            alt="Andrés Rodríguez"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              filter: "grayscale(10%)",
              transition: "transform 0.6s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        <div
          className="flex flex-col justify-between"
          style={{ background: "#0D0D0D", padding: 48 }}
        >
          <div>
            <div
              className="font-sans uppercase"
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.18em",
                color: gold,
                marginBottom: 16,
              }}
            >
              EP. 01 · Nuevo
            </div>
            <h3
              className="font-display"
              style={{ fontSize: 44, fontWeight: 800, color: "#fff", lineHeight: 0.95, marginBottom: 12 }}
            >
              Andrés Rodríguez
            </h3>
            <p
              className="font-sans"
              style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: muted, marginBottom: 32 }}
            >
              El hombre detrás de Forbes España. Lujo, poder y periodismo.
            </p>
          </div>
          <div>
            <div
              className="font-sans uppercase"
              style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.2em", marginBottom: 12 }}
            >
              Escuchar en
            </div>
            <div className="flex gap-2">
              {["Spotify", "YouTube", "Apple"].map((p) => (
                <span
                  key={p}
                  className="font-display uppercase transition-colors"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.3)",
                    padding: "8px 16px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = gold;
                    e.currentTarget.style.borderColor = "rgba(184,147,90,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.3)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}

/* ============ STATS ============ */
function Stats() {
  const cells = [
    { n: "500K", l: "Alcance total" },
    { n: "3", l: "Expresidentes" },
    { n: "II", l: "Temporada en producción" },
  ];
  return (
    <section
      className="grid grid-cols-3"
      style={{ borderBottom: border, background: "#000" }}
    >
      {cells.map((c, i) => (
        <div
          key={i}
          style={{
            padding: "40px 48px",
            borderRight: i < cells.length - 1 ? border : "none",
          }}
        >
          <div className="font-display" style={{ fontSize: 64, fontWeight: 800, color: "#fff", lineHeight: 1 }}>
            {c.n}
          </div>
          <div
            className="font-sans uppercase"
            style={{
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.28)",
              marginTop: 8,
            }}
          >
            {c.l}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ============ GUESTS ============ */
function Guests() {
  const guests = [
    { img: g1, name: "José María Aznar", role: "Expresidente del Gobierno" },
    { img: g2, name: "Iván Duque", role: "Expresidente de Colombia" },
    { img: g5, name: "Guillermo Lasso", role: "Expresidente de Ecuador" },
    { img: g3, name: "Javier Tebas", role: "Presidente de La Liga" },
    { img: g4, name: "Andrés Rodríguez", role: "Presidente Forbes España" },
    { img: g6, name: "Martín Sellés", role: "CEO J&J España" },
    { img: g7, name: "Esperanza Aguirre", role: "Expresidenta de Madrid" },
    { img: g8, name: "Federica Fornaciari", role: "CEO SenYours" },
  ];
  return (
    <section
      id="invitados"
      style={{ background: "#000", borderBottom: border, padding: "80px 48px" }}
    >
      <Label mb={20}>Invitados</Label>
      <h2
        className="font-display"
        style={{ fontSize: 56, fontWeight: 800, lineHeight: 0.95, color: "#fff", marginBottom: 12 }}
      >
        Gente que ha estado donde se decide.
      </h2>
      <p className="font-sans" style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginBottom: 48 }}>
        Presidentes · CEOs · Fundadores
      </p>
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}
      >
        {guests.map((g) => (
          <div
            key={g.name}
            className="group overflow-hidden cursor-pointer"
            style={{ background: "#000", transition: "background 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0D0D0D")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#000")}
          >
            <div style={{ aspectRatio: "3/4", overflow: "hidden" }}>
              <img
                src={g.img}
                alt={g.name}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  filter: "grayscale(20%) brightness(0.85)",
                  transition: "filter 0.5s ease, transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%) brightness(1)";
                  e.currentTarget.style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(20%) brightness(0.85)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div className="font-display" style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                {g.name}
              </div>
              <div className="font-sans" style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
                {g.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ EPISODES ============ */
function Episodes() {
  const eps = [
    { num: "EP02", img: btsLasso, name: "Guillermo Lasso", role: "Expresidente de Ecuador", link: "https://youtu.be/2XZuIBfyBH0" },
    { num: "EP03", img: btsAznarFaes, name: "José María Aznar", role: "Expresidente del Gobierno", link: "https://youtu.be/ZydPM-xkYvA" },
    { num: "EP04", img: btsMikel, name: "Mikel Echavarren", role: "Real estate, ciclos y dinero", link: "https://youtu.be/ARO5S1I5cg8" },
    { num: "EP05", img: btsOrdi, name: "Jordi Urbea", role: "CEO de Ogilvy España", link: "#" },
  ];
  return (
    <section
      id="episodios"
      style={{ background: "#000", borderBottom: border, padding: "80px 48px" }}
    >
      <Label mb={20}>Episodios</Label>
      <h2
        className="font-display"
        style={{ fontSize: 56, fontWeight: 800, lineHeight: 0.95, color: "#fff", marginBottom: 48 }}
      >
        Lo que hemos grabado.
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}
      >
        <a
          href="https://youtu.be/nTtgtxG7UNs"
          target="_blank"
          rel="noreferrer"
          className="md:col-span-2 overflow-hidden"
          style={{ background: "#000", transition: "background 0.3s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#0D0D0D")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#000")}
        >
          <div style={{ height: 300, overflow: "hidden" }}>
            <img
              src={btsAndres}
              alt="Andrés Rodríguez"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                filter: "grayscale(15%) brightness(0.85)",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div style={{ padding: "24px 28px" }}>
            <div
              className="font-sans uppercase"
              style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", color: gold, marginBottom: 10 }}
            >
              EP01
            </div>
            <div className="font-display" style={{ fontSize: 36, fontWeight: 700, color: "#fff", lineHeight: 1, marginBottom: 6 }}>
              Andrés Rodríguez
            </div>
            <div className="font-sans" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>
              Presidente de Forbes España
            </div>
          </div>
        </a>
        {eps.map((e) => (
          <a
            key={e.num}
            href={e.link}
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden block"
            style={{ background: "#000", transition: "background 0.3s ease" }}
            onMouseEnter={(ev) => (ev.currentTarget.style.background = "#0D0D0D")}
            onMouseLeave={(ev) => (ev.currentTarget.style.background = "#000")}
          >
            <div style={{ height: 200, overflow: "hidden" }}>
              <img
                src={e.img}
                alt={e.name}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  filter: "grayscale(15%) brightness(0.85)",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(ev) => (ev.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(ev) => (ev.currentTarget.style.transform = "scale(1)")}
              />
            </div>
            <div style={{ padding: "24px 28px" }}>
              <div
                className="font-sans uppercase"
                style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", color: gold, marginBottom: 10 }}
              >
                {e.num}
              </div>
              <div className="font-display" style={{ fontSize: 26, fontWeight: 700, color: "#fff", lineHeight: 1, marginBottom: 6 }}>
                {e.name}
              </div>
              <div className="font-sans" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>
                {e.role}
              </div>
            </div>
          </a>
        ))}
        <div
          className="md:col-span-2 flex items-center justify-between flex-wrap gap-3"
          style={{ background: "#0D0D0D", padding: "18px 28px" }}
        >
          <span
            className="font-sans uppercase"
            style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.22)" }}
          >
            Próximamente
          </span>
          <span
            className="font-display italic"
            style={{ fontSize: 16, color: gold }}
          >
            Javier Tebas · Iván Duque · Esperanza Aguirre
          </span>
        </div>
      </div>
    </section>
  );
}

/* ============ PRENSA ============ */
function Prensa() {
  return (
    <section
      id="prensa"
      style={{ background: "#000", borderBottom: border, padding: "80px 48px" }}
    >
      <Label mb={20}>Prensa</Label>
      <h2
        className="font-display"
        style={{ fontSize: 56, fontWeight: 800, lineHeight: 0.95, color: "#fff", marginBottom: 48 }}
      >
        Cómo nos han visto.
      </h2>
      <a
        href="https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html"
        target="_blank"
        rel="noreferrer"
        className="block transition-colors"
        style={{
          border: "1px solid rgba(184,147,90,0.2)",
          padding: 48,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#0D0D0D";
          e.currentTarget.style.borderColor = "rgba(184,147,90,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "rgba(184,147,90,0.2)";
        }}
      >
        <span
          className="font-sans uppercase inline-block"
          style={{
            background: "rgba(184,147,90,0.08)",
            border: `1px solid ${gold}`,
            color: gold,
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.16em",
            padding: "6px 16px",
            marginBottom: 28,
          }}
        >
          Media Partner Oficial
        </span>
        <div
          className="font-sans uppercase"
          style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.16em", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}
        >
          La Vanguardia · Grupo Godó
        </div>
        <h3
          className="font-display"
          style={{ fontSize: 40, fontWeight: 800, color: "#fff", lineHeight: 1.05, marginBottom: 14 }}
        >
          Jordi Juan, director de La Vanguardia, se sienta en Diario del Poder
        </h3>
        <p className="font-sans" style={{ fontSize: 12, color: faint, marginBottom: 28 }}>
          27 de mayo de 2026
        </p>
        <span className="font-sans" style={{ fontSize: 13, color: gold }}>
          Leer en La Vanguardia →
        </span>
      </a>
      <div style={{ borderTop: border, marginTop: 32, paddingTop: 28 }}>
        <div
          className="font-sans uppercase"
          style={{ fontSize: 10, letterSpacing: "0.2em", color: faint, marginBottom: 16 }}
        >
          También en
        </div>
        <div className="flex flex-wrap items-center" style={{ gap: 20 }}>
          {["Antena 3", "Univision", "Forbes España", "+7 medios"].map((m) => (
            <span
              key={m}
              className="font-display"
              style={{ fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.15)" }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CLUB ============ */
function Club() {
  return (
    <section
      id="club"
      className="grid md:grid-cols-2"
      style={{ gap: 1, background: "rgba(255,255,255,0.06)", minHeight: "100vh" }}
    >
      <div className="flex flex-col justify-between" style={{ background: "#000", padding: "80px 64px" }}>
        <div>
          <span
            className="font-display uppercase inline-flex"
            style={{
              background: "rgba(184,147,90,0.1)",
              border: "1px solid rgba(184,147,90,0.25)",
              color: gold,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              padding: "6px 14px",
              marginBottom: 24,
              width: "fit-content",
            }}
          >
            El Club del Poder
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 56, fontWeight: 800, lineHeight: 0.9, color: "#fff", marginBottom: 24 }}
          >
            Una red real.
            <br />
            <span style={{ color: gold }}>No de LinkedIn.</span>
          </h2>
          <p
            className="font-sans"
            style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: muted, maxWidth: 380, marginBottom: 40 }}
          >
            Un círculo cerrado. Madrid. Sin cámaras, sin guion y sin ruido. Solo conversación.
          </p>
          <div className="flex flex-col" style={{ gap: 18 }}>
            {[
              "Dos eventos al año · Madrid",
              "Acceso solo por invitación",
              "Quienes ya están, deciden quién entra",
            ].map((f) => (
              <div key={f} className="flex items-center" style={{ gap: 12 }}>
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: gold,
                    flexShrink: 0,
                  }}
                />
                <span className="font-sans" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 60 }}>
          <a
            href="mailto:contactoeldiariodelpoder@gmail.com"
            className="font-display uppercase inline-flex transition-opacity"
            style={{
              background: gold,
              color: "#000",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              padding: "16px 36px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Solicitar acceso →
          </a>
        </div>
      </div>
      <div className="relative overflow-hidden" style={{ background: "#0D0D0D", minHeight: 500 }}>
        <img
          src={btsAznarDialogos}
          alt="Diálogos"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(20%) brightness(0.7)",
            transition: "transform 0.8s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div
          className="absolute"
          style={{
            bottom: 0,
            left: 0,
            right: 0,
            padding: "64px 48px 48px",
            background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
          }}
        >
          <blockquote
            className="font-display"
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.4,
              borderLeft: `3px solid ${gold}`,
              paddingLeft: 20,
              margin: 0,
            }}
          >
            No buscamos ruido. Buscamos conversaciones que dejen huella.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ============ NEWSLETTER ============ */
function Newsletter() {
  return (
    <section
      className="grid md:grid-cols-2 items-center gap-10"
      style={{ background: "#0D0D0D", borderBottom: border, padding: "80px 48px" }}
    >
      <div>
        <h2
          className="font-display"
          style={{ fontSize: 40, fontWeight: 800, color: "#fff", lineHeight: 1, marginBottom: 10 }}
        >
          Un email cuando sube episodio.
        </h2>
        <p className="font-sans" style={{ fontSize: 16, color: "rgba(255,255,255,0.35)" }}>
          Nada más.
        </p>
      </div>
      <form
        className="flex md:justify-end"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="email"
          placeholder="tu@email.com"
          required
          className="font-sans text-white"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRight: "none",
            fontSize: 13,
            padding: "14px 22px",
            width: 260,
            outline: "none",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(184,147,90,0.4)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
        />
        <button
          type="submit"
          className="font-display uppercase transition-opacity"
          style={{
            background: "#fff",
            color: "#000",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            padding: "14px 26px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Suscribirme
        </button>
      </form>
    </section>
  );
}

function Index() {
  return (
    <div className="page-enter" style={{ background: "#000", color: "#fff" }}>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <Hero />
        <Ticker />
        <PhotoRows />
        <LatestEpisode />
        <Stats />
        <Guests />
        <Episodes />
        <Prensa />
        <Club />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
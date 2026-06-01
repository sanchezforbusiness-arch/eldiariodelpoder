import { useEffect, useRef, useState } from "react";

import guest1 from "@/assets/guest-1.jpg";
import guest2 from "@/assets/guest-2.jpg";
import guest3 from "@/assets/guest-3.jpg";
import guest4 from "@/assets/guest-4.jpg";
import guest5 from "@/assets/guest-5.jpg";
import guest6 from "@/assets/guest-6.jpg";
import guest7 from "@/assets/guest-7.jpg";
import guest8 from "@/assets/guest-8.jpg";
import btsAndres from "@/assets/bts-andres-rodriguez.jpg";
import btsAznarFaes from "@/assets/bts-aznar-faes.jpg";
import btsAznarDialogos from "@/assets/bts-aznar-dialogos.jpg";
import btsAznarFirma from "@/assets/bts-aznar-firma.jpg";
import btsLasso from "@/assets/bts-guillermo-lasso.jpg";
import btsMikel from "@/assets/bts-mikel-palco.jpg";
import btsJordi from "@/assets/bts-jordi-urbea-talk.jpg";
import btsHosts from "@/assets/bts-hosts-palco.jpg";
import btsSetMonitors from "@/assets/bts-set-monitors.jpg";
import btsSigningHands from "@/assets/bts-signing-hands.jpg";
import btsSigningPen from "@/assets/bts-signing-pen.jpg";
import btsMonitorAznar from "@/assets/bts-monitor-aznar.jpg";
import btsMetropolitano from "@/assets/bts-metropolitano.jpg";
import btsOsasuna from "@/assets/bts-osasuna.jpg";

const ACCENT = "#B8935A";
const MUTED = "rgba(255,255,255,0.45)";
const LINE = "rgba(255,255,255,0.08)";

const navLinks = [
  { href: "#episodios", label: "Episodios" },
  { href: "#invitados", label: "Invitados" },
  { href: "#prensa", label: "Prensa" },
  { href: "#club", label: "Club" },
  { href: "#newsletter", label: "Newsletter" },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}

function Nav() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        height: 60,
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        zIndex: 50,
      }}
    >
      <div
        style={{
          height: "100%",
          padding: "0 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="ddp-nav-inner"
      >
        <a
          href="#top"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Diario del Poder
        </a>
        <nav style={{ display: "flex", gap: 36 }} className="ddp-nav-links">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 11,
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive ? "#fff" : "rgba(255,255,255,0.4)")
                }
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 64px 80px",
      }}
    >
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: "clamp(72px, 12vw, 140px)",
          lineHeight: 0.88,
          letterSpacing: "-0.02em",
          color: "#fff",
          textAlign: "center",
          margin: 0,
        }}
      >
        La voz
        <br />
        <span style={{ color: ACCENT, fontStyle: "italic" }}>del legado.</span>
      </h1>
      <div style={{ marginTop: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          Scroll
        </span>
        <span className="ddp-scroll-line" style={{ width: 2, background: ACCENT, display: "block" }} />
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section style={{ background: "#000", padding: "100px 64px" }}>
      <Reveal>
        <p
          style={{
            maxWidth: 900,
            margin: "0 auto",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(24px, 3vw, 38px)",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.85)",
            textAlign: "left",
          }}
        >
          Diario del Poder es una conversación sin guion con las personas que han tomado las decisiones
          que definen una generación. Expresidentes, fundadores, CEOs. Sin protocolo. Con criterio.
        </p>
      </Reveal>
    </section>
  );
}

function Row({ images, direction, duration }: { images: string[]; direction: "left" | "right"; duration: number }) {
  const doubled = [...images, ...images];
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: 8,
          width: "max-content",
          animation: `ddp-marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            style={{
              height: 160,
              width: 240,
              objectFit: "cover",
              objectPosition: "center top",
              flexShrink: 0,
              filter: "grayscale(15%)",
              transition: "filter 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(15%)")}
          />
        ))}
      </div>
    </div>
  );
}

function PhotoTiles() {
  const row1 = [guest1, btsAznarFaes, guest5, btsLasso, guest3, btsMikel, guest2, btsAndres];
  const row2 = [btsAznarDialogos, guest4, btsSigningHands, guest7, btsSetMonitors, guest6, btsHosts, guest8];
  const row3 = [btsMonitorAznar, btsAznarFirma, btsJordi, btsMetropolitano, btsOsasuna, btsSigningPen, btsHosts, btsMikel];
  return (
    <section style={{ background: "#000", padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: 8 }}>
      <Row images={row1} direction="left" duration={35} />
      <Row images={row2} direction="right" duration={40} />
      <Row images={row3} direction="left" duration={30} />
    </section>
  );
}

type Episode = {
  num: string;
  img: string;
  guest: string;
  desc: string;
  link: string;
};

const episodes: Episode[] = [
  { num: "EP. 01 · NUEVO", img: btsAndres, guest: "Andrés Rodríguez", desc: "El hombre detrás de Forbes España. Lujo, poder y periodismo.", link: "https://youtu.be/nTtgtxG7UNs" },
  { num: "EP. 02", img: btsLasso, guest: "Guillermo Lasso", desc: "Expresidente de Ecuador. Gobernar en medio de la tormenta.", link: "https://youtu.be/2XZuIBfyBH0" },
  { num: "EP. 03", img: btsAznarFaes, guest: "José María Aznar", desc: "Expresidente del Gobierno. Liderar un país.", link: "https://youtu.be/ZydPM-xkYvA" },
  { num: "EP. 04", img: btsMikel, guest: "Mikel Echavarren", desc: "Real estate, ciclos económicos y dinero inteligente.", link: "https://youtu.be/ARO5S1I5cg8" },
  { num: "EP. 05", img: btsJordi, guest: "Jordi Urbea", desc: "CEO de Ogilvy España. Creatividad y poder real.", link: "https://www.youtube.com/@eldiariodelpoder" },
];

function EpisodeRow({ ep }: { ep: Episode }) {
  return (
    <a
      href={ep.link}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "flex",
        gap: 40,
        borderTop: `1px solid ${LINE}`,
        padding: "48px 0",
        textDecoration: "none",
        color: "inherit",
        alignItems: "stretch",
      }}
      className="ddp-ep-row"
    >
      <div style={{ width: 200, height: 200, flexShrink: 0, overflow: "hidden" }}>
        <img
          src={ep.img}
          alt={ep.guest}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(10%)",
            transition: "transform 0.4s ease",
          }}
          className="ddp-ep-img"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, flex: 1 }}>
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 11,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: ACCENT,
          }}
        >
          {ep.num}
        </span>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 36,
            lineHeight: 1.0,
            color: "#fff",
            margin: 0,
            transition: "color 0.2s",
          }}
          className="ddp-ep-title"
        >
          {ep.guest}
        </h3>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: 20,
            lineHeight: 1.5,
            color: MUTED,
            margin: 0,
          }}
        >
          {ep.desc}
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 4 }}>
          {["Apple Podcasts", "Spotify", "YouTube"].map((p) => (
            <span
              key={p}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function Episodes() {
  return (
    <section id="episodios" style={{ background: "#000", padding: "100px 64px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 64,
              margin: "0 0 64px",
            }}
          >
            Episodios destacados
          </h2>
        </Reveal>
        {episodes.map((ep) => (
          <Reveal key={ep.num}>
            <EpisodeRow ep={ep} />
          </Reveal>
        ))}
        <div
          style={{
            borderTop: `1px solid ${LINE}`,
            paddingTop: 48,
            textAlign: "center",
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: 20,
            color: "rgba(255,255,255,0.25)",
          }}
        >
          Próximamente — Javier Tebas · Iván Duque · Esperanza Aguirre
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  const items = [
    { name: "Spotify", href: "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" },
    { name: "YouTube", href: "https://www.youtube.com/@eldiariodelpoder" },
    { name: "Apple Podcasts", href: "#" },
    { name: "TikTok", href: "https://www.tiktok.com/@eldiariodelpoder" },
  ];
  return (
    <section
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 64px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: 28,
          color: "rgba(255,255,255,0.5)",
          margin: "0 0 40px",
        }}
      >
        Escúchanos en tu plataforma favorita
      </h3>
      <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
        {items.map((i) => (
          <a
            key={i.name}
            href={i.href}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            {i.name}
          </a>
        ))}
      </div>
    </section>
  );
}

const guests = [
  { img: guest1, name: "José María Aznar", role: "Expresidente del Gobierno" },
  { img: guest2, name: "Iván Duque", role: "Expresidente de Colombia" },
  { img: guest5, name: "Guillermo Lasso", role: "Expresidente de Ecuador" },
  { img: guest3, name: "Javier Tebas", role: "Presidente de La Liga" },
  { img: guest4, name: "Andrés Rodríguez", role: "Presidente Forbes España" },
  { img: guest6, name: "Martín Sellés", role: "CEO J&J España" },
  { img: guest7, name: "Esperanza Aguirre", role: "Expresidenta de Madrid" },
  { img: guest8, name: "Federica Fornaciari", role: "CEO SenYours" },
];

function Guests() {
  return (
    <section id="invitados" style={{ background: "#000", padding: "100px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 16,
            }}
          >
            Invitados
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 0.95,
              color: "#fff",
              margin: "0 0 64px",
            }}
          >
            Gente que ha estado donde se decide.
          </h2>
        </Reveal>
        <div
          className="ddp-guest-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {guests.map((g) => (
            <div key={g.name} className="ddp-guest-card" style={{ background: "#000", overflow: "hidden", cursor: "pointer" }}>
              <div style={{ aspectRatio: "3 / 4", overflow: "hidden" }}>
                <img
                  src={g.img}
                  alt={g.name}
                  loading="lazy"
                  className="ddp-guest-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    filter: "grayscale(20%) brightness(0.85)",
                    transition: "all 0.5s ease",
                  }}
                />
              </div>
              <div style={{ padding: "14px 16px 4px", fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: "#fff" }}>
                {g.name}
              </div>
              <div style={{ padding: "0 16px 16px", fontFamily: "'Manrope', sans-serif", fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.3)" }}>
                {g.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Prensa() {
  return (
    <section id="prensa" style={{ background: "#000", padding: "100px 64px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 16,
            }}
          >
            Prensa
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 0.95,
              color: "#fff",
              margin: "0 0 64px",
            }}
          >
            Cómo nos han visto.
          </h2>
        </Reveal>

        <div style={{ display: "flex", gap: 40, borderTop: `1px solid ${LINE}`, padding: "48px 0" }} className="ddp-ep-row">
          <div
            style={{
              width: 200,
              height: 120,
              flexShrink: 0,
              background: "rgba(184,147,90,0.08)",
              border: "1px solid rgba(184,147,90,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: 20,
              color: ACCENT,
            }}
          >
            La Vanguardia
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 10,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: ACCENT,
                marginBottom: 12,
              }}
            >
              MEDIA PARTNER OFICIAL
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: 36,
                color: "#fff",
                lineHeight: 1.1,
                margin: "0 0 10px",
              }}
            >
              Jordi Juan, director de La Vanguardia, se sienta en Diario del Poder
            </h3>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)", marginBottom: 20 }}>
              27 de mayo de 2026
            </div>
            <a
              href="https://www.lavanguardia.com/podcast/20260527/11548978/jordi-juan-director-vanguardia-entrevista-podcast-diario-del-poder.html"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 12,
                color: ACCENT,
                letterSpacing: "0.06em",
                textDecoration: "none",
                alignSelf: "flex-start",
              }}
            >
              Leer artículo →
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
            fontFamily: "'Manrope', sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.08em",
          }}
        >
          También en — Antena 3 · Univision · Forbes España · +7 medios
        </div>
      </div>
    </section>
  );
}

function Club() {
  return (
    <section id="club" style={{ background: "#000", padding: "100px 64px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div
        className="ddp-club-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <Reveal>
          <div
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: ACCENT,
              marginBottom: 20,
            }}
          >
            El Club del Poder
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 0.95,
              color: "#fff",
              margin: "0 0 24px",
            }}
          >
            Una red real.
            <br />
            <span style={{ color: ACCENT, fontStyle: "italic" }}>No de LinkedIn.</span>
          </h2>
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.8,
              color: MUTED,
              margin: "0 0 40px",
            }}
          >
            Un círculo cerrado. Madrid. Sin cámaras, sin guion y sin ruido. Solo conversación entre personas que construyen en serio.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
            {[
              "Dos eventos al año · Madrid",
              "Acceso solo por invitación",
              "Quienes ya están, deciden quién entra",
            ].map((t) => (
              <div
                key={t}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  paddingLeft: 16,
                  borderLeft: "1px solid rgba(184,147,90,0.3)",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <a
            href="mailto:contactoeldiariodelpoder@gmail.com"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: ACCENT,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = ACCENT)}
          >
            Solicitar acceso →
          </a>
        </Reveal>

        <Reveal>
          <div style={{ overflow: "hidden", aspectRatio: "4 / 5" }}>
            <img
              src={btsAznarDialogos}
              alt="Club del Poder"
              loading="lazy"
              className="ddp-club-img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                filter: "grayscale(15%) brightness(0.8)",
                transition: "transform 0.6s ease",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    formRef.current?.submit();
    setTimeout(() => setSent(true), 600);
  };
  return (
    <section
      id="newsletter"
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "100px 64px",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(36px, 4vw, 56px)",
              lineHeight: 0.95,
              color: "#fff",
              margin: "0 0 12px",
            }}
          >
            Un email cuando sube episodio.
          </h2>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: 28,
              fontWeight: 300,
              color: "rgba(255,255,255,0.35)",
              marginBottom: 48,
            }}
          >
            Nada más.
          </div>
          {sent ? (
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: ACCENT }}>
              Gracias. Revisa tu correo para confirmar.
            </div>
          ) : (
            <>
              <iframe name="ddp-nl-frame" title="Newsletter" style={{ display: "none" }} aria-hidden="true" />
              <form
                ref={formRef}
                onSubmit={submit}
                action="https://eldiariodelpoder.beehiiv.com/subscribe"
                method="POST"
                target="ddp-nl-frame"
                style={{ display: "inline-flex", justifyContent: "center" }}
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRight: "none",
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 13,
                    color: "#fff",
                    padding: "14px 24px",
                    width: 280,
                    outline: "none",
                  }}
                  className="ddp-nl-input"
                />
                <button
                  type="submit"
                  className="ddp-nl-btn"
                  style={{
                    background: "#fff",
                    color: "#000",
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "14px 28px",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                >
                  Suscribirme
                </button>
              </form>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/eldiariodelpoder/" },
    { name: "YouTube", href: "https://www.youtube.com/@eldiariodelpoder" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/eldiariodelpoder" },
    { name: "Spotify", href: "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" },
    { name: "TikTok", href: "https://www.tiktok.com/@eldiariodelpoder" },
  ];
  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 64px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 24,
        flexWrap: "wrap",
      }}
      className="ddp-footer"
    >
      <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
        © 2026 Diario del Poder
      </div>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.2)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
          >
            {s.name}
          </a>
        ))}
      </div>
      <a
        href="mailto:contactoeldiariodelpoder@gmail.com"
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 12,
          color: "rgba(255,255,255,0.2)",
          textDecoration: "none",
        }}
      >
        contactoeldiariodelpoder@gmail.com
      </a>
    </footer>
  );
}

export function DDPLanding() {
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'Manrope', sans-serif", minHeight: "100vh" }}>
      <Nav />
      <main>
        <Hero />
        <Mission />
        <PhotoTiles />
        <Episodes />
        <Platforms />
        <Guests />
        <Prensa />
        <Club />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
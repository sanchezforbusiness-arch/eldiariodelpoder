import { useEffect, useState } from "react";

const links = [
  { href: "#episodios", label: "Episodios" },
  { href: "#invitados", label: "Invitados" },
  { href: "#prensa", label: "Prensa" },
  { href: "#club", label: "Club" },
];

export function Navbar() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const handler = () => {
      const y = window.scrollY + 120;
      let cur = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        height: 58,
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="h-full flex items-center justify-between"
        style={{ padding: "0 24px" }}
      >
        <a
          href="#top"
          className="font-display text-white"
          style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.1em" }}
        >
          DDP
        </a>

        <nav className="hidden md:flex items-center" style={{ gap: 32 }}>
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className="font-display uppercase transition-colors duration-200"
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? "#fff" : "rgba(255,255,255,0.4)";
                }}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#club"
          className="hidden md:inline-flex font-display uppercase transition-opacity"
          style={{
            background: "#B8935A",
            color: "#000",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            padding: "9px 20px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Únete al Club →
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          <div className="w-5 h-px bg-current mb-1.5" />
          <div className="w-5 h-px bg-current mb-1.5" />
          <div className="w-3 h-px bg-current ml-auto" />
        </button>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(0,0,0,0.95)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 24px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-display uppercase py-2"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#club"
            onClick={() => setOpen(false)}
            className="inline-flex mt-4 font-display uppercase"
            style={{
              background: "#B8935A",
              color: "#000",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              padding: "9px 20px",
            }}
          >
            Únete al Club →
          </a>
        </div>
      )}
    </header>
  );
}
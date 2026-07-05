import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

type NavLink = { to: string; label: string; hash?: string };
const links: NavLink[] = [
  { to: "/episodios", label: "Episodios" },
  { to: "/invitados", label: "Invitados" },
  { to: "/", label: "Quiénes somos", hash: "team" },
  { to: "/club", label: "Club" },
  { to: "/patrocinadores", label: "Patrocinadores" },
];

function formatDate() {
  try {
    const s = new Intl.DateTimeFormat("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());
    return s.charAt(0).toUpperCase() + s.slice(1);
  } catch {
    return "";
  }
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [date, setDate] = useState("");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setDate(formatDate());
    const onScroll = () => setCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-sm">
      {/* Compact scrolled state */}
      {compact ? (
        <div className="filete-b">
          <div className="container-ddp flex items-center justify-between py-3">
            <Link to="/" className="font-serif text-lg tracking-tight text-foreground uppercase">
              <span className="hidden sm:inline">Diario del Poder</span>
              <span className="sm:hidden">DDP</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-5 text-[11px] tracking-[0.22em] uppercase">
              {links.map((l, i) => (
                <span key={l.label} className="flex items-center gap-5">
                  {i > 0 && <span aria-hidden className="text-foreground/30">|</span>}
                  <Link
                    to={l.to}
                    {...(l.hash ? { hash: l.hash } : {})}
                    className={`transition-colors ${pathname === l.to && !l.hash ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                  >
                    {l.label}
                  </Link>
                </span>
              ))}
            </nav>
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-sm hidden sm:inline-flex"
            >
              <Play size={12} className="fill-current" />
              Escuchar
            </a>
            <button onClick={() => setOpen((v) => !v)} className="lg:hidden text-foreground p-2" aria-label="Menu">
              <div className="w-5 h-px bg-current mb-1.5" />
              <div className="w-5 h-px bg-current mb-1.5" />
              <div className="w-3 h-px bg-current ml-auto" />
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Folio line */}
          <div className="container-ddp pt-3 pb-2">
            <div className="flex items-center justify-between text-[10px] tracking-[0.28em] uppercase text-foreground/70">
              <span>La voz del legado</span>
              <span className="hidden sm:inline">{date}</span>
            </div>
          </div>
          {/* Mancheta */}
          <div>
            <Link to="/" className="block text-center px-6 pb-3">
              <span className="font-serif uppercase text-foreground tracking-[0.06em] leading-none block text-[clamp(1.8rem,5vw,3.2rem)] font-medium">
                Diario del Poder
              </span>
            </Link>
            <div className="masthead-rule" />
          </div>
          {/* Nav bar */}
          <div className="container-ddp">
            <div className="flex items-center justify-between py-3 gap-4">
              <nav className="hidden lg:flex items-center gap-4 text-[11px] tracking-[0.22em] uppercase">
                {links.map((l, i) => (
                  <span key={l.label} className="flex items-center gap-4">
                    {i > 0 && <span aria-hidden className="text-foreground/30">|</span>}
                    <Link
                      to={l.to}
                      {...(l.hash ? { hash: l.hash } : {})}
                      className={`transition-colors ${pathname === l.to && !l.hash ? "text-primary" : "text-foreground/85 hover:text-primary"}`}
                    >
                      {l.label}
                    </Link>
                  </span>
                ))}
              </nav>
              <div className="lg:hidden text-[11px] tracking-[0.24em] uppercase text-foreground/70">
                Nº 24 · Madrid
              </div>
              <a
                href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
                target="_blank"
                rel="noreferrer"
                className="btn-primary btn-sm hidden sm:inline-flex"
              >
                <Play size={12} className="fill-current" />
                Escuchar
              </a>
              <button onClick={() => setOpen((v) => !v)} className="lg:hidden text-foreground p-2" aria-label="Menu">
                <div className="w-5 h-px bg-current mb-1.5" />
                <div className="w-5 h-px bg-current mb-1.5" />
                <div className="w-3 h-px bg-current ml-auto" />
              </button>
            </div>
            <div className="filete-b" />
          </div>
        </>
      )}

      {open && (
        <div className="lg:hidden filete-b bg-background">
          <nav className="container-ddp py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                {...(l.hash ? { hash: l.hash } : {})}
                onClick={() => setOpen(false)}
                className="text-[13px] tracking-[0.22em] uppercase text-foreground/85 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-sm sm:hidden mt-2 self-start"
            >
              <Play size={12} className="fill-current" />
              Escuchar en Spotify
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

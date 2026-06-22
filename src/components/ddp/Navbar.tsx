import { useEffect, useState } from "react";
import { Instagram, Youtube, Linkedin, Music2 } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

type NavLink = { to: string; label: string };
const links: NavLink[] = [
  { to: "/episodios", label: "Episodios" },
  { to: "/invitados", label: "Invitados" },
  { to: "/club", label: "Club" },
  { to: "/manifiesto", label: "Manifiesto" },
  { to: "/prensa", label: "Prensa" },
  { to: "/patrocinadores", label: "Patrocinadores" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 24);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/85 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-ddp flex items-center justify-between py-5">
        <Link to="/" hash="top" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-tight text-gold">DDP</span>
          <span className="hidden sm:inline text-[10px] tracking-[0.32em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
            Diario del Poder
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-[13px] tracking-wide transition-colors ${
                  active ? "text-gold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active && <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3 mr-2 text-muted-foreground">
            <a href="https://www.instagram.com/eldiariodelpoder/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram size={16} /></a>
            <a href="https://www.youtube.com/@eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-gold transition-colors"><Youtube size={16} /></a>
            <a href="https://www.linkedin.com/company/eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gold transition-colors"><Linkedin size={16} /></a>
            <a href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" target="_blank" rel="noreferrer" aria-label="Spotify" className="hover:text-gold transition-colors"><Music2 size={16} /></a>
          </div>
          <Link
            to="/"
            hash="newsletter"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[12px] tracking-[0.18em] uppercase border border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all"
          >
            Newsletter
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-foreground p-2"
            aria-label="Menu"
          >
            <div className="w-5 h-px bg-current mb-1.5" />
            <div className="w-5 h-px bg-current mb-1.5" />
            <div className="w-3 h-px bg-current ml-auto" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container-ddp py-6 flex flex-col gap-4">
            <Link
              to="/"
              hash="top"
              onClick={() => setOpen(false)}
              className={`text-sm transition-colors ${pathname === "/" ? "text-gold" : "text-muted-foreground hover:text-foreground"}`}
            >
              Inicio
            </Link>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`text-sm transition-colors ${pathname === l.to ? "text-gold" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

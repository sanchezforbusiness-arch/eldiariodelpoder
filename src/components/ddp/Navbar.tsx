import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/episodios", label: "Episodios" },
  { to: "/invitados", label: "Invitados" },
  { to: "/club", label: "Club" },
  { to: "/manifiesto", label: "Manifiesto" },
  { to: "/prensa", label: "Prensa" },
  { to: "/patrocinadores", label: "Patrocinadores" },
] as const;

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setSolid(y > 8);
      setHidden(y > 120 && y > last);
      last = y;
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
      className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${solid ? "border-b border-border bg-background/95" : "border-b border-transparent"}`}
    >
      <div className="container-ddp grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-4">
        <Link to="/" hash="top" className="flex min-w-0 items-baseline gap-3">
          <span className="text-lg font-medium tracking-[-0.04em]">DDP</span>
          <span className="mono-label truncate hidden sm:inline">Diario del Poder</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-[400ms] ${
                  active ? "text-signal" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active && <span className="mt-1 block h-px w-full bg-signal" />}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mono-label lg:hidden"
          aria-expanded={open}
          aria-label="Menú"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-ddp flex flex-col py-4">
            <Link to="/" hash="top" className="border-b border-border py-4 font-mono text-[11px] uppercase tracking-[0.12em]">
              Inicio
            </Link>
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="border-b border-border py-4 font-mono text-[11px] uppercase tracking-[0.12em]">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

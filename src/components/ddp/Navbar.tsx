import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/episodios", label: "Episodios" },
  { to: "/invitados", label: "Invitados" },
  { to: "/manifiesto", label: "Manifiesto" },
  { to: "/prensa", label: "Prensa" },
] as const;

const secondary = [
  { to: "/club", label: "Club" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${solid || open ? "border-b border-border bg-background" : "border-b border-transparent bg-transparent"}`}
    >
      <div className="container-ddp grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Link
          to="/"
          hash="top"
          className="min-w-0 truncate font-mono text-[11px] uppercase tracking-[0.24em] text-foreground"
        >
          Diario del Poder
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link key={l.to} to={l.to} className="group relative font-mono text-[12px] uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-300 hover:text-foreground">
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-signal transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center justify-end gap-4 lg:flex">
          <span className="h-6 w-px bg-border" />
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            Media partner
          </span>
          <a
            href="https://www.lavanguardia.com"
            target="_blank"
            rel="noopener"
            className="font-serif text-[15px] leading-none text-foreground transition-colors duration-300 hover:text-signal"
            aria-label="La Vanguardia, media partner oficial"
          >
            La Vanguardia
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-10 w-10 flex-col items-end justify-center gap-[6px] lg:hidden"
          aria-expanded={open}
          aria-label="Menú"
        >
          <span className={`block h-px w-6 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-background lg:hidden">
          <nav className="container-ddp flex flex-col pt-8">
            {[...links, ...secondary].map((l) => (
              <Link key={l.to} to={l.to} className="border-b border-border py-5 text-[9vw] font-medium leading-none tracking-[-0.03em]">
                {l.label}
              </Link>
            ))}
            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              Media partner — La Vanguardia
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}

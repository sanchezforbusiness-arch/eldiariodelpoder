import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/episodios", label: "Episodios" },
  { to: "/invitados", label: "Invitados" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/manifiesto", label: "Manifiesto" },
  { to: "/prensa", label: "Prensa" },
] as const;

const secondary = [
  { to: "/patrocinadores", label: "Patrocinadores" },
  { to: "/agenda", label: "Agenda" },
] as const;

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const overHero = pathname === "/";

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
      } ${
        solid || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : `border-b border-transparent bg-transparent ${overHero ? "text-on-image" : ""}`
      }`}
    >
      <div className="container-ddp grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-16 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
        <div className="min-w-0">
          <Link
            to="/"
            hash="top"
            className="tap min-w-0 max-w-full truncate font-mono text-2xs uppercase tracking-label text-foreground lg:text-2xs"
          >
            Diario del Poder
          </Link>
        </div>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link key={l.to} to={l.to} className="group relative font-mono text-2xs uppercase tracking-label text-muted-foreground transition-colors duration-300 hover:text-foreground">
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

        <div className="hidden items-center justify-end gap-6 lg:flex">
          <Link to="/patrocinadores" className="font-mono text-2xs uppercase tracking-label text-muted-foreground transition-colors hover:text-foreground">
            Patrocinadores
          </Link>
          <LanguageSwitcher />
        </div>

        <div className="ml-auto flex items-center gap-1 lg:hidden">
        <LanguageSwitcher />
        <button
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 ml-auto flex h-12 w-12 flex-col items-end justify-center gap-[6px] pr-2 lg:hidden"
          aria-expanded={open}
          aria-label="Menú"
        >
          <span className={`block h-px w-6 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-14 z-40 h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain bg-background lg:hidden">
          <nav className="container-ddp safe-b flex flex-col pt-8">
            {[...links, ...secondary].map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                style={{ animationDelay: `${i * 50}ms` }}
                className="animate-fade-in border-b border-border py-5 text-2xl font-medium leading-none tracking-tight active:text-signal"
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

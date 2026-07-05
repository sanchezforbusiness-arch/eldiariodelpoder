import { useState } from "react";
import { Play } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

type NavLink = { to: string; label: string };
const links: NavLink[] = [
  { to: "/episodios", label: "Episodios" },
  { to: "/invitados", label: "Invitados" },
  { to: "/", label: "Quiénes somos", hash: "team" } as NavLink & { hash?: string },
  { to: "/club", label: "Club" },
  { to: "/patrocinadores", label: "Patrocinadores" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-ddp flex items-center justify-between py-4">
        <Link to="/" className="flex items-baseline gap-3 group">
          <span className="font-serif text-2xl tracking-tight text-primary font-medium">DDP</span>
          <span className="hidden sm:inline text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Diario del Poder
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.to && !(l as { hash?: string }).hash;
            const hash = (l as { hash?: string }).hash;
            return (
              <Link
                key={l.label}
                to={l.to}
                {...(hash ? { hash } : {})}
                className={`text-[13px] tracking-wide transition-colors ${
                  active ? "text-primary font-medium" : "text-foreground/70 hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
            target="_blank"
            rel="noreferrer"
            className="btn-primary btn-sm hidden sm:inline-flex"
          >
            <Play size={12} className="fill-current" />
            Escuchar
          </a>
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
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-ddp py-6 flex flex-col gap-4">
            {links.map((l) => {
              const hash = (l as { hash?: string }).hash;
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  {...(hash ? { hash } : {})}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              );
            })}
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

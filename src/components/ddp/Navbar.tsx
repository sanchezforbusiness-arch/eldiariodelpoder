import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Eq } from "@/components/ddp/Eq";

const links = [
  { to: "/episodios", label: "Episodios" },
  { to: "/invitados", label: "Invitados" },
  { to: "/", label: "Quiénes somos", hash: "team" as const },
  { to: "/club", label: "Club" },
  { to: "/prensa", label: "Prensa" },
  { to: "/patrocinadores", label: "Patrocinadores" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-ddp flex items-center justify-between py-4 md:py-5">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <span className="font-display font-black tracking-tight text-lg md:text-xl uppercase leading-none">
            Diario del Poder
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[12px] font-medium tracking-[0.08em] uppercase">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              {...(("hash" in l && l.hash) ? { hash: l.hash } : {})}
              className={
                pathname === l.to && !("hash" in l && l.hash)
                  ? "text-primary"
                  : "text-foreground/80 hover:text-foreground transition-colors"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ"
            target="_blank"
            rel="noreferrer"
            className="btn-primary btn-sm hidden sm:inline-flex items-center gap-2"
          >
            <Eq />
            Escuchar
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-foreground p-2"
            aria-label="Menú"
          >
            <div className="w-6 h-px bg-current mb-1.5" />
            <div className="w-6 h-px bg-current mb-1.5" />
            <div className="w-4 h-px bg-current ml-auto" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <nav className="container-ddp py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                {...(("hash" in l && l.hash) ? { hash: l.hash } : {})}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.1em] uppercase text-foreground/85 hover:text-primary transition-colors"
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
              Escuchar en Spotify
            </a>
            <a
              href="https://cal.com/el-diario-del-poder-wwdlhf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-outline btn-sm mt-1 self-start"
            >
              Reservar una llamada
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

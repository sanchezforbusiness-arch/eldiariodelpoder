import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/invitados", label: "Invitados" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/prensa", label: "Prensa" },
  { to: "/escuchanos", label: "Escúchanos" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_var(--color-border)]" : "border-b border-transparent"
      }`}
    >
      <div className="container-ddp flex items-center justify-between h-[64px]">
        <Link to="/" className="flex items-baseline gap-2 group" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">DDP</span>
          <span className="hidden sm:inline text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground group-hover:text-primary transition-colors">
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
                className={`text-[14px] font-semibold tracking-tight transition-colors ${
                  active ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/escuchanos"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-[12px] font-semibold tracking-[0.06em] uppercase hover:opacity-90 transition-opacity"
          >
            Escúchanos
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-foreground p-2"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-ddp py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-foreground hover:text-primary"
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

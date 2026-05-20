import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/invitados", label: "Invitados" },
  { to: "/prensa", label: "Prensa" },
  { to: "/eventos", label: "Eventos" },
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
      className={`fixed inset-x-0 top-0 z-50 bg-background transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_var(--color-border)]" : "border-b border-transparent"
      }`}
    >
      <div className="container-ddp flex items-center justify-between h-[64px]">
        <Link to="/" className="group" onClick={() => setOpen(false)}>
          <span className="font-display text-primary text-[22px] md:text-[26px] leading-none tracking-[-0.01em]">
            DIARIO DEL PODER
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`font-display text-[14px] tracking-[0.1em] uppercase transition-colors ${
                  active ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-foreground p-2 hover:text-primary transition-colors"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background">
          <nav className="container-ddp py-8 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl md:text-4xl uppercase text-foreground hover:text-primary transition-colors"
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

import { useEffect, useState } from "react";
import { Instagram, Youtube, Linkedin, Music2 } from "lucide-react";

const links = [
  { href: "#manifesto", label: "Manifiesto" },
  { href: "#guests", label: "Invitados" },
  { href: "#episodes", label: "Episodios" },
  { href: "#club", label: "Club" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#team", label: "Equipo" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
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
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-tight text-gold">DDP</span>
          <span className="hidden sm:inline text-[10px] tracking-[0.32em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
            Diario del Poder
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-[13px] tracking-wide transition-colors ${
                active === l.href ? "text-gold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              {active === l.href && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3 mr-2 text-muted-foreground">
            <a href="https://www.instagram.com/eldiariodelpoder/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram size={16} /></a>
            <a href="https://www.youtube.com/@eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-gold transition-colors"><Youtube size={16} /></a>
            <a href="https://www.linkedin.com/company/eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gold transition-colors"><Linkedin size={16} /></a>
            <a href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" target="_blank" rel="noreferrer" aria-label="Spotify" className="hover:text-gold transition-colors"><Music2 size={16} /></a>
          </div>
          <a
            href="#newsletter"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[12px] tracking-[0.18em] uppercase border border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all"
          >
            Newsletter
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
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container-ddp py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

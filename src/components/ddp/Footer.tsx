import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Linkedin, Music2 } from "lucide-react";

const TikTok = (props: { size?: number }) => (
  <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.62a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84z"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container-ddp py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] tracking-[0.14em] uppercase font-display">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-foreground/80">
          <span>© {new Date().getFullYear()} Diario del Poder</span>
          <Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link>
          <Link to="/prensa" className="hover:text-primary transition-colors">Prensa</Link>
          <Link to="/escuchanos" className="hover:text-primary transition-colors">Escúchanos</Link>
        </div>
        <div className="flex items-center gap-5 text-foreground/80">
          <a href="https://www.instagram.com/eldiariodelpoder/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={16} /></a>
          <a href="https://www.youtube.com/@eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-primary transition-colors"><Youtube size={16} /></a>
          <a href="https://www.linkedin.com/company/eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={16} /></a>
          <a href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" target="_blank" rel="noreferrer" aria-label="Spotify" className="hover:text-primary transition-colors"><Music2 size={16} /></a>
          <a href="https://www.tiktok.com/@eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-primary transition-colors"><TikTok size={16} /></a>
        </div>
      </div>
    </footer>
  );
}

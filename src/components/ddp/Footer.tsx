import { Instagram, Youtube, Linkedin, Music2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const TikTok = (props: { size?: number }) => (
  <svg width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.62a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84z"/></svg>
);

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card/30">
      <div className="container-ddp py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-6">
            <div className="font-serif text-3xl text-gold mb-5">DDP</div>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug max-w-md font-light">
              Los referentes de hoy, <span className="italic">a los de mañana</span>.
            </p>
            <p className="mt-5 text-sm text-muted-foreground">Grabado en Madrid.</p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Navegar</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/episodios" className="link-quiet">Episodios</Link></li>
              <li><Link to="/invitados" className="link-quiet">Invitados</Link></li>
              <li><Link to="/club" className="link-quiet">Club</Link></li>
              <li><Link to="/manifiesto" className="link-quiet">Manifiesto</Link></li>
              <li><Link to="/prensa" className="link-quiet">Prensa</Link></li>
              <li><Link to="/patrocinadores" className="link-quiet">Patrocinadores</Link></li>
              <li><Link to="/agenda" className="link-quiet">Agenda</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 min-w-0">
            <h3 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Contacto</h3>
            <a href="mailto:contactoeldiariodelpoder@gmail.com" className="text-xs sm:text-sm text-foreground hover:text-gold transition-colors break-all">
              contactoeldiariodelpoder@gmail.com
            </a>
            <div className="mt-6 flex items-center gap-4 text-muted-foreground">
              <a href="https://www.instagram.com/eldiariodelpoder/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-gold"><Instagram size={18} /></a>
              <a href="https://www.youtube.com/@eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-gold"><Youtube size={18} /></a>
              <a href="https://www.linkedin.com/company/eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gold"><Linkedin size={18} /></a>
              <a href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" target="_blank" rel="noreferrer" aria-label="Spotify" className="hover:text-gold"><Music2 size={18} /></a>
              <a href="https://www.tiktok.com/@eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-gold"><TikTok size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Diario del Poder</p>
          <p>Madrid, España</p>
        </div>
      </div>
    </footer>
  );
}

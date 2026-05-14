import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Linkedin, Music2 } from "lucide-react";

const TikTok = (props: { size?: number }) => (
  <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.62a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84z"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-ddp py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <div className="font-display text-2xl font-bold text-foreground mb-3">Diario del Poder</div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Conversaciones de criterio con expresidentes, CEOs y líderes que han estado donde se decide.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[12px] font-semibold tracking-[0.14em] uppercase text-primary mb-5">Navegar</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/invitados" className="text-foreground hover:text-primary transition-colors">Invitados</Link></li>
              <li><Link to="/nosotros" className="text-foreground hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link to="/prensa" className="text-foreground hover:text-primary transition-colors">Prensa</Link></li>
              <li><Link to="/escuchanos" className="text-foreground hover:text-primary transition-colors">Escúchanos</Link></li>
              <li><Link to="/contacto" className="text-foreground hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[12px] font-semibold tracking-[0.14em] uppercase text-primary mb-5">Contacto</h4>
            <a href="mailto:contactoeldiariodelpoder@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors break-all">
              contactoeldiariodelpoder@gmail.com
            </a>
            <p className="mt-4 text-sm text-muted-foreground">Pamplona · España</p>
            <div className="mt-6 flex items-center gap-5 text-foreground">
              <a href="https://www.instagram.com/eldiariodelpoder/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={18} /></a>
              <a href="https://www.youtube.com/@eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-primary transition-colors"><Youtube size={18} /></a>
              <a href="https://www.linkedin.com/company/eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
              <a href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" target="_blank" rel="noreferrer" aria-label="Spotify" className="hover:text-primary transition-colors"><Music2 size={18} /></a>
              <a href="https://www.tiktok.com/@eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-primary transition-colors"><TikTok size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-muted-foreground">
          <p>© 2026 Diario del Poder</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

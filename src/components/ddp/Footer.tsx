import { Instagram, Youtube, Linkedin, Music2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const TikTok = (props: { size?: number }) => (
  <svg width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.62a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84z"/></svg>
);

export function Footer() {
  return (
    <footer id="contact" className="bg-background">
      <div className="masthead-rule" />
      <div className="container-ddp py-12 md:py-16">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-serif uppercase text-foreground tracking-[0.08em] text-2xl md:text-4xl font-medium">
            Diario del Poder
          </p>
          <p className="mt-2 text-[10px] tracking-[0.32em] uppercase text-foreground/60">
            Colofón · Edición digital
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 filete pt-10">
          <div>
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-foreground/70 mb-4">Secciones</h4>
            <ul className="space-y-2 text-sm text-foreground/85">
              <li><Link to="/episodios" className="hover:press-underline hover:text-primary transition-colors">Episodios</Link></li>
              <li><Link to="/invitados" className="hover:press-underline hover:text-primary transition-colors">Invitados</Link></li>
              <li><Link to="/club" className="hover:press-underline hover:text-primary transition-colors">Club</Link></li>
              <li><Link to="/patrocinadores" className="hover:press-underline hover:text-primary transition-colors">Patrocinadores</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-foreground/70 mb-4">La casa</h4>
            <ul className="space-y-2 text-sm text-foreground/85">
              <li><Link to="/manifiesto" className="hover:press-underline hover:text-primary transition-colors">Manifiesto</Link></li>
              <li><Link to="/prensa" className="hover:press-underline hover:text-primary transition-colors">Prensa</Link></li>
            </ul>
          </div>
          <div className="min-w-0">
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-foreground/70 mb-4">Contacto</h4>
            <a href="mailto:contactoeldiariodelpoder@gmail.com" className="block text-xs sm:text-sm text-foreground press-underline break-all">
              contactoeldiariodelpoder@gmail.com
            </a>
            <a
              href="https://cal.com/el-diario-del-poder-wwdlhf"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-xs sm:text-sm text-primary hover:underline"
            >
              Reservar una llamada
            </a>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.28em] uppercase text-foreground/70 mb-4">Seguir</h4>
            <div className="flex items-center gap-4 text-foreground/80">
              <a href="https://www.instagram.com/eldiariodelpoder/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={16} /></a>
              <a href="https://www.youtube.com/@eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-primary transition-colors"><Youtube size={16} /></a>
              <a href="https://www.linkedin.com/company/eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={16} /></a>
              <a href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" target="_blank" rel="noreferrer" aria-label="Spotify" className="hover:text-primary transition-colors"><Music2 size={16} /></a>
              <a href="https://www.tiktok.com/@eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-primary transition-colors"><TikTok size={16} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 filete text-center">
          <p className="text-[11px] tracking-[0.26em] uppercase text-foreground/70">
            © Diario del Poder — Fundado en 2025 — Madrid
          </p>
          <p className="mt-2 text-[10px] tracking-[0.22em] uppercase text-foreground/45">
            <a href="#" className="hover:text-primary">Privacidad</a> · <a href="#" className="hover:text-primary">Términos</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

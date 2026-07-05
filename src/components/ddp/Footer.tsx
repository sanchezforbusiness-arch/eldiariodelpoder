import { Instagram, Youtube, Linkedin, Music2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const TikTok = (props: { size?: number }) => (
  <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.62a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84z"/>
  </svg>
);

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-white/10">
      <div className="container-ddp py-16 md:py-20">
        {/* Wordmark */}
        <div className="pb-10 md:pb-14 border-b border-white/10">
          <p className="font-display font-black uppercase tracking-tight text-foreground text-[clamp(2.5rem,8vw,7rem)] leading-[0.9]">
            Diario del Poder
          </p>
          <p className="mt-3 text-sm text-foreground/55">La voz del legado.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pt-10 md:pt-14">
          <div>
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-foreground/50 mb-4">
              Secciones
            </h4>
            <ul className="space-y-2.5 text-sm text-foreground/85">
              <li><Link to="/episodios" className="hover:text-primary transition-colors">Episodios</Link></li>
              <li><Link to="/invitados" className="hover:text-primary transition-colors">Invitados</Link></li>
              <li><Link to="/club" className="hover:text-primary transition-colors">Club</Link></li>
              <li><Link to="/patrocinadores" className="hover:text-primary transition-colors">Patrocinadores</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-foreground/50 mb-4">
              La casa
            </h4>
            <ul className="space-y-2.5 text-sm text-foreground/85">
              <li><Link to="/manifiesto" className="hover:text-primary transition-colors">Manifiesto</Link></li>
              <li><Link to="/prensa" className="hover:text-primary transition-colors">Prensa</Link></li>
            </ul>
          </div>
          <div className="min-w-0">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-foreground/50 mb-4">
              Contacto
            </h4>
            <a
              href="mailto:contactoeldiariodelpoder@gmail.com"
              className="block text-sm text-foreground hover:text-primary transition-colors break-all"
            >
              contactoeldiariodelpoder@gmail.com
            </a>
            <a
              href="https://cal.com/el-diario-del-poder-wwdlhf"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-primary hover:underline"
            >
              Reservar una llamada →
            </a>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-foreground/50 mb-4">
              Seguir
            </h4>
            <div className="flex items-center gap-4 text-foreground/70">
              <a href="https://www.instagram.com/eldiariodelpoder/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
              <a href="https://www.youtube.com/@eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-primary transition-colors"><Youtube size={18} strokeWidth={1.5} /></a>
              <a href="https://www.linkedin.com/company/eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={18} strokeWidth={1.5} /></a>
              <a href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" target="_blank" rel="noreferrer" aria-label="Spotify" className="hover:text-primary transition-colors"><Music2 size={18} strokeWidth={1.5} /></a>
              <a href="https://www.tiktok.com/@eldiariodelpoder" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-primary transition-colors"><TikTok size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.18em] uppercase text-foreground/45">
          <p>© {new Date().getFullYear()} Diario del Poder — Madrid</p>
          <p>
            <a href="#" className="hover:text-foreground">Privacidad</a>{" "}·{" "}
            <a href="#" className="hover:text-foreground">Términos</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

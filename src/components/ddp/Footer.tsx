import { Instagram, Youtube, Linkedin, Music2 } from "lucide-react";

const TikTok = (props: { size?: number }) => (
  <svg width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.62a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84z"/></svg>
);

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card/40">
      <div className="container-ddp py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-serif text-3xl text-gold">DDP</div>
            <p className="mt-4 font-serif text-2xl md:text-3xl leading-snug max-w-md">
              La voz del <span className="italic">legado</span>.
            </p>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm">
              Conversaciones de fondo. Hecho en Madrid.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Navegar</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#episodes" className="hover:text-foreground transition-colors">Episodios</a></li>
              <li><a href="#guests" className="hover:text-foreground transition-colors">Invitados</a></li>
              <li><a href="#club" className="hover:text-foreground transition-colors">Club del Poder</a></li>
              <li><a href="#sponsors" className="hover:text-foreground transition-colors">Sponsors</a></li>
              <li><a href="#team" className="hover:text-foreground transition-colors">Equipo</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Plataformas</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ" target="_blank" rel="noreferrer" className="hover:text-foreground">Spotify</a></li>
              <li><a href="https://www.youtube.com/@eldiariodelpoder" target="_blank" rel="noreferrer" className="hover:text-foreground">YouTube</a></li>
              <li><a href="https://www.instagram.com/eldiariodelpoder/" target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/eldiariodelpoder" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a></li>
              <li><a href="https://www.tiktok.com/@eldiariodelpoder" target="_blank" rel="noreferrer" className="hover:text-foreground">TikTok</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Contacto</h4>
            <a href="mailto:contactoeldiariodelpoder@gmail.com" className="text-sm text-foreground hover:text-gold transition-colors break-all">
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

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-muted-foreground">
          <p>© 2025 Diario del Poder · La voz del legado.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Política de privacidad</a>
            <a href="#" className="hover:text-foreground">Términos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

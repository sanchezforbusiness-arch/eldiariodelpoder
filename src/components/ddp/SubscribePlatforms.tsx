import { Youtube } from "lucide-react";

const SpotifyIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.51 17.29a.747.747 0 0 1-1.028.25c-2.816-1.72-6.36-2.108-10.535-1.155a.748.748 0 1 1-.334-1.458c4.567-1.043 8.487-.593 11.647 1.335a.75.75 0 0 1 .25 1.028zm1.47-3.267a.936.936 0 0 1-1.286.309c-3.226-1.984-8.146-2.558-11.964-1.4a.936.936 0 1 1-.542-1.792c4.363-1.322 9.789-.681 13.483 1.596a.936.936 0 0 1 .309 1.287zm.127-3.4c-3.87-2.298-10.256-2.51-13.95-1.388a1.123 1.123 0 1 1-.651-2.15c4.238-1.286 11.29-1.036 15.744 1.607a1.123 1.123 0 1 1-1.143 1.931z"/>
  </svg>
);

const ApplePodcastsIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a3.375 3.375 0 1 1 0 6.75 3.375 3.375 0 0 1 0-6.75zm0 8.25c2.25 0 4 1.5 4 3.375 0 .966-.412 1.9-1.219 2.626a4.062 4.062 0 0 1-5.562 0C8.412 18.025 8 17.09 8 16.125c0-1.875 1.75-3.375 4-3.375zm-1.375-1.05c-.35-.03-.688.28-.688.63v1.575c0 .35.338.66.688.63.6-.05 1.062-.55 1.062-1.155v-.525c0-.605-.462-1.105-1.062-1.155zm2.75 0c-.6.05-1.062.55-1.062 1.155v.525c0 .605.462 1.105 1.062 1.155.35.03.688-.28.688-.63v-1.575c0-.35-.338-.66-.688-.63z"/>
  </svg>
);

const platforms = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ",
    Icon: SpotifyIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@eldiariodelpoder",
    Icon: (p: { size?: number }) => <Youtube size={p.size || 40} strokeWidth={1.4} />,
  },
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/es/podcast/diario-del-poder/id1741454034",
    Icon: ApplePodcastsIcon,
  },
];

export function SubscribePlatforms() {
  return (
    <section className="py-20 md:py-28 bg-background border-t border-white/5">
      <div className="container-ddp text-center">
        <p className="eyebrow mb-6">Escúchalo donde quieras</p>
        <h2 className="display-lg text-foreground mx-auto max-w-4xl">
          Suscríbete en tu<br />plataforma favorita
        </h2>
        <p className="mt-5 text-foreground/60 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          Nuevos episodios cada semana. Elige la app que ya usas y no te
          pierdas ninguna conversación.
        </p>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
          {platforms.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col items-center justify-center gap-4 py-10 px-6 bg-card border border-white/10 rounded-sm hover:border-primary hover:bg-white/[0.02] transition-all duration-300"
            >
              <span className="text-foreground/85 group-hover:text-primary transition-colors">
                <Icon size={44} />
              </span>
              <span className="font-display font-bold uppercase tracking-tight text-xl text-foreground">
                {name}
              </span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-foreground/45 group-hover:text-foreground/70 transition-colors">
                Escuchar →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

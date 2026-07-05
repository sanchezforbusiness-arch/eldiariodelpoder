import { Youtube, ArrowUpRight } from "lucide-react";
import g1 from "@/assets/guest-1.webp";
import g4 from "@/assets/guest-4.webp";
import g5 from "@/assets/guest-5.webp";
import jordiAsset from "@/assets/guest-jordi-juan.png.asset.json";
import echavarrenImg from "@/assets/guest-echavarren.webp";

const SPOTIFY_SHOW = "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ";
const APPLE_SHOW = "https://podcasts.apple.com/es/podcast/diario-del-poder/id1741454034";
const YT_CHANNEL = "https://www.youtube.com/@eldiariodelpoder";

const SpotifyIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.51 17.29a.747.747 0 0 1-1.028.25c-2.816-1.72-6.36-2.108-10.535-1.155a.748.748 0 1 1-.334-1.458c4.567-1.043 8.487-.593 11.647 1.335a.75.75 0 0 1 .25 1.028zm1.47-3.267a.936.936 0 0 1-1.286.309c-3.226-1.984-8.146-2.558-11.964-1.4a.936.936 0 1 1-.542-1.792c4.363-1.322 9.789-.681 13.483 1.596a.936.936 0 0 1 .309 1.287zm.127-3.4c-3.87-2.298-10.256-2.51-13.95-1.388a1.123 1.123 0 1 1-.651-2.15c4.238-1.286 11.29-1.036 15.744 1.607a1.123 1.123 0 1 1-1.143 1.931z"/>
  </svg>
);

const ApplePodcastsIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a3.375 3.375 0 1 1 0 6.75 3.375 3.375 0 0 1 0-6.75zm0 8.25c2.25 0 4 1.5 4 3.375 0 .966-.412 1.9-1.219 2.626a4.062 4.062 0 0 1-5.562 0C8.412 18.025 8 17.09 8 16.125c0-1.875 1.75-3.375 4-3.375zm-1.375-1.05c-.35-.03-.688.28-.688.63v1.575c0 .35.338.66.688.63.6-.05 1.062-.55 1.062-1.155v-.525c0-.605-.462-1.105-1.062-1.155zm2.75 0c-.6.05-1.062.55-1.062 1.155v.525c0 .605.462 1.105 1.062 1.155.35.03.688-.28.688-.63v-1.575c0-.35-.338-.66-.688-.63z"/>
  </svg>
);

type Ep = {
  guest: string;
  role: string;
  title: string;
  desc: string;
  img: string;
  yt: string;
  spotify?: string;
  apple?: string;
};

const episodes: Ep[] = [
  {
    guest: "Jordi Juan",
    role: "Director de La Vanguardia",
    title: "La teoría de los cajones para afrontar la crisis",
    desc: "Cómo separar problemas para decidir bajo presión, contado por uno de los grandes del periodismo español.",
    img: jordiAsset.url,
    yt: "https://www.youtube.com/@eldiariodelpoder",
  },
  {
    guest: "José María Aznar",
    role: "Expresidente del Gobierno de España",
    title: "Liderar un país",
    desc: "La toma de decisiones en el poder, el liderazgo y el legado. Conversación en Diálogos FAES.",
    img: g1,
    yt: "https://youtu.be/ZydPM-xkYvA",
  },
  {
    guest: "Guillermo Lasso",
    role: "Expresidente de Ecuador",
    title: "Gobernar en plena crisis",
    desc: "Del sector privado a la presidencia. Lecciones de un expresidente que gobernó en tiempos difíciles.",
    img: g5,
    yt: "https://youtu.be/2XZuIBfyBH0",
  },
  {
    guest: "Andrés Rodríguez",
    role: "Presidente de Forbes España",
    title: "Forbes, lujo y poder",
    desc: "Un editor histórico sobre construir una marca de referencia y sentar a la élite en la mesa.",
    img: g4,
    yt: "https://youtu.be/nTtgtxG7UNs",
  },
  {
    guest: "Mikel Echavarren",
    role: "CEO Colliers España",
    title: "Real estate, ciclos y dinero inteligente",
    desc: "El mapa del capital que mueve las ciudades. Ciclos, oportunidades y decisiones bajo presión.",
    img: echavarrenImg,
    yt: "https://youtu.be/ARO5S1I5cg8",
  },
];

function Card({ e }: { e: Ep }) {
  return (
    <article className="group flex flex-col bg-card border border-white/8 rounded-sm overflow-hidden hover:border-white/25 transition-colors duration-300">
      <a
        href={e.yt}
        target="_blank"
        rel="noreferrer"
        className="relative aspect-[4/5] overflow-hidden bg-muted block hover-cinema"
      >
        <img
          src={e.img}
          alt={e.guest}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.85) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 z-10">
          <p className="text-[10px] tracking-[0.24em] uppercase text-primary mb-2">
            Episodio · {e.role}
          </p>
          <h3 className="font-display font-black uppercase text-2xl md:text-[1.75rem] leading-[0.95] text-white">
            {e.guest}
          </h3>
        </div>
      </a>

      <div className="flex-1 flex flex-col p-5 md:p-6">
        <h4 className="font-display font-bold uppercase text-lg md:text-xl leading-[1.05] text-foreground">
          {e.title}
        </h4>
        <p className="mt-3 text-sm text-foreground/65 leading-relaxed line-clamp-3">
          {e.desc}
        </p>

        <div className="mt-6 flex items-center justify-between gap-3">
          <a
            href={e.yt}
            target="_blank"
            rel="noreferrer"
            className="btn-primary btn-sm inline-flex items-center gap-2"
          >
            Ver episodio
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
          <div className="flex items-center gap-3 text-foreground/55">
            <a
              href={e.spotify || SPOTIFY_SHOW}
              target="_blank"
              rel="noreferrer"
              aria-label="Spotify"
              className="hover:text-primary transition-colors"
            >
              <SpotifyIcon size={18} />
            </a>
            <a
              href={e.apple || APPLE_SHOW}
              target="_blank"
              rel="noreferrer"
              aria-label="Apple Podcasts"
              className="hover:text-primary transition-colors"
            >
              <ApplePodcastsIcon size={18} />
            </a>
            <a
              href={e.yt || YT_CHANNEL}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-primary transition-colors"
            >
              <Youtube size={18} strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function TopEpisodes() {
  return (
    <section id="episodes" className="py-20 md:py-28 bg-background border-t border-white/5">
      <div className="container-ddp">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-4">Los episodios</p>
            <h2 className="display-lg text-foreground">
              Los más<br />escuchados
            </h2>
          </div>
          <a
            href="/episodios"
            className="hidden sm:inline-flex btn-outline btn-sm items-center gap-2"
          >
            Ver todos
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {episodes.map((e) => (
            <Card key={e.title} e={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

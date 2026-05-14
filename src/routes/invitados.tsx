import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";
import { useReveal } from "@/hooks/use-reveal";
import g1 from "@/assets/guest-1.jpg";
import g2 from "@/assets/guest-2.jpg";
import g3 from "@/assets/guest-3.jpg";
import g4 from "@/assets/guest-4.jpg";
import g5 from "@/assets/guest-5.jpg";
import g6 from "@/assets/guest-6.jpg";
import g7 from "@/assets/guest-7.jpg";
import g8 from "@/assets/guest-8.jpg";
import gEcha from "@/assets/guest-echavarren.jpg";
import gJordi from "@/assets/guest-jordi-juan.jpg";

const SITE = "https://eldiariodelpoder.com";
const SPOTIFY = "https://open.spotify.com/show/4Yu7OTX95y3IZPQ23nTSKJ";
const YOUTUBE = "https://www.youtube.com/@eldiariodelpoder";

type Guest = {
  name: string;
  role: string;
  img: string;
  ep?: string;
  spotify?: string;
  youtube?: string;
  wiki?: string;
};

const presidentes: Guest[] = [
  { name: "José María Aznar", role: "Expresidente del Gobierno de España (1996–2004)", img: g1, ep: "03", youtube: "https://youtu.be/ZydPM-xkYvA", spotify: SPOTIFY, wiki: "https://es.wikipedia.org/wiki/Jos%C3%A9_Mar%C3%ADa_Aznar" },
  { name: "Guillermo Lasso", role: "Expresidente de la República del Ecuador", img: g5, ep: "02", youtube: "https://youtu.be/2XZuIBfyBH0", spotify: SPOTIFY, wiki: "https://es.wikipedia.org/wiki/Guillermo_Lasso" },
  { name: "Iván Duque", role: "Expresidente de Colombia", img: g2, wiki: "https://es.wikipedia.org/wiki/Iv%C3%A1n_Duque_M%C3%A1rquez" },
  { name: "Esperanza Aguirre", role: "Expresidenta de la Comunidad de Madrid", img: g7, wiki: "https://es.wikipedia.org/wiki/Esperanza_Aguirre" },
];

const empresariales: Guest[] = [
  { name: "Javier Tebas", role: "Presidente de LaLiga", img: g3, wiki: "https://es.wikipedia.org/wiki/Javier_Tebas" },
  { name: "Mikel Echavarren", role: "CEO de Colliers — Real estate", img: gEcha, ep: "04", youtube: "https://youtu.be/ARO5S1I5cg8", spotify: SPOTIFY },
  { name: "Martín Sellés", role: "CEO Johnson & Johnson España", img: g6 },
  { name: "Federica Fornaciari", role: "CEO SenYours · Estratega", img: g8 },
];

const mediaticos: Guest[] = [
  { name: "Andrés Rodríguez", role: "Presidente y fundador de Forbes España", img: g4, ep: "01", youtube: "https://youtu.be/nTtgtxG7UNs", spotify: SPOTIFY },
  { name: "Jordi Juan", role: "Director de La Vanguardia", img: gJordi, wiki: "https://es.wikipedia.org/wiki/Jordi_Juan_(periodista)" },
];

const allGuests = [...presidentes, ...empresariales, ...mediaticos];

const peopleLd = allGuests.map((g) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: g.name,
  description: g.role,
  jobTitle: g.role.split("—")[0].trim(),
  url: g.spotify || g.youtube || `${SITE}/invitados`,
  ...(g.wiki ? { sameAs: [g.wiki] } : {}),
  affiliation: { "@type": "Organization", name: "Diario del Poder" },
}));

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Invitados — Diario del Poder",
  itemListElement: allGuests.map((g, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@type": "Person", name: g.name, description: g.role },
  })),
};

export const Route = createFileRoute("/invitados")({
  head: () => ({
    meta: [
      { title: "Invitados de Diario del Poder | Expresidentes, CEOs, Líderes" },
      { name: "description", content: "Roster de invitados: José María Aznar (expresidente España), Guillermo Lasso (expresidente Ecuador), Iván Duque, Andrés Rodríguez (Forbes), Javier Tebas (LaLiga) y más." },
      { property: "og:title", content: "Conoce a nuestros invitados — Diario del Poder" },
      { property: "og:description", content: "Expresidentes, CEOs globales y líderes que han participado en nuestras conversaciones." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/invitados` },
      { name: "twitter:title", content: "Invitados — Diario del Poder" },
      { name: "twitter:description", content: "Gente que ha estado donde se decide." },
    ],
    links: [{ rel: "canonical", href: `${SITE}/invitados` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(itemListLd) },
      ...peopleLd.map((p) => ({ type: "application/ld+json", children: JSON.stringify(p) })),
    ],
  }),
  component: InvitadosPage,
});

function InvitadosPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Group title="Expresidentes y figuras institucionales" eyebrow="Liderazgo político" guests={presidentes} accent />
        <Group title="CEOs y líderes empresariales" eyebrow="Empresa" guests={empresariales} />
        <Group title="Periodistas y líderes mediáticos" eyebrow="Medios" guests={mediaticos} />
        <Coming />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 overflow-hidden grain">
      <div className="gold-glow w-[520px] h-[520px] -top-32 -right-32 float-slow opacity-40" />
      <div className="container-ddp relative fade-up">
        <div className="flex items-center gap-4 mb-7">
          <span className="h-px w-12 bg-gold/70" />
          <span className="eyebrow">Invitados</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.92] font-light tracking-[-0.04em] max-w-5xl">
          El roster que<br />lo <span className="italic shimmer-gold">valida</span> todo.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-[1.1rem] text-foreground/75 leading-[1.7]">
          Expresidentes, CEOs globales y líderes que eligieron hablar con Diario del Poder.
          No es solo un podcast: es la plataforma donde los que saben enseñan a los que quieren aprender.
        </p>
      </div>
    </section>
  );
}

function Group({ title, eyebrow, guests, accent }: { title: string; eyebrow: string; guests: Guest[]; accent?: boolean }) {
  if (!guests.length) return null;
  return (
    <section className={`py-16 md:py-24 border-t border-border ${accent ? "bg-card/20" : ""}`}>
      <div className="container-ddp">
        <div className="reveal mb-12 max-w-3xl">
          <span className="eyebrow block mb-5">{eyebrow}</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] font-light tracking-[-0.02em]">{title}</h2>
        </div>
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal-stagger">
          {guests.map((g) => (
            <article key={g.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-card hover-cinema">
                <img
                  src={g.img}
                  alt={`${g.name}, ${g.role}, invitado en Diario del Poder podcast`}
                  width={512}
                  height={640}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                {g.ep && (
                  <span className="absolute top-5 left-5 font-serif text-3xl text-gold/90">{g.ep}</span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="font-serif text-2xl md:text-[1.7rem] leading-tight">{g.name}</h3>
                  <p className="mt-2 text-[11px] tracking-[0.18em] uppercase text-gold/85">{g.role}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-[11px] tracking-[0.22em] uppercase">
                {g.spotify && (
                  <a href={g.spotify} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-gold transition-colors">
                    <Play size={12} className="fill-current" /> Spotify
                  </a>
                )}
                {g.youtube && (
                  <a href={g.youtube} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-gold transition-colors">
                    <Play size={12} className="fill-current" /> YouTube
                  </a>
                )}
                {!g.spotify && !g.youtube && (
                  <span className="text-muted-foreground">Episodio próximamente</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coming() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-ddp grid md:grid-cols-2 gap-8 items-center">
        <div className="reveal">
          <span className="eyebrow block mb-5">Próximamente</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] font-light">
            Pronto en el podcast: <span className="italic text-gold">Javier Tebas, Iván Duque</span> y más.
          </h2>
        </div>
        <div className="reveal flex md:justify-end gap-4 flex-wrap">
          <a href={SPOTIFY} target="_blank" rel="noreferrer" className="ring-pulse inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-gold-bright transition-colors">
            <Play size={14} className="fill-current" /> Escuchar en Spotify
          </a>
          <Link to="/escuchanos" className="inline-flex items-center gap-2 px-7 py-4 text-[12px] tracking-[0.22em] uppercase border border-foreground/25 hover:border-gold hover:text-gold transition-colors">
            Más canales <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
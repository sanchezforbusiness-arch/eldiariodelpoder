import { Linkedin } from "lucide-react";
import g8 from "@/assets/guest-8.jpg";
import inigo from "@/assets/advisor-inigo.jpg";
import alejandro from "@/assets/founder-alejandro.jpg";
import victor from "@/assets/founder-victor.jpg";

const founders = [
  {
    name: "Alejandro Sánchez Martínez",
    role: "Co-Founder · Host & Managing Partner",
    bio: "Host de Diario del Poder. Presidente de Kifaru Club, portavoz de Lideremos y miembro de Nova 111 & Talentum (Top talento en España). BBA + Data Analytics en la Universidad de Navarra. Ha entrevistado a expresidentes y CEOs como José María Aznar, Guillermo Lasso, Andrés Rodríguez (Forbes), Tomás Villén (Porsche) o Antonio Romero (Starbucks).",
    img: alejandro,
    ln: "https://www.linkedin.com/in/alejandrosanchezmartinez",
  },
  {
    name: "Víctor Hugo Gandarilla de Andrés",
    role: "Co-Founder · Host & Managing Partner",
    bio: "Host de Diario del Poder. Nova 111 List (Top 10 España en Marketing & Comunicación), Talentum Fellow y miembro de Lideremos y Youth Agenda. Marketing + Corporate Communication en la Universidad de Navarra. Experiencia previa en Conforama y co-founder de EyChihuahua (México).",
    img: victor,
    ln: "https://www.linkedin.com/in/victor-hugo-gandarilla-de-andres",
  },
];

const advisors = [
  {
    name: "Federica Ilaria Fornaciari",
    role: "Advisor · Estrategia & Marca",
    bio: "Founder & CEO de SenYours Consulting y NoBrainer Partners. Ex-Bain & Company, con 17+ años entre consultoría estratégica, lujo, telco, tecnología y media en Italia y España. Board member, asesora de C-suite y operadora de M&A cross-border. Profesora en IE, IESE y Bocconi — siete Best Professor Awards consecutivos. Autora académica del modelo IES–BBPP de liderazgo relacional y de The CEO as a Brand Operating System (2026). Conferenciante habitual en Forbes Summit, IESE Next y Business Insider.",
    img: g8,
    ln: "https://www.linkedin.com/in/federica-ilaria-fornaciari-mba",
    pills: ["Forbes Top 100", "7× Best Professor", "IE · IESE · Bocconi", "Ex-Bain", "Board · WAM · AR Hotels"],
  },
  {
    name: "Iñigo Rivero Iruretagoyena",
    role: "Advisor · M&A & Patrimonios",
    bio: "Managing Partner de Paterberg y Lejeune Abogados y Economistas. Asesor estratégico, financiero y legal de grandes patrimonios, family offices y consejos. Inversor en startups y board member en proyectos de energía, real estate y tech.",
    img: inigo,
    ln: "https://www.linkedin.com/in/iñigo-rivero-iruretagoyena-88351b30",
  },
];

function Person({ m }: { m: { name: string; role: string; bio: string; img: string; ln: string; pills?: string[] } }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-card mb-6">
        <img
          src={m.img}
          alt={m.name}
          width={512}
          height={640}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl md:text-3xl">{m.name}</h3>
          <p className="mt-1 text-[11px] tracking-[0.3em] uppercase text-gold">{m.role}</p>
        </div>
        <a href={m.ln} target="_blank" rel="noreferrer" aria-label={`LinkedIn ${m.name}`} className="text-muted-foreground hover:text-gold transition-colors mt-2">
          <Linkedin size={18} />
        </a>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">{m.bio}</p>
      {m.pills && (
        <div className="mt-4 flex flex-wrap gap-2 max-w-md">
          {m.pills.map((p) => (
            <span key={p} className="text-[10px] tracking-[0.18em] uppercase text-gold/90 border border-gold/40 px-2.5 py-1">
              {p}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export function Team() {
  return (
    <section id="team" className="py-28 md:py-40 border-t border-border bg-card/30">
      <div className="container-ddp">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Equipo</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Detrás de cada <span className="italic text-gold">conversación</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Equipo joven. Mentores con recorrido.
          </p>
        </div>

        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-6 bg-gold/60" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold/90">Fundadores</span>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {founders.map((m) => <Person key={m.name} m={m} />)}
        </div>

        <div className="mt-24 mb-10 flex items-center gap-3">
          <span className="h-px w-6 bg-gold/60" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold/90">Advisors</span>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {advisors.map((m) => <Person key={m.name} m={m} />)}
        </div>
      </div>
    </section>
  );
}

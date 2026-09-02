import { Globe, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import g8 from "@/assets/guest-8.webp";
import inigo from "@/assets/advisor-inigo.webp";
import jordiUrbea from "@/assets/jordi-urbea.png.asset.json";
import alejandro from "@/assets/founder-alejandro.webp";
import victor from "@/assets/founder-victor.webp";

const founders = [
  {
    name: "Alejandro Sánchez Martínez",
    role: "Co-fundador · Host",
    bio: "Host del podcast. Presidente de Kifaru Club y miembro de Nova 111. Ha entrevistado a Aznar, Lasso, Andrés Rodríguez (Forbes) o Tomás Villén (Porsche).",
    img: alejandro,
    ln: "https://www.linkedin.com/in/alejandrosanchezmartinez",
    web: "https://alejandrosanchezmartinez.com",
    to: "/alejandro-sanchez-martinez",
  },
  {
    name: "Víctor Hugo Gandarilla",
    role: "Co-fundador · Host",
    bio: "Host del podcast. Top 10 de España en Marketing & Comunicación (Nova 111). Estudia en la Universidad de Navarra.",
    img: victor,
    ln: "https://www.linkedin.com/in/victor-hugo-gandarilla-de-andres",
    to: "/victor-hugo-gandarilla-de-andres",
  },
];

const board = [
  {
    name: "Juan Ángel Soto Gómez",
    role: "Patrocinio institucional · Presidente de la Fundación Fortius",
    bio: "Preside la Fundación Fortius en España y Estados Unidos, la grant-making foundation e incubadora que respalda institucionalmente a Diario del Poder desde Madrid y Washington DC.",
    ln: "https://www.linkedin.com/in/juanangelsoto/",
  },
];

const advisors = [
  {
    name: "Federica Fornaciari",
    role: "Advisor · Estrategia & Marca",
    bio: "Founder de SenYours y NoBrainer Partners. Ex-Bain. Profesora en IE, IESE y Bocconi. Forbes Top 100.",
    img: g8,
    ln: "https://www.linkedin.com/in/federica-ilaria-fornaciari-mba",
  },
  {
    name: "Iñigo Rivero",
    role: "Advisor · M&A & Patrimonios",
    bio: "Managing Partner de Paterberg y Lejeune. Asesora a family offices, consejos y grandes patrimonios.",
    img: inigo,
    ln: "https://www.linkedin.com/in/iñigo-rivero-iruretagoyena-88351b30",
  },
  {
    name: "Jordi Urbea",
    role: "Advisor · Comunicación & CEO de Ogilvy Spain",
    bio: "CEO de Ogilvy Spain. Asesor en estrategia de marca, reputación y narrativa institucional para líderes globales.",
    img: jordiUrbea.url,
    ln: "https://www.linkedin.com/in/jordiurbea/",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function Person({ m }: { m: { name: string; role: string; bio: string; img?: string; ln: string; web?: string; to?: string } }) {
  return (
    <article className="group" itemScope itemType="https://schema.org/Person">
      <div className="relative aspect-[4/5] overflow-hidden bg-card mb-5">
        {m.img ? (
        <img
          src={m.img}
          alt={m.name}
          width={512}
          height={640}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover contrast-110 transition-transform duration-700 group-hover:scale-[1.03]"
          itemProp="image"
        />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div aria-hidden className="dot-grid absolute inset-0" />
            <span className="relative font-serif text-2xl font-light tracking-tight text-muted-foreground">
              {initials(m.name)}
            </span>
            <span aria-hidden className="absolute bottom-4 left-4 h-px w-10 bg-signal" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="tracking-tight text-2xl md:text-lg leading-tight" itemProp="name">{m.name}</h3>
          <p className="mt-1.5 text-2xs tracking-label uppercase text-foreground" itemProp="jobTitle">{m.role}</p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <a href={m.ln} target="_blank" rel="noreferrer me" aria-label={`LinkedIn ${m.name}`} className="text-muted-foreground hover:text-signal transition-colors" itemProp="sameAs">
            <Linkedin size={18} />
          </a>
          {m.web && (
            <a href={m.web} target="_blank" rel="me noreferrer" aria-label={`Web personal de ${m.name}`} className="text-muted-foreground hover:text-signal transition-colors" itemProp="sameAs">
              <Globe size={18} />
            </a>
          )}
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md" itemProp="description">{m.bio}</p>
      {m.to && (
        <Link
          to={m.to}
          className="mt-4 inline-block text-2xs tracking-label uppercase text-foreground hover:underline"
          itemProp="url"
        >
          Ver perfil
        </Link>
      )}
    </article>
  );
}

export function Team() {
  return (
 <section id="team" className="py-16 md:py-32 border-t border-border">
      <div className="container-ddp">


        <div className="mb-8 flex items-baseline gap-4 text-2xs tracking-label uppercase text-muted-foreground">
          <span>Fundadores</span>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {founders.map((m) => <Person key={m.name} m={m} />)}
        </div>

        <div className="mt-20 mb-8 flex items-baseline gap-4 text-2xs tracking-label uppercase text-muted-foreground">
          <span>Patronato</span>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </div>
        <div className="border-t border-border">
          {board.map((m) => (
            <article
              key={m.name}
              className="group grid gap-4 border-b border-border py-8 md:grid-cols-12 md:gap-10"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div className="md:col-span-4">
                <h3 className="text-xl tracking-tight md:text-lg" itemProp="name">{m.name}</h3>
                <p className="mt-2 text-2xs uppercase tracking-label text-muted-foreground" itemProp="jobTitle">
                  {m.role}
                </p>
              </div>
              <p className="prose-editorial md:col-span-6" itemProp="description">{m.bio}</p>
              <div className="md:col-span-2 md:justify-self-end">
                <a
                  href={m.ln}
                  target="_blank"
                  rel="noreferrer me"
                  aria-label={`LinkedIn ${m.name}`}
                  className="tap text-muted-foreground transition-colors hover:text-signal"
                  itemProp="sameAs"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>


        <div className="mt-20 mb-8 flex items-baseline gap-4 text-2xs tracking-label uppercase text-muted-foreground">
          <span>Quienes nos guían</span>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10">
          {advisors.map((m) => <Person key={m.name} m={m} />)}
        </div>
      </div>
    </section>
  );
}

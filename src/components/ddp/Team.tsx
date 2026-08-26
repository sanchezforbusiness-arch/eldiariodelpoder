import { Linkedin } from "lucide-react";
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
];

function Person({ m }: { m: { name: string; role: string; bio: string; img: string; ln: string; to?: string } }) {
  return (
    <article className="group" itemScope itemType="https://schema.org/Person">
      <div className="relative aspect-[4/5] overflow-hidden bg-card mb-5">
        <img
          src={m.img}
          alt={m.name}
          width={512}
          height={640}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover contrast-110 transition-transform duration-700 group-hover:scale-[1.03]"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="tracking-tight text-2xl md:text-lg leading-tight" itemProp="name">{m.name}</h3>
          <p className="mt-1.5 text-2xs tracking-label uppercase text-foreground" itemProp="jobTitle">{m.role}</p>
        </div>
        <a href={m.ln} target="_blank" rel="noreferrer me" aria-label={`LinkedIn ${m.name}`} className="text-muted-foreground hover:text-signal transition-colors mt-2" itemProp="sameAs">
          <Linkedin size={18} />
        </a>
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
 <section id="team" className="py-24 md:py-32 border-t border-border">
      <div className="container-ddp">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-7">
            <span className="eyebrow block mb-5">El equipo</span>
            <h2 className="tracking-tight text-2xl md:text-display lg:text-display leading-[1.02] font-medium">
              El equipo.
            </h2>
          </div>
          <p className="md:col-span-5 self-end text-base md:text-lg text-muted-foreground leading-relaxed">
            Dos fundadores. Dos asesores. Hecho en Madrid.
          </p>
        </div>

        <div className="mb-8 text-2xs tracking-label uppercase text-muted-foreground">Fundadores</div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {founders.map((m) => <Person key={m.name} m={m} />)}
        </div>

        <div className="mt-20 mb-8 text-2xs tracking-label uppercase text-muted-foreground">Quienes nos guían</div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {advisors.map((m) => <Person key={m.name} m={m} />)}
        </div>
      </div>
    </section>
  );
}

import { Globe, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { advisors, type AdvisorEntry } from "@/data/advisors";
import { AdvisorLink } from "@/components/ddp/AdvisorProfile";
import alejandro from "@/assets/founder-alejandro.webp";
import victor from "@/assets/founder-victor.webp";

const founders = [
  {
    name: "Alejandro Sánchez Martínez",
    role: "Co-fundador · Host",
    bio: "Host del podcast. Presidente de Kifaru Club, Talent Agent en Nova Talent y responsable de embajadores de la 111 List. Ha entrevistado a Aznar, Lasso, Andrés Rodríguez (Forbes) o Tomás Villén (Porsche).",
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

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function Person({ m, advisor }: { m: { name: string; role: string; bio: string; img?: string; ln: string; web?: string; to?: string }; advisor?: AdvisorEntry }) {
  return (
    <article className="group" itemScope itemType="https://schema.org/Person">
      {advisor ? <AdvisorLink advisor={advisor} className="block" ><div className="relative aspect-[4/5] overflow-hidden bg-card mb-5"><img src={m.img} alt={m.name} width={512} height={640} loading="lazy" className="absolute inset-0 w-full h-full object-cover contrast-110 transition-transform duration-700 group-hover:scale-[1.03]" itemProp="image" /><div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" /></div></AdvisorLink> : (
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
      </div>)}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="notranslate tracking-tight text-2xl md:text-lg leading-tight" translate="no" itemProp="name">{advisor ? <AdvisorLink advisor={advisor}>{m.name}</AdvisorLink> : m.name}</h3>
          <p className="mt-1.5 text-2xs tracking-label uppercase text-foreground" itemProp="jobTitle">{m.role}</p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <a href={m.ln} target="_blank" rel="noreferrer me" aria-label={`LinkedIn ${m.name}`} className="tap -m-2 justify-center p-2 text-muted-foreground hover:text-signal transition-colors" itemProp="sameAs">
            <Linkedin size={18} />
          </a>
          {m.web && (
            <a href={m.web} target="_blank" rel="me noreferrer" aria-label={`Web personal de ${m.name}`} className="tap -m-2 justify-center p-2 text-muted-foreground hover:text-signal transition-colors" itemProp="sameAs">
              <Globe size={18} />
            </a>
          )}
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md" itemProp="description">{m.bio}</p>
      {m.to && (
        <Link
          to={m.to}
          className="tap mt-2 text-2xs tracking-label uppercase text-foreground hover:underline"
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
          <span>Quienes nos guían</span>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
          {advisors.map((m) => <Person key={m.name} m={m} advisor={m} />)}
        </div>
      </div>
    </section>
  );
}

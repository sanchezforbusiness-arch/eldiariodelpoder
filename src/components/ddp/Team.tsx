import { Linkedin } from "lucide-react";
import g8 from "@/assets/guest-8.jpg";
import inigo from "@/assets/advisor-inigo.jpg";
import alejandro from "@/assets/founder-alejandro.jpg";
import victor from "@/assets/founder-victor.jpg";

const founders = [
  {
    name: "Alejandro Sánchez Martínez",
    role: "Co-fundador · Host",
    bio: "Host del podcast. Presidente de Kifaru Club y miembro de Nova 111. Ha entrevistado a Aznar, Lasso, Andrés Rodríguez (Forbes) o Tomás Villén (Porsche).",
    img: alejandro,
    ln: "https://www.linkedin.com/in/alejandrosanchezmartinez",
  },
  {
    name: "Víctor Hugo Gandarilla",
    role: "Co-fundador · Host",
    bio: "Host del podcast. Top 10 de España en Marketing & Comunicación (Nova 111). Estudia en la Universidad de Navarra.",
    img: victor,
    ln: "https://www.linkedin.com/in/victor-hugo-gandarilla-de-andres",
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

function Person({ m }: { m: { name: string; role: string; bio: string; img: string; ln: string } }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-card mb-5">
        <img
          src={m.img}
          alt={m.name}
          width={512}
          height={640}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl md:text-[1.7rem] leading-tight">{m.name}</h3>
          <p className="mt-1.5 text-[11px] tracking-[0.22em] uppercase text-gold">{m.role}</p>
        </div>
        <a href={m.ln} target="_blank" rel="noreferrer" aria-label={`LinkedIn ${m.name}`} className="text-muted-foreground hover:text-gold transition-colors mt-2">
          <Linkedin size={18} />
        </a>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">{m.bio}</p>
    </article>
  );
}

export function Team() {
  return (
    <section id="team" className="py-24 md:py-36 border-t border-border">
      <div className="container-ddp">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-7">
            <span className="eyebrow block mb-5">Quiénes somos</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light">
              Las personas detrás de cada <span className="italic text-gold">conversación</span>.
            </h2>
          </div>
          <p className="md:col-span-5 self-end text-base md:text-lg text-muted-foreground leading-relaxed">
            Dos fundadores y dos asesores que nos acompañan. Hecho en Madrid, con cuidado.
          </p>
        </div>

        <div className="mb-8 text-[11px] tracking-[0.3em] uppercase text-gold/80">Fundadores</div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {founders.map((m) => <Person key={m.name} m={m} />)}
        </div>

        <div className="mt-20 mb-8 text-[11px] tracking-[0.3em] uppercase text-gold/80">Quienes nos guían</div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {advisors.map((m) => <Person key={m.name} m={m} />)}
        </div>
      </div>
    </section>
  );
}

import founderAlejandro from "@/assets/founder-alejandro.webp";
import founderVictor from "@/assets/founder-victor.webp";
import federicaImg from "@/assets/guest-8.webp";

type Person = { name: string; role: string; img?: string; initials?: string };

const team: Person[] = [
  { name: "Alejandro Sánchez Martínez", role: "Cofundador · Director editorial", img: founderAlejandro },
  { name: "Víctor Hugo Gandarilla de Andrés", role: "Cofundador · Operaciones", img: founderVictor },
  { name: "Carla Palos de la Rosa", role: "Edición de contenido", initials: "CP" },
];

const advisory: Person[] = [
  { name: "Federica Ilaria Fornaciari", role: "CEO SenYours · Forbes Top 100 · IE Business School", img: federicaImg },
  { name: "Iñigo Rivero Iruretagoyena", role: "Managing Partner · Paterberg & Lejeune", initials: "IR" },
];

function Card({ p }: { p: Person }) {
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden bg-muted border border-border">
        {p.img ? (
          <img
            src={p.img}
            alt={p.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-card">
            <span className="font-serif text-5xl md:text-6xl text-primary/80 tracking-tight">
              {p.initials}
            </span>
          </div>
        )}
      </div>
      <h3 className="mt-4 font-serif text-lg md:text-xl leading-snug text-foreground">{p.name}</h3>
      <p className="mt-1 text-[11px] tracking-[0.14em] uppercase text-muted-foreground">{p.role}</p>
    </article>
  );
}

export function TeamHome() {
  return (
    <section id="team" className="py-16 md:py-28 border-t border-border bg-background">
      <div className="container-ddp">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="eyebrow block mb-4">Quiénes somos</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.025em]">
            Dos fundadores. Un <span className="italic text-primary">compromiso</span>: conversaciones con criterio, no ruido.
          </h2>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-6">Equipo</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {team.map((p) => <Card key={p.name} p={p} />)}
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-10 md:pt-14 border-t border-border">
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-6">Advisory board</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {advisory.map((p) => <Card key={p.name} p={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
import founderAlejandro from "@/assets/founder-alejandro.webp";
import founderVictor from "@/assets/founder-victor.webp";
import federicaImg from "@/assets/guest-8.webp";
import inigoAsset from "@/assets/advisor-inigo-portrait.png.asset.json";

type Person = { name: string; role: string; img?: string; initials?: string };

const team: Person[] = [
  { name: "Alejandro Sánchez Martínez", role: "Cofundador · Director editorial", img: founderAlejandro },
  { name: "Víctor Hugo Gandarilla de Andrés", role: "Cofundador · Operaciones", img: founderVictor },
];

const advisory: Person[] = [
  { name: "Federica Ilaria Fornaciari", role: "CEO SenYours · Forbes Top 100 · IE Business School", img: federicaImg },
  { name: "Iñigo Rivero Iruretagoyena", role: "Managing Partner · Paterberg & Lejeune", img: inigoAsset.url },
];

function Card({ p }: { p: Person }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        {p.img ? (
          <img
            src={p.img}
            alt={p.name}
            loading="lazy"
            className="photo-bw absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-background-alt">
            <span className="font-serif text-5xl md:text-6xl text-primary/80 tracking-tight">
              {p.initials}
            </span>
          </div>
        )}
      </div>
      <h3 className="mt-4 font-serif text-lg md:text-xl leading-snug text-foreground">{p.name}</h3>
      <p className="mt-1 text-[10px] tracking-[0.22em] uppercase text-foreground/60">{p.role}</p>
    </article>
  );
}

export function TeamHome() {
  return (
    <section id="team" className="py-16 md:py-24 filete bg-background">
      <div className="container-ddp">
        <div className="kicker mb-10 md:mb-14"><span className="kicker-num">Sección 04</span><span>Quiénes somos</span></div>

        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.02] font-light tracking-[-0.025em]">
              Dos fundadores. Un <span className="italic text-primary">compromiso</span>: conversaciones con criterio, no ruido.
            </h2>
            <p className="mt-6 text-base text-foreground/75 leading-relaxed drop-cap">
              Diario del Poder nació en Madrid con una idea sencilla: sentarnos a conversar, sin prisa y sin guion, con las personas que están construyendo lo que viene.
            </p>
            <p className="mt-8 text-[11px] tracking-[0.26em] uppercase text-foreground/60">Equipo · Advisory</p>
          </div>

          <div className="col-span-12 md:col-span-8">
            <p className="text-[11px] tracking-[0.24em] uppercase text-foreground/70 pb-3 filete-b mb-6">Equipo editorial</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {team.map((p) => <Card key={p.name} p={p} />)}
            </div>

            <p className="mt-14 text-[11px] tracking-[0.24em] uppercase text-foreground/70 pb-3 filete-b mb-6">Advisory board</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {advisory.map((p) => <Card key={p.name} p={p} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
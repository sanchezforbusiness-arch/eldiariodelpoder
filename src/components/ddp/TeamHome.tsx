import founderAlejandro from "@/assets/founder-alejandro.webp";
import founderVictor from "@/assets/founder-victor.webp";
import federicaImg from "@/assets/guest-8.webp";
import inigoAsset from "@/assets/advisor-inigo-portrait.png.asset.json";

type Person = { name: string; role: string; img: string };

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
      <div className="relative aspect-[4/5] overflow-hidden bg-muted rounded-sm">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="mt-4 font-display font-bold uppercase tracking-tight text-lg md:text-xl leading-tight text-foreground">
        {p.name}
      </h3>
      <p className="mt-1 text-[10px] tracking-[0.24em] uppercase text-primary">{p.role}</p>
    </article>
  );
}

export function TeamHome() {
  return (
    <section id="team" className="py-20 md:py-28 bg-background border-t border-white/5">
      <div className="container-ddp">
        <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-5">Quiénes somos</p>
            <h2 className="display-lg text-foreground">
              Dos fundadores.<br />Un podcast.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-6 md:col-start-7 self-end text-base md:text-lg text-foreground/70 leading-relaxed">
            Hecho en Madrid. Nos sentamos a conversar sin prisa con quienes están construyendo lo que viene.
          </p>
        </div>

        <p className="text-[11px] tracking-[0.28em] uppercase text-foreground/50 mb-6">Fundadores</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {team.map((p) => <Card key={p.name} p={p} />)}
        </div>

        <p className="mt-16 text-[11px] tracking-[0.28em] uppercase text-foreground/50 mb-6">Advisory board</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {advisory.map((p) => <Card key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}
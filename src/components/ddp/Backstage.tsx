import aznarFaes from "@/assets/bts-aznar-faes.jpg";
import aznarFirma from "@/assets/bts-aznar-firma.jpg";
import monitor from "@/assets/bts-monitor-aznar.jpg";
import lasso from "@/assets/bts-guillermo-lasso.jpg";
import andres from "@/assets/bts-andres-rodriguez.jpg";
import mikelPalco from "@/assets/bts-mikel-palco.jpg";
import hostsPalco from "@/assets/bts-hosts-palco.jpg";
import metropolitano from "@/assets/bts-metropolitano.jpg";
import urbea from "@/assets/bts-jordi-urbea-talk.jpg";
import osasuna from "@/assets/bts-osasuna.jpg";

type Shot = { src: string; alt: string; caption: string; pos?: string };
const shots: Shot[] = [
  { src: aznarFaes, alt: "Con José María Aznar en FAES", caption: "Aznar · FAES" },
  { src: andres, alt: "Con Andrés Rodríguez", caption: "Mikel · Palco Atlético de Madrid" },
  { src: lasso, alt: "Con Guillermo Lasso", caption: "Lasso · Quito" },
  { src: aznarFirma, alt: "Aznar firmando", caption: "Backstage" },
  { src: monitor, alt: "Monitor de grabación", caption: "On set" },
  { src: mikelPalco, alt: "Con Mikel Echavarren en el Metropolitano", caption: "Mikel · Metropolitano" },
  { src: hostsPalco, alt: "Alejandro y Víctor en el palco", caption: "Hosts" },
  { src: metropolitano, alt: "Estadio Cívitas Metropolitano", caption: "Cívitas Metropolitano" },
  { src: urbea, alt: "Jordi Urbea de Ogilvy", caption: "Jordi Urbea · Ogilvy" },
  { src: osasuna, alt: "Evento con Osasuna", caption: "DDP × Osasuna" },
];

export function Backstage() {
  const loop = [...shots, ...shots];
  return (
    <section id="backstage" className="py-24 md:py-36 border-t border-border">
      <div className="container-ddp mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="eyebrow block mb-5">Detrás de cámara</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light">
              Lo que pasa <span className="italic text-gold">fuera</span> del plano.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Madrid, Quito, Pamplona. Estudios, palcos y bibliotecas.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden mask-fade-x">
        <div className="marquee gap-4 md:gap-5">
          {loop.map((s, i) => (
            <figure
              key={i}
              className="group relative shrink-0 w-[260px] sm:w-[320px] md:w-[420px] aspect-[4/3] overflow-hidden bg-card"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover ${s.pos ?? "object-center"} grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-gold/90">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

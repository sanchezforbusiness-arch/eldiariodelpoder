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

type Shot = { src: string; alt: string; caption: string; span?: string; pos?: string };
const shots: Shot[] = [
  { src: aznarFaes, alt: "Con José María Aznar en FAES", caption: "Aznar · FAES", span: "md:col-span-2 md:row-span-2" },
  { src: andres, alt: "Con Andrés Rodríguez", caption: "Mikel · Palco Atlético de Madrid", pos: "object-top" },
  { src: lasso, alt: "Con Guillermo Lasso", caption: "Lasso · Quito" },
  { src: aznarFirma, alt: "Aznar firmando", caption: "Backstage" },
  { src: monitor, alt: "Monitor de grabación", caption: "On set" },
  { src: mikelPalco, alt: "Con Mikel Echavarren en el Metropolitano", caption: "Mikel · Metropolitano", span: "md:col-span-2" },
  { src: hostsPalco, alt: "Alejandro y Víctor en el palco", caption: "Hosts" },
  { src: metropolitano, alt: "Estadio Cívitas Metropolitano", caption: "Cívitas Metropolitano" },
  { src: urbea, alt: "Jordi Urbea de Ogilvy", caption: "Jordi Urbea · Ogilvy" },
  { src: osasuna, alt: "Evento con Osasuna", caption: "DDP × Osasuna", span: "md:col-span-2" },
];

export function Backstage() {
  return (
    <section id="backstage" className="py-24 md:py-36 border-t border-border">
      <div className="container-ddp">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
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

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {shots.map((s, i) => (
            <figure key={i} className={`group relative overflow-hidden bg-card ${s.span ?? ""}`}>
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover ${s.pos ?? "object-center"} grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700`}
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

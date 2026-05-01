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

const shots = [
  { src: aznarFaes, alt: "Con José María Aznar en FAES", caption: "Con Aznar · FAES, Madrid", span: "md:col-span-2 md:row-span-2" },
  { src: andres, alt: "Con Andrés Rodríguez", caption: "Andrés Rodríguez · Forbes" },
  { src: lasso, alt: "Con Guillermo Lasso", caption: "Guillermo Lasso · Quito" },
  { src: aznarFirma, alt: "Aznar firmando un libro", caption: "Backstage · FAES" },
  { src: monitor, alt: "Monitor de grabación", caption: "On set" },
  { src: mikelPalco, alt: "Grabación con Mikel Echavarren en el Metropolitano", caption: "Con Mikel · Palco VIP, Metropolitano", span: "md:col-span-2" },
  { src: hostsPalco, alt: "Alejandro y Víctor en el palco", caption: "Hosts · Metropolitano" },
  { src: metropolitano, alt: "Estadio Cívitas Metropolitano vacío", caption: "Cívitas Metropolitano" },
  { src: urbea, alt: "Jordi Urbea en el evento con Osasuna", caption: "Jordi Urbea · CEO Ogilvy" },
  { src: osasuna, alt: "Evento con Club Atlético Osasuna", caption: "Evento DDP × Osasuna", span: "md:col-span-2" },
];

export function Backstage() {
  return (
    <section id="backstage" className="py-28 md:py-40 border-t border-border">
      <div className="container-ddp">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow">Detrás de cámara</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Lo que pasa <span className="italic text-gold">fuera</span> del plano.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Madrid, Quito, Pamplona. Estudios, palcos y bibliotecas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {shots.map((s, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden bg-card border border-border ${s.span ?? ""}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
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
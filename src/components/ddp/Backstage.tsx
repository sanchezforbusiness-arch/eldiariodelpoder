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
import signingHands from "@/assets/bts-signing-hands.jpg";
import setMonitors from "@/assets/bts-set-monitors.jpg";

type Shot = { src: string; alt: string; caption: string; pos?: string };
const shots: Shot[] = [
  { src: aznarFaes, alt: "Con José María Aznar en FAES", caption: "Aznar · FAES" },
  { src: signingHands, alt: "Aznar firmando libro", caption: "Firma · A la juventud" },
  { src: setMonitors, alt: "Set de grabación", caption: "On set" },
  { src: andres, alt: "Con Andrés Rodríguez", caption: "Forbes · Madrid" },
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
  const rowA = loop;
  const rowB = [...shots].reverse().concat([...shots].reverse());
  return (
    <section id="backstage" className="py-24 md:py-36 border-t border-border overflow-hidden">
      <div className="container-ddp mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="eyebrow block mb-5">Detrás de cámara</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.98] font-light">
              Fuera del <span className="italic text-gold">plano</span>.
            </h2>
          </div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold/70 max-w-xs">
            Madrid · Quito · Pamplona
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {[
          { items: rowA, classes: "marquee gap-4 md:gap-5" },
          { items: rowB, classes: "marquee marquee-slow marquee-reverse gap-4 md:gap-5" },
        ].map((row, ri) => (
          <div key={ri} className="relative overflow-hidden mask-fade-x">
            <div className={row.classes}>
              {row.items.map((s, i) => (
                <figure
                  key={ri + "-" + i}
                  className="group relative shrink-0 w-[260px] sm:w-[320px] md:w-[400px] aspect-[4/3] overflow-hidden bg-card hover-cinema"
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover ${s.pos ?? "object-center"} grayscale-[0.2] transition-all duration-700`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-gold/90">
                    {s.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

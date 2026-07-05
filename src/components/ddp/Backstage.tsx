import aznarFaes from "@/assets/bts-aznar-faes.webp";
import aznarDialogos from "@/assets/bts-aznar-dialogos.webp";
import aznarFirma from "@/assets/bts-aznar-firma.webp";
import monitorAznar from "@/assets/bts-monitor-aznar.webp";
import signingHands from "@/assets/bts-signing-hands.webp";
import signingPen from "@/assets/bts-signing-pen.webp";
import lasso from "@/assets/bts-guillermo-lasso.webp";
import andres from "@/assets/bts-andres-rodriguez.webp";
import hostsPalco from "@/assets/bts-hosts-palco.webp";
import mikelPalco from "@/assets/bts-mikel-palco.webp";
import urbea from "@/assets/bts-jordi-urbea-talk.webp";
import setMonitors from "@/assets/bts-set-monitors.webp";
import metropolitano from "@/assets/bts-metropolitano.webp";
import osasuna from "@/assets/bts-osasuna.webp";
import heroStudio from "@/assets/hero-studio.webp";
import extra1 from "@/assets/backstage-extra-1.jpeg.asset.json";
import extra2 from "@/assets/backstage-extra-2.jpeg.asset.json";
import extra3 from "@/assets/backstage-extra-3.jpeg.asset.json";
import extra4 from "@/assets/backstage-extra-4.jpeg.asset.json";

type Shot = { src: string; alt: string; caption: string };
const shots: Shot[] = [
  { src: aznarFaes, alt: "Con José María Aznar en FAES", caption: "Aznar · FAES" },
  { src: signingHands, alt: "Aznar firmando libro", caption: "Firma · A la juventud" },
  { src: extra2.url, alt: "Encuentro con S.M. la Reina Letizia", caption: "S.M. La Reina · UNAV" },
  { src: lasso, alt: "Con Guillermo Lasso", caption: "Lasso · Quito" },
  { src: andres, alt: "Con Andrés Rodríguez", caption: "Forbes · Madrid" },
  { src: hostsPalco, alt: "Alejandro y Víctor en el palco", caption: "Hosts · Palco" },
  { src: urbea, alt: "Con Jordi Urbea de Ogilvy", caption: "Jordi Urbea · Ogilvy" },
  { src: setMonitors, alt: "Set de grabación", caption: "On set · Monitores" },
  { src: aznarDialogos, alt: "Aznar en diálogo", caption: "Aznar · Diálogos" },
  { src: aznarFirma, alt: "Aznar firmando", caption: "Firma · Detalle" },
  { src: monitorAznar, alt: "Aznar en monitor", caption: "Aznar · En monitor" },
  { src: signingPen, alt: "Detalle de firma", caption: "Detalle · Pluma" },
  { src: mikelPalco, alt: "Mikel en el palco", caption: "Mikel · Palco" },
  { src: metropolitano, alt: "Metropolitano", caption: "Metropolitano" },
  { src: osasuna, alt: "Osasuna", caption: "Osasuna" },
  { src: heroStudio, alt: "Estudio de grabación", caption: "Estudio" },
  { src: extra1.url, alt: "Backstage", caption: "Backstage" },
  { src: extra3.url, alt: "Backstage", caption: "Backstage" },
  { src: extra4.url, alt: "Backstage", caption: "Backstage" },
];

export function Backstage() {
  return (
    <section id="backstage" className="py-16 md:py-24 filete bg-background">
      <div className="container-ddp">
        <div className="kicker mb-10"><span className="kicker-num">Sección 05</span><span>Fuera de guion</span></div>
        <div className="grid grid-cols-12 gap-6 mb-8 md:mb-12">
          <h2 className="col-span-12 md:col-span-8 font-serif text-3xl md:text-5xl leading-[1.02] font-light tracking-[-0.025em]">
            Detrás del <span className="italic text-primary">micrófono</span>.
          </h2>
          <p className="col-span-12 md:col-span-4 text-[11px] tracking-[0.24em] uppercase text-foreground/60 md:text-right self-end">
            Madrid · donde se graban las historias
          </p>
        </div>

        {/* Mobile: horizontal snap row · Desktop: 4x2 grid */}
        <div className="md:hidden -mx-6 px-6 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2">
          {shots.map((s, i) => (
            <figure
              key={i}
              className="relative shrink-0 w-[75vw] max-w-[320px] aspect-[4/3] overflow-hidden bg-muted snap-start"
            >
              <img src={s.src} alt={s.alt} loading="lazy" decoding="async" className="photo-bw absolute inset-0 w-full h-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 p-2 bg-background text-[9px] tracking-[0.22em] uppercase text-foreground">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Desktop: CSS masonry (columns) editorial gallery */}
        <div className="hidden md:block [column-count:3] lg:[column-count:4] [column-gap:0.75rem]">
          {shots.map((s, i) => (
            <figure key={i} className="group break-inside-avoid mb-3">
              <div className="curtain relative overflow-hidden bg-muted">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 22vw, 30vw"
                  className="photo-bw block w-full h-auto"
                />
              </div>
              <figcaption className="mt-2 text-[10px] tracking-[0.22em] uppercase text-foreground/70">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

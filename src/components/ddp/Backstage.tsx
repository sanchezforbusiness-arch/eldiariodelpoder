import aznarFaes from "@/assets/bts-aznar-faes.webp";
import signingHands from "@/assets/bts-signing-hands.webp";
import lasso from "@/assets/bts-guillermo-lasso.webp";
import andres from "@/assets/bts-andres-rodriguez.webp";
import hostsPalco from "@/assets/bts-hosts-palco.webp";
import urbea from "@/assets/bts-jordi-urbea-talk.webp";
import setMonitors from "@/assets/bts-set-monitors.webp";
import extra2 from "@/assets/backstage-extra-2.jpeg.asset.json";

type Shot = { src: string; alt: string; caption: string };
const shots: Shot[] = [
  { src: aznarFaes, alt: "Con José María Aznar en FAES", caption: "Aznar · FAES" },
  { src: signingHands, alt: "Aznar firmando libro", caption: "Firma · A la juventud" },
  { src: lasso, alt: "Con Guillermo Lasso", caption: "Lasso · Quito" },
  { src: andres, alt: "Con Andrés Rodríguez", caption: "Forbes · Madrid" },
  { src: hostsPalco, alt: "Alejandro y Víctor en el palco", caption: "Hosts · Palco" },
  { src: urbea, alt: "Con Jordi Urbea de Ogilvy", caption: "Jordi Urbea · Ogilvy" },
  { src: extra2.url, alt: "Encuentro con S.M. la Reina Letizia", caption: "S.M. La Reina" },
  { src: setMonitors, alt: "Set de grabación", caption: "On set" },
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

        <div className="hidden md:grid grid-cols-4 gap-3">
          {shots.map((s, i) => (
            <figure key={i} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                  className="photo-bw absolute inset-0 w-full h-full object-cover"
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

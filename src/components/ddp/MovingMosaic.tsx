import bts_andres from "@/assets/bts-andres-rodriguez.webp";
import bts_aznarD from "@/assets/bts-aznar-dialogos.webp";
import bts_aznarF from "@/assets/bts-aznar-faes.webp";
import bts_aznarSign from "@/assets/bts-aznar-firma.webp";
import bts_lasso from "@/assets/bts-guillermo-lasso.webp";
import bts_hosts from "@/assets/bts-hosts-palco.webp";
import bts_urbea from "@/assets/bts-jordi-urbea-talk.webp";
import bts_metro from "@/assets/bts-metropolitano.webp";
import bts_mikel from "@/assets/bts-mikel-palco.webp";
import bts_monitor from "@/assets/bts-monitor-aznar.webp";
import bts_osasuna from "@/assets/bts-osasuna.webp";
import bts_set from "@/assets/bts-set-monitors.webp";
import bts_signHands from "@/assets/bts-signing-hands.webp";
import bts_signPen from "@/assets/bts-signing-pen.webp";
import heroStudio from "@/assets/hero-studio.webp";
import portraitHost from "@/assets/portrait-host.webp";
import extra1 from "@/assets/backstage-extra-1.jpeg.asset.json";
import extra2 from "@/assets/backstage-extra-2.jpeg.asset.json";
import extra3 from "@/assets/backstage-extra-3.jpeg.asset.json";
import extra4 from "@/assets/backstage-extra-4.jpeg.asset.json";
import reinaLetizia from "@/assets/reina-letizia.jpeg.asset.json";
import hostMic1 from "@/assets/host-mic-1.jpeg.asset.json";
import setGuest1 from "@/assets/set-guest-1.jpeg.asset.json";
import guestPortrait1 from "@/assets/guest-portrait-1.jpeg.asset.json";
import hostsSet from "@/assets/hosts-set.jpeg.asset.json";
import hostsWithGuest from "@/assets/hosts-with-guest.jpeg.asset.json";

type Shot = { src: string; alt: string; name?: string; href?: string };

const YT_CHANNEL = "https://www.youtube.com/@eldiariodelpoder";
const EPISODIOS = "/episodios";

const row1: Shot[] = [
  { src: bts_aznarD, alt: "José María Aznar en Diálogos FAES", name: "Aznar", href: "https://youtu.be/ZydPM-xkYvA" },
  { src: reinaLetizia.url, alt: "Saludo con S.M. la Reina Doña Letizia en la Universidad de Navarra", href: EPISODIOS },
  { src: bts_lasso, alt: "Guillermo Lasso", name: "Lasso", href: "https://youtu.be/2XZuIBfyBH0" },
  { src: hostMic1.url, alt: "Host al micrófono", href: EPISODIOS },
  { src: bts_andres, alt: "Andrés Rodríguez", name: "A. Rodríguez", href: "https://youtu.be/nTtgtxG7UNs" },
  { src: setGuest1.url, alt: "Grabación en el set", href: EPISODIOS },
  { src: bts_hosts, alt: "Hosts en el palco", href: EPISODIOS },
  { src: bts_urbea, alt: "Jordi Urbea", name: "J. Urbea", href: YT_CHANNEL },
  { src: heroStudio, alt: "Estudio de grabación", href: EPISODIOS },
];
const row2: Shot[] = [
  { src: bts_aznarF, alt: "Aznar en FAES", name: "Aznar", href: "https://youtu.be/ZydPM-xkYvA" },
  { src: hostsWithGuest.url, alt: "Hosts con invitado", href: EPISODIOS },
  { src: bts_signHands, alt: "Firma de libro", href: EPISODIOS },
  { src: guestPortrait1.url, alt: "Invitada al micrófono", href: EPISODIOS },
  { src: bts_set, alt: "Set de grabación", href: EPISODIOS },
  { src: bts_mikel, alt: "Mikel Echavarren", name: "M. Echavarren", href: "https://youtu.be/ARO5S1I5cg8" },
  { src: extra1.url, alt: "Backstage", href: EPISODIOS },
  { src: bts_monitor, alt: "Aznar en monitor", name: "Aznar", href: "https://youtu.be/ZydPM-xkYvA" },
  { src: portraitHost, alt: "Retrato de host", href: EPISODIOS },
];
const row3: Shot[] = [
  { src: bts_aznarSign, alt: "Aznar firmando", name: "Aznar", href: "https://youtu.be/ZydPM-xkYvA" },
  { src: hostsSet.url, alt: "Los hosts en el set", href: EPISODIOS },
  { src: bts_metro, alt: "Metropolitano", href: EPISODIOS },
  { src: extra2.url, alt: "Backstage", href: EPISODIOS },
  { src: extra3.url, alt: "Backstage", href: EPISODIOS },
  { src: bts_signPen, alt: "Detalle de firma", href: EPISODIOS },
  { src: bts_osasuna, alt: "Osasuna", href: EPISODIOS },
  { src: extra4.url, alt: "Backstage", href: EPISODIOS },
];

function Tile({ s }: { s: Shot }) {
  const isExternal = s.href?.startsWith("http");
  const inner = (
    <>
      <img
        src={s.src}
        alt={s.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
      />
      {s.name && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.75) 100%)",
            }}
          />
          <span className="absolute left-3 bottom-2 md:left-4 md:bottom-3 font-display font-black uppercase leading-none text-white text-xl md:text-3xl tracking-tight">
            {s.name}
          </span>
        </>
      )}
    </>
  );
  const cls =
    "group relative shrink-0 block overflow-hidden bg-muted rounded-sm aspect-video";
  const style = { width: "clamp(260px, 30vw, 440px)" } as const;
  if (!s.href) {
    return (
      <figure className={cls} style={style}>
        {inner}
      </figure>
    );
  }
  return (
    <a
      href={s.href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      aria-label={s.name ? `Ver episodio con ${s.name}` : s.alt}
      className={cls}
      style={style}
    >
      {inner}
    </a>
  );
}

function Row({
  shots,
  direction = "left",
  speed = "normal",
}: {
  shots: Shot[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
}) {
  const dup = [...shots, ...shots];
  return (
    <div className="overflow-hidden mask-fade-x">
      <div
        className={[
          "mosaic-row",
          direction === "left" ? "mosaic-left" : "mosaic-right",
          speed === "fast" ? "mosaic-fast" : speed === "slow" ? "mosaic-slow" : "",
        ].join(" ")}
      >
        {dup.map((s, i) => (
          <Tile key={i} s={s} />
        ))}
      </div>
    </div>
  );
}

export function MovingMosaic() {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container-ddp mb-10 md:mb-14 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-4">Los invitados</p>
          <h2 className="display-lg text-foreground">
            Referentes<br />al micrófono
          </h2>
        </div>
        <p className="hidden md:block text-sm text-foreground/60 max-w-xs text-right leading-relaxed">
          Presidentes, CEOs y creadores que están definiendo lo que viene.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Row shots={row1} direction="left" speed="normal" />
        <Row shots={row2} direction="right" speed="slow" />
        <Row shots={row3} direction="left" speed="fast" />
      </div>
    </section>
  );
}

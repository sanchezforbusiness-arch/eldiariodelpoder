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

type Shot = { src: string; alt: string };

const row1: Shot[] = [
  { src: bts_aznarD, alt: "Aznar en Diálogos" },
  { src: reinaLetizia.url, alt: "Saludo con S.M. la Reina Doña Letizia en la Universidad de Navarra" },
  { src: bts_lasso, alt: "Guillermo Lasso" },
  { src: hostMic1.url, alt: "Host al micrófono" },
  { src: bts_andres, alt: "Andrés Rodríguez, Forbes" },
  { src: setGuest1.url, alt: "Grabación en el set con invitada" },
  { src: bts_hosts, alt: "Hosts en el palco" },
  { src: bts_urbea, alt: "Jordi Urbea" },
  { src: heroStudio, alt: "Estudio de grabación" },
];
const row2: Shot[] = [
  { src: bts_aznarF, alt: "Aznar en FAES" },
  { src: hostsWithGuest.url, alt: "Hosts con invitado" },
  { src: bts_signHands, alt: "Firma de libro" },
  { src: guestPortrait1.url, alt: "Invitada al micrófono" },
  { src: bts_set, alt: "Set de grabación" },
  { src: bts_mikel, alt: "Mikel en el palco" },
  { src: extra1.url, alt: "Backstage" },
  { src: bts_monitor, alt: "Aznar en monitor" },
  { src: portraitHost, alt: "Retrato de host" },
];
const row3: Shot[] = [
  { src: bts_aznarSign, alt: "Aznar firmando" },
  { src: hostsSet.url, alt: "Los hosts en el set" },
  { src: bts_metro, alt: "Metropolitano" },
  { src: extra2.url, alt: "Backstage" },
  { src: extra3.url, alt: "Backstage" },
  { src: bts_signPen, alt: "Detalle de firma" },
  { src: bts_osasuna, alt: "Osasuna" },
  { src: extra4.url, alt: "Backstage" },
];

function Row({
  shots,
  direction = "left",
  speed = "normal",
  height,
}: {
  shots: Shot[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  height: string;
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
          <figure
            key={i}
            className={`relative shrink-0 overflow-hidden bg-muted rounded ${height}`}
            style={{ width: "clamp(220px, 26vw, 380px)" }}
          >
            <img
              src={s.src}
              alt={s.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </figure>
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
        <Row shots={row1} direction="left" speed="normal" height="h-40 md:h-56" />
        <Row shots={row2} direction="right" speed="slow" height="h-32 md:h-44" />
        <Row shots={row3} direction="left" speed="fast" height="h-40 md:h-56" />
      </div>
    </section>
  );
}

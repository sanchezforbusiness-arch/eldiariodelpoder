import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { BrandMark } from "@/components/ddp/BrandsMarquee";

const sponsors = [
  { name: "NoBrainer Partners", tag: "M&A · Advisory", domain: "nobrainer.partners" },
  { name: "Le Jeune Asesores", tag: "Legal · Patrimonios", domain: "lejeune.es" },
  { name: "Pateberg", tag: "Capital privado", domain: "pateberg.com" },
  { name: "SenYours Consulting", tag: "Estrategia · Marca", domain: "senyours.com" },
  { name: "Metalabs", tag: "Tecnología", domain: "metlabs.io" },
];
const partners = ["La Vanguardia"];

export function Sponsors() {
  const email = "patrocinios@eldiariodelpoder.com";
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch { /* noop */ }
  };

  return (
 <section id="sponsors" className="py-16 md:py-32 border-t border-border">
      <div className="container-ddp space-y-20">
        <div>
          <div className="text-center mb-12">
            <span className="eyebrow block mb-5">Sponsors</span>
            <h2 className="tracking-tight text-2xl md:text-display lg:text-display leading-[1.02] font-medium">
              Marcas que van con nosotros.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="card-clean group flex min-h-[128px] flex-col justify-center gap-3 rounded-[20px] bg-card px-7 py-8 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <BrandMark domain={s.domain} name={s.name} />
                  <span className="font-serif text-lg leading-tight text-foreground/90 transition-colors group-hover:text-signal md:text-xl">
                    {s.name}
                  </span>
                </div>
                <span className="text-2xs uppercase tracking-label text-muted-foreground">{s.tag}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            {!revealed ? (
              <button type="button" onClick={() => setRevealed(true)} className="btn-outline">
                Quiero el media kit
              </button>
            ) : (
              <div className="w-full max-w-xl border border-border rounded-sm bg-card/40 px-6 py-6 text-center">
                <p className="text-2xs tracking-label uppercase text-foreground mb-3">Hablemos</p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                  <a
                    href={`mailto:${email}?subject=Media%20Kit%20—%20Diario%20del%20Poder`}
                    className="group inline-flex items-center justify-center gap-2 font-serif text-lg md:text-xl text-foreground hover:text-signal transition-colors break-all"
                  >
                    <Mail size={16} className="text-foreground shrink-0" />
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copiar correo"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-2xs tracking-label uppercase border border-border text-muted-foreground hover:border-foreground/40 hover:text-signal transition-colors"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    {copied ? "Copiado" : "Copiar"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <p className="text-center text-2xs tracking-label uppercase text-muted-foreground mb-8">MEDIA PARTNERS</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {partners.map((p) => (
              <span key={p} className="font-serif text-2xl md:text-2xl text-muted-foreground hover:text-signal transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

const sponsors = [
  { name: "NoBrainer Partners", tag: "M&A · Advisory" },
  { name: "Le Jeune Asesores", tag: "Legal · Patrimonios" },
  { name: "Pateberg", tag: "Capital privado" },
  { name: "SenYours Consulting", tag: "Estrategia · Marca" },
  { name: "Metalabs", tag: "Tecnología" },
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
 <section id="sponsors" className="py-24 md:py-32 border-t border-border">
      <div className="container-ddp space-y-20">
        <div>
          <div className="text-center mb-12">
            <span className="eyebrow block mb-5">Sponsors</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light">
              Marcas que van <span className="italic text-gold">con nosotros</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="bg-card/40 rounded-sm border border-border py-10 px-5 flex flex-col items-center justify-center text-center group hover:bg-card hover:border-gold/40 transition-colors min-h-[140px]"
              >
                <span className="font-serif text-lg md:text-xl text-foreground/85 group-hover:text-gold transition-colors leading-tight">
                  {s.name}
                </span>
                <span className="mt-2 text-2xs tracking-label uppercase text-muted-foreground">{s.tag}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            {!revealed ? (
              <button type="button" onClick={() => setRevealed(true)} className="btn-gold-ghost">
                Quiero el media kit
              </button>
            ) : (
              <div className="w-full max-w-xl border border-gold/50 rounded-sm bg-card/40 px-6 py-6 text-center">
                <p className="text-2xs tracking-label uppercase text-gold mb-3">Hablemos</p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                  <a
                    href={`mailto:${email}?subject=Media%20Kit%20—%20Diario%20del%20Poder`}
                    className="group inline-flex items-center justify-center gap-2 font-serif text-lg md:text-xl text-foreground hover:text-gold transition-colors break-all"
                  >
                    <Mail size={16} className="text-gold shrink-0" />
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copiar correo"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-2xs tracking-label uppercase border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors"
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
          <p className="text-center text-2xs tracking-label uppercase text-gold/70 mb-8">MEDIA PARTNERS</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {partners.map((p) => (
              <span key={p} className="font-serif text-2xl md:text-3xl text-muted-foreground hover:text-gold transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

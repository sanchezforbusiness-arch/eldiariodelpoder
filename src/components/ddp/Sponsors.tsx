import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

const sponsors = [
  { name: "NoBrainer Partners", tag: "M&A · Advisory" },
  { name: "Le Jeune Asesores & Economistas", tag: "Legal · Patrimonios" },
  { name: "Pateberg", tag: "Capital privado" },
  { name: "SenYours Consulting", tag: "Estrategia · Marca" },
  { name: "Metalabs", tag: "Tecnología" },
];
const partners = ["Forbes España", "La Vanguardia", "ABC"];

export function Sponsors() {
  const email = "contactoeldiariodelpoder@gmail.com";
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section id="sponsors" className="py-28 md:py-40">
      <div className="container-ddp space-y-24">
        <div>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Sponsors</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center leading-tight max-w-3xl mx-auto">
            Las marcas que nos <span className="italic text-gold">acompañan</span>.
          </h2>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="bg-background py-10 px-5 flex flex-col items-center justify-center text-center group hover:bg-card transition-colors min-h-[140px]"
              >
                <span className="font-serif text-lg md:text-xl text-foreground/85 group-hover:text-gold transition-colors leading-tight">
                  {s.name}
                </span>
                <span className="mt-2 text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{s.tag}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm italic text-muted-foreground">
            + and more → <span className="text-gold/90">Cupos abiertos para nuevos aliados</span>
          </p>

          <div className="mt-16 flex flex-col items-center gap-4">
            {!revealed ? (
              <button
                type="button"
                onClick={() => setRevealed(true)}
                className="inline-flex items-center gap-2 px-6 py-3 text-[12px] tracking-[0.22em] uppercase border border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all"
              >
                Solicitar Media Kit →
              </button>
            ) : (
              <div className="w-full max-w-xl border border-gold/60 bg-card/40 px-6 py-6 text-center">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                  Escríbenos a este correo
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                  <a
                    href={`mailto:${email}?subject=Solicitar%20Media%20Kit%20—%20Diario%20del%20Poder`}
                    className="group inline-flex items-center justify-center gap-2 font-serif text-lg md:text-xl text-foreground hover:text-gold transition-colors break-all"
                  >
                    <Mail size={16} className="text-gold shrink-0" />
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copiar correo"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[10px] tracking-[0.22em] uppercase border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    {copied ? "Copiado" : "Copiar"}
                  </button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground italic">
                  Indícanos tu marca y te enviaremos el media kit completo.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="gold-divider" />

        <div>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Media Partners</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-12 md:gap-20">
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

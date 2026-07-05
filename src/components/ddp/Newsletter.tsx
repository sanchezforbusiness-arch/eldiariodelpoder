import { useState, useRef } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [accept, setAccept] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setErr("Introduce un email válido.");
    if (!accept) return setErr("Acepta la política de privacidad.");
    setLoading(true);
    formRef.current?.submit();
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 relative overflow-hidden filete bg-background">
      <div className="container-ddp relative">
        <div className="max-w-2xl mx-auto">
          {/* Classified ad frame: double border */}
          <div className="border-2 border-foreground p-6 md:p-10 relative paper-warm" style={{ boxShadow: "inset 0 0 0 4px var(--paper-warm), inset 0 0 0 5px var(--color-foreground)" }}>
            <div className="text-center">
              <p className="text-[10px] tracking-[0.32em] uppercase text-foreground/70 pb-3 mb-6 border-b border-foreground inline-block">
                Anuncio · Newsletter
              </p>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.02] font-light tracking-[-0.025em] text-foreground">
                Una conversación. Un email. <span className="italic text-primary">Sin ruido</span>.
              </h2>
              <p className="mt-4 text-sm md:text-base text-foreground/70">
                La lectura corta que reciben quienes escuchan Diario del Poder.
              </p>
            </div>

          {sent ? (
            <div className="mt-8 flex items-center justify-center gap-3 border border-primary px-6 py-4 text-primary">
              <Check size={18} />
              <span className="text-sm">Gracias. Mira tu correo para confirmar — te esperamos dentro.</span>
            </div>
          ) : (
            <>
            <iframe name="ddp-newsletter-frame" title="Newsletter" className="hidden" aria-hidden="true" />
            <form
              ref={formRef}
              onSubmit={submit}
              action="https://eldiariodelpoder.beehiiv.com/subscribe"
              method="POST"
              target="ddp-newsletter-frame"
              className="mt-8"
            >
              <div className="flex flex-col sm:flex-row gap-0">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-3 text-sm outline-none bg-background text-foreground border border-foreground sm:border-r-0"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] bg-primary text-primary-foreground border border-primary hover:opacity-90 transition-opacity"
                >
                  {loading ? <Loader2 size={14} className="animate-spin" /> : <>Suscribirme <ArrowRight size={14} /></>}
                </button>
              </div>
              <label className="mt-4 flex items-start gap-3 text-left text-xs cursor-pointer text-foreground/70">
                <input
                  type="checkbox"
                  checked={accept}
                  onChange={(e) => setAccept(e.target.checked)}
                  className="mt-0.5"
                />
                <span>Acepto la <a href="#" className="press-underline">política de privacidad</a>.</span>
              </label>
              {err && <p className="mt-3 text-xs text-left text-primary">{err}</p>}
            </form>
            </>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}

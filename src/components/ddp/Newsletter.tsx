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
    <section id="newsletter" className="py-20 md:py-32 relative overflow-hidden border-t border-border" style={{ backgroundColor: "var(--color-primary)" }}>
      <div className="container-ddp relative">
        <div className="max-w-xl mx-auto text-center" style={{ color: "var(--color-primary-foreground)" }}>
          <span className="block mb-5 text-[11px] tracking-[0.32em] uppercase" style={{ color: "rgba(250,247,242,0.7)" }}>Newsletter</span>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.02] font-light tracking-[-0.025em]" style={{ color: "var(--color-primary-foreground)" }}>
            Una conversación. Un email. Sin ruido.
          </h2>
          <p className="mt-4 text-sm md:text-base" style={{ color: "rgba(250,247,242,0.75)" }}>
            La lectura corta que reciben quienes escuchan Diario del Poder.
          </p>

          {sent ? (
            <div className="mt-10 inline-flex items-center gap-3 border px-6 py-4" style={{ borderColor: "rgba(250,247,242,0.4)", backgroundColor: "rgba(250,247,242,0.08)" }}>
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
              className="mt-10"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-3 text-sm sm:border-r-0 outline-none"
                  style={{ backgroundColor: "rgba(250,247,242,0.95)", color: "#141414", border: "1px solid rgba(250,247,242,0.4)" }}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors"
                  style={{ backgroundColor: "#FAF7F2", color: "#6E1423" }}
                >
                  {loading ? <Loader2 size={14} className="animate-spin" /> : <>Suscribirme <ArrowRight size={14} /></>}
                </button>
              </div>
              <label className="mt-5 flex items-start gap-3 text-left text-xs cursor-pointer" style={{ color: "rgba(250,247,242,0.75)" }}>
                <input
                  type="checkbox"
                  checked={accept}
                  onChange={(e) => setAccept(e.target.checked)}
                  className="mt-0.5"
                />
                <span>Acepto la <a href="#" className="underline">política de privacidad</a>.</span>
              </label>
              {err && <p className="mt-3 text-xs text-left" style={{ color: "#FFD9DE" }}>{err}</p>}
            </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

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
 <section id="newsletter" className="py-16 md:py-32 relative overflow-hidden grain border-t border-border">
      <div className="gold-glow float-slow w-[420px] h-[420px] -top-20 left-1/2 -translate-x-1/2 opacity-30" />
      <div className="container-ddp relative">
        <div className="max-w-xl mx-auto text-center">
          <span className="eyebrow block mb-5"><span className="dot-gold mr-2" />Newsletter</span>
          <h2 className="text-2xl md:text-display leading-[1.02] font-medium tracking-tight">
            Un email. Cero ruido.
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            Lo mejor de cada conversación, en tu bandeja.
          </p>

          {sent ? (
            <div className="mt-10 inline-flex items-center gap-3 border border-border bg-card/40 px-6 py-4">
              <Check size={18} className="text-foreground" />
              <span className="text-sm">Gracias. Confirma en tu correo y te vemos dentro.</span>
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
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:shadow-[0_20px_40px_-30px_color-mix(in_oklab,var(--color-foreground)_50%,transparent)]">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="input-line flex-1 sm:rounded-none sm:border-r-0"
                  required
                />
                <button type="submit" disabled={loading} className="btn-primary group sm:min-w-[190px]">
                  {loading ? <Loader2 size={14} className="animate-spin" /> : <>Suscribirme<ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></>}
                </button>
              </div>
              <label className="mt-5 flex items-start gap-3 text-left text-xs text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  checked={accept}
                  onChange={(e) => setAccept(e.target.checked)}
                  className="mt-0.5 accent-[var(--color-foreground)]"
                />
                <span>Acepto la <a href="#" className="underline hover:text-signal">política de privacidad</a>.</span>
              </label>
              {err && <p className="mt-3 text-xs text-destructive text-left">{err}</p>}
            </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

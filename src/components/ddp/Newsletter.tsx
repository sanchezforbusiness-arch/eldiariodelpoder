import { useState, useRef } from "react";
import { Check, Loader2 } from "lucide-react";

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
    <section
      id="newsletter"
      className="py-20 md:py-24"
      style={{ background: "color-mix(in oklab, var(--color-primary) 8%, white)" }}
    >
      <div className="container-ddp">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow block mb-5">Conecta con nosotros</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-[-0.03em] text-foreground">
            Recibe las mejores ideas
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            De cada conversación. Sin spam, sin ruido.
          </p>

          {sent ? (
            <div className="mt-10 inline-flex items-center gap-3 border border-primary/40 bg-background px-6 py-4">
              <Check size={18} className="text-primary" />
              <span className="text-sm text-foreground">Listo. Revisa tu email para confirmar.</span>
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
                <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="flex-1 bg-background border border-border focus:border-primary px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-[13px] font-semibold tracking-[0.06em] uppercase hover:opacity-90 transition-opacity"
                  >
                    {loading ? <Loader2 size={16} className="animate-spin" /> : "Suscribirme"}
                  </button>
                </div>
                <label className="mt-4 flex items-start gap-3 text-left text-xs text-muted-foreground cursor-pointer max-w-xl mx-auto">
                  <input
                    type="checkbox"
                    checked={accept}
                    onChange={(e) => setAccept(e.target.checked)}
                    className="mt-0.5 accent-[var(--color-primary)]"
                  />
                  <span>Acepto la <a href="#" className="underline hover:text-primary">política de privacidad</a>.</span>
                </label>
                {err && <p className="mt-3 text-xs text-destructive">{err}</p>}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

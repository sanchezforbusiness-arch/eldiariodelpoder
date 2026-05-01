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
    // Submit to Beehiiv via hidden iframe — keeps user on page.
    formRef.current?.submit();
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  return (
    <section id="newsletter" className="py-28 md:py-40 relative overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="container-ddp relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow">Newsletter</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Sé parte del <span className="italic text-gold">círculo</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Lo mejor de cada episodio. Antes que nadie.
          </p>
          <p className="mt-4 text-[11px] tracking-[0.28em] uppercase text-gold/80">
            Sin spam · Cancela cuando quieras
          </p>

          {sent ? (
            <div className="mt-12 inline-flex items-center gap-3 border border-gold/50 bg-card/40 px-6 py-4">
              <Check size={18} className="text-gold" />
              <span className="text-sm text-foreground/90">¡Bienvenido al círculo! Revisa tu email para confirmar la suscripción.</span>
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
              className="mt-12 max-w-xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row border border-border focus-within:border-gold transition-colors">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 bg-transparent px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-gold-bright transition-colors"
                >
                  {loading ? <Loader2 size={14} className="animate-spin" /> : <>Unirme<ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></>}
                </button>
              </div>
              <label className="mt-5 flex items-start gap-3 text-left text-xs text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  checked={accept}
                  onChange={(e) => setAccept(e.target.checked)}
                  className="mt-0.5 accent-[var(--color-gold)]"
                />
                <span>He leído y acepto la <a href="#" className="underline hover:text-gold">política de privacidad</a> de Diario del Poder.</span>
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

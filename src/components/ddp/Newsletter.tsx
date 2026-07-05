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
    <section id="newsletter" className="py-20 md:py-28 bg-background border-t border-white/5">
      <div className="container-ddp">
        <div className="max-w-4xl mx-auto bg-card border border-white/10 rounded-md p-8 md:p-14">
          <div className="text-center">
            <p className="eyebrow mb-5">Newsletter</p>
            <h2 className="display-md text-foreground max-w-2xl mx-auto">
              Una conversación.<br />
              <span className="text-primary">Un email. Sin ruido.</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-foreground/65 max-w-lg mx-auto">
              La lectura corta que reciben quienes escuchan Diario del Poder.
            </p>
          </div>

          {sent ? (
            <div className="mt-10 flex items-center justify-center gap-2 text-primary">
              <Check size={18} strokeWidth={1.6} />
              <span className="text-sm tracking-[0.14em] uppercase">Suscripción confirmada</span>
            </div>
          ) : (
            <form
              ref={formRef}
              action="https://formsubmit.co/contactoeldiariodelpoder@gmail.com"
              method="POST"
              target="ddp-newsletter-frame"
              onSubmit={submit}
              className="mt-10 max-w-xl mx-auto"
            >
              <input type="hidden" name="_subject" value="Nuevo suscriptor · Diario del Poder" />
              <input type="hidden" name="_captcha" value="false" />
              <iframe name="ddp-newsletter-frame" title="Newsletter" className="hidden" aria-hidden="true" />

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="input-line flex-1"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  {loading ? <Loader2 size={14} className="animate-spin" /> : <ArrowRight size={14} strokeWidth={1.8} />}
                  Suscribirme
                </button>
              </div>

              <label className="mt-4 flex items-start gap-2 text-xs text-foreground/60">
                <input
                  type="checkbox"
                  checked={accept}
                  onChange={(e) => setAccept(e.target.checked)}
                  className="mt-0.5 accent-primary"
                />
                Acepto la política de privacidad y recibir el newsletter.
              </label>
              {err && <p className="mt-3 text-xs text-primary">{err}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

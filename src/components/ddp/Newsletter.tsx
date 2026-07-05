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
    <section id="newsletter" className="py-24 md:py-32 bg-background">
      <div className="container-ddp">
        <div className="max-w-4xl mx-auto bg-[#F5F3EF] text-[#0C0C0E] rounded-sm p-10 md:p-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-black/55 mb-5">Newsletter</p>
            <h2 className="display-md max-w-2xl mx-auto text-black">
              Una conversación.<br />Un email. Sin ruido.
            </h2>
            <p className="mt-5 text-sm md:text-base text-black/65 max-w-lg mx-auto">
              La lectura corta que reciben quienes escuchan Diario del Poder.
            </p>
          </div>

          {sent ? (
            <div className="mt-10 flex items-center justify-center gap-2 text-black">
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
                  className="flex-1 bg-transparent text-black border border-black/25 rounded-sm px-4 py-3 text-base placeholder:text-black/40 focus:outline-none focus:border-black transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 text-[13px] font-semibold tracking-[0.08em] uppercase rounded-sm hover:bg-black/85 transition-colors disabled:opacity-50"
                >
                  {loading ? <Loader2 size={14} className="animate-spin" /> : <ArrowRight size={14} strokeWidth={1.8} />}
                  Suscribirme
                </button>
              </div>

              <label className="mt-4 flex items-start gap-2 text-xs text-black/60">
                <input
                  type="checkbox"
                  checked={accept}
                  onChange={(e) => setAccept(e.target.checked)}
                  className="mt-0.5 accent-black"
                />
                Acepto la política de privacidad y recibir el newsletter.
              </label>
              {err && <p className="mt-3 text-xs text-black">{err}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

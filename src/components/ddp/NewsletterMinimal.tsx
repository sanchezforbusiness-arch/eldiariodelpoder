import { useRef, useState } from "react";

export function NewsletterMinimal() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr("Email no válido");
      return;
    }
    setErr("");
    formRef.current?.submit();
    setSent(true);
  };

  return (
    <section id="newsletter" className="border-b border-border py-20 md:py-32">
      <div className="container-ddp grid gap-10 lg:grid-cols-12">
        <div className="flex gap-8 lg:col-span-6">
          <span className="section-index pt-2">07</span>
          <h2 className="text-[9vw] font-medium leading-[0.9] tracking-[-0.035em] sm:text-[5.5vw] lg:text-[3.4vw]">
            Newsletter
          </h2>
        </div>

        <div className="lg:col-span-6">
          {sent ? (
            <p className="font-mono text-[11px] uppercase tracking-[0.12em]">
              Recibido. Confirma la suscripción en tu correo.
            </p>
          ) : (
            <>
              <iframe name="ddp-newsletter-frame" title="Newsletter" className="hidden" aria-hidden="true" />
              <form
                ref={formRef}
                onSubmit={submit}
                action="https://eldiariodelpoder.beehiiv.com/subscribe"
                method="POST"
                target="ddp-newsletter-frame"
                className="flex items-end gap-6"
              >
                <div className="flex-1">
                  <label htmlFor="ddp-email" className="mono-label">
                    Correo
                  </label>
                  <input
                    id="ddp-email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    placeholder="nombre@empresa.com"
                    className="input-line mt-2"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Suscribirse
                </button>
              </form>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                {err ? <span className="text-signal">{err}</span> : "Un envío por episodio. Baja cuando quieras."}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

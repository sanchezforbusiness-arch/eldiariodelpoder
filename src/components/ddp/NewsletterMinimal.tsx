import { Link } from "@tanstack/react-router";
import { SubscribeForm } from "@/components/ddp/SubscribeForm";

export function NewsletterMinimal() {
  return (
    <section id="newsletter" className="border-b border-border py-20 md:py-32">
      <div className="container-ddp grid gap-10 lg:grid-cols-12">
        <div className="flex gap-8 lg:col-span-6">
          <span className="section-index pt-2">07</span>
          <div>
            <h2 className="text-[9vw] font-medium leading-[0.9] tracking-[-0.035em] sm:text-[5.5vw] lg:text-[3.4vw]">
              La carta
            </h2>
            <p className="mt-6 max-w-[34ch] font-serif text-[18px] leading-[1.65] text-muted-foreground">
              Una vez por semana escribimos lo que no cabe en el episodio: lo que nos dijeron
              con el micro apagado y lo que aprendimos por el camino.
            </p>
            <Link
              to="/carta"
              className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.12em] underline underline-offset-4 hover:text-signal"
            >
              Ver la carta
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <SubscribeForm hint="Un envío por semana. Cancela cuando quieras." />
        </div>
      </div>
    </section>
  );
}

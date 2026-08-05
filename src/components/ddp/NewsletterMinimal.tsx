import { Link } from "@tanstack/react-router";
import { SubscribeForm } from "@/components/ddp/SubscribeForm";

export function NewsletterMinimal() {
  return (
    <section id="newsletter" className="border-b border-border py-16 md:py-24">
      <div className="container-ddp grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="flex gap-4 sm:gap-6 lg:col-span-6">
          <span className="badge-num mt-2">07</span>
          <div className="min-w-0">
            <h2 className="text-[9vw] font-medium leading-[0.9] tracking-[-0.035em] sm:text-[5.5vw] lg:text-[3.4vw]">
              La carta
            </h2>
            <p className="mt-5 max-w-[34ch] font-serif text-[18px] leading-[1.65] text-muted-foreground">
              Cada domingo, lo que no cabe en el episodio. Tres minutos de lectura.
            </p>
            <Link to="/carta" className="link-rule tap mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.12em]">
              Ver de qué va
            </Link>
          </div>
        </div>

        <div className="panel p-6 md:p-8 lg:col-span-6">
          <SubscribeForm hint="Un correo por semana. Baja en un clic." />
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { SubscribeForm } from "@/components/ddp/SubscribeForm";

export function NewsletterMinimal() {
  return (
    <section id="newsletter" className="border-b border-border py-24 md:py-32">
      <div className="container-ddp grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="min-w-0">
            <h2 className="text-2xl leading-[0.95] tracking-tight">La carta</h2>
            <p className="mt-5 max-w-[34ch] font-serif text-base leading-[1.65] text-muted-foreground">
              Cada domingo, lo que no cabe en el episodio.
            </p>
            <Link to="/carta" className="link-rule tap mt-6 inline-flex font-mono text-2xs uppercase tracking-label">
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

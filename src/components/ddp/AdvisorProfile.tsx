import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Linkedin } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { Masthead } from "@/components/ddp/Masthead";
import { advisors, advisorFaq, type AdvisorEntry } from "@/data/advisors";

export function AdvisorLink({ advisor, children, className }: { advisor: AdvisorEntry; children: ReactNode; className?: string }) {
  return advisor.guestSlug
    ? <Link to="/invitados/$slug" params={{ slug: advisor.guestSlug }} className={className}>{children}</Link>
    : <Link to="/advisors/$slug" params={{ slug: advisor.slug }} className={className}>{children}</Link>;
}

export function AdvisorProfile({ advisor }: { advisor: AdvisorEntry }) {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-28 md:pt-32">
        <article className="container-ddp">
          <Masthead />
          <nav aria-label="Migas de pan" className="mt-6 text-2xs tracking-label uppercase text-muted-foreground">
            <Link to="/" className="tap hover:text-foreground">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/nosotros" className="tap hover:text-foreground">Nosotros</Link>
            <span className="mx-2">/</span>
            <span className="notranslate" translate="no">{advisor.fullName}</span>
          </nav>
          <header className="mt-6 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <h1 className="notranslate text-2xl sm:text-display md:text-display leading-[0.98] font-medium tracking-tight break-words" translate="no">{advisor.fullName}</h1>
              <p className="mt-4 font-serif text-base font-light text-muted-foreground">{advisor.role}</p>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">{advisor.jobTitle}</p>
            </div>
            <img src={advisor.img} alt={advisor.fullName} width={512} height={640} className="w-full max-w-[320px] aspect-[4/5] object-cover rounded-sm contrast-110" />
          </header>
          <a href={advisor.ln} target="_blank" rel="noopener noreferrer" className="tap mt-8 gap-2 text-sm text-muted-foreground hover:text-signal"><Linkedin size={18} /> LinkedIn <span className="notranslate" translate="no">{advisor.fullName}</span></a>
          <section className="mt-12 md:mt-16 max-w-3xl">
            <h2 className="text-2xl font-medium tracking-tight">Trayectoria</h2>
            <div className="mt-6 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">{advisor.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </section>
          <section className="mt-16 md:mt-24 border-t border-border pt-12">
            <h2 className="text-2xl font-medium tracking-tight">Por qué asesora a Diario del Poder</h2>
            <p className="mt-6 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">{advisor.why}</p>
          </section>
          <section className="mt-16 md:mt-24 border-t border-border pt-12">
            <h2 className="text-2xl font-medium tracking-tight">Preguntas frecuentes</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">{advisorFaq(advisor).map((faq) => (
              <details key={faq.q} className="card-clean group rounded-sm p-6">
                <summary className="cursor-pointer list-none text-base font-medium tracking-tight marker:hidden">{faq.q}</summary>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}</div>
          </section>
          <section className="mt-16 md:mt-24 py-12 md:py-24 border-t border-border">
            <h2 className="text-2xl font-medium tracking-tight">Consejo asesor de Diario del Poder</h2>
            <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">{advisors.filter((other) => other.slug !== advisor.slug).map((other) => (
              <li key={other.slug}><AdvisorLink advisor={other} className="group block"><h3 className="notranslate text-xl leading-tight group-hover:text-signal transition-colors" translate="no">{other.fullName}</h3><p className="mt-1.5 font-serif text-xs font-light text-muted-foreground">{other.role}</p></AdvisorLink></li>
            ))}</ul>
            <nav aria-label="Diario del Poder" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <Link to="/nosotros" className="tap hover:text-signal">Nosotros</Link>
              <Link to="/episodios" className="tap hover:text-signal">Episodios</Link>
              <Link to="/alejandro-sanchez-martinez" className="tap notranslate hover:text-signal" translate="no">Alejandro Sánchez Martínez</Link>
              <Link to="/victor-hugo-gandarilla-de-andres" className="tap notranslate hover:text-signal" translate="no">Víctor Hugo Gandarilla de Andrés</Link>
            </nav>
          </section>
        </article>
      </main>
      <FooterGrid />
    </div>
  );
}
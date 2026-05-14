import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, Linkedin, MapPin, ArrowUpRight, Check } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";
import { useReveal } from "@/hooks/use-reveal";

const SITE = "https://eldiariodelpoder.com";
const EMAIL = "contactoeldiariodelpoder@gmail.com";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Diario del Poder | Invitados, sponsors, prensa" },
      { name: "description", content: "Contacta con Diario del Poder: invitados, sponsors, partners, prensa o colaboraciones. Email: contactoeldiariodelpoder@gmail.com." },
      { property: "og:title", content: "Contacto — Diario del Poder" },
      { property: "og:description", content: "¿Quieres conversar? Invitados, sponsors, partners, prensa." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/contacto` },
      { name: "twitter:title", content: "Contacto — Diario del Poder" },
      { name: "twitter:description", content: "Invitados, sponsors, partners, prensa." },
    ],
    links: [{ rel: "canonical", href: `${SITE}/contacto` }],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Body />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 overflow-hidden grain">
      <div className="gold-glow w-[480px] h-[480px] -top-32 -left-32 float-slow opacity-40" />
      <div className="container-ddp relative fade-up">
        <div className="flex items-center gap-4 mb-7">
          <span className="h-px w-12 bg-gold/70" />
          <span className="eyebrow">Contacto</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.92] font-light tracking-[-0.04em] max-w-5xl">
          ¿Quieres <span className="italic shimmer-gold">conversar</span>?
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-[1.1rem] text-foreground/75 leading-[1.7]">
          Invitados, sponsors, partners, prensa, o simplemente saludar. Leemos todo.
        </p>
      </div>
    </section>
  );
}

function Body() {
  const [sent, setSent] = useState(false);
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container-ddp grid md:grid-cols-12 gap-12">
        <aside className="md:col-span-5 space-y-10 reveal">
          <div>
            <span className="eyebrow block mb-3">Email</span>
            <a href={`mailto:${EMAIL}`} className="font-serif text-2xl md:text-3xl text-foreground hover:text-gold transition-colors break-all">
              {EMAIL}
            </a>
          </div>
          <div>
            <span className="eyebrow block mb-3">Redes</span>
            <ul className="space-y-3">
              <li><a href="https://www.instagram.com/eldiariodelpoder/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-foreground/85 hover:text-gold transition-colors"><Instagram size={16} /> @eldiariodelpoder</a></li>
              <li><a href="https://www.linkedin.com/company/eldiariodelpoder" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-foreground/85 hover:text-gold transition-colors"><Linkedin size={16} /> /company/eldiariodelpoder</a></li>
            </ul>
          </div>
          <div>
            <span className="eyebrow block mb-3">Ubicación</span>
            <p className="inline-flex items-center gap-3 text-foreground/85"><MapPin size={16} className="text-gold" /> Pamplona · España</p>
          </div>
        </aside>

        <div className="md:col-span-7 reveal">
          {sent ? (
            <div className="border border-gold/40 bg-card/40 p-10">
              <Check size={28} className="text-gold mb-4" />
              <p className="font-serif text-3xl">Hemos recibido tu mensaje.</p>
              <p className="mt-2 text-sm text-muted-foreground">Respondemos en 3–5 días.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`[Web] ${fd.get("subject") || "Contacto"}`);
                const body = encodeURIComponent(`Nombre: ${fd.get("name")}\nEmail: ${fd.get("email")}\n\n${fd.get("message")}`);
                window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
                setSent(true);
              }}
              className="grid gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field name="name" label="Nombre" required />
                <Field name="email" label="Email" type="email" required />
              </div>
              <Field name="subject" label="Asunto" />
              <div>
                <label htmlFor="message" className="block text-[10px] tracking-[0.24em] uppercase text-muted-foreground mb-2">Mensaje</label>
                <textarea id="message" name="message" required rows={6} maxLength={2000}
                  className="w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm transition-colors" />
              </div>
              <button type="submit" className="ring-pulse justify-self-start inline-flex items-center gap-2 bg-gold text-gold-foreground px-9 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-gold-bright transition-colors">
                <Mail size={14} /> Enviar mensaje
                <ArrowUpRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] tracking-[0.24em] uppercase text-muted-foreground mb-2">{label}</label>
      <input id={name} name={name} type={type} required={required} maxLength={200}
        className="w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm transition-colors" />
    </div>
  );
}
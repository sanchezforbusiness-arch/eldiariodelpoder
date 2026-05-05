import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";
import { useReveal } from "@/hooks/use-reveal";
import dialogos from "@/assets/bts-aznar-dialogos.jpg";
import signing from "@/assets/bts-signing-pen.jpg";
import signingHands from "@/assets/bts-signing-hands.jpg";
import setMonitors from "@/assets/bts-set-monitors.jpg";
import portrait from "@/assets/portrait-host.jpg";
import hosts from "@/assets/bts-hosts-palco.jpg";
import metropolitano from "@/assets/bts-metropolitano.jpg";

export const Route = createFileRoute("/club")({
  head: () => ({
    meta: [
      { title: "El Club del Poder — Comunidad de líderes" },
      { name: "description", content: "El Club del Poder: comunidad selectiva de jóvenes líderes con criterio, ambición e influencia real." },
      { property: "og:title", content: "El Club del Poder" },
      { property: "og:description", content: "Comunidad selectiva de líderes jóvenes. Acceso por invitación." },
      { property: "og:url", content: "https://eldiariodelpoder.com/club" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/club" }],
  }),
  component: ClubPage,
});

const pillars = [
  { n: "01", t: "Criterio" },
  { n: "02", t: "Comunidad" },
  { n: "03", t: "Influencia" },
];

const philosophy = [
  "El poder no es un fin. Es responsabilidad.",
  "El liderazgo real rara vez necesita parecer liderazgo.",
  "La influencia que deja huella nace del criterio.",
  "Construimos comunidad alrededor de ideas, no de contactos.",
];

const faqs = [
  { q: "¿Quién puede unirse?", a: "Profesionales y emprendedores con interés real en liderazgo, criterio e influencia positiva." },
  { q: "¿Cómo se entra?", a: "Solicitas acceso. Revisamos tu perfil. Si encajas, te damos la bienvenida." },
  { q: "¿Hay cuota?", a: "Sí, anual. Compartimos los detalles tras la solicitud." },
  { q: "¿Eventos?", a: "Dos al año en Madrid. Cenas y diálogos cerrados." },
];

function ClubPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Gallery />
        <Philosophy />
        <Apply />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden grain">
      <img src={dialogos} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-25 ken-burns" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="gold-glow w-[520px] h-[520px] -top-40 -left-40 float-slow" />

      <div className="container-ddp relative grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 fade-up">
          <span className="eyebrow block mb-6">El Club del Poder</span>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.92] font-light tracking-[-0.03em]">
            Una comunidad<br /> de <span className="italic shimmer-gold">líderes</span>.
          </h1>
          <p className="mt-8 max-w-md text-base md:text-lg text-foreground/80">
            Acceso por invitación. Cero ruido.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#apply" className="ring-pulse inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-gold-bright transition-colors">
              Solicitar acceso
            </a>
          </div>
        </div>
        <div className="hidden md:block md:col-span-5">
          <div className="relative aspect-[3/4] max-w-[360px] ml-auto overflow-hidden drift-y">
            <img src={portrait} alt="" className="absolute inset-0 w-full h-full object-cover ken-burns" />
            <div className="absolute inset-0 ring-1 ring-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container-ddp">
        <div className="reveal grid md:grid-cols-3 gap-px bg-border border border-border reveal-stagger">
          {pillars.map((p) => (
            <div key={p.n} className="bg-background p-10 md:p-14 text-center">
              <p className="text-[10px] tracking-[0.28em] uppercase text-gold/80 mb-4">{p.n}</p>
              <h3 className="font-serif text-4xl md:text-5xl italic text-gold">{p.t}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const shots = [signingHands, setMonitors, hosts, signing, metropolitano, dialogos];
  return (
    <section className="py-16 md:py-24 border-t border-border overflow-hidden">
      <div className="container-ddp mb-10 reveal">
        <span className="eyebrow block mb-5">El Club por dentro</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.0] font-light max-w-3xl tracking-[-0.02em]">
          Lo que <span className="italic text-gold">no se publica</span>.
        </h2>
      </div>
      <div className="relative overflow-hidden mask-fade-x">
        <div className="marquee marquee-fast gap-4 md:gap-5">
          {[...shots, ...shots].map((src, i) => (
            <figure key={i} className="group relative shrink-0 w-[280px] sm:w-[340px] md:w-[400px] aspect-[4/5] overflow-hidden bg-card hover-cinema">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-20 md:py-28 border-t border-border bg-card/20">
      <div className="container-ddp reveal">
        <span className="eyebrow block mb-8">Filosofía</span>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 reveal-stagger">
          {philosophy.map((p, i) => (
            <p key={i} className="font-serif text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.2] font-light border-l-2 border-gold/60 pl-6">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Apply() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="apply" className="py-20 md:py-28 border-t border-border">
      <div className="container-ddp max-w-3xl reveal">
        <span className="eyebrow block mb-5">Solicita tu acceso</span>
        <h2 className="font-serif text-5xl md:text-6xl leading-[0.98] font-light tracking-[-0.025em]">
          Capacidad <span className="italic text-gold">limitada</span>.
        </h2>

        {submitted ? (
          <div className="mt-10 border border-gold/40 bg-card/40 p-8">
            <p className="font-serif text-2xl">Hemos recibido tu solicitud.</p>
            <p className="mt-2 text-sm text-muted-foreground">Nos pondremos en contacto en 5–7 días.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-10 grid gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Nombre" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Empresa / cargo" name="role" required />
              <Field label="Teléfono" name="phone" />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.24em] uppercase text-muted-foreground mb-2">¿Por qué encajas?</label>
              <textarea required rows={3} maxLength={500}
                className="w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm transition-colors" />
            </div>
            <button type="submit" className="ring-pulse justify-self-start inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-gold-bright transition-colors">
              Solicitar acceso
              <ArrowUpRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] tracking-[0.24em] uppercase text-muted-foreground mb-2">{label}</label>
      <input id={name} name={name} type={type} required={required} maxLength={150}
        className="w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm transition-colors" />
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-ddp max-w-3xl reveal">
        <span className="eyebrow block mb-5">FAQ</span>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.0] font-light tracking-[-0.02em] mb-10">
          Preguntas <span className="italic text-gold">frecuentes</span>.
        </h2>
        <div className="border-t border-border">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div key={f.q} className="border-b border-border">
                <button onClick={() => setOpen(active ? null : i)} aria-expanded={active}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group">
                  <span className="font-serif text-xl md:text-2xl group-hover:text-gold transition-colors">{f.q}</span>
                  {active ? <Minus size={18} className="text-gold shrink-0" /> : <Plus size={18} className="text-gold shrink-0" />}
                </button>
                {active && <p className="pb-6 pr-10 text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
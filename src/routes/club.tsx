import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";
import { useReveal } from "@/hooks/use-reveal";
import dialogos from "@/assets/bts-aznar-dialogos.webp";
import signing from "@/assets/bts-signing-pen.webp";
import signingHands from "@/assets/bts-signing-hands.webp";
import setMonitors from "@/assets/bts-set-monitors.webp";
import portrait from "@/assets/portrait-host.webp";
import hosts from "@/assets/bts-hosts-palco.webp";
import metropolitano from "@/assets/bts-metropolitano.webp";

export const Route = createFileRoute("/club")({
  head: () => ({
    meta: [
      { title: "El Club del Poder — Una comunidad real" },
      { name: "description", content: "El Club del Poder: una comunidad real de líderes jóvenes que se cuidan, comparten mesa y aprenden juntos. Acceso por invitación." },
      { property: "og:title", content: "El Club del Poder — Una comunidad real" },
      { property: "og:description", content: "Una comunidad real de líderes jóvenes. Acceso por invitación." },
      { property: "og:url", content: "https://eldiariodelpoder.com/club" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/club" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "¿Quién puede unirse?", acceptedAnswer: { "@type": "Answer", text: "Profesionales y emprendedores con ganas reales de aportar, aprender y rodearse bien." } },
            { "@type": "Question", name: "¿Cómo se entra?", acceptedAnswer: { "@type": "Answer", text: "Nos cuentas quién eres. Leemos tu perfil con calma. Si encajas, te damos la bienvenida en persona." } },
            { "@type": "Question", name: "¿Hay cuota?", acceptedAnswer: { "@type": "Answer", text: "Sí, anual. Te contamos los detalles cuando hablemos." } },
            { "@type": "Question", name: "¿Eventos?", acceptedAnswer: { "@type": "Answer", text: "Dos al año en Madrid. Cenas cerradas y diálogos a puerta cerrada." } },
          ],
        }),
      },
    ],
  }),
  component: ClubPage,
});

const pillars = [
  { n: "01", t: "Criterio" },
  { n: "02", t: "Comunidad" },
  { n: "03", t: "Influencia" },
];

const philosophy = [
  "El poder no es un fin. Es cuidar lo que importa.",
  "El liderazgo de verdad no necesita parecerlo.",
  "La huella se deja mirando despacio.",
  "Nos juntamos por ideas, no por contactos.",
];

const faqs = [
  { q: "¿Quién puede unirse?", a: "Fundadores y profesionales con ganas de aportar y aprender." },
  { q: "¿Cómo se entra?", a: "Nos cuentas quién eres. Si encajas, te escribimos y nos vemos." },
  { q: "¿Hay cuota?", a: "Sí, anual. Los detalles, cuando hablemos." },
  { q: "¿Eventos?", a: "Dos al año en Madrid. A puerta cerrada." },
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
      <img src={dialogos} alt="" aria-hidden fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-25 ken-burns" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="gold-glow w-[520px] h-[520px] -top-40 -left-40 float-slow" />

      <div className="container-ddp relative grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 fade-up">
          <span className="eyebrow block mb-6">El Club del Poder</span>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.92] font-light tracking-[-0.03em]">
            Una comunidad<br /> que <span className="italic shimmer-gold">se cuida</span>.
          </h1>
          <p className="mt-8 max-w-md text-base md:text-lg text-foreground/80">
            Se entra por invitación. Gente que aporta, no que aparenta.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#apply" className="btn-primary">
              Solicitar acceso
            </a>
          </div>
        </div>
        <div className="hidden md:block md:col-span-5">
          <div className="relative aspect-[3/4] max-w-[360px] ml-auto overflow-hidden drift-y">
            <img src={portrait} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover ken-burns" />
            <div className="absolute inset-0 ring-1 ring-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-ddp">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border reveal-stagger">
          {pillars.map((p) => (
            <div key={p.n} className="bg-background p-12 md:p-16 text-center">
              <p className="text-[10px] tracking-[0.28em] uppercase text-gold/80 mb-4">{p.n}</p>
              <h2 className="font-serif text-4xl md:text-5xl italic text-gold">{p.t}</h2>
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
    <section className="py-20 md:py-28 border-t border-border overflow-hidden">
      <div className="container-ddp mb-10">
        <span className="eyebrow block mb-5">El Club por dentro</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.0] font-light max-w-3xl">
          Lo que <span className="italic text-gold">no se publica</span>.
        </h2>
      </div>
      <div className="relative overflow-hidden mask-fade-x">
        <div className="marquee marquee-fast gap-4 md:gap-5">
          {[...shots, ...shots].map((src, i) => (
            <figure key={i} className="group relative shrink-0 w-[280px] sm:w-[340px] md:w-[400px] aspect-[4/5] overflow-hidden bg-card hover-cinema">
              <img src={src} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]" />
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
    <section className="py-24 md:py-36 border-t border-border bg-card/20">
      <div className="container-ddp">
        <span className="eyebrow block mb-8">Filosofía</span>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 reveal-stagger">
          {philosophy.map((p, i) => (
            <p key={i} className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.15] font-light border-l-2 border-gold/60 pl-6">
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
    <section id="apply" className="py-24 md:py-36 border-t border-border">
      <div className="container-ddp max-w-3xl">
        <span className="eyebrow block mb-5">Solicita tu acceso</span>
        <h2 className="font-serif text-5xl md:text-6xl leading-[0.98] font-light">
          Cuéntanos <span className="italic text-gold">quién eres</span>.
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
          Leemos cada solicitud. Si encajas, te escribimos.
        </p>

        {submitted ? (
          <div className="mt-10 border border-gold/40 bg-card/40 p-8">
            <p className="font-serif text-2xl">Gracias. Te hemos leído.</p>
            <p className="mt-2 text-sm text-muted-foreground">Te escribimos en 5–7 días.</p>
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
              <label className="block text-[10px] tracking-[0.24em] uppercase text-muted-foreground mb-2">Cuéntanos un poco sobre ti</label>
              <textarea required rows={3} maxLength={500} className="input-line" />
            </div>
            <button type="submit" className="btn-primary justify-self-start">
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
      <input id={name} name={name} type={type} required={required} maxLength={150} className="input-line" />
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-36 border-t border-border">
      <div className="container-ddp max-w-3xl">
        <span className="eyebrow block mb-5">FAQ</span>
        <div className="border-t border-border mt-10">
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
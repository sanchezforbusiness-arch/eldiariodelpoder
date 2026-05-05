import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Brain, Users, Sparkles, MessageSquare, FileText, Network, Handshake, BookOpen, Calendar, Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/club")({
  head: () => ({
    meta: [
      { title: "El Club del Poder — Comunidad de líderes con criterio" },
      { name: "description", content: "El Club del Poder: comunidad selectiva de jóvenes líderes, emprendedores y referentes con ambición real, criterio e influencia positiva." },
      { property: "og:title", content: "El Club del Poder — Comunidad de líderes con criterio" },
      { property: "og:description", content: "Una comunidad de líderes jóvenes que buscan influencia real y legado." },
      { property: "og:url", content: "https://eldiariodelpoder.com/club" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "El Club del Poder" },
      { name: "twitter:description", content: "Comunidad selectiva de líderes jóvenes con ambición, criterio e influencia." },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/club" }],
  }),
  component: ClubPage,
});

const pillars = [
  { icon: Brain, t: "Criterio", s: "Conversaciones de fondo, no ruido", d: "Acceso a perfiles de alto nivel y sus marcos mentales." },
  { icon: Users, t: "Comunidad", s: "Rodearse de quienes elevan el estándar", d: "Red selectiva de líderes con ambición real." },
  { icon: Sparkles, t: "Oportunidad", s: "Influencia que genera valor", d: "Eventos, contenido exclusivo y colaboraciones estratégicas." },
];

const benefits = [
  { icon: MessageSquare, t: "Conversaciones exclusivas", d: "Sesiones, masterclasses y diálogos con referentes que no están en otros espacios." },
  { icon: FileText, t: "Contenido sin filtro", d: "Marcos mentales, decisiones difíciles y experiencias directas de líderes." },
  { icon: Network, t: "Comunidad de criterio", d: "Red de miembros seleccionados con ambición, curiosidad y afinidad." },
  { icon: Handshake, t: "Colaboraciones reales", d: "Proyectos, alianzas y conexiones que generan valor duradero." },
  { icon: BookOpen, t: "Formación estratégica", d: "Recursos y reflexiones sobre liderazgo, influencia y legado." },
  { icon: Calendar, t: "Eventos del Club", d: "Encuentros presenciales, cenas y diálogos cerrados en Madrid." },
];

const steps = [
  { n: "01", t: "Solicita tu acceso", d: "Completa un formulario breve y cuéntanos por qué encajas en esta comunidad." },
  { n: "02", t: "Revisión selectiva", d: "Nuestro equipo revisa tu perfil para asegurar afinidad con el propósito del Club." },
  { n: "03", t: "Bienvenida", d: "Acceso inmediato a contenido exclusivo, comunidad y próximos eventos." },
];

const philosophy = [
  "El poder no es un fin. Es responsabilidad.",
  "El liderazgo real rara vez necesita parecer liderazgo.",
  "La influencia que deja huella nace del criterio.",
  "Construimos comunidad alrededor de ideas, no de contactos.",
];

const faqs = [
  { q: "¿Tiene costo?", a: "Sí, el Club tiene una cuota anual. Compartimos los detalles tras tu solicitud de acceso." },
  { q: "¿Quién puede unirse?", a: "Jóvenes profesionales, emprendedores y referentes con interés real en liderazgo, criterio e influencia positiva." },
  { q: "¿Cómo decidís a quién aceptáis?", a: "Revisamos cada solicitud por afinidad con el propósito, criterio del perfil y capacidad de aportar valor a la comunidad." },
  { q: "¿Hay eventos presenciales?", a: "Sí. Planificamos encuentros, cenas y diálogos en Madrid y otras ciudades." },
  { q: "¿Puedo invitar a alguien?", a: "Las referencias de miembros son muy valoradas. Cuéntanos a través de contacto directo." },
];

function ClubPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <What />
        <Benefits />
        <How />
        <Testimonials />
        <Philosophy />
        <Apply />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container-ddp flex items-center justify-between py-5">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-tight text-gold">DDP</span>
          <span className="hidden sm:inline text-[10px] tracking-[0.32em] uppercase text-muted-foreground">El Club del Poder</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors">Inicio</Link>
          <a href="#apply" className="hidden sm:inline-flex items-center px-4 py-2 text-[12px] tracking-[0.18em] uppercase border border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all">
            Solicitar acceso
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-28 md:pt-52 md:pb-40 overflow-hidden">
      <div className="gold-glow w-[520px] h-[520px] -top-40 -left-40 float-slow" />
      <div className="gold-glow w-[420px] h-[420px] -bottom-32 -right-24 float-slower opacity-60" />
      <div className="container-ddp relative">
        <span className="eyebrow block mb-6">El Club del Poder</span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] font-light max-w-5xl">
          Una comunidad de <span className="italic shimmer-gold">líderes</span> con ambición, criterio e influencia.
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
          El poder no es acumulación. Es la capacidad de generar impacto real.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#apply" className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-gold-bright transition-colors">
            Únete al Club
          </a>
          <a href="#how" className="inline-flex items-center gap-2 px-8 py-4 text-[12px] tracking-[0.22em] uppercase border border-border text-foreground hover:border-gold hover:text-gold transition-colors">
            Cómo funciona
          </a>
        </div>
      </div>
    </section>
  );
}

function What() {
  return (
    <section className="py-24 md:py-36 border-t border-border">
      <div className="container-ddp">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <span className="eyebrow block mb-5">¿Qué es?</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light">
              Influencia basada en <span className="italic text-gold">criterio</span>.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>El Club del Poder es una comunidad selectiva de jóvenes profesionales, emprendedores y referentes que comparten una visión común: influencia basada en criterio, visión y responsabilidad.</p>
            <p>No es una red de contactos genérica. Es un espacio donde conversamos sobre liderazgo real, donde los mejores comparten su pensamiento y donde se crean oportunidades de valor duradero.</p>
            <p>El poder verdadero no viene de hablar más fuerte. Viene de pensar mejor, entender el contexto, sostener una visión y generar impacto positivo en tu entorno.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {pillars.map((p) => (
            <article key={p.t} className="bg-background p-10 md:p-12">
              <p.icon className="text-gold mb-6" size={28} strokeWidth={1.2} />
              <h3 className="font-serif text-3xl mb-2">{p.t}</h3>
              <p className="text-[11px] tracking-[0.24em] uppercase text-gold/80 mb-4">{p.s}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="py-24 md:py-36 border-t border-border bg-card/20">
      <div className="container-ddp">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-7">
            <span className="eyebrow block mb-5">Qué incluye</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light">
              Acceso a lo que no <span className="italic text-gold">se publica</span>.
            </h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
          {benefits.map((b) => (
            <article key={b.t} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors">
              <b.icon className="text-gold mb-5" size={24} strokeWidth={1.2} />
              <h3 className="font-serif text-2xl mb-3">{b.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function How() {
  return (
    <section id="how" className="py-24 md:py-36 border-t border-border">
      <div className="container-ddp">
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow block mb-5">Cómo funciona</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light">
            Tres pasos. <span className="italic text-gold">Sin ruido.</span>
          </h2>
        </div>
        <ol className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <div className="font-serif text-6xl text-gold mb-5 leading-none">{s.n}</div>
              <h3 className="font-serif text-2xl mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "No es solo acceso a conversaciones. Es exposición a cómo piensan los mejores. Eso cambia tu standard.", n: "Miembro del Club", r: "Founder · Tech" },
    { q: "Encontré una red real de personas con criterio. Conversaciones que en otros sitios simplemente no existen.", n: "Miembro del Club", r: "Director · Finanzas" },
    { q: "Lo más cercano a una mesa de pensamiento estratégico que he visto en España.", n: "Miembro del Club", r: "CEO · Industria" },
  ];
  return (
    <section className="py-24 md:py-36 border-t border-border bg-card/20">
      <div className="container-ddp">
        <div className="mb-14">
          <span className="eyebrow block mb-5">Voces del Club</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light max-w-3xl">
            Lo que cuentan <span className="italic text-gold">quienes ya están</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <figure key={i} className="bg-background border border-border p-8 md:p-10">
              <div className="font-serif text-5xl text-gold leading-none mb-4">“</div>
              <blockquote className="font-serif text-xl md:text-2xl leading-snug">{t.q}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-foreground">{t.n}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-24 md:py-36 border-t border-border">
      <div className="container-ddp">
        <span className="eyebrow block mb-5">Filosofía</span>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {philosophy.map((p, i) => (
            <div key={i} className="border-l-2 border-gold pl-6 md:pl-8 py-4">
              <p className="font-serif text-2xl md:text-3xl leading-snug font-light">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Apply() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="apply" className="py-24 md:py-36 border-t border-border bg-card/30">
      <div className="container-ddp max-w-3xl">
        <span className="eyebrow block mb-5">Solicita tu acceso</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light">
          Capacidad <span className="italic text-gold">limitada</span>.
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          El Club del Poder tiene capacidad limitada de miembros. Buscamos perfiles con ambición real, criterio y vocación de influencia positiva.
        </p>

        {submitted ? (
          <div className="mt-12 border border-gold/40 bg-background p-8 md:p-10">
            <p className="font-serif text-2xl">Hemos recibido tu solicitud.</p>
            <p className="mt-3 text-sm text-muted-foreground">Nos pondremos en contacto en los próximos 5–7 días.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="mt-12 grid gap-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Nombre completo" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Teléfono (opcional)" name="phone" />
              <Field label="Empresa / cargo" name="role" required />
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-2">
                ¿Por qué crees que encajas en el Club?
              </label>
              <textarea
                required
                rows={4}
                maxLength={600}
                className="w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm leading-relaxed transition-colors"
              />
            </div>
            <label className="flex items-start gap-3 text-xs text-muted-foreground">
              <input type="checkbox" required className="mt-1 accent-[var(--color-gold-bright)]" />
              <span>Acepto los términos y la política de privacidad.</span>
            </label>
            <button
              type="submit"
              className="justify-self-start inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 text-[12px] tracking-[0.22em] uppercase hover:bg-gold-bright transition-colors"
            >
              Solicitar acceso
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
      <label htmlFor={name} className="block text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={150}
        className="w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm transition-colors"
      />
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-36 border-t border-border">
      <div className="container-ddp max-w-4xl">
        <span className="eyebrow block mb-5">Preguntas frecuentes</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light mb-12">
          Lo que <span className="italic text-gold">debes saber</span>.
        </h2>
        <div className="border-t border-border">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  aria-expanded={active}
                >
                  <span className="font-serif text-xl md:text-2xl group-hover:text-gold transition-colors">{f.q}</span>
                  {active ? <Minus size={18} className="text-gold shrink-0" /> : <Plus size={18} className="text-gold shrink-0" />}
                </button>
                {active && (
                  <p className="pb-6 pr-10 text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container-ddp py-16 md:py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <div className="font-serif text-3xl text-gold mb-4">DDP</div>
          <p className="font-serif text-2xl md:text-3xl leading-snug max-w-md font-light">
            El Club del Poder · <span className="italic">Diario del Poder</span>
          </p>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Navegar</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Inicio</Link></li>
            <li><a href="#apply" className="hover:text-foreground">Solicitar acceso</a></li>
            <li><a href="https://www.instagram.com/eldiariodelpoder/" target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/eldiariodelpoder" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">Contacto</h4>
          <a href="mailto:contactoeldiariodelpoder@gmail.com" className="text-sm text-foreground hover:text-gold break-all">
            contactoeldiariodelpoder@gmail.com
          </a>
        </div>
      </div>
      <div className="container-ddp pb-8 text-xs text-muted-foreground">© 2025 Diario del Poder</div>
    </footer>
  );
}
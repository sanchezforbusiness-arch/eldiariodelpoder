import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";
import { useReveal } from "@/hooks/use-reveal";

const SITE = "https://eldiariodelpoder.com";

export const Route = createFileRoute("/manifiesto")({
  head: () => ({
    meta: [
      { title: "Manifiesto — Diario del Poder | Propósito y valores" },
      { name: "description", content: "Por qué existe Diario del Poder. Propósito, principios editoriales y los valores que ordenan cada decisión." },
      { property: "og:title", content: "Manifiesto — Diario del Poder" },
      { property: "og:description", content: "Propósito y valores detrás del podcast." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE}/manifiesto` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/manifiesto` }],
  }),
  component: ManifiestoPage,
});

function ManifiestoPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 overflow-hidden grain">
          <div className="gold-glow w-[480px] h-[480px] -top-32 -left-32 float-slow opacity-40" />
          <div className="container-ddp relative">
            <div className="flex items-center gap-4 mb-7 fade-up">
              <span className="h-px w-12 bg-gold/70" />
              <span className="eyebrow">Manifiesto</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] font-light tracking-[-0.04em] max-w-5xl fade-up">
              Por qué <span className="italic shimmer-gold">existimos</span>.
            </h1>
          </div>
        </section>

        <section className="py-16 md:py-24 border-t border-border">
          <div className="container-ddp max-w-3xl reveal">
            <span className="eyebrow block mb-5">Propósito</span>
            <div className="space-y-6 font-serif text-2xl md:text-3xl lg:text-[2rem] leading-[1.3] font-light text-foreground/90">
              <p>No entendemos el poder como imposición.</p>
              <p>Lo entendemos como la capacidad de influir, de generar impacto, de dejar <span className="italic text-gold">huella</span>.</p>
              <p>Reunimos a líderes reales con jóvenes ambiciosos. No buscamos virales fáciles.</p>
              <p>Buscamos conversaciones que cambien la forma de pensar.</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-t border-border bg-card/20">
          <div className="container-ddp max-w-3xl reveal">
            <span className="eyebrow block mb-5">Valores</span>
            <ul className="space-y-3 font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-light">
              <li>Criterio sobre ruido.</li>
              <li>Profundidad sobre clicks.</li>
              <li>Largo plazo sobre tendencia.</li>
              <li>Conversación sobre monólogo.</li>
              <li className="italic text-gold">Elegancia sobre espectáculo.</li>
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-24 border-t border-border">
          <div className="container-ddp grid md:grid-cols-2 gap-8">
            <Link to="/equipo" className="group block border border-border hover:border-gold p-10 transition-colors">
              <span className="eyebrow block mb-4">Equipo</span>
              <p className="font-serif text-3xl md:text-4xl group-hover:text-gold transition-colors">Quién está detrás</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-foreground/70 group-hover:text-gold transition-colors">Ir al equipo <ArrowUpRight size={14} /></span>
            </Link>
            <Link to="/contacto" className="group block border border-border hover:border-gold p-10 transition-colors">
              <span className="eyebrow block mb-4">Hablamos</span>
              <p className="font-serif text-3xl md:text-4xl group-hover:text-gold transition-colors">Contacta con nosotros</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-foreground/70 group-hover:text-gold transition-colors">Ir a contacto <ArrowUpRight size={14} /></span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
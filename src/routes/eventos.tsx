import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";
import { useReveal } from "@/hooks/use-reveal";
import bts1 from "@/assets/bts-aznar-firma.jpg";
import bts2 from "@/assets/bts-guillermo-lasso.jpg";
import bts3 from "@/assets/bts-jordi-urbea-talk.jpg";
import bts4 from "@/assets/bts-andres-rodriguez.jpg";
import bts5 from "@/assets/bts-aznar-faes.jpg";
import bts6 from "@/assets/bts-mikel-palco.jpg";
import bts7 from "@/assets/bts-metropolitano.jpg";
import bts8 from "@/assets/bts-osasuna.jpg";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos — Diario del Poder" },
      { name: "description", content: "Conversaciones en vivo de Diario del Poder. Llevamos las entrevistas a espacios reales con audiencia." },
      { property: "og:title", content: "Eventos — Diario del Poder" },
      { property: "og:description", content: "Conversaciones en vivo con líderes." },
      { property: "og:url", content: "https://eldiariodelpoder.com/eventos" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/eventos" }],
  }),
  component: EventosPage,
});

const eventos = [
  { img: bts1, title: "Firma con Aznar", place: "Madrid" },
  { img: bts2, title: "Encuentro Lasso", place: "Madrid" },
  { img: bts3, title: "Charla Jordi Urbea", place: "Barcelona" },
  { img: bts4, title: "Forbes House", place: "Madrid" },
  { img: bts5, title: "FAES", place: "Madrid" },
  { img: bts6, title: "Palco Metropolitano", place: "Madrid" },
  { img: bts7, title: "Estadio Metropolitano", place: "Madrid" },
  { img: bts8, title: "El Sadar", place: "Pamplona" },
];

function EventosPage() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <section className="container-ddp py-16 md:py-24">
          <div className="max-w-3xl reveal">
            <span className="eyebrow block mb-4">Eventos</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
              Conversaciones en vivo
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Llevamos nuestras entrevistas a espacios reales: salones, palcos, tribunas. Donde
              el criterio se comparte cara a cara.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 reveal-stagger reveal">
            {eventos.map((e) => (
              <div key={e.title} className="group relative overflow-hidden bg-card aspect-[3/2]">
                <img
                  src={e.img}
                  alt={`${e.title} — ${e.place}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end p-4">
                  <div className="text-background opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-display font-semibold text-sm">{e.title}</p>
                    <p className="text-xs text-background/80">{e.place}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center reveal">
            <Link to="/contacto" className="btn-primary">Propón un evento</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
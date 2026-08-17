import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { BOOKING_URL, BOOKING_EMAIL, isCalendly } from "@/data/booking";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda una llamada — Diario del Poder" },
      {
        name: "description",
        content:
          "Reserva 30 minutos con el equipo de Diario del Poder: patrocinios, colaboraciones, prensa o propuestas de entrevista.",
      },
      { property: "og:title", content: "Agenda una llamada — Diario del Poder" },
      {
        property: "og:description",
        content: "Elige un hueco en el calendario y hablamos. 30 minutos, sin compromiso.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eldiariodelpoder.com/agenda" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/agenda" }],
  }),
  component: AgendaPage,
});

const POINTS = [
  "Patrocinios y acuerdos de marca",
  "Propuestas de invitados y entrevistas",
  "Prensa, eventos y colaboraciones",
];

function AgendaPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <section className="container-ddp pb-12 md:pb-16">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <p className="mono-label">Agenda</p>
              <h1 className="mt-4 text-[clamp(2.25rem,8vw,4rem)] font-medium leading-[0.95] tracking-[-0.04em]">
                Reserva 30 minutos.
              </h1>
              <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-muted-foreground">
                Elige el hueco que mejor te venga. Hablamos por videollamada, sin presentación
                comercial de por medio.
              </p>
              <ul className="mt-8 space-y-3">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    <span className="mt-[6px] h-px w-4 shrink-0 bg-signal" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                ¿Prefieres escribir?{" "}
                <a href={`mailto:${BOOKING_EMAIL}`} className="link-rule text-foreground">
                  {BOOKING_EMAIL}
                </a>
              </p>
            </div>

            <div className="md:col-span-7">
              <BookingEmbed />
            </div>
          </div>
        </section>
      </main>
      <FooterGrid />
    </div>
  );
}

function BookingEmbed() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!BOOKING_URL) {
    return (
      <div className="panel flex min-h-[420px] flex-col justify-center gap-5 p-8 text-center md:p-12">
        <p className="mono-label">Calendario</p>
        <p className="mx-auto max-w-[34ch] text-[20px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[26px]">
          El calendario público se activa en cuanto conectemos el enlace de reservas.
        </p>
        <a href={`mailto:${BOOKING_EMAIL}?subject=Agendar%20una%20llamada`} className="btn-primary mx-auto">
          Escríbenos y lo cerramos
        </a>
      </div>
    );
  }

  if (!mounted) {
    return <div aria-hidden className="panel min-h-[680px]" />;
  }

  const src = isCalendly(BOOKING_URL)
    ? `${BOOKING_URL}${BOOKING_URL.includes("?") ? "&" : "?"}hide_gdpr_banner=1&background_color=0a0a0a&text_color=fafafa&primary_color=e5342a`
    : BOOKING_URL;

  return (
    <div className="panel overflow-hidden">
      <iframe
        src={src}
        title="Reserva una llamada con Diario del Poder"
        loading="lazy"
        className="h-[680px] w-full border-0 md:h-[760px]"
      />
    </div>
  );
}

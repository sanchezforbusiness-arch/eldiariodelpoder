import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { SubscribeForm } from "@/components/ddp/SubscribeForm";

const TITLE = "La carta — Diario del Poder";
const DESCRIPTION =
  "Una carta semanal de Diario del Poder: lo que los referentes cuentan con el micro apagado, en tu correo cada domingo.";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eldiariodelpoder.com/carta" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://eldiariodelpoder.com/carta" }],
  }),
  component: CartaPage,
});

function CartaPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="flex min-h-[100dvh] flex-col justify-center pt-28 pb-20 md:pt-40 md:pb-32">
        <div className="container-ddp">
          <span className="mono-label text-muted-foreground">La carta — semanal</span>

          <h1 className="mt-8 max-w-[16ch] text-[13vw] font-medium leading-[0.88] tracking-[-0.04em] sm:text-[9vw] lg:text-[5.6vw]">
            ¿Nunca has sentido que nadie decide como tú?
          </h1>

          <p className="mt-10 max-w-[62ch] font-serif text-[18px] leading-[1.65] text-muted-foreground md:text-[19px]">
            Una vez por semana escribimos una carta. Lo que un expresidente nos contó cuando
            se apagó el micro, la decisión que aún le quita el sueño, lo que aprendimos
            grabando. Sin resumen, sin titular.
          </p>

          <div className="mt-14 max-w-2xl border-t border-border pt-10">
            <SubscribeForm
              id="carta-email"
              size="large"
              hint="Un correo por semana. Cancela cuando quieras."
            />
          </div>

          <div className="mt-20 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
            {[
              ["01", "Cada domingo", "Un correo, nada más."],
              ["02", "Sin recortes", "Lo que no entra en el episodio."],
              ["03", "Sin ruido", "Ni promociones ni relleno."],
            ].map(([n, t, d]) => (
              <div key={n}>
                <span className="section-index">{n}</span>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em]">{t}</p>
                <p className="mt-2 font-serif text-[17px] leading-[1.6] text-muted-foreground">
                  {d}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/"
            className="mt-16 inline-block font-mono text-[11px] uppercase tracking-[0.12em] underline underline-offset-4 hover:text-signal"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
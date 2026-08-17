import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/ddp/Navbar";
import { SubscribeForm } from "@/components/ddp/SubscribeForm";

const TITLE = "La carta — Diario del Poder";
const DESCRIPTION =
  "La carta de Diario del Poder: cada domingo, lo que los referentes cuentan cuando se apaga el micro. Un correo, sin ruido.";

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
      <main className="pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="container-ddp grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Cada domingo
            </span>

            <h1 className="mt-7 max-w-[15ch] text-display font-medium leading-[0.9] tracking-tight sm:text-xl lg:text-2xl">
              La carta
            </h1>

            <p className="mt-6 max-w-[54ch] font-serif text-base leading-[1.65] text-muted-foreground md:text-base">
              Lo que nos cuentan cuando se apaga el micro. Corta, y sin promociones.
            </p>

            <div className="panel mt-10 p-6 md:p-8">
              <SubscribeForm
                id="carta-email"
                size="large"
                hint="Un correo por semana. Te das de baja en un clic."
              />
            </div>

            <ul className="mt-10 flex flex-wrap gap-2">
              {["Sin spam", "Lectura de 3 minutos", "Cancela cuando quieras"].map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>

            <Link
              to="/"
              className="link-rule tap mt-12 inline-flex font-mono text-2xs uppercase tracking-label"
            >
              Volver al inicio
            </Link>
          </div>

          {/* Graphic: a letter rendered in hairlines */}
          <aside className="lg:col-span-5">
            <div className="panel relative overflow-hidden p-6 md:p-8">
              <div aria-hidden className="dot-grid pointer-events-none absolute inset-0" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="mono-label">Diario del Poder</span>
                  <span className="mono-label text-signal">Nº 12</span>
                </div>
                <div className="hairline my-6" />
                <p className="font-serif text-lg leading-[1.3] md:text-xl">
                  “Lo difícil no fue decidir. Fue sostenerlo al día siguiente.”
                </p>
                <p className="mono-label mt-4">Un expresidente, con el micro apagado</p>
                <div className="hairline my-6" />
                <ul className="space-y-4">
                  {[
                    ["01", "Una idea de la semana"],
                    ["02", "Lo que no entró en el episodio"],
                    ["03", "Una recomendación corta"],
                  ].map(([n, t]) => (
                    <li key={n} className="flex items-center gap-4">
                      <span className="badge-num">{n}</span>
                      <span className="text-xs tracking-tight">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
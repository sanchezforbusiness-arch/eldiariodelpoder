import { CONTACT_EMAIL } from "@/data/contact";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { FooterGrid } from "@/components/ddp/FooterGrid";
import { BrandMark, BRANDS } from "@/components/ddp/BrandsMarquee";
import { Button } from "@/components/ui/button";
import { SponsorshipForm } from "@/components/ddp/SponsorshipForm";
import { countryList } from "@/data/countries";
import { SPONSOR_FORMATS, sponsorshipFaq } from "@/data/sponsorship";
import { useReveal } from "@/hooks/use-reveal";
import hosts from "@/assets/bts-hosts-palco.webp";

const title = "Patrocinar un podcast en español | Diario del Poder";
const description = "Publicidad en el podcast de liderazgo en español: patrocinio de temporada, episodios, clips y newsletter. Llega a directivos y jóvenes con ambición en España y América.";
const url = "https://eldiariodelpoder.com/patrocinadores";
const faqs = sponsorshipFaq(BRANDS.map((brand) => brand.name));

export const Route = createFileRoute("/patrocinadores")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: url }, { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title }, { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@graph": [
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://eldiariodelpoder.com/" },
          { "@type": "ListItem", position: 2, name: "Patrocinadores", item: url },
        ] },
        { "@type": "Service", "@id": `${url}#servicio`, name: "Patrocinio del podcast Diario del Poder",
          serviceType: "Patrocinio y publicidad en podcast", provider: { "@id": "https://eldiariodelpoder.com/#organization" },
          areaServed: countryList.map((country) => ({ "@type": "Country", name: country.name })), availableLanguage: "es",
          hasOfferCatalog: { "@type": "OfferCatalog", name: "Formatos de colaboración", itemListElement: SPONSOR_FORMATS.map((format) => ({
            "@type": "Offer", itemOffered: { "@type": "Service", name: format.t, description: format.d },
          })) },
        },
        { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
      ],
    }) }],
  }),
  component: PatrocinadoresPage,
});

const audience = [
  { t: "Directivos y fundadores", d: "Quienes ya toman decisiones y buscan criterio, no ruido." },
  { t: "La nueva generación", d: "Profesionales de 25 a 40 años con ambición: los decisores de los próximos diez años." },
  { t: "El mundo hispano", d: "Una audiencia con base en España y presencia creciente en América Latina y en la comunidad hispana de Estados Unidos." },
];
const principles = [
  { t: "La redacción decide", d: "Los invitados y las preguntas los elige la redacción. Esa independencia es lo que hace valiosa la asociación." },
  { t: "En la voz de los hosts", d: "Las integraciones las leen Alejandro y Víctor, con su tono, no con un spot enlatado." },
  { t: "Pocas marcas, bien integradas", d: "Preferimos menos patrocinadores y mejor asociados a llenar cada episodio de anuncios." },
];
const steps = [
  { t: "Solicitud", d: "Nos cuentas tu marca, tus mercados y tu objetivo." },
  { t: "Llamada", d: "30 minutos para entender el encaje." },
  { t: "Propuesta", d: "Formato, calendario y mercados, a medida." },
  { t: "Lanzamiento", d: "Integración, publicación y seguimiento de resultados." },
];

function PatrocinadoresPage() {
  useReveal();
  return <div className="bg-background text-foreground page-enter"><Navbar /><main>
    <Hero /><Figures />
    <Cards heading="Una audiencia que decide, o que pronto decidirá." items={audience} countryLink />
    <Cards heading="Formatos de colaboración." items={SPONSOR_FORMATS} />
    <Cards heading="Cómo trabajamos con las marcas." items={principles} />
    <Collaborators /><Process /><SponsorshipForm /><Faq /><Contact />
  </main><FooterGrid /></div>;
}

function Hero() {
  return <section className="relative isolate overflow-hidden border-b border-border pt-24 md:pt-32">
    <img src={hosts} alt="" aria-hidden fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
    <div className="absolute inset-0 -z-10 bg-background/80" />
    <div className="container-ddp py-16 md:py-24">
      <div className="max-w-4xl"><span className="mono-label">Patrocinadores</span>
        <h1 className="mt-6 max-w-4xl text-3xl font-medium leading-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">Tu marca, en la conversación que escuchan los que deciden.</h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">Diario del Poder es el podcast de liderazgo en español: expresidentes, CEOs y referentes en entrevistas largas, publicadas cada lunes con La Vanguardia y escuchadas de Madrid a Ciudad de México.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild className="btn-primary h-auto"><a href="#solicitud">Solicitar el media kit<ArrowUpRight size={16} /></a></Button>
          <Button asChild variant="outline" className="btn-outline h-auto"><Link to="/agenda">Reservar una llamada<ArrowUpRight size={16} /></Link></Button>
        </div>
      </div>
    </div>
  </section>;
}

function Figures() {
  const figures = [
    ["500K", "Alcance mensual en todas las plataformas"], ["110K", "Vistas al mes en Instagram"],
    ["Cada lunes", "Una conversación publicada en La Vanguardia"], ["TV", "Apariciones en La Sexta, Antena 3 y Univision"],
  ];
  return <section aria-label="Cifras" className="border-b border-border py-10 md:py-16"><div className="container-ddp grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 lg:gap-10">
    {figures.map(([number, label]) => <div key={number} className="min-w-0"><p className="text-2xl font-medium leading-tight sm:text-3xl lg:text-4xl">{number}</p><p className="mt-3 max-w-64 text-sm leading-relaxed text-muted-foreground">{label}</p></div>)}
  </div></section>;
}

function Cards({ heading, items, countryLink = false }: { heading: string; items: { t: string; d: string }[]; countryLink?: boolean }) {
  return <section className="border-t border-border py-16 md:py-24"><div className="container-ddp">
    <h2 className="max-w-3xl text-2xl font-medium leading-tight text-balance md:text-4xl reveal">{heading}</h2>
    <div className="mt-10 grid gap-4 md:grid-cols-3 reveal-stagger">{items.map((item, index) => <article key={item.t} className="card-clean min-w-0 p-6 md:p-8">
      <h3 className="text-lg font-medium leading-snug">{item.t}</h3><p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.d}</p>
      {countryLink && index === 2 && <Link to="/paises" className="mt-6 inline-flex items-center gap-2 text-sm hover:text-signal">Ver país por país<ArrowUpRight size={16} /></Link>}
    </article>)}</div>
  </div></section>;
}

function Process() {
  return <section className="border-t border-border py-16 md:py-24"><div className="container-ddp">
    <h2 className="text-2xl font-medium leading-tight md:text-4xl reveal">De la solicitud al primer episodio.</h2>
    <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{steps.map((step, index) => <li key={step.t} className="min-w-0 border-t border-border pt-6"><span className="mono-label">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-4 text-lg font-medium">{step.t}</h3><p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.d}</p></li>)}</ol>
  </div></section>;
}

function Faq() {
  return <section className="border-t border-border py-16 md:py-24"><div className="container-ddp grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
    <h2 className="text-2xl font-medium leading-tight">Preguntas frecuentes.</h2>
    <div>{faqs.map((faq) => <details key={faq.q} className="group border-b border-border first:border-t"><summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-6 text-base font-medium [&::-webkit-details-marker]:hidden">{faq.q}<Plus size={18} className="mt-1 shrink-0 transition-transform group-open:rotate-45" aria-hidden /></summary><p className="pb-6 text-base leading-relaxed text-muted-foreground">{faq.a}</p></details>)}</div>
  </div></section>;
}

function Collaborators() {
  return (
    <section className="border-t border-border py-16 md:py-24" aria-labelledby="collaborators-heading">
      <div className="container-ddp">
        <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-12 md:items-end md:gap-12 md:pb-14">
          <div className="md:col-span-8 reveal">
            <span className="mono-label">Marcas colaboradoras</span>
            <h2 id="collaborators-heading" className="mt-4 max-w-[18ch] text-2xl font-medium leading-[1.05] tracking-tight md:text-display">
              Ya han formado parte de la conversación.
            </h2>
          </div>
          <p className="max-w-[38ch] text-sm leading-relaxed text-muted-foreground md:col-span-4 md:text-base">
            Medios, instituciones y compañías que han colaborado con El Diario del Poder.
          </p>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-5 reveal-stagger">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="flex min-h-32 items-center justify-center gap-3 border-b border-r border-border px-4 py-8 transition-colors hover:bg-background-alt md:min-h-40 md:px-6"
            >
              <BrandMark domain={brand.domain} logo={brand.logo} name={brand.name} className="h-7 md:h-8" />
              <span className="notranslate text-center text-sm font-medium leading-tight tracking-tight md:text-base" translate="no">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <p className="max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
            Si tu marca comparte esta forma de entender la influencia, veamos cómo integrarla con criterio.
          </p>
          <Button asChild className="btn-primary h-auto shrink-0"><Link to="/agenda">
            Reservar una llamada
            <ArrowUpRight size={14} />
          </Link></Button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="border-t border-border py-16 md:py-24">
      <div className="container-ddp">
        <div className="panel flex flex-col gap-6 p-6 reveal md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="mono-label">¿Hablamos?</p>
            <p className="mt-3 max-w-[30ch] text-lg font-medium leading-[1.15] tracking-tight md:text-xl">
              Reserva 30 minutos y vemos el encaje de tu marca.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild className="btn-primary h-auto w-full sm:w-auto"><Link to="/agenda">
              Reservar una llamada
              <ArrowUpRight size={14} />
            </Link></Button>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Patrocinadores%20%E2%80%94%20Diario%20del%20Poder`}
              className="text-sm text-muted-foreground hover:text-signal transition-colors sm:text-right"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
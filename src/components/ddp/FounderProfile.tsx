import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Linkedin } from "lucide-react";
import { Navbar } from "@/components/ddp/Navbar";
import { Footer } from "@/components/ddp/Footer";
import { pressArticles } from "@/data/press";
import { guestList } from "@/data/podcast";

export type FounderProfileProps = {
  name: string;
  role: string;
  img: string;
  linkedin: string;
  lead: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
};

export function FounderProfile({ name, role, img, linkedin, lead, paragraphs, facts }: FounderProfileProps) {
  return (
    <div className="bg-background text-foreground page-enter">
      <Navbar />
      <main className="pt-24">
        <div className="container-ddp pt-6">
          <Link to="/" className="inline-flex items-center gap-2 text-2xs tracking-label uppercase text-muted-foreground hover:text-gold transition-colors">
            <ArrowLeft size={14} /> Volver
          </Link>
        </div>

        <header className="container-ddp pt-8 grid md:grid-cols-12 gap-10 md:gap-14 items-end">
          <div className="md:col-span-7">
            <span className="eyebrow block mb-5">{role}</span>
            <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl leading-[0.98] font-light tracking-tight">
              {name}
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">{lead}</p>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer me"
              className="mt-8 inline-flex items-center gap-2 text-2xs tracking-label uppercase text-foreground hover:text-gold transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-card">
              <img
                src={img}
                alt={`${name}, ${role.toLowerCase()} de Diario del Poder`}
                width={512}
                height={640}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        <section className="container-ddp py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                Quién es <span className="italic text-gold">{name.split(" ")[0]}</span>
              </h2>
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="md:col-span-5">
              <dl className="border-t border-border">
                {facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-3 gap-4 py-4 border-b border-border">
                    <dt className="text-2xs tracking-label uppercase text-gold/80">{f.label}</dt>
                    <dd className="col-span-2 text-sm text-muted-foreground">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="container-ddp py-14 md:py-20 border-t border-border">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
            A quién ha <span className="italic text-gold">entrevistado</span>
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
            {guestList.slice(0, 12).map((g) => (
              <li key={g.name}>
                <p className="font-serif text-lg">{g.name}</p>
                <p className="mt-1 text-2xs tracking-label uppercase text-muted-foreground">{g.role}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="container-ddp py-14 md:py-20 border-t border-border">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
            En los <span className="italic text-gold">medios</span>
          </h2>
          <ul className="space-y-6 max-w-3xl">
            {pressArticles.map((a) => (
              <li key={a.url}>
                <p className="text-2xs tracking-label uppercase text-gold/80 mb-1">{a.outlet}</p>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-xl md:text-2xl leading-snug hover:text-gold transition-colors inline-flex items-start gap-2"
                >
                  {a.headline} <ArrowUpRight size={16} className="mt-2 shrink-0" />
                </a>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { useLanding, landingText } from "@/i18n/LandingContext";
import { Link } from "@tanstack/react-router";

export function ManifestoBand() {
  const { dict } = useLanding();
  return (
    <section className="section-pad-lg">
      <div className="container-ddp">
        <h2 className="reveal font-serif text-2xl font-light leading-[0.95] tracking-tight">{dict.manifesto.heading}</h2>

        <p className="reveal mt-10 max-w-[26ch] text-xl font-semibold leading-[1.1] tracking-tight md:mt-14 md:text-2xl">
          {dict.manifesto.lead}
        </p>

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
          {dict.manifesto.blocks.map((text) => (
            <p
              key={text}
              className="reveal max-w-[26ch] text-xl font-semibold leading-[1.1] tracking-tight md:text-2xl"
            >
              {text}
            </p>
          ))}
        </div>

        <Link
          to="/manifiesto"
          className="link-rule tap reveal mt-12 inline-flex items-center font-mono text-2xs uppercase tracking-label"
        >
          {dict.manifesto.button}
        </Link>
      </div>
    </section>
  );
}

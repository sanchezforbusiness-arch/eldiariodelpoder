import { useLanding } from "@/i18n/LandingContext";

export function FaqBand() {
  const { dict } = useLanding();
  const FAQ = dict.faq.items.map((item, index) => {
    const name = dict.faq.founderLinkText;
    const position = index === 0 ? item.a.indexOf(name) : -1;
    return { q: item.q, a: position < 0 ? item.a : <>{item.a.slice(0, position)}<a
      href="https://alejandrosanchezmartinez.com"
      rel="me noreferrer"
      className="transition-colors hover:text-signal"
    >{name}</a>{item.a.slice(position + name.length)}</> };
  });
  return (
    <section className="section-pad">
      <div className="container-ddp">
        <h2 className="reveal font-serif text-2xl font-light leading-[0.95] tracking-tight">
          {dict.faq.heading}
        </h2>

        <dl className="reveal-stagger mt-10 grid gap-3 md:mt-12 md:gap-4">
          {FAQ.map((f, i) => (
            <div
              key={f.q}
              className="card-clean group grid gap-3 rounded-[20px] bg-card px-6 py-7 md:grid-cols-12 md:gap-8 md:px-8 md:py-8"
            >
              <dt className="flex items-start gap-4 md:col-span-4">
                <span className="mono-label mt-1 shrink-0 transition-colors duration-300 group-hover:text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium tracking-tight md:text-base">{f.q}</span>
              </dt>
              <dd className="prose-editorial md:col-span-8">{f.a}</dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  );
}

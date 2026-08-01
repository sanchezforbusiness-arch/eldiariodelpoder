import { useEffect, useRef, useState } from "react";

const FIGURES = [
  { value: 18, suffix: " M", label: "Usuarios únicos al mes", note: "Fuente: La Vanguardia, 2025" },
  { value: 145, suffix: " años", label: "De historia editorial", note: "Fundada en 1881, Barcelona" },
  { value: 1, prefix: "Nº ", label: "Diario de referencia en Cataluña", note: "Fuente: La Vanguardia, 2025" },
];

function useCount(target: number, run: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setV(target);
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 900);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return v;
}

export function VanguardiaBand() {
  const ref = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setRun(true), io.disconnect()),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="invert-section border-b border-border py-24 md:py-36">
      <div className="container-ddp">
        <div className="flex gap-8">
          <span className="section-index pt-2">03</span>
          <div className="max-w-[24ch]">
            <h2 className="text-[10vw] font-medium leading-[0.92] tracking-[-0.035em] sm:text-[6vw] lg:text-[4vw]">
              La Vanguardia es nuestro media partner oficial.
            </h2>
            <p className="prose-editorial mt-8">
              Las entrevistas de Diario del Poder se publican también en La Vanguardia, el diario
              fundado en Barcelona en 1881.
            </p>
          </div>
        </div>

        <dl className="mt-16 grid border-t border-border sm:grid-cols-3">
          {FIGURES.map((f) => (
            <Figure key={f.label} {...f} run={run} />
          ))}
        </dl>
      </div>
    </section>
  );
}

function Figure({
  value,
  prefix,
  suffix,
  label,
  note,
  run,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  note: string;
  run: boolean;
}) {
  const v = useCount(value, run);
  return (
    <div className="border-b border-border px-0 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0">
      <dd className="font-mono text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.02em] tabular-nums">
        {prefix}
        {v}
        {suffix}
      </dd>
      <dt className="mono-label mt-4 block">{label}</dt>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{note}</p>
    </div>
  );
}
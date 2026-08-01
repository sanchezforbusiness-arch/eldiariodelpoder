import { useEffect, useRef, useState } from "react";

const FIGURES = [
  { value: 18, suffix: " M", bar: 100, label: "Usuarios únicos al mes", note: "Fuente: La Vanguardia, 2025" },
  { value: 145, suffix: " años", bar: 80, label: "De historia editorial", note: "Fundada en 1881, Barcelona" },
  { value: 1, prefix: "Nº ", bar: 60, label: "Diario de referencia en Cataluña", note: "Fuente: La Vanguardia, 2025" },
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
        <div className="flex gap-5 md:gap-8">
          <span className="section-index pt-2">03</span>
          <div className="max-w-[24ch]">
            <h2 className="type-section font-medium">
              La Vanguardia es nuestro media partner oficial.
            </h2>
            <p className="prose-editorial mt-8">
              Las entrevistas de Diario del Poder se publican también en La Vanguardia, el diario
              fundado en Barcelona en 1881.
            </p>

            {/* Connection diagram — brand to partner */}
            <svg
              aria-hidden
              viewBox="0 0 320 40"
              className="mt-10 w-full max-w-[320px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <circle cx="6" cy="20" r="3" />
              <circle cx="314" cy="20" r="3" />
              <path
                d="M9 20 H150 M170 20 H311 M160 12 V28"
                strokeDasharray="320"
                strokeDashoffset={run ? 0 : 320}
                style={{ transition: "stroke-dashoffset 1200ms cubic-bezier(0.16,1,0.3,1)" }}
              />
              <rect x="150" y="12" width="20" height="16" />
            </svg>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 border-t border-border sm:grid-cols-3">
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
  bar,
  label,
  note,
  run,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  bar: number;
  label: string;
  note: string;
  run: boolean;
}) {
  const v = useCount(value, run);
  return (
    <div className="border-b border-border px-0 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0">
      <dd className="tabular font-mono text-[clamp(2rem,9vw,3rem)] leading-none tracking-[-0.02em]">
        {prefix}
        {v}
        {suffix}
      </dd>
      <div className="mt-4 h-[2px] w-full bg-border">
        <div
          className="h-full bg-[#0A0A0A]"
          style={{ width: run ? `${bar}%` : "0%", transition: "width 1100ms cubic-bezier(0.16,1,0.3,1)" }}
        />
      </div>
      <dt className="mono-label mt-4 block">{label}</dt>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{note}</p>
    </div>
  );
}
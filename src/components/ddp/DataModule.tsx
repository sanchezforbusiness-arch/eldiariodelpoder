import { useEffect, useRef, useState } from "react";

type Metric = { label: string; value: number; suffix?: string; note: string };

const METRICS: Metric[] = [
  { label: "Reproducciones", value: 420, suffix: "K", note: "YouTube + Spotify" },
  { label: "Países", value: 38, note: "Origen de escucha" },
  { label: "Audiencia 25–44", value: 61, suffix: "%", note: "Del total" },
  { label: "Escucha completa", value: 74, suffix: "%", note: "Media por episodio" },
];

const PROFILE = [
  ["Directivos y C-level", 34],
  ["Fundadores y empresa", 28],
  ["Sector público y política", 21],
  ["Estudiantes y jóvenes", 17],
] as const;

export function DataModule() {
  return (
 <section className="border-b border-border py-16 md:py-32">
      <div className="container-ddp">
        <div className="flex gap-8">
          <h2 className="text-xl font-medium leading-[0.9] tracking-tight sm:text-2xl lg:text-2xl">
            Audiencia
          </h2>
        </div>

        <div className="mt-12 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="border-b border-border px-0 py-8 sm:px-6 lg:border-l lg:first:border-l-0">
              <Counter to={m.value} suffix={m.suffix} />
              <p className="mono-label mt-4">{m.label}</p>
              <p className="mt-1 font-mono text-2xs tracking-label text-muted-foreground/70">{m.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="mono-label mb-6">Perfil de la audiencia</p>
            <ul>
              {PROFILE.map(([label, pct]) => (
                <li key={label} className="grid grid-cols-[1fr_48px] items-center gap-4 border-b border-border py-4">
                  <div>
                    <span className="font-mono text-2xs uppercase tracking-label">{label}</span>
                    <div className="mt-3 h-px w-full bg-border">
                      <div className="h-px bg-foreground" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <span className="text-right font-mono text-2xs tracking-label text-muted-foreground">{pct}%</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mono-label mb-6">Distribución</p>
            <dl className="grid grid-cols-2 gap-x-8">
              {[
                ["ES", "62%"], ["MX", "9%"], ["AR", "7%"], ["CO", "5%"],
                ["US", "5%"], ["EC", "4%"], ["CL", "3%"], ["Otros", "5%"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between border-b border-border py-4">
                  <dt className="font-mono text-2xs uppercase tracking-label">{k}</dt>
                  <dd className="font-mono text-2xs tracking-label text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 900;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <p ref={ref} className="font-mono text-2xl tracking-tight tabular-nums md:text-display">
      {n}
      {suffix}
    </p>
  );
}

import { useEffect, useRef, useState } from "react";
import { Radio, Mic, Globe2, Users, Star } from "lucide-react";

type Stat = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  value: number;
  suffix: string;
  label: string;
  sub: string;
  color: string;
  decimals?: number;
};

const STATS: Stat[] = [
  { icon: Radio, value: 50, suffix: "M+", label: "Minutos escuchados", sub: "en 2025", color: "var(--color-luxury)" },
  { icon: Mic, value: 15, suffix: "+", label: "Líderes entrevistados", sub: "expresidentes y CEOs", color: "var(--color-orange)" },
  { icon: Globe2, value: 4, suffix: "+", label: "Plataformas", sub: "Spotify · YouTube · Apple · Google", color: "var(--color-cyan)" },
  { icon: Users, value: 524, suffix: "", label: "Miembros del Club", sub: "en 15 países", color: "var(--color-success)" },
  { icon: Star, value: 4.9, suffix: "", label: "Rating medio", sub: "en Spotify y Apple", color: "var(--color-luxury)", decimals: 1 },
];

function useCountUp(target: number, decimals = 0, durationMs = 1500, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, decimals, durationMs, start]);
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString("es-ES");
}

function StatCard({ stat, start }: { stat: Stat; start: boolean }) {
  const display = useCountUp(stat.value, stat.decimals ?? 0, 1500, start);
  const Icon = stat.icon;
  return (
    <div className="group flex-1 min-w-[200px] px-6 py-8 border border-border/60 bg-card/40 backdrop-blur-sm hover:border-[var(--color-orange)]/60 hover:bg-card/70 transition-all rounded-md">
      <Icon size={22} className="mb-4 opacity-80" style={{ color: stat.color }} />
      <div className="font-serif text-4xl md:text-5xl font-light tabular-nums" style={{ color: stat.color }}>
        {display}
        <span className="text-3xl md:text-4xl">{stat.suffix}</span>
      </div>
      <div className="mt-3 text-sm font-medium text-foreground">{stat.label}</div>
      <div className="mt-1 text-xs text-muted-foreground">{stat.sub}</div>
    </div>
  );
}

export function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="stats-title"
      className="relative border-t-4 border-[var(--color-orange)] bg-background py-16 md:py-24"
    >
      <div className="container-ddp">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
          <div>
            <span className="eyebrow flex items-center gap-2">
              <span className="dot-gold" /> Por qué nos escuchan
            </span>
            <h2 id="stats-title" className="mt-4 font-serif text-3xl md:text-5xl font-light leading-tight">
              La <span className="text-[var(--color-orange)] italic">credibilidad</span> es nuestro activo.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Audiencia verificada, voces de primer nivel y un crecimiento que no para.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-5">
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
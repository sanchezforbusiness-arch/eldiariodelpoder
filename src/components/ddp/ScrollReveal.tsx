import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";

function Word({ children, progress, range }: { children: ReactNode; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

export function ScrollReveal({
  text,
  label,
  index,
  className = "",
}: {
  text: string;
  label?: string;
  index?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.2"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const words = text.split(" ");

  return (
    <section ref={ref} className={`border-b border-border py-24 md:py-36 ${className}`}>
      <div className="container-ddp">
        <div className="flex items-baseline gap-6">
          {index ? <span className="section-index">{index}</span> : null}
          {label ? (
            <span className="font-mono text-2xs uppercase tracking-label text-muted-foreground">{label}</span>
          ) : null}
        </div>

        <motion.div
          aria-hidden
          className="mt-6 h-px bg-[#E5342A]"
          style={{ width: reduced ? "100%" : lineWidth }}
        />

        <p className="mt-10 text-xl font-medium leading-[1.05] tracking-tight sm:text-2xl lg:text-2xl">
          {reduced
            ? text
            : words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
        </p>
      </div>
    </section>
  );
}

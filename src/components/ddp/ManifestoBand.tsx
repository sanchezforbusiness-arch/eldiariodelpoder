import { useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";

const LEAD =
  "Las decisiones que cambian un país no se explican en un titular. Grabamos la conversación entera y la publicamos sin recortes.";

const BLOCKS = [
  "Preguntamos lo que se pregunta en privado y no editamos la respuesta incómoda.",
  "Nos interesa cómo se decide bajo presión y qué queda cuando el cargo termina.",
];

function Word({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

function AnimatedParagraph({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.35"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {reduced
        ? text
        : words.map((word, i) => {
            const start = i / words.length;
            return (
              <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
                {word}
              </Word>
            );
          })}
    </p>
  );
}

export function ManifestoBand() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.15"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const words = LEAD.split(" ");

  return (
    <section ref={ref} className="invert-section border-b border-border py-16 md:py-24">
      <div className="container-ddp">
        <div className="flex gap-4 sm:gap-6">
          <span className="badge-num mt-2">05</span>
          <h2 className="text-[9vw] font-medium leading-[0.9] tracking-[-0.035em] sm:text-[5.5vw] lg:text-[3.6vw]">
            Manifiesto
          </h2>
        </div>

        <motion.div
          aria-hidden
          className="mt-10 h-px bg-[#E5342A]"
          style={{ width: reduced ? "100%" : lineWidth }}
        />

        <p className="mt-10 text-[7vw] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[4.4vw] lg:text-[2.8vw]">
          {reduced
            ? LEAD
            : words.map((word, i) => {
                const start = i / words.length;
                return (
                  <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
                    {word}
                  </Word>
                );
              })}
        </p>

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
          {BLOCKS.map((text, i) => (
            <AnimatedParagraph
              key={i}
              text={text}
              className="text-[7vw] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[4.4vw] lg:text-[2.8vw]"
            />
          ))}
        </div>

        <Link to="/manifiesto" className="link-rule mt-14 inline-flex font-mono text-[11px] uppercase tracking-[0.12em]">
          Leer el manifiesto
        </Link>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";

/** Lenis smooth scroll + custom cursor + page curtain. Disabled on touch / reduced-motion. */
export function SiteChrome({ routeKey }: { routeKey: string }) {
  const [curtain, setCurtain] = useState(false);
  const first = useRef(true);

  // Smooth scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      const loop = (t: number) => {
        lenis?.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  // Curtain on route change
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setCurtain(true);
    const t = window.setTimeout(() => setCurtain(false), 350);
    return () => window.clearTimeout(t);
  }, [routeKey]);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[70] bg-background transition-opacity duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ opacity: curtain ? 1 : 0, visibility: curtain ? "visible" : "hidden" }}
      />
      <Cursor />
    </>
  );
}

function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "link" | "view">("idle");
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setOn(true);
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      const el = (e.target as HTMLElement)?.closest?.("[data-cursor],a,button");
      const flag = el?.getAttribute?.("data-cursor");
      setState(flag === "view" ? "view" : el ? "link" : "idle");
    };
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      if (dot.current) dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!on) return null;
  const size = state === "view" ? 64 : state === "link" ? 28 : 8;
  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden items-center justify-center rounded-full border border-foreground mix-blend-difference lg:flex"
      style={{
        width: size,
        height: size,
        backgroundColor: state === "idle" ? "var(--color-foreground)" : "transparent",
        transition: "width 400ms cubic-bezier(0.16,1,0.3,1), height 400ms cubic-bezier(0.16,1,0.3,1), background-color 400ms",
      }}
    >
      {state === "view" && (
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground">Ver</span>
      )}
    </div>
  );
}

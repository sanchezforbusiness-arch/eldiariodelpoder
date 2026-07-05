import { useEffect } from "react";

/**
 * Adds `.is-in` to every `.curtain` element as it enters the viewport, once.
 * Honors prefers-reduced-motion by revealing immediately.
 */
export function useCurtain() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".curtain"));
    if (!els.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
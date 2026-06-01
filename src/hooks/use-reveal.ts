import { useEffect } from "react";

/**
 * Observes elements with the `.reveal` class and adds `.is-visible`
 * the first time each one enters the viewport. Mount once at the app root.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let io: IntersectionObserver | null = null;
    let cancelled = false;

    // Defer DOM queries + observer setup off the critical rendering path
    // to avoid forced reflows during hydration / initial paint.
    const schedule =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
        .requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));

    const handle = schedule(() => {
      if (cancelled) return;
      const els = Array.from(
        document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger"),
      );
      if (!els.length) return;

      if (typeof IntersectionObserver === "undefined") {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );

      els.forEach((el) => io!.observe(el));
    });

    return () => {
      cancelled = true;
      const cancel = (window as unknown as {
        cancelIdleCallback?: (h: number) => void;
      }).cancelIdleCallback;
      if (cancel) cancel(handle as number);
      else window.clearTimeout(handle as number);
      io?.disconnect();
    };
  }, []);
}
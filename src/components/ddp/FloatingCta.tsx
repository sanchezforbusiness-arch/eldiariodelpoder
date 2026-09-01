import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

/** CTA flotante discreto: aparece cuando el héroe ya ha pasado. */
export function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > (window.innerHeight || 800) * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        to="/agenda"
        className="tap gap-2 rounded-sm border border-foreground bg-foreground px-5 py-3 font-mono text-2xs uppercase tracking-label text-background transition-colors duration-300 hover:bg-background hover:text-foreground"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
        Hablemos
      </Link>
    </div>
  );
}

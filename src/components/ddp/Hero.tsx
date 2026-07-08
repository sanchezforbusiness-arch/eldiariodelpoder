import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroDesktop from "@/assets/hero-hosts-set.jpg.asset.json";
import heroMobile from "@/assets/hero-hosts-set.jpg.asset.json";

const YT_ID = "nTtgtxG7UNs";
const YT_START = 20;

export function Hero() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [allowVideo, setAllowVideo] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (reduce || coarse) setAllowVideo(false);
  }, []);

  // Preconnect to YouTube hosts for faster first frame
  useEffect(() => {
    if (!allowVideo) return;
    const hosts = [
      "https://www.youtube-nocookie.com",
      "https://www.youtube.com",
      "https://i.ytimg.com",
      "https://s.ytimg.com",
      "https://yt3.ggpht.com",
    ];
    const added: HTMLLinkElement[] = [];
    hosts.forEach((href) => {
      const l = document.createElement("link");
      l.rel = "preconnect";
      l.href = href;
      l.crossOrigin = "";
      document.head.appendChild(l);
      added.push(l);
    });
    return () => { added.forEach((l) => l.remove()); };
  }, [allowVideo]);

  // Listen to YT IFrame API postMessages to detect actual PLAYING state.
  // This lets us keep the poster image visible until the video truly starts,
  // avoiding the YouTube spinner / black flash on initial load.
  useEffect(() => {
    if (!allowVideo) return;
    const onMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      if (!e.origin.includes("youtube")) return;
      try {
        const data = JSON.parse(e.data);
        // event: "onStateChange", info: 1 === PLAYING
        if (data?.event === "onStateChange" && data?.info === 1) {
          setVideoPlaying(true);
        }
        if (data?.event === "onReady") {
          // subscribe to state change events
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "listening", id: YT_ID }),
            "*"
          );
        }
      } catch { /* not our message */ }
    };
    window.addEventListener("message", onMessage);
    // Fallback: if postMessage never arrives (e.g. blocked), reveal after 1.2s.
    const t = window.setTimeout(() => setVideoPlaying(true), 1400);
    return () => {
      window.removeEventListener("message", onMessage);
      window.clearTimeout(t);
    };
  }, [allowVideo]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden bg-background"
    >
      {/* Cinematic background */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <picture>
          <source media="(max-width: 639px)" srcSet={heroMobile.url} />
          <img
            src={heroDesktop.url}
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "50% 40%",
              opacity: videoPlaying ? 0 : 0.55,
              transition: "opacity 700ms ease",
            }}
          />
        </picture>
        {allowVideo && (
          <div
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              opacity: videoPlaying ? 0.9 : 0,
              transition: "opacity 700ms ease",
            }}
          >
            <iframe
              ref={iframeRef}
              title=""
              tabIndex={-1}
              src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YT_ID}&playsinline=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&start=${YT_START}&enablejsapi=1`}
              allow="autoplay; encrypted-media; picture-in-picture"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "max(100vw, calc(100vh * 16 / 9))",
                height: "max(100vh, calc(100vw * 9 / 16))",
                border: 0,
                pointerEvents: "none",
              }}
            />
          </div>
        )}
        {/* Vignette / gradient layers */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 45%, rgba(12,12,14,0.15) 0%, rgba(12,12,14,0.55) 65%, rgba(12,12,14,0.9) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,12,14,0.35) 0%, rgba(12,12,14,0.15) 40%, rgba(12,12,14,0.85) 100%)",
          }}
        />
      </div>

      <div className="container-ddp relative z-10 pt-32 md:pt-40 pb-32 md:pb-40 w-full text-center">
        <p className="eyebrow mb-8 md:mb-10">El podcast — Madrid</p>

        <h1 className="headline-mask font-display font-black uppercase leading-[0.85] tracking-tight text-foreground text-[clamp(3.2rem,14vw,12rem)]">
          <span><span>Diario</span></span>
          <span><span>del Poder</span></span>
        </h1>

        <p className="mt-10 md:mt-12 font-display text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-foreground/85 uppercase">
          La voz del <span className="italic font-serif font-normal normal-case">legado</span>.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/50">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} strokeWidth={1.5} className="animate-bounce" />
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { episodeList } from "@/data/podcast";

const clips = episodeList.filter((e) => e.youtubeId).slice(0, 6);

const videoUrl = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?${new URLSearchParams({
    autoplay: "1", mute: "1", controls: "0", disablekb: "1", fs: "0", loop: "1",
    playlist: id, playsinline: "1", rel: "0", modestbranding: "1", iv_load_policy: "3",
    cc_load_policy: "0", enablejsapi: "1", hl: "es", start: "25",
  })}`;

/** Fondo de vídeo cinematográfico: dos iframes, crossfade, foto de respaldo debajo. */
export function HeroVideoBg() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(0);
  const [nextIndex, setNextIndex] = useState(clips.length > 1 ? 1 : 0);
  const [currentReady, setCurrentReady] = useState(false);
  const [nextReady, setNextReady] = useState(false);
  const [crossfading, setCrossfading] = useState(false);
  const [muted, setMuted] = useState(true);
  const currentFrame = useRef<HTMLIFrameElement>(null);
  const nextFrame = useRef<HTMLIFrameElement>(null);
  const mutedRef = useRef(true);

  useEffect(() => {
    if (!clips.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || (conn?.effectiveType && /2g/.test(conn.effectiveType))) return;
    const t = window.setTimeout(() => setEnabled(true), 600);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!event.origin.endsWith("youtube-nocookie.com")) return;
      let p: { event?: string; info?: number } | null = null;
      try { p = typeof event.data === "string" ? JSON.parse(event.data) : event.data; } catch { return; }
      if (p?.event !== "onStateChange" || p.info !== 1) return;
      if (event.source === currentFrame.current?.contentWindow) setCurrentReady(true);
      if (event.source === nextFrame.current?.contentWindow) setNextReady(true);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const listen = (f: HTMLIFrameElement | null) =>
    f?.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: 1 }), "*");

  const onLoad = (which: "current" | "next") => {
    listen(which === "current" ? currentFrame.current : nextFrame.current);
    window.setTimeout(() => (which === "current" ? setCurrentReady(true) : setNextReady(true)), 1600);
  };

  useEffect(() => {
    if (clips.length < 2 || !currentReady || !nextReady || crossfading) return;
    const t = window.setTimeout(() => setCrossfading(true), 6000);
    return () => window.clearTimeout(t);
  }, [currentReady, nextReady, crossfading]);

  useEffect(() => {
    if (!crossfading) return;
    const t = window.setTimeout(() => {
      setActive(nextIndex);
      setNextIndex((nextIndex + 1) % clips.length);
      setCurrentReady(true);
      setNextReady(false);
      setCrossfading(false);
    }, 1500);
    return () => window.clearTimeout(t);
  }, [crossfading, nextIndex]);

  const sendMute = (m: boolean) => {
    document.querySelectorAll<HTMLIFrameElement>(".hero-video-frame").forEach((f) =>
      f.contentWindow?.postMessage(JSON.stringify({ event: "command", func: m ? "mute" : "unMute", args: [] }), "*"),
    );
  };

  useEffect(() => {
    if (mutedRef.current) return;
    const t = window.setTimeout(() => sendMute(false), 250);
    return () => window.clearTimeout(t);
  }, [active]);

  if (!enabled) return null;
  const current = clips[active];
  const next = clips[nextIndex];

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <iframe
          ref={currentFrame}
          key={`c-${current.youtubeId}-${active}`}
          src={videoUrl(current.youtubeId!)}
          title=""
          tabIndex={-1}
          allow="autoplay; encrypted-media; picture-in-picture"
          onLoad={() => onLoad("current")}
          className={`hero-video-frame${currentReady ? " is-ready" : ""}${crossfading ? " is-outgoing" : ""}`}
        />
        {clips.length > 1 && (
          <iframe
            ref={nextFrame}
            key={`n-${next.youtubeId}-${nextIndex}`}
            src={videoUrl(next.youtubeId!)}
            title=""
            tabIndex={-1}
            loading="eager"
            allow="autoplay; encrypted-media; picture-in-picture"
            onLoad={() => onLoad("next")}
            className={`hero-video-frame is-incoming${nextReady ? " is-ready" : ""}${crossfading ? " is-visible" : ""}`}
          />
        )}
      </div>
      <button
        type="button"
        onClick={() => {
          const m = !muted;
          mutedRef.current = m;
          setMuted(m);
          sendMute(m);
        }}
        className="mono-label absolute right-4 top-24 z-20 flex items-center gap-2 rounded-full border border-border bg-background/30 px-4 py-2 backdrop-blur-md transition-colors hover:bg-background/50 md:right-8 md:top-28"
        aria-label={muted ? "Activar sonido" : "Silenciar"}
      >
        {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        {muted ? "Escuchar" : "Silenciar"}
      </button>
    </>
  );
}

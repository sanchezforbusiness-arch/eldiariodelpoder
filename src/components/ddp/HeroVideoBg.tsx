import { useEffect, useRef, useState } from "react";
import { episodeList } from "@/data/podcast";

const clips = episodeList.filter((episode) => episode.youtubeId).slice(0, 6);

const videoUrl = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?${new URLSearchParams({
    autoplay: "1", mute: "1", controls: "0", disablekb: "1", fs: "0", loop: "1",
    playlist: id, playsinline: "1", rel: "0", modestbranding: "1", iv_load_policy: "3",
    cc_load_policy: "0", enablejsapi: "1", hl: "es", start: "25",
  })}`;

/** Mantiene el siguiente clip reproduciéndose detrás del actual antes de fundirlos. */
export function HeroVideoBg() {
  const [enabled, setEnabled] = useState(false);
  const [slotClips, setSlotClips] = useState([0, 1]);
  const [activeSlot, setActiveSlot] = useState(0);
  const [playing, setPlaying] = useState([false, false]);
  const [fadeTo, setFadeTo] = useState<number | null>(null);
  const frames = useRef<(HTMLIFrameElement | null)[]>([null, null]);

  useEffect(() => {
    if (!clips.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (connection?.saveData || (connection?.effectiveType && /2g/.test(connection.effectiveType))) return;
    const timer = window.setTimeout(() => setEnabled(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube-nocookie.com") return;
      const slot = frames.current.findIndex((frame) => frame?.contentWindow === event.source);
      if (slot < 0) return;
      let message: { event?: string; info?: number };
      try { message = typeof event.data === "string" ? JSON.parse(event.data) : event.data; }
      catch { return; }
      if (message?.event === "onReady") {
        frames.current[slot]?.contentWindow?.postMessage(JSON.stringify({ event: "command", func: "mute", args: [] }), event.origin);
        frames.current[slot]?.contentWindow?.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: [] }), event.origin);
      }
      if (message?.event === "onStateChange") {
        if (message.info === 1) setPlaying((previous) => previous.map((value, index) => index === slot ? true : value));
        if (message.info === 0 || message.info === 2 || message.info === 3) {
          setPlaying((previous) => previous.map((value, index) => index === slot ? false : value));
        }
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [enabled]);

  useEffect(() => {
    const next = 1 - activeSlot;
    if (clips.length < 2 || !playing[activeSlot] || !playing[next] || fadeTo !== null) return;
    const timer = window.setTimeout(() => setFadeTo(next), 6000);
    return () => window.clearTimeout(timer);
  }, [activeSlot, fadeTo, playing]);

  useEffect(() => {
    if (fadeTo === null) return;
    const timer = window.setTimeout(() => {
      const oldSlot = 1 - fadeTo;
      const following = (slotClips[fadeTo] + 1) % clips.length;
      setActiveSlot(fadeTo);
      setPlaying((previous) => previous.map((value, index) => index === oldSlot ? false : value));
      setSlotClips((previous) => previous.map((value, index) => index === oldSlot ? following : value));
      setFadeTo(null);
    }, 1500);
    return () => window.clearTimeout(timer);
  }, [fadeTo, slotClips]);

  if (!enabled || !clips.length) return null;

  return (
    <div className="hero-video-wrap pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {slotClips.slice(0, Math.min(clips.length, 2)).map((clipIndex, slot) => {
        const clip = clips[clipIndex];
        if (!clip?.youtubeId) return null;
        const visible = playing[slot] && (fadeTo === null ? slot === activeSlot : slot === fadeTo);
        return (
          <iframe
            key={`${slot}-${clip.youtubeId}`}
            ref={(frame) => { frames.current[slot] = frame; }}
            src={videoUrl(clip.youtubeId)}
            title=""
            tabIndex={-1}
            loading="eager"
            allow="autoplay; encrypted-media; picture-in-picture"
            onLoad={() => frames.current[slot]?.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: slot }), "https://www.youtube-nocookie.com")}
            className={`hero-video-frame${visible ? " is-visible" : ""}`}
          />
        );
      })}
    </div>
  );
}
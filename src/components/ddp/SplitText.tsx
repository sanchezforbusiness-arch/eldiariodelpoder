import React from "react";

type Props = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  start?: number;
  goldWords?: string[];
  italicWords?: string[];
};

/** Renders each word as an animated span (CSS .split-word with --i delay). */
export function SplitText({ text, as: Tag = "span", className, start = 0, goldWords = [], italicWords = [] }: Props) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((w, idx) => {
        const clean = w.replace(/[.,;:!?]/g, "");
        const isGold = goldWords.includes(clean);
        const isItalic = italicWords.includes(clean);
        return (
          <React.Fragment key={idx}>
            <span
              className={[
                "split-word",
                isGold ? "text-gold shimmer-gold" : "",
                isItalic ? "italic" : "",
              ].filter(Boolean).join(" ")}
              style={{ ["--i" as any]: start + idx }}
            >
              {w}
            </span>
            {idx < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}
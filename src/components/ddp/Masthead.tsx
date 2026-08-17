type MastheadProps = {
  edition?: string;
  date?: string;
};

export function Masthead({ edition, date }: MastheadProps) {
  return (
    <div className="border-b border-border pb-3">
      <div className="flex items-baseline gap-4 font-mono text-2xs uppercase tracking-label">
        <span className="shrink-0">Diario del Poder</span>
        <span aria-hidden className="min-w-6 flex-1 translate-y-[-3px] border-b border-dotted border-border" />
        {date && <span className="shrink-0 text-muted-foreground">{date}</span>}
        {edition && <span className="shrink-0 text-signal tabular-nums">{edition}</span>}
      </div>
    </div>
  );
}

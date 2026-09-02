type MastheadProps = {
  edition?: string;
  date?: string;
};

export function Masthead({ edition, date }: MastheadProps) {
  const hasMeta = Boolean(edition || date);
  return (
    <div className="border-b border-border pb-3">
      <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-2xs uppercase tracking-label sm:gap-4">
        <span className="min-w-0 shrink truncate">Diario del Poder</span>
        {hasMeta && (
          <>
            <span aria-hidden className="hidden min-w-6 flex-1 translate-y-[-3px] border-b border-dotted border-border sm:block" />
            {date && <span className="min-w-0 shrink truncate text-muted-foreground">{date}</span>}
            {edition && <span className="shrink-0 text-signal tabular-nums">{edition}</span>}
          </>
        )}
      </div>
    </div>
  );
}

export function CredibilityStrip() {
  return (
    <section aria-label="En medios" className="border-t border-b border-border bg-card">
      <div className="container-ddp py-5 md:py-6">
        <div className="flex flex-wrap items-center gap-x-6 md:gap-x-10 gap-y-3 text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
          <span className="text-foreground/60">En medios</span>
          <span className="text-foreground font-medium tracking-[0.24em]">
            La Vanguardia
            <span className="ml-2 text-[9px] tracking-[0.2em] text-primary/80 normal-case">· media partner</span>
          </span>
          <span className="text-foreground/30">·</span>
          <span>Antena 3</span>
          <span className="text-foreground/30">·</span>
          <span>La Sexta</span>
          <span className="text-foreground/30">·</span>
          <span>El Mundo</span>
          <span className="text-foreground/30">·</span>
          <span>Forbes España</span>
          <span className="text-foreground/30">·</span>
          <span>El Español</span>
        </div>
      </div>
    </section>
  );
}
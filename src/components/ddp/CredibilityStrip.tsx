export function CredibilityStrip() {
  return (
    <section aria-label="En medios" className="filete filete-b bg-background">
      <div className="container-ddp py-4 md:py-5">
        <p className="text-[10px] md:text-[11px] tracking-[0.26em] uppercase text-foreground/85 leading-relaxed">
          <span className="text-foreground/55">Han hablado de nosotros:</span>{" "}
          <span className="font-medium">La Vanguardia</span>{" "}
          <span className="text-primary italic normal-case tracking-normal">— media partner</span>
          <span className="text-foreground/30 mx-2">·</span>Antena 3
          <span className="text-foreground/30 mx-2">·</span>La Sexta
          <span className="text-foreground/30 mx-2">·</span>El Mundo
          <span className="text-foreground/30 mx-2">·</span>Forbes España
          <span className="text-foreground/30 mx-2">·</span>El Español
        </p>
      </div>
    </section>
  );
}
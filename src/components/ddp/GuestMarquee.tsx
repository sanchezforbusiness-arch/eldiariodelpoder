import { guestList } from "@/data/podcast";

export function GuestMarquee() {
  const names = guestList.map((g) => g.name);
  const loop = [...names, ...names];
  return (
 <section aria-label="Invitados destacados" className="overflow-hidden border-b border-border py-16 md:py-24">
      <div className="mask-fade-x">
        <div className="marquee marquee-slow items-center">
          {loop.map((n, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap px-8">
              <span className="text-xl font-medium tracking-tight">{n}</span>
              <span className="h-1 w-1 shrink-0 bg-muted-foreground" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

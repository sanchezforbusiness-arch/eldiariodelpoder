import g1 from "@/assets/guest-1.jpg";
import g2 from "@/assets/guest-2.jpg";
import g3 from "@/assets/guest-3.jpg";
import g4 from "@/assets/guest-4.jpg";
import g5 from "@/assets/guest-5.jpg";
import g6 from "@/assets/guest-6.jpg";
import g7 from "@/assets/guest-7.jpg";
import g8 from "@/assets/guest-8.jpg";

const guests = [
  { name: "José María Aznar", role: "Expresidente del Gobierno de España", img: g1 },
  { name: "Guillermo Lasso", role: "Expresidente de Ecuador", img: g5 },
  { name: "Javier Tebas", role: "Presidente de La Liga", img: g3 },
  { name: "Andrés Rodríguez", role: "Presidente de Forbes", img: g4 },
  { name: "Iván Duque", role: "Expresidente de Colombia", img: g2 },
  { name: "Martín Sellés", role: "CEO Johnson & Johnson", img: g6 },
  { name: "Esperanza Aguirre", role: "Expresidenta C. de Madrid", img: g7 },
  { name: "Federica I. Fornaciari", role: "CEO & Founder · Estratega de marca", img: g8 },
];

const upcoming = [
  { name: "Elena Gil Lizasoain", role: "Consejera independiente · Top Voice Tecnología" },
  { name: "Carmen Fernández de Alarcón", role: "CEO · Liderazgo femenino" },
  { name: "Maite Aranzabal", role: "Top Voice Consejos · Retail" },
  { name: "Luis Huete", role: "Global Top Voice · Coaching ejecutivo" },
  { name: "Giuseppe Stigliano", role: "Global Top Voice · Liderazgo" },
  { name: "Iñigo Ugarte", role: "Politics, lobbying & entrepreneurship" },
  { name: "Alma Vázquez", role: "C-Level Communication · Havas" },
  { name: "Sergio de León", role: "CEO & Marketing voice" },
];

export function Guests() {
  return (
    <section id="guests" className="relative py-28 md:py-40 border-t border-border bg-card/30 overflow-hidden">
      <div className="gold-glow float-slower w-[600px] h-[600px] -top-40 -right-40 opacity-50" />
      <div className="container-ddp relative">
        <div className="mb-12 md:mb-16 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line w-8" />
            <span className="eyebrow">Invitados</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
            Han pasado por <span className="italic shimmer-gold">la mesa</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
          {guests.map((g) => (
            <article
              key={g.name}
              className="group relative bg-background aspect-[4/5] overflow-hidden cursor-pointer"
            >
              <img
                src={g.img}
                alt={g.name}
                width={512}
                height={640}
                loading="lazy"
                style={{ filter: "grayscale(1) contrast(1.05) brightness(0.92) sepia(0.18)" }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-lg md:text-xl leading-tight">{g.name}</h3>
                <p className="mt-1 text-[11px] md:text-xs tracking-wide text-gold/90 uppercase">{g.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-6 bg-gold/60" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold/90">Los que vendrán</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {upcoming.map((u) => (
              <div key={u.name} className="bg-background p-6 hover:bg-card transition-colors">
                <h4 className="font-serif text-lg leading-snug">{u.name}</h4>
                <p className="mt-2 text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{u.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

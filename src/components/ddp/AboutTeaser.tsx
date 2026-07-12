import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import founderAlejandro from "@/assets/founder-alejandro.webp";
import founderVictor from "@/assets/founder-victor.webp";
import { SplitText } from "./SplitText";

export function AboutTeaser() {
  return (
    <section id="about" className="relative py-20 md:py-36 overflow-hidden border-t border-border">
      <div className="container-ddp relative">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-7 reveal">
            <span className="eyebrow block mb-5 md:mb-6"><span className="dot-gold mr-2" />Quiénes somos</span>
            <SplitText
              as="h2"
              text="Dos hosts. Una conversación."
              goldWords={["conversación"]}
              italicWords={["conversación"]}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] md:leading-[1.02] font-light tracking-[-0.025em]"
            />
            <p className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Sin guion, sin prisas. Con quienes están dejando huella.
            </p>
            <Link
              to="/manifiesto"
              className="group inline-flex items-center gap-3 mt-8 md:mt-10 text-[12px] tracking-[0.24em] uppercase text-gold border-b border-gold/40 pb-2 hover:border-gold transition-colors"
            >
              Leer el manifiesto
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="md:col-span-5 reveal">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden hover-cinema mt-8">
                <img src={founderAlejandro} alt="Alejandro, cofundador de Diario del Poder" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 font-serif text-lg">Alejandro</p>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden hover-cinema">
                <img src={founderVictor} alt="Víctor, cofundador de Diario del Poder" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 font-serif text-lg">Víctor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
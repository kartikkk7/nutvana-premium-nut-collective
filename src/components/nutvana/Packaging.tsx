import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pouchImg from "@/assets/packaging-pouch.jpg";
import giftboxImg from "@/assets/packaging-giftbox.jpg";
import cartonImg from "@/assets/packaging-carton.jpg";
import { GoldButton, OutlineButton } from "./Buttons";
import { Reveal } from "./Reveal";
import { goToQuote } from "./enquiryBus";

const SLIDES = [
  {
    img: pouchImg,
    alt: "Deep green Nutvana stand-up pouch with gold trim, clear window showing white foxnut puffs",
    title: "Retail Pouches",
    text: "Nitrogen-flushed stand-up pouches in 250 g and 500 g, with your branding and compliant labelling.",
  },
  {
    img: giftboxImg,
    alt: "Nutvana premium gift box in deep green with gold ribbon, filled with compartments of nuts and foxnuts",
    title: "Gifting Packs",
    text: "Rigid gift boxes with compartment trays — festive, corporate and festive-season gifting made premium.",
  },
  {
    img: cartonImg,
    alt: "Stacked kraft bulk export cartons carrying printed Nutvana green and gold label panels",
    title: "Bulk Export Cartons",
    text: "Export-grade kraft cartons, palletised and documented, sized for your warehouse and freight plan.",
  },
];

/** Packaging & private label slider with before/after-style reveal. */
export function Packaging() {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-advance every 6s.
  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <section
      id="packaging"
      className="scroll-mt-24 border-y border-gold/25 bg-card py-20 sm:py-28"
      aria-label="Packaging and private label"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Packaging & Private Label</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-forest sm:text-5xl">
              Your brand, our quality
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Retail-ready pouches, gifting packs and bulk export cartons, fully customisable. Send us
              your artwork and we handle printing, food-grade packing and export documentation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <GoldButton
                onClick={() =>
                  goToQuote({
                    products: [],
                    message: "I would like to discuss private label packaging for my brand.",
                  })
                }
              >
                Discuss Private Label
              </GoldButton>
              <OutlineButton href="#quote">Get a Quote</OutlineButton>
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Custom artwork & printing",
                "Nitrogen-flushed freshness",
                "Compliant export labelling",
                "Low private-label MOQs",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-forest">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Slider */}
          <Reveal
            delay={150}
            className="relative"
          >
            <div
              className="overflow-hidden rounded-3xl shadow-luxe"
              onTouchStart={(e) => (startX.current = e.touches[0]?.clientX ?? null)}
              onTouchEnd={(e) => {
                if (startX.current === null) return;
                const dx = e.changedTouches[0]?.clientX ?? 0;
                if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
                startX.current = null;
              }}
            >
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {SLIDES.map((s) => (
                  <div key={s.title} className="w-full shrink-0">
                    <img
                      src={s.img}
                      alt={s.alt}
                      loading="lazy"
                      width={1280}
                      height={853}
                      className="aspect-[3/2] w-full object-cover"
                    />
                    <div className="bg-forest px-6 py-5 text-ivory">
                      <p className="font-display text-2xl font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm text-ivory/75">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => go(-1)}
              aria-label="Previous packaging option"
              className="absolute left-3 top-[38%] rounded-full bg-ivory/90 p-2.5 text-forest shadow-luxe transition-colors hover:bg-gold hover:text-forest-deep"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next packaging option"
              className="absolute right-3 top-[38%] rounded-full bg-ivory/90 p-2.5 text-forest shadow-luxe transition-colors hover:bg-gold hover:text-forest-deep"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="mt-4 flex justify-center gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${s.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 gold-grad" : "w-2 bg-forest/20 hover:bg-gold"
                  }`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

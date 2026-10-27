import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "./data";
import { Reveal } from "./Reveal";

/** Auto-rotating testimonial slider with dots and swipe support. */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="border-y border-gold/25 bg-card py-20 sm:py-24"
      aria-label="What business buyers say"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0]?.clientX ?? 0;
        if (Math.abs(dx) > 40) {
          setIndex((i) => (i + (dx < 0 ? 1 : -1) + TESTIMONIALS.length) % TESTIMONIALS.length);
        }
        touchX.current = null;
      }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Quote className="mx-auto h-8 w-8 text-gold" aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-semibold text-forest sm:text-4xl">
            Trusted by buyers worldwide
          </h2>
        </Reveal>

        <Reveal delay={120} className="relative mt-10">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="w-full shrink-0 px-2 text-center sm:px-8">
                  <blockquote className="font-display text-xl italic leading-relaxed text-forest sm:text-2xl">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="text-sm font-bold uppercase tracking-widest text-gold">
                      {t.name} · {t.company}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{t.country}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              aria-label="Previous testimonial"
              className="rounded-full border border-forest/20 p-2 text-forest transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 gold-grad" : "w-2 bg-forest/20 hover:bg-gold"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              aria-label="Next testimonial"
              className="rounded-full border border-forest/20 p-2 text-forest transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

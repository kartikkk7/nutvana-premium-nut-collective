import { useState } from "react";
import { Droplets, Hand, Sun, Flame, PackageCheck, Wheat, Scale, HeartPulse, Brain, Activity, Leaf } from "lucide-react";
import pondImg from "@/assets/pond-lotus.jpg";
import teaImg from "@/assets/lifestyle-tea.jpg";
import breakfastImg from "@/assets/lifestyle-breakfast.jpg";
import { SPOTLIGHT_STEPS, SPOTLIGHT_BENEFITS } from "./data";
import { Reveal } from "./Reveal";
import { useScrollY } from "./motion";

const STEP_ICONS = [Droplets, Hand, Sun, Flame, PackageCheck];
const BENEFIT_ICONS = [Wheat, Scale, HeartPulse, Brain, Activity, Leaf];

/** Foxnut storytelling: parallax pond image, scroll-revealed steps, interactive benefits tabs. */
export function Spotlight() {
  const scrollY = useScrollY();
  const [benefit, setBenefit] = useState(0);

  return (
    <section id="story" className="scroll-mt-24 bg-forest py-20 text-ivory sm:py-28" aria-label="Our story — from pond to pack">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Parallax pond image + steps */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light">Our Story</p>
              <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
                From the still ponds of Bihar to your shelves
              </h2>
              <p className="mt-4 max-w-lg text-ivory/75">
                Every foxnut carries a journey of five careful steps. Watch how a lotus seed becomes
                the lightest, crispest premium snack.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 overflow-hidden rounded-3xl shadow-luxe">
              <img
                src={pondImg}
                alt="Lotus flowers and foxnut plants growing in a calm pond in Bihar, India at sunrise"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[4/3] w-full object-cover"
                style={{ transform: `translateY(${Math.max(-40, Math.min(40, (scrollY - 1200) * 0.03))}px) scale(1.12)` }}
              />
            </Reveal>
          </div>

          {/* Steps */}
          <ol className="relative space-y-8 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-gold/30 sm:before:left-7">
            {SPOTLIGHT_STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i]!;
              return (
                <Reveal as="li" key={step.title} delay={i * 120} className="relative flex gap-5 pl-0">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full gold-grad text-forest-deep shadow-gold sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gold-light">
                      Step {i + 1}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-ivory">{step.title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-ivory/70">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        {/* Interactive benefits widget */}
        <Reveal className="mt-24">
          <div className="rounded-3xl border border-gold/25 bg-forest-deep/60 p-7 shadow-luxe sm:p-10">
            <h3 className="text-center font-display text-3xl font-semibold">
              Why foxnuts are <span className="gold-text italic">worth the switch</span>
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Foxnut benefits">
              {SPOTLIGHT_BENEFITS.map((b, i) => (
                <button
                  key={b.title}
                  role="tab"
                  aria-selected={benefit === i}
                  onClick={() => setBenefit(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    benefit === i
                      ? "gold-grad text-forest-deep shadow-gold"
                      : "border border-ivory/20 text-ivory/80 hover:border-gold hover:text-gold-light"
                  }`}
                >
                  {(() => {
                    const Icon = BENEFIT_ICONS[i];
                    return <Icon className="h-4 w-4" aria-hidden="true" />;
                  })()}
                  {b.title}
                </button>
              ))}
            </div>
            <div
              className="mx-auto mt-8 max-w-xl rounded-2xl bg-leaf/15 px-6 py-5 text-center text-ivory/90"
              role="tabpanel"
            >
              <p className="font-display text-xl font-semibold text-gold-light">{SPOTLIGHT_BENEFITS[benefit].title}</p>
              <p className="mt-2 text-sm">{SPOTLIGHT_BENEFITS[benefit].text}</p>
            </div>
          </div>
        </Reveal>

        {/* Lifestyle imagery */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal className="group overflow-hidden rounded-3xl shadow-luxe">
            <img
              src={teaImg}
              alt="A bowl of roasted makhana beside a steaming cup of masala tea on a dark green marble table"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
          <Reveal delay={120} className="group overflow-hidden rounded-3xl shadow-luxe">
            <img
              src={breakfastImg}
              alt="Healthy breakfast bowl of yogurt with foxnuts, almonds, cashews, walnuts, pistachios, hazelnuts and berries"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

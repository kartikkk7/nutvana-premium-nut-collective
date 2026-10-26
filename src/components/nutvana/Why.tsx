import { Sprout, ShieldCheck, PackageCheck, BadgeCheck, Tags, Truck, ArrowRight } from "lucide-react";
import { WHY_CARDS } from "./data";
import { Reveal } from "./Reveal";
import { goToQuote } from "./enquiryBus";

const ICONS = [Sprout, ShieldCheck, PackageCheck, BadgeCheck, Tags, Truck];

/** "Why Nutvana" — deep green section with six icon cards. */
export function Why() {
  return (
    <section id="why" className="scroll-mt-24 bg-ivory py-20 sm:py-28" aria-label="Why choose Nutvana">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">The Nutvana Standard</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-forest sm:text-5xl">
            Why buyers choose Nutvana
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built for importers, distributors, retailers and brands who cannot compromise on quality
            or reliability.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={card.title} delay={(i % 3) * 100}>
                <div className="group h-full rounded-3xl border border-gold/20 bg-card p-8 shadow-luxe transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-gold">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl forest-grad text-gold-light shadow-luxe transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-forest">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <button
            onClick={() => goToQuote({ message: "I would like to know more about Nutvana's quality process." })}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-forest transition-colors hover:text-gold"
          >
            Talk to our export team <ArrowRight className="h-4 w-4" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

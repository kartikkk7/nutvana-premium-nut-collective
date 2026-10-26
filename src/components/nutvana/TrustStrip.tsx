import { BadgeCheck, Award, ShieldCheck, Landmark } from "lucide-react";
import { Reveal } from "./Reveal";
import { useInView, useCountUp } from "./motion";

const CERTS = [
  { icon: ShieldCheck, label: "FSSAI certified" },
  { icon: Landmark, label: "APEDA registered" },
  { icon: BadgeCheck, label: "ISO 22000 facility" },
  { icon: Award, label: "Export-grade quality" },
];

/** Animated stats strip with count-up numbers and certification badges. */
export function TrustStrip() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const products = useCountUp(6, inView);
  const continents = useCountUp(4, inView, 1500);

  return (
    <section id="stats" className="scroll-mt-24 border-y border-gold/25 bg-card" aria-label="Nutvana at a glance">
      <div ref={ref} className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
        <Reveal className="text-center">
          <p className="font-display text-5xl font-semibold text-forest">
            {products}
            <span className="text-gold"> </span>
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Premium products
          </p>
        </Reveal>
        <Reveal delay={100} className="text-center">
          <p className="font-display text-5xl font-semibold text-forest">
            {continents}
            <span className="text-gold">+</span>
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Continents served
          </p>
        </Reveal>
        <Reveal delay={200} className="col-span-2 md:col-span-2">
          <ul className="flex h-full flex-wrap items-center justify-center gap-3 md:justify-start">
            {CERTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-forest"
              >
                <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

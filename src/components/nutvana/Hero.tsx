import { useState } from "react";
import { ArrowRight, Hand, Globe, PackageCheck, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { GoldButton, OutlineButton } from "./Buttons";
import { goToQuote } from "./enquiryBus";
import { useScrollY, prefersReducedMotion } from "./motion";
import { LOGO_URL } from "./Nav";

const TRUST_ITEMS = [
  { icon: Hand, label: "Direct from farms" },
  { icon: ShieldCheck, label: "Hand-graded" },
  { icon: PackageCheck, label: "Export-grade packaging" },
  { icon: Globe, label: "Shipping worldwide" },
];

/** Full-viewport cinematic hero with parallax background and mouse-reactive floating elements. */
export function Hero() {
  const scrollY = useScrollY();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const reduced = prefersReducedMotion();

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  // Floating decorative depths
  const float1 = { transform: `translate(${mouse.x * 26}px, ${mouse.y * 18}px)` };
  const float2 = { transform: `translate(${mouse.x * -18}px, ${mouse.y * -12}px)` };

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center overflow-hidden forest-grad"
      aria-label="Nutvana — premium dry fruits and foxnuts"
    >
      {/* Parallax background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-[115%] w-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.18}px) scale(${1.0 + mouse.x * 0.015})` }}
        />
        {/* Legibility gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/60 to-forest-deep/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-deep/90 to-transparent" />
      </div>

      {/* Floating gold orbs reacting to the mouse */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[16%] h-64 w-64 rounded-full bg-gold/20 blur-3xl animate-float-slow"
        style={float1}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[12%] right-[30%] h-40 w-40 rounded-full bg-leaf/30 blur-3xl animate-float-slow"
        style={{ ...float2, animationDelay: "1.4s" }}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[28%] h-16 w-16 text-gold-light/70 drop-shadow-lg animate-leaf-sway"
        style={float1}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5c1.5-2 3.5-3 6-3.5C14.5 9 17 8 17 8z" />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-40 pt-36 sm:px-6 lg:pb-44">
        <div className="max-w-2xl">
          <img
            src={LOGO_URL}
            alt="Nutvana logo — green and gold leaf emblem surrounded by almonds, cashews, walnuts, pistachios, hazelnuts and foxnuts"
            className="mb-8 h-24 w-auto drop-shadow-xl sm:h-28"
            width={420}
            height={100}
            style={float2}
          />
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gold-light">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            A brand of Anant Overseas · Exporting from India
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            Pure Crunch.
            <span className="gold-text block italic">Premium Life.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
            Handpicked almonds, cashews, walnuts, pistachios, hazelnuts and light, crisp foxnuts.
            Premium quality, hygienically packed and delivered worldwide.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <GoldButton onClick={() => goToQuote({ message: "I would like to request a free sample." })}>
              Request a Free Sample <ArrowRight className="h-4 w-4" />
            </GoldButton>
            <OutlineButton tone="light" href="#products">
              Explore Products
            </OutlineButton>
          </div>

          {/* Trust row */}
          <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-semibold text-ivory/80">
                <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#stats"
        aria-label="Scroll down to learn more"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float-slow text-ivory/70 hover:text-gold"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
          <path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}

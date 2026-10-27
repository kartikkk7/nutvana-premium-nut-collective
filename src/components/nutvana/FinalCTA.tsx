import { ArrowRight, MessageCircle } from "lucide-react";
import teaImg from "@/assets/lifestyle-tea.jpg";
import { GoldButton, OutlineButton } from "./Buttons";
import { Reveal } from "./Reveal";
import { goToQuote } from "./enquiryBus";

/** Final full-width CTA banner on a dark image background. */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" aria-label="Get started with Nutvana">
      {/* Dark image background */}
      <img
        src={teaImg}
        alt=""
        loading="lazy"
        aria-hidden="true"
        width={1024}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-forest-deep/90" aria-hidden="true" />

      <Reveal className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light">Start Today</p>
        <h2 className="mt-4 font-display text-4xl font-semibold text-ivory sm:text-6xl">
          Ready to taste the <span className="gold-text italic">Nutvana difference?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-ivory/80">
          Request a free sample or ask for a quote — we reply within one business day.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <GoldButton onClick={() => goToQuote({ message: "I would like to request a free sample." })}>
            Request a Free Sample <ArrowRight className="h-4 w-4" />
          </GoldButton>
          <OutlineButton tone="light" href="https://wa.me/917999950100" ariaLabel="Chat with Nutvana on WhatsApp">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </OutlineButton>
        </div>
      </Reveal>
    </section>
  );
}

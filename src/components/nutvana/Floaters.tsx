import { MessageCircle, ArrowRight } from "lucide-react";
import { goToQuote } from "./enquiryBus";

/** Floating sticky WhatsApp button + mobile "Get a Quote" bar. */
export function Floaters() {
  return (
    <>
      {/* WhatsApp bubble (hidden behind the mobile quote bar on small screens) */}
      <a
        href="https://wa.me/917999950100?text=Hi%20Nutvana%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nutvana on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-ivory shadow-luxe transition-transform duration-300 hover:scale-110 md:flex"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>

      {/* Mobile sticky quote bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-forest-deep/95 p-3 backdrop-blur-md md:hidden">
        <button
          onClick={() => goToQuote({ message: "I would like a quote." })}
          className="flex w-full items-center justify-center gap-2 rounded-full gold-grad px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-forest-deep"
        >
          Get a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}

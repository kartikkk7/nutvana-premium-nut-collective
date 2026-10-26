import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/nutvana-logo.png.asset.json";
import { goToQuote } from "./enquiryBus";

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "Why Nutvana", href: "#why" },
  { label: "Our Story", href: "#story" },
  { label: "FAQ", href: "#faq" },
];

export const LOGO_URL = logoAsset.url;

/** Sticky nav: transparent over the hero, solid ivory after scroll. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/30 bg-ivory/95 shadow-luxe backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a
            href="#top"
            aria-label="Nutvana — back to top"
            className={`flex shrink-0 items-center rounded-full px-2 py-1 transition-colors ${
              scrolled ? "" : "bg-ivory/10 backdrop-blur-sm"
            }`}
          >
            <img
              src={LOGO_URL}
              alt="Nutvana logo — a green and gold leaf emblem surrounded by nuts"
              className="h-11 w-auto sm:h-14"
              width={222}
              height={56}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-gold ${
                  scrolled ? "text-forest" : "text-ivory"
                }`}
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => goToQuote()}
              className={`rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 gold-grad text-forest-deep shadow-gold ${
                scrolled ? "" : ""
              }`}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={`inline-flex rounded-full p-2.5 lg:hidden ${
              scrolled ? "text-forest" : "text-ivory"
            }`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-forest-deep/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-4/5 max-w-xs flex-col bg-forest px-6 pb-8 pt-5 shadow-luxe transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <img src={LOGO_URL} alt="Nutvana logo" className="h-11 w-auto" width={160} height={44} />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-full p-2 text-ivory">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-display text-2xl text-ivory transition-colors hover:bg-leaf/20 hover:text-gold-light"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <button
              onClick={() => {
                setOpen(false);
                goToQuote();
              }}
              className="inline-flex items-center justify-center rounded-full gold-grad px-6 py-3 text-sm font-bold uppercase tracking-widest text-forest-deep"
            >
              Get a Quote
            </button>
            <a
              href="https://wa.me/917999950100"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold text-gold-light"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

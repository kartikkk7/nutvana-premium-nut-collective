import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PRODUCTS } from "./data";
import { LOGO_URL } from "./Nav";

const QUICK_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Why Nutvana", href: "#why" },
  { label: "Our Story", href: "#story" },
  { label: "Packaging", href: "#packaging" },
  { label: "FAQ", href: "#faq" },
  { label: "Get a Quote", href: "#quote" },
];

/** Footer with brand, links, products and contact details. */
export function Footer() {
  return (
    <footer className="forest-grad pb-28 pt-16 text-ivory md:pb-16" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src={LOGO_URL}
              alt="Nutvana logo"
              loading="lazy"
              className="h-20 w-auto"
              width={300}
              height={80}
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
              Pure Crunch. Premium Life. Handpicked dry fruits and foxnuts, sourced at origin in India
              and delivered to shelves worldwide. A brand of Anant Overseas.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Facebook, label: "Nutvana on Facebook", href: "https://anantoverseas.com" },
                { icon: Instagram, label: "Nutvana on Instagram", href: "https://anantoverseas.com" },
                { icon: Linkedin, label: "Nutvana on LinkedIn", href: "https://anantoverseas.com" },
                { icon: Mail, label: "Email Nutvana", href: "mailto:info@anantoverseas.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-full border border-ivory/20 p-2.5 text-ivory/80 transition-colors hover:border-gold hover:text-gold-light"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-light">Quick Links</h3>
            <ul className="mt-5 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ivory/75 transition-colors hover:text-gold-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Footer products">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-light">Products</h3>
            <ul className="mt-5 space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a href="#products" className="text-sm text-ivory/75 transition-colors hover:text-gold-light">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-light">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-ivory/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  Anant Overseas, 135-136 Vaishali Parisar, Polipather, Narmada Road, Gwarighat,
                  Jabalpur, Madhya Pradesh (India) 482 008
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href="https://wa.me/917999950100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  Phone / WhatsApp: +91 7999950100
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href="mailto:info@anantoverseas.com" className="transition-colors hover:text-gold-light">
                  info@anantoverseas.com
                </a>
              </li>
            </ul>
            <a
              href="https://anantoverseas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-gold-light transition-colors hover:bg-gold/15"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" /> AnantOverseas.com
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/15 pt-6 text-center text-xs text-ivory/50">
          © {new Date().getFullYear()} Nutvana · A brand of Anant Overseas · All rights reserved
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Check, MessageCircle, Mail } from "lucide-react";
import { PRODUCT_NAMES } from "./data";
import { Reveal } from "./Reveal";
import { onPrefill } from "./enquiryBus";

const QUANTITIES = ["Not sure yet", "100 kg", "250 kg", "500 kg", "1 MT", "5 MT+", "Full container"];

const WHATSAPP_NUMBER = "917999950100";
const EMAIL = "info@anantoverseas.com";

type Errors = Partial<Record<"name" | "email" | "phone", string>>;

/** Enquiry form with validation; submissions open a pre-filled WhatsApp message (or email). */
export function EnquiryForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [quantity, setQuantity] = useState(QUANTITIES[0]);
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  // Other sections can pre-select products and drop in a message.
  useEffect(
    () =>
      onPrefill((p) => {
        if (p.products) setProducts(p.products);
        if (p.message) setMessage(p.message);
        setSent(false);
      }),
    [],
  );

  const toggleProduct = (p: string) =>
    setProducts((list) => (list.includes(p) ? list.filter((x) => x !== p) : [...list, p]));

  const buildText = () =>
    [
      "Hi Nutvana, I'd like to enquire:",
      `Name: ${name}`,
      company && `Company: ${company}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      country && `Country: ${country}`,
      products.length > 0 && `Products: ${products.join(", ")}`,
      `Quantity: ${quantity}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const validate = (): boolean => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) e.email = "Please enter a valid email address.";
    if (phone.trim() && !/^[+\d][\d\s-]{6,17}$/.test(phone.trim()))
      e.phone = "Please enter a valid phone number.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const text = encodeURIComponent(buildText());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-forest/15 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-gold focus:outline-none";
  const labelCls = "mb-1.5 block text-xs font-bold uppercase tracking-widest text-forest";

  return (
    <section id="quote" className="scroll-mt-24 bg-forest py-20 text-ivory sm:py-28" aria-label="Request a quote">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light">Get in Touch</p>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
              Request a quote or a free sample
            </h2>
            <p className="mt-5 max-w-md text-ivory/75">
              Tell us what you need and our export team replies within one business day — with grades,
              pricing, packing options and shipping timelines.
            </p>
            <ul className="mt-10 space-y-4 text-sm text-ivory/85">
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  Prefer to chat? Message us directly on{" "}
                  <a
                    className="font-semibold text-gold-light underline-offset-4 hover:underline"
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 7999950100
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  Or write to{" "}
                  <a className="font-semibold text-gold-light underline-offset-4 hover:underline" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={150}>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-forest-deep/70 p-10 text-center shadow-luxe" role="status">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full gold-grad text-forest-deep shadow-gold">
                  <Check className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-3xl font-semibold">Almost there!</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm text-ivory/80">
                  WhatsApp should have opened with your enquiry pre-filled — just press send. If it
                  didn't, use the links below.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildText())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full gold-grad px-6 py-3 text-sm font-bold uppercase tracking-widest text-forest-deep"
                  >
                    <MessageCircle className="h-4 w-4" /> Open WhatsApp again
                  </a>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent("Nutvana Enquiry")}&body=${encodeURIComponent(buildText())}`}
                    className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm font-bold uppercase tracking-widest text-gold-light"
                  >
                    <Mail className="h-4 w-4" /> Send by email instead
                  </a>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sm font-semibold text-ivory/70 underline-offset-4 hover:text-gold-light hover:underline"
                  >
                    Edit my enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="rounded-3xl bg-ivory p-7 text-charcoal shadow-luxe sm:p-9">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nv-name" className={labelCls}>Name *</label>
                    <input
                      id="nv-name"
                      className={inputCls}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="mt-1 text-xs font-semibold text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="nv-company" className={labelCls}>Company</label>
                    <input
                      id="nv-company"
                      className={inputCls}
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="nv-email" className={labelCls}>Email *</label>
                    <input
                      id="nv-email"
                      type="email"
                      className={inputCls}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="mt-1 text-xs font-semibold text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="nv-phone" className={labelCls}>Phone</label>
                    <input
                      id="nv-phone"
                      type="tel"
                      className={inputCls}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 …"
                      autoComplete="tel"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && <p className="mt-1 text-xs font-semibold text-destructive">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="nv-country" className={labelCls}>Country</label>
                    <input
                      id="nv-country"
                      className={inputCls}
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Where should we ship?"
                      autoComplete="country-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="nv-qty" className={labelCls}>Quantity needed</label>
                    <select id="nv-qty" className={inputCls} value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                      {QUANTITIES.map((q) => (
                        <option key={q} value={q}>{q}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <fieldset className="mt-5">
                  <legend className={labelCls}>Products of interest</legend>
                  <div className="flex flex-wrap gap-2">
                    {PRODUCT_NAMES.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => toggleProduct(p)}
                        aria-pressed={products.includes(p)}
                        className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                          products.includes(p)
                            ? "gold-grad border-transparent text-forest-deep shadow-gold"
                            : "border-forest/20 text-forest hover:border-gold hover:text-gold"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-5">
                  <label htmlFor="nv-msg" className={labelCls}>Message</label>
                  <textarea
                    id="nv-msg"
                    rows={4}
                    maxLength={1000}
                    className={`${inputCls} resize-none`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about grades, pack sizes, private label needs…"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full gold-grad px-7 py-4 text-sm font-bold uppercase tracking-widest text-forest-deep shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  <MessageCircle className="h-4 w-4" /> Send Enquiry via WhatsApp
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Submitting opens WhatsApp with your details pre-filled to +91 7999950100. You can
                  also email {EMAIL}.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

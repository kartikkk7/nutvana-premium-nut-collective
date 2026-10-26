import { useEffect, useState } from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { PRODUCTS, type Product } from "./data";
import { GoldButton } from "./Buttons";
import { goToQuote } from "./enquiryBus";
import { Reveal } from "./Reveal";

type Filter = "all" | "foxnuts" | "dryfruits";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "foxnuts", label: "Foxnuts" },
  { id: "dryfruits", label: "Dry Fruits" },
];

/** Product showcase: filter tabs, image cards with hover zoom + gold glow, quick-view modal. */
export function Products() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Product | null>(null);

  const visible = PRODUCTS.filter((p) => filter === "all" || p.category === filter);

  // Close the modal on Escape.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="products" className="scroll-mt-24 bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Our Range</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-forest sm:text-5xl">
            The Nutvana Collection
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six premium lines, one uncompromising standard. Every grade is hand-checked before it
            leaves our facility.
          </p>
        </Reveal>

        {/* Filter tabs */}
        <div className="mt-10 flex justify-center gap-2" role="tablist" aria-label="Filter products">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                filter === f.id
                  ? "gold-grad text-forest-deep shadow-gold"
                  : "border border-forest/20 text-forest hover:border-gold hover:text-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 3) * 100}
              className={p.featured && filter === "all" ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gold/20 bg-card shadow-luxe transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-gold">
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.imgAlt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      p.featured && filter === "all" ? "aspect-[2/1]" : "aspect-square"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {p.featured && (
                    <span className="absolute left-4 top-4 rounded-full gold-grad px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-forest-deep">
                      Signature
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold text-forest">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-leaf/30 bg-leaf/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-leaf"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <button
                      onClick={() => setActive(p)}
                      className="text-sm font-bold uppercase tracking-widest text-gold underline-offset-4 transition-colors hover:text-forest hover:underline"
                      aria-label={`Quick view: ${p.name}`}
                    >
                      Quick View
                    </button>
                    <button
                      onClick={() => goToQuote({ products: [p.name], message: `I would like a quote for ${p.name}.` })}
                      className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-forest transition-colors hover:text-gold"
                      aria-label={`Request a quote for ${p.name}`}
                    >
                      Quote <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Quick view modal */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} details`}
        >
          <div
            className="absolute inset-0 bg-forest-deep/80 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />
          <div className="relative z-10 grid max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-card shadow-luxe md:grid-cols-2">
            <img
              src={active.img}
              alt={active.imgAlt}
              className="h-64 w-full object-cover md:h-full"
              width={1024}
              height={1024}
            />
            <div className="p-7 sm:p-9">
              <button
                onClick={() => setActive(null)}
                aria-label="Close quick view"
                className="absolute right-4 top-4 rounded-full bg-forest/10 p-2 text-forest transition-colors hover:bg-gold/20 hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="pr-10 font-display text-3xl font-semibold text-forest">{active.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.description}</p>

              <ul className="mt-5 space-y-2">
                {active.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-forest">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              {active.grades && (
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold">Available grades</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {active.grades.map((g) => (
                      <span
                        key={g}
                        className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-forest"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">Pack sizes</p>
                <p className="mt-2 text-sm text-forest">{active.packs.join(" · ")}</p>
              </div>

              <GoldButton
                className="mt-7 w-full"
                onClick={() => {
                  const product = active;
                  setActive(null);
                  goToQuote({ products: [product.name], message: `I would like a quote for ${product.name}.` });
                }}
              >
                Request Quote for this Product
              </GoldButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

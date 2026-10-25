// Simple pub/sub so any section can pre-fill the enquiry form and jump to it.
export type FormPrefill = {
  products?: string[];
  message?: string;
};

type Listener = (prefill: FormPrefill) => void;

let listener: Listener | null = null;

export function onPrefill(fn: Listener) {
  listener = fn;
  return () => {
    if (listener === fn) listener = null;
  };
}

/** Pre-fill the enquiry form (optionally selecting products) and scroll to it. */
export function goToQuote(prefill: FormPrefill = {}) {
  listener?.(prefill);
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
}

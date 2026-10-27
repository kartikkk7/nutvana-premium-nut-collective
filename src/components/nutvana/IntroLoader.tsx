import { useEffect, useState } from "react";
import { LOGO_URL } from "./Nav";
import { prefersReducedMotion } from "./motion";

/** Brief loading intro: the Nutvana logo fades in with a swaying leaf, then lifts away. */
export function IntroLoader() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "gone">(() =>
    prefersReducedMotion() ? "gone" : "visible",
  );

  useEffect(() => {
    if (phase === "gone") return;
    const t = setTimeout(
      () => setPhase(phase === "visible" ? "leaving" : "gone"),
      phase === "visible" ? 1400 : 700,
    );
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center forest-grad transition-opacity duration-700 ${
        phase === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="animate-logo-in flex flex-col items-center">
        <img
          src={LOGO_URL}
          alt=""
          className="h-28 w-auto drop-shadow-2xl sm:h-36"
          width={420}
          height={120}
        />
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="animate-leaf-sway mt-4 h-6 w-6 text-gold-light"
          aria-hidden="true"
        >
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5c1.5-2 3.5-3 6-3.5C14.5 9 17 8 17 8z" />
        </svg>
      </div>
    </div>
  );
}

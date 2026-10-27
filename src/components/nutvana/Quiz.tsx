import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, RotateCcw } from "lucide-react";
import { PRODUCTS } from "./data";
import { GoldButton } from "./Buttons";
import { Reveal } from "./Reveal";
import { goToQuote } from "./enquiryBus";

const ROLES = ["Retailer", "Distributor", "Importer", "Brand owner"];
const INTERESTS = ["Foxnuts", "Dry fruits", "Both"];
const NEEDS = ["Retail packs", "Bulk export", "Private label"];

const INTEREST_PRODUCTS: Record<string, string[]> = {
  Foxnuts: PRODUCTS.filter((p) => p.category === "foxnuts").map((p) => p.name),
  "Dry fruits": PRODUCTS.filter((p) => p.category === "dryfruits").map((p) => p.name),
  Both: PRODUCTS.map((p) => p.name),
};

/** Three-question quiz that tailors a recommendation and pre-fills the enquiry form. */
export function Quiz() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState<string | null>(null);
  const [interest, setInterest] = useState<string | null>(null);
  const [need, setNeed] = useState<string | null>(null);

  const done = step >= 3;
  const progress = Math.min(step, 3);

  const restart = () => {
    setStep(0);
    setRole(null);
    setInterest(null);
    setNeed(null);
  };

  const recommendation = done
    ? `As a ${role?.toLowerCase()}, our ${interest === "Both" ? "foxnut and dry fruit" : interest?.toLowerCase()} range is the perfect starting point for ${need?.toLowerCase()}. Most partners begin with a free sample, confirm the grade, then scale up at their own pace.`
    : "";

  const question = [
    { title: "I am a…", options: ROLES, value: role, set: setRole },
    { title: "I'm interested in…", options: INTERESTS, value: interest, set: setInterest },
    { title: "I need…", options: NEEDS, value: need, set: setNeed },
  ][progress]!;

  return (
    <section id="quiz" className="scroll-mt-24 bg-ivory pb-20 sm:pb-28" aria-label="Find your Nutvana">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-gold/25 bg-card p-8 shadow-luxe sm:p-12">
            <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Find Your Nutvana
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
              Three quick questions
            </h2>

            {/* Progress */}
            <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i < progress ? "w-10 gold-grad" : i === progress ? "w-14 gold-grad" : "w-10 bg-forest/15"
                  }`}
                />
              ))}
            </div>

            {!done ? (
              <div className="mt-10">
                <p className="text-center text-lg font-semibold text-forest">{question.title}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {question.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        question.set(opt);
                        setStep((s) => s + 1);
                      }}
                      className={`rounded-2xl border px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${
                        question.value === opt
                          ? "gold-grad text-forest-deep shadow-gold"
                          : "border-forest/20 text-forest hover:border-gold hover:text-gold"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-gold"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                )}
              </div>
            ) : (
              <div className="mt-10 text-center">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full gold-grad text-forest-deep shadow-gold">
                  <Sparkles className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mx-auto mt-6 max-w-xl leading-relaxed text-forest">{recommendation}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <GoldButton
                    onClick={() =>
                      goToQuote({
                        products: INTEREST_PRODUCTS[interest ?? "Both"] ?? [],
                        message: `Hi Nutvana, I'm a ${role} interested in ${interest}. I need ${need}. Please share a quote and free sample details.`,
                      })
                    }
                  >
                    Get my tailored quote <ArrowRight className="h-4 w-4" />
                  </GoldButton>
                  <button
                    onClick={restart}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-gold"
                  >
                    <RotateCcw className="h-4 w-4" /> Start again
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "./data";
import { Reveal } from "./Reveal";
import { goToQuote } from "./enquiryBus";
import { GoldButton } from "./Buttons";

/** FAQ accordion. */
export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-ivory py-20 sm:py-28" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Good to Know</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-forest sm:text-5xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <Accordion type="single" collapsible className="rounded-3xl border border-gold/25 bg-card px-6 shadow-luxe sm:px-8">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className={i === FAQS.length - 1 ? "border-b-0" : "border-gold/15"}>
                <AccordionTrigger className="py-5 font-display text-lg font-semibold text-forest hover:text-gold hover:no-underline sm:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={200} className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">Still have a question?</p>
          <GoldButton className="mt-4" onClick={() => goToQuote({ message: "I have a question about Nutvana." })}>
            Ask us on the enquiry form
          </GoldButton>
        </Reveal>
      </div>
    </section>
  );
}

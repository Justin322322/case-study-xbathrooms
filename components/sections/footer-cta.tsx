"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/ui/reveal";

const features = [
  "Single source of truth for every lead",
  "No lead is forgotten",
  "Every follow-up is automated",
  "Every dollar in the pipeline is visible",
  "Structured, repeatable process for turning inquiries into clients",
];

export function FooterCTASection() {
  return (
    <section 
      className="mx-auto w-full max-w-full px-4 pb-16 pt-12 sm:px-8 sm:pb-24 lg:px-12 bg-gradient-to-b from-background via-muted/50 to-primary/5"
    >
      <div className="flex flex-col items-center gap-8 sm:gap-12 text-center max-w-4xl mx-auto">
        {/* Quote */}
        <Reveal>
          <blockquote className="text-balance text-xl font-medium leading-relaxed text-foreground sm:text-2xl sm:leading-relaxed lg:text-3xl">
            &quot;XBathrooms now has a single source of truth for every lead in their
            business. The system doesn&apos;t just track what happened —{" "}
            <span className="text-primary">
              it actively drives what happens next.
            </span>
            &quot;
          </blockquote>
        </Reveal>

        {/* Features Pills */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/50"
              >
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600"
                  strokeWidth={2.5}
                />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Divider */}
        <Reveal delay={0.3} className="w-full flex justify-center">
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.4} threshold={0.1}>
          <div className="flex flex-col items-center gap-6">
            <p className="text-lg font-medium text-muted-foreground">
              Ready to transform your business?
            </p>
            <div className="group h-12 rounded-xl bg-gradient-to-b from-primary to-[#EA580C] shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 hover:border-transparent hover:ring-0 border-0 cursor-pointer inline-flex">
              <a 
                href="https://www.carislemedia.com/#apply-now" 
                className="flex items-center justify-center w-full h-full px-8 text-base font-semibold text-primary-foreground no-underline"
              >
                Apply Now for a Free Growth Audit
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

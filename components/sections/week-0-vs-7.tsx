"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CancelCircleIcon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/ui/reveal";

const comparisonRows = [
  {
    before: "No CRM — no centralized system for leads",
    after: "Full 6-stage pipeline in GHL with real-time visibility",
  },
  {
    before: "Follow-ups tracked in disconnected Google Sheets",
    after: "Automated 20-day follow-up sequence with 4 touchpoints",
  },
  {
    before: "No inquiry confirmation sent to leads",
    after: "Instant email + SMS confirmation on every form submission",
  },
  {
    before: "Leads arriving by email with no logging",
    after: "Every lead auto-created as contact + opportunity with stage assignment",
  },
  {
    before: "$23,789 spent on Meta with fragmented $10/day budgets",
    after: "Phased campaigns with proper budget, creative testing, and scaling",
  },
  {
    before: "0.59% conversion rate on Google Ads with wasted spend",
    after: "Active Search campaign at 4.04% interaction rate",
  },
  {
    before: "No review collection system",
    after: "Automated review request workflow tied to project completion",
  },
  {
    before: "Zero revenue visibility in the pipeline",
    after: "Opportunity values at every stage — every dollar accounted for",
  },
];

export function Week0VsWeek7Section() {
  return (
    <section
      id="week-0-vs-7"
      className="mx-auto w-full max-w-6xl scroll-mt-[100px] px-6 pb-24 sm:px-8 lg:px-12"
    >
      <div className="flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-semibold tracking-[0.04em] text-primary sm:text-6xl">
              05
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Week 0 vs. Week 7
            </p>
            <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
              The Complete Transformation
            </h2>
          </div>
        </Reveal>

        <Reveal cascade className="flex flex-col gap-3">
          {comparisonRows.map((item) => (
            <div
              key={item.before}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-5 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6 sm:px-6 sm:py-3"
            >
              <div className="flex items-start gap-3 text-sm text-foreground sm:items-center sm:text-base">
                <HugeiconsIcon
                  icon={CancelCircleIcon}
                  className="mt-0.5 h-4 w-4 shrink-0 text-destructive sm:mt-0"
                />
                <span className="font-medium">{item.before}</span>
              </div>
              <span className="flex justify-center text-muted-foreground/40 sm:text-primary">
                <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4 rotate-90 sm:rotate-0" />
              </span>
              <div className="flex items-start gap-3 text-sm text-foreground sm:items-center sm:text-base">
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 sm:mt-0"
                />
                <span className="font-medium">{item.after}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

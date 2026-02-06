"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  FlowIcon,
  RepeatIcon,
  Megaphone01Icon,
  ChartLineData01Icon,
  File01Icon,
  InboxIcon,
} from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/ui/reveal";

export function DeliveredSection() {
  return (
    <section
      id="what-we-delivered"
      className="mx-auto w-full max-w-6xl scroll-mt-[100px] px-6 pb-24 pt-12 sm:px-8 lg:px-12"
    >
      <div className="flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-semibold tracking-[0.04em] text-primary sm:text-6xl">
              06
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              What We Delivered
            </p>
            <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
              Complete Infrastructure in 7 Weeks
            </h2>
            <p className="max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
              In 7 weeks, XBathrooms went from a $4M-revenue business with no infrastructure to a fully operational sales and marketing system.
            </p>
          </div>
        </Reveal>
        
        <div className="grid gap-6">
          <Reveal>
            <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-background via-muted/50 to-primary/5 p-6 shadow-sm">
              <div className="shrink-0">
                <HugeiconsIcon icon={FlowIcon} strokeWidth={2} className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Sales Pipeline</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  6-stage pipeline (New Lead → Contacted → Site Visit → Proposal Sent → Won → Lost) with trigger fields, documentation fields, and opportunity values at every stage.
                </p>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-background via-muted/50 to-primary/5 p-6 shadow-sm">
              <div className="shrink-0">
                <HugeiconsIcon icon={RepeatIcon} strokeWidth={2} className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Automation Workflows</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  9 workflows: 5 inquiry confirmations, missed call trigger, site visit confirmation, proposal sent notification, follow-up sequence, review request, Won/Lost handlers, FAQ auto-reply.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-background via-muted/50 to-primary/5 p-6 shadow-sm">
              <div className="shrink-0">
                <HugeiconsIcon icon={File01Icon} strokeWidth={2} className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Integrations</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  Google Analytics, Google Business Profile, Facebook, Instagram — all connected to GHL.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-background via-muted/50 to-primary/5 p-6 shadow-sm">
              <div className="shrink-0">
                <HugeiconsIcon icon={ChartLineData01Icon} strokeWidth={2} className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Full Ad Audit</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  Complete audit of previous agency&apos;s Meta ($23,789 / 90 days) and Google (A$397.57 / 3 conversions) campaigns with actionable findings.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-background via-muted/50 to-primary/5 p-6 shadow-sm">
              <div className="shrink-0">
                <HugeiconsIcon icon={Megaphone01Icon} strokeWidth={2} className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Meta Ad Campaigns</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  16 campaigns across static, carousel, and video formats with proper budget allocation, creative testing, and systematic scaling.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-background via-muted/50 to-primary/5 p-6 shadow-sm">
              <div className="shrink-0">
                <HugeiconsIcon icon={ChartLineData01Icon} strokeWidth={2} className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Google Ad Campaigns</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  New Performance Max and Search campaigns set up with proper conversion tracking and audience signals.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-background via-muted/50 to-primary/5 p-6 shadow-sm">
              <div className="shrink-0">
                <HugeiconsIcon icon={InboxIcon} strokeWidth={2} className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Reporting Dashboard</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  Live dashboard tracking ad spend, CPL, conversion rates, and total pipeline value in real-time.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

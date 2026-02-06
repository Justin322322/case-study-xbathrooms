import Image from "next/image";
import { SalesPipelineSection } from "@/components/sections/sales-pipeline";
import { AdStrategySection } from "@/components/sections/ad-strategy";
import { AutomationSystemSection } from "@/components/sections/automation-system";
import { TransformationSection } from "@/components/sections/transformation";
import { Week0VsWeek7Section } from "@/components/sections/week-0-vs-7";
import { DeliveredSection } from "@/components/sections/delivered";
import { HeroMetrics } from "@/components/sections/hero-metrics";
import { FooterCTASection } from "@/components/sections/footer-cta";
import { BackToTop } from "@/components/ui/back-to-top";
import { Reveal } from "@/components/ui/reveal";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <section id="hero" className="relative mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-24 sm:px-8 lg:px-12">
        <Reveal cascade className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <a href="#hero" className="flex items-center gap-3 w-fit">
              <Image
                src="/logo.svg"
                alt="XBathrooms logo"
                width={306}
                height={56}
                className="h-14 w-auto"
                priority
              />
            </a>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Case Study
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              From zero systems to a
              <br />
              <span className="text-primary">fully automated</span>{" "}
              sales pipeline
            </h1>
            <p className="max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
              How we built a CRM, ad infrastructure, and lead generation engine
              for a $4M bathroom renovation company — in just 7 weeks.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#what-we-delivered"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              See What We Built
            </a>
            <a
              href="#sales-pipeline"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              See How It Works
            </a>
          </div>
        </Reveal>
        <HeroMetrics />
      </section>
      <section
        id="problem"
        className="mx-auto w-full max-w-6xl scroll-mt-[100px] px-6 pb-24 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col gap-8">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                The Problem
              </p>
              <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
                A $4M Business with Zero Infrastructure
              </h2>
              <p className="max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
                XBathrooms was generating $4M AUD in revenue with essentially no
                infrastructure behind it. Every dollar in the pipeline was
                invisible.
              </p>
            </div>
          </Reveal>

          <Reveal cascade className="divide-y divide-border/60">
            {[
              {
                title: "No CRM",
                description:
                  "Despite $4M in revenue, there was no centralized system for managing leads, tracking stages, or monitoring pipeline revenue.",
              },
              {
                title: "Disconnected Follow-ups",
                description:
                  "Simon and Fin each maintained separate Google Sheets to track follow-ups — inconsistently updated with no visibility across the lead journey.",
              },
              {
                title: "No Lead Confirmation",
                description:
                  "When a customer submitted a form, they received nothing back — no email, no SMS, no acknowledgment whatsoever.",
              },
              {
                title: "Previous Agency Issues",
                description:
                  "$23,789 spent on Meta over 90 days with catastrophically fragmented budgets across 25 ad sets at $10/day each.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 px-1 py-5 sm:flex-row sm:gap-6"
              >
                <p className="text-sm font-semibold text-primary sm:w-12">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
          
          <Reveal>
            <div className="rounded-2xl bg-muted/60 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                The Core Issue
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                A $4M-revenue business was operating without any system to track,
                nurture, or follow up with the leads generating that revenue.
                Every dollar in the pipeline was invisible.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <SalesPipelineSection />
      <AdStrategySection />
      <AutomationSystemSection />
      <TransformationSection />
      <Week0VsWeek7Section />
      <DeliveredSection />
      <FooterCTASection />
      <BackToTop />
    </main>
  );
}

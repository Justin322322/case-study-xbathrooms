"use client";

import {
  HourglassIcon,
  WorkflowSquare01Icon,
  UserCheck01Icon,
  UserRemove01Icon,
  ZapIcon,
  Message01Icon,
  Calendar03Icon,
  File01Icon,
  RepeatIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Reveal } from "@/components/ui/reveal";

const metrics = [
  {
    label: "Avg. response time",
    value: "<60s",
    icon: HourglassIcon,
  },
  {
    label: "Workflows live",
    value: "9",
    icon: WorkflowSquare01Icon,
  },
  {
    label: "Leads contacted in 24hrs",
    value: "100%",
    icon: UserCheck01Icon,
  },
  {
    label: "Manual follow-ups",
    value: "0",
    icon: UserRemove01Icon,
  },
];

const beforePoints = [
  "Leads sat in the inbox for hours — sometimes days",
  "Missed calls went unreturned",
  "Follow-ups depended on the team remembering",
  "No system for collecting reviews",
];

const afterPoints = [
  "Every inquiry gets a response within 60 seconds",
  "Missed calls trigger instant SMS + email outreach",
  "Multi-touch sequences run on autopilot",
  "Review requests sent automatically after projects",
];

const features = [
  {
    title: "Instant inquiry response",
    description: "24/7, any channel",
    icon: ZapIcon,
  },
  {
    title: "Missed call recovery",
    description: "automatic SMS + email",
    icon: Message01Icon,
  },
  {
    title: "Booking confirmations",
    description: "zero manual effort",
    icon: Calendar03Icon,
  },
  {
    title: "Proposal follow-through",
    description: "keeps leads warm",
    icon: File01Icon,
  },
  {
    title: "Persistent follow-up",
    description: "multi-week sequences",
    icon: RepeatIcon,
  },
  {
    title: "Review generation",
    description: "reputation on autopilot",
    icon: StarIcon,
  },
];

export function AutomationSystemSection() {
  return (
    <section
      id="automation-system"
      className="mx-auto w-full max-w-6xl scroll-mt-[100px] px-6 pb-24 sm:px-8 lg:px-12"
    >
      <div className="flex flex-col gap-12">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-semibold tracking-[0.04em] text-primary sm:text-6xl">
              03
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Week 5–6: Automation Build
            </p>
            <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
              The Automation System
            </h2>
            <p className="max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
              We built a fully automated follow-up engine that handles every
              touchpoint — from first inquiry to five-star review — so the team
              never drops a lead again.
            </p>
          </div>
        </Reveal>

        {/* Metrics Grid */}
        <Reveal cascade stagger={0.1} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col justify-between gap-3 rounded-2xl bg-gradient-to-br from-background via-muted/50 to-primary/5 p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {metric.label}
                </p>
                <HugeiconsIcon
                  icon={metric.icon}
                  strokeWidth={2}
                  className="h-6 w-6 text-primary"
                />
              </div>
              <p className="text-2xl font-semibold text-foreground">
                {metric.value}
              </p>
            </div>
          ))}
        </Reveal>

        {/* Before vs After Comparison */}
        <Reveal delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl bg-card/60">
            <div className="absolute inset-0 flex flex-col sm:flex-row">
              <div className="h-1/2 w-full bg-gradient-to-t from-destructive/10 to-transparent sm:h-full sm:w-1/2 sm:bg-gradient-to-l" />
              <div className="h-1/2 w-full bg-gradient-to-b from-emerald-600/10 to-transparent sm:h-full sm:w-1/2 sm:bg-gradient-to-r" />
            </div>
            
            <div className="relative grid gap-8 p-6 sm:grid-cols-2 sm:gap-12 sm:p-8">
              {/* Before */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold uppercase leading-relaxed tracking-wide text-foreground">
                    Before we arrived
                  </p>
                </div>
                <ul className="flex flex-col gap-4">
                  {beforePoints.map((point) => (
                    <li key={point} className="text-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold uppercase leading-relaxed tracking-wide text-foreground">
                    After implementation
                  </p>
                </div>
                <ul className="flex flex-col gap-4">
                  {afterPoints.map((point) => (
                    <li key={point} className="text-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* What the system covers */}
        <Reveal cascade stagger={0.05} className="divide-y divide-border/60">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-2 px-1 py-5 sm:flex-row sm:gap-6"
            >
              <span className="flex h-10 w-10 items-center justify-center text-primary">
                <HugeiconsIcon
                  icon={feature.icon}
                  strokeWidth={2}
                  className="h-7 w-7"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

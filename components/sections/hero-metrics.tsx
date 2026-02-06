"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar01Icon,
  FlowIcon,
  Megaphone01Icon,
  MoneyBag01Icon,
} from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/ui/reveal";

const metrics = [
  {
    label: "Revenue",
    value: "$4M AUD Revenue",
    icon: MoneyBag01Icon,
  },
  { label: "Delivery", value: "7 Weeks", icon: Calendar01Icon },
  {
    label: "Campaigns",
    value: "16 Ad Campaigns",
    icon: Megaphone01Icon,
  },
  { label: "Automations", value: "9 Automations", icon: FlowIcon },
];

export function HeroMetrics() {
  return (
    <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" cascade>
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex h-full flex-col justify-between gap-3 rounded-2xl bg-gradient-to-br from-background via-muted/50 to-primary/5 p-5"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {metric.label}
            </p>
            <HugeiconsIcon
              icon={metric.icon}
              strokeWidth={2}
              className="h-8 w-8 text-primary"
            />
          </div>
          <p className="text-2xl font-semibold text-foreground">
            {metric.value}
          </p>
        </div>
      ))}
    </Reveal>
  );
}

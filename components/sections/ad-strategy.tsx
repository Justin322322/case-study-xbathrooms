"use client";

import Image from "next/image";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  UserAdd01Icon,
  ViewIcon,
  Money03Icon,
  PercentCircleIcon,
} from "@hugeicons/core-free-icons";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Reveal } from "@/components/ui/reveal";
import { useRef, useState, useEffect } from "react";

type Metric = {
  label: string;
  value: string;
  series: number[];
  icon?: IconSvgElement;
};

const totalAdSpend = {
  label: "Total Ad Spend",
  value: "A$3,349",
  description: "that we lower down the cost from what initial",
  // Providing objects with 'month' for the XAxis labels
  data: [
    { month: "Prior", value: 23789 },
    { month: "Wk 1", value: 14500 },
    { month: "Wk 2", value: 8200 },
    { month: "Wk 3", value: 5100 },
    { month: "Now", value: 3349 },
  ],
};

const otherMetrics: Metric[] = [
  { label: "Opt-Ins", value: "55", series: [], icon: UserAdd01Icon },
  { label: "Landing Page Views", value: "2,156", series: [], icon: ViewIcon },
  { label: "CPL", value: "A$60.89", series: [], icon: Money03Icon },
  { label: "Conversion Rate", value: "2.55%", series: [], icon: PercentCircleIcon },
];

export function AdStrategySection() {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleImageClick = async () => {
    const element = imageContainerRef.current;
    if (!element) return;

    try {
      if (!document.fullscreenElement) {
        await element.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Error attempting to toggle fullscreen:", err);
    }
  };

  return (
    <section
      id="ad-strategy"
      className="mx-auto w-full max-w-6xl scroll-mt-[100px] px-6 pb-24 sm:px-8 lg:px-12"
    >
      <div className="flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-semibold tracking-[0.04em] text-primary sm:text-6xl">
              02
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Week 4: Ad Planning &amp; Setup
            </p>
            <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
              The Ad Strategy
            </h2>
            <p className="max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
              Before building anything new, we conducted a full audit of
              everything the previous marketing team had been running. What we
              found was revealing.
            </p>
          </div>
        </Reveal>
        
        <Reveal>
          <div className="rounded-2xl border border-border bg-muted/40 p-2">
            <div
              ref={imageContainerRef}
              onClick={handleImageClick}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleImageClick();
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="View Meta Ads Dashboard full screen"
              className={`w-full overflow-hidden rounded-xl bg-muted/60 cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                isFullscreen
                  ? "flex items-center justify-center bg-black"
                  : "hover:opacity-90"
              }`}
            >
              <Image
                src="/screenshots/meta.jpg"
                alt="Meta Ads Dashboard"
                width={0}
                height={0}
                sizes="100vw"
                className={`transition-all duration-300 ${
                  isFullscreen
                    ? "h-full w-full object-contain"
                    : "h-auto w-full object-cover object-top"
                }`}
              />
            </div>
          </div>
        </Reveal>

        <Reveal cascade className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase leading-relaxed tracking-wide text-foreground">
                Meta Ads Audit
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-medium text-foreground">
                <span className="text-destructive">$23,789.33 AUD spent</span>
                <span className="text-muted-foreground">•</span>
                <span>90 days (Sep–Dec 2025)</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Budget catastrophically fragmented across 25 ad sets at $10/day
              each — zero statistical power.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase leading-relaxed tracking-wide text-foreground">
                Google Ads Audit
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-medium text-foreground">
                <span className="text-destructive">A$397.57 spent</span>
                <span className="text-muted-foreground">•</span>
                <span>Campaign period</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Only 3 conversions at A$132.52 per conversion — 0.59% conversion
              rate with A$149.61 wasted.
            </p>
          </div>
        </Reveal>
        
        <Reveal className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-foreground">
            The Strategy We Built
          </h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card/60 px-5 py-4 sm:px-6">
              <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.15]">
                <div className="relative h-32 w-32">
                  <Image
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Meta_Platforms_Inc._logo_(cropped).svg"
                    alt="Meta watermark"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold uppercase leading-relaxed tracking-wide text-foreground">
                    Meta Ads
                  </p>
                </div>
                <p className="text-sm text-foreground/90">
                  Static ads first for immediate lead generation, carousels for
                  engagement and social proof, then video ads featuring real
                  completed projects. Each format launched sequentially.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card/60 px-5 py-4 sm:px-6">
              <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.15]">
                <div className="relative h-32 w-32">
                  <Image
                    src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                    alt="Google watermark"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold uppercase leading-relaxed tracking-wide text-foreground">
                    Google Ads
                  </p>
                </div>
                <p className="text-sm text-foreground/90">
                  Paused their underperforming campaign, launched new Performance
                  Max campaigns with proper configuration, then moved to a focused
                  Search campaign.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        
        <Reveal className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-foreground">
            Data before vs now
          </h3>
          <div className="flex flex-col gap-4">
            {/* Total Ad Spend Highlight */}
            <div className="flex flex-col gap-2 rounded-2xl bg-gradient-to-br from-background via-muted/50 to-primary/5 p-6">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {totalAdSpend.label}
                </p>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-4xl font-semibold text-emerald-600">
                    {totalAdSpend.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {totalAdSpend.description}
                  </p>
                </div>
              </div>
              <ChartContainer
                className="mt-4 h-[200px] w-full"
                config={{
                  value: {
                    label: totalAdSpend.label,
                    color: "#059669", // emerald-600
                  },
                }}
              >
                <AreaChart
                  data={totalAdSpend.data}
                  margin={{ left: 24, right: 24, top: 10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="#059669"
                        stopOpacity={0.4}
                      />
                      <stop
                        offset="95%"
                        stopColor="#059669"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="4 4" stroke="#E5E7EB" strokeOpacity={0.5} />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `A$${(value / 1000).toFixed(0)}k`}
                    className="text-xs text-muted-foreground"
                    width={50}
                    tick={{ fontSize: 11 }}
                  />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    className="text-xs text-muted-foreground"
                    tick={{ fontSize: 11 }}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        hideLabel
                        hideIndicator
                        formatter={(value) => `A$${Number(value).toLocaleString()}`}
                      />
                    }
                  />
                  <Area
                    dataKey="value"
                    type="natural"
                    fill="url(#fillValue)"
                    fillOpacity={1}
                    stroke="#059669"
                    strokeWidth={1}
                    dot={false}
                    activeDot={{ r: 6, strokeWidth: 0, fill: "#059669" }}
                    data-series="value"
                  />
                </AreaChart>
              </ChartContainer>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex h-full flex-col justify-between gap-3 rounded-2xl bg-gradient-to-br from-background via-muted/50 to-primary/5 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {metric.label}
                    </p>
                    {metric.icon && (
                      <HugeiconsIcon
                        icon={metric.icon}
                        strokeWidth={2}
                        className="h-6 w-6 text-primary"
                      />
                    )}
                  </div>
                  <p className="text-2xl font-semibold text-foreground">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

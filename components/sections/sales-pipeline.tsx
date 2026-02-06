"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiUserIcon,
  CallIcon,
  CalendarCheckIn01Icon,
  ChatNotificationIcon,
  CheckmarkCircle01Icon,
  CancelCircleIcon,
} from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/ui/reveal";

export function SalesPipelineSection() {
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
    const el = imageContainerRef.current;
    if (!el) return;
    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Error toggling fullscreen:", err);
    }
  };
  return (
    <section
      id="sales-pipeline"
      className="mx-auto w-full max-w-6xl scroll-mt-[100px] px-6 pb-24 sm:px-8 lg:px-12"
    >
      <div className="flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-semibold tracking-[0.04em] text-primary sm:text-6xl">
              01
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Weeks 1-3: CRM & System Setup
            </p>
            <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
              The Sales Pipeline
            </h2>
            <p className="max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
              We created XBathrooms&apos; first-ever structured sales pipeline: a
              six-stage system built inside GoHighLevel that gives the team a
              single, visual board where every lead is tracked from first inquiry
              to close.
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              XBathrooms Sales Pipeline with 68 opportunities across 6 stages
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
              aria-label="View Sales Pipeline full screen"
              className={`w-full overflow-hidden rounded-xl bg-muted/60 cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                isFullscreen
                  ? "flex items-center justify-center bg-black"
                  : "hover:opacity-90"
              }`}
            >
              <Image
                src="/screenshots/Pipeline.jpg"
                alt="XBathrooms Sales Pipeline in GoHighLevel"
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

        <Reveal cascade className="divide-y divide-border/60">
          {[
            {
              title: "New Lead",
              description:
                "Lead enters via landing page form, auto-created and assigned",
              icon: AiUserIcon,
            },
            {
              title: "Contacted",
              description:
                "First call logged with qualification questions",
              icon: CallIcon,
            },
            {
              title: "Site Visit / Proposal",
              description:
                "Site visit booked in GHL Calendar, value estimated",
              icon: CalendarCheckIn01Icon,
            },
            {
              title: "Follow-Up",
              description:
                "4 touchpoints over 20 business days after proposal",
              icon: ChatNotificationIcon,
            },
            {
              title: "Won",
              description:
                "Proposal accepted, BuilderTrend invite sent",
              icon: CheckmarkCircle01Icon,
            },
            {
              title: "Lost",
              description:
                "Declined or went silent, reason documented",
              icon: CancelCircleIcon,
            },
          ].map((stage) => (
            <div
              key={stage.title}
              className="flex flex-col gap-2 px-1 py-5 sm:flex-row sm:gap-6"
            >
              <span className="flex h-10 w-10 items-center justify-center text-primary">
                <HugeiconsIcon
                  icon={stage.icon}
                  strokeWidth={2}
                  className="h-7 w-7"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {stage.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

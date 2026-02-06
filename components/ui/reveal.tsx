"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: boolean;
  stagger?: number;
  threshold?: number;
  cascade?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 1.0,
  y = 40,
  blur = true,
  stagger = 0.1,
  threshold = 0.25, // Increased default threshold to 0.25 (starts when element is at 75% of viewport)
  cascade = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;

      // Force a refresh to ensure correct start positions, especially after hydration/layout shifts
      ScrollTrigger.refresh();

      const targets = cascade ? element.children : element;

      // Make visible immediately for GSAP to handle
      if (element) {
        element.style.visibility = "visible";
      }

      // Animation
      gsap.fromTo(
        targets,
        {
          y: y,
          opacity: 0,
          filter: blur ? "blur(12px)" : "none",
          willChange: "transform, opacity, filter",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: duration,
          delay: delay,
          ease: "power3.out",
          stagger: stagger,
          scrollTrigger: {
            trigger: element,
            start: `top ${100 - threshold * 100}%`,
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className={cn("invisible", className)} // Use invisible to prevent FOUC, GSAP will handle visibility
    >
      {children}
    </div>
  );
}

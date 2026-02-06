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
  threshold = 0.15,
  cascade = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;

      const targets = cascade ? element.children : element;

      // Initial state
      gsap.set(targets, {
        y: y,
        opacity: 0,
        filter: blur ? "blur(12px)" : "none",
        willChange: "transform, opacity, filter",
      });

      if (cascade) {
        gsap.set(element, { opacity: 1 });
      }

      // Animation
      gsap.to(targets, {
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
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className={cn(cascade ? "" : "opacity-0", className)}
    >
      {children}
    </div>
  );
}

"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

interface CompareSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  before: React.ReactNode
  after: React.ReactNode
  defaultPosition?: number
}

export function CompareSlider({
  before,
  after,
  defaultPosition = 50,
  className,
  ...props
}: CompareSliderProps) {
  const [position, setPosition] = React.useState(defaultPosition)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percentage)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    handleMove(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    handleMove(e.touches[0].clientX)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      setPosition((prev) => Math.max(0, prev - 5))
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      setPosition((prev) => Math.min(100, prev + 5))
    } else if (e.key === "Home") {
      e.preventDefault()
      setPosition(0)
    } else if (e.key === "End") {
      e.preventDefault()
      setPosition(100)
    }
  }

  React.useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX)
      }
    }
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        handleMove(e.touches[0].clientX)
      }
    }

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("touchend", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden select-none cursor-ew-resize group touch-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onKeyDown={handleKeyDown}
      role="slider"
      aria-label="Comparison slider"
      aria-valuenow={position}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      {...props}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 size-full z-0">
        {after}
      </div>

      {/* Before Image (Clipped on top) */}
      <div
        className="absolute inset-0 size-full z-10"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {before}
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-border cursor-grab active:cursor-grabbing">
           <div className="flex gap-0.5">
             <HugeiconsIcon icon={ArrowLeft01Icon} className="size-3 text-black" strokeWidth={3} />
             <HugeiconsIcon icon={ArrowRight01Icon} className="size-3 text-black" strokeWidth={3} />
           </div>
        </div>
      </div>
    </div>
  )
}

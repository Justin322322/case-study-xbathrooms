"use client"

import * as React from "react"
import { ResponsiveContainer, Tooltip, type TooltipProps } from "recharts"

import { cn } from "@/lib/utils"

export type ChartConfig = Record<
  string,
  {
    label: string
    color?: string
    theme?: Record<"light" | "dark", string>
  }
>

const ChartContext = React.createContext<ChartConfig | null>(null)

function ChartContainer({
  config,
  className,
  children,
}: {
  config: ChartConfig
  className?: string
  children: React.ReactElement
}) {
  const containerId = React.useId()

  return (
    <ChartContext.Provider value={config}>
      <div data-chart={containerId} className={cn("aspect-auto w-full", className)}>
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: Object.entries(config)
            .map(([key, item]) => {
              if (item.color) {
                return `[data-chart="${containerId}"] [data-series="${key}"]{--chart-color:${item.color};}`
              }
              if (item.theme) {
                return `[data-chart="${containerId}"] [data-series="${key}"]{--chart-color:${item.theme.light};}.dark [data-chart="${containerId}"] [data-series="${key}"]{--chart-color:${item.theme.dark};}`
              }
              return ""
            })
            .join("")
        }}
      />
    </ChartContext.Provider>
  )
}

function useChartConfig() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("Chart components must be used within ChartContainer")
  }
  return context
}

const ChartTooltip = Tooltip

function ChartTooltipContent({
  className,
  nameKey,
  hideLabel = false,
  hideIndicator = false,
  formatter,
  ...props
}: TooltipProps<number, string> & {
  className?: string
  nameKey?: string
  hideLabel?: boolean
  hideIndicator?: boolean
}) {
  const config = useChartConfig()
  const payload = props.payload?.[0]
  if (!payload) {
    return null
  }

  const key = nameKey ?? payload.name ?? payload.dataKey
  const item = key ? config[key as keyof typeof config] : undefined
  const label = item?.label ?? key

  return (
    <div
      className={cn(
        "grid w-auto items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1.5 text-xs text-foreground shadow-sm",
        className
      )}
    >
      {!hideLabel && label ? <div className="text-muted-foreground">{label}</div> : null}
      <div className="flex items-center gap-2">
        {!hideIndicator && (
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: "var(--chart-color)" }}
          />
        )}
        <span className="font-medium">
          {formatter
            ? formatter(payload.value ?? 0, payload.name ?? "", payload, 0, props.payload ?? [])
            : payload.value}
        </span>
      </div>
    </div>
  )
}

export { ChartContainer, ChartTooltip, ChartTooltipContent }

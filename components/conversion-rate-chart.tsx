'use client'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { Trend } from '@/types/dashboard'

type ConversionRateChartProps = {
  labels: string[]
  conversionTrend: Trend
}

const chartConfig = {
  value: {
    label: 'Novos clientes ',
    color: '#4DD4CE',
  },
} satisfies ChartConfig

export function ConversionRateChart({
  labels,
  conversionTrend,
}: ConversionRateChartProps) {
  const chartData = conversionTrend.data.map((value, i) => ({
    month: labels[i],
    value,
  }))

  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart accessibilityLayer data={chartData} margin={{ top: 20 }}>
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4DD4CE" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#244b57" stopOpacity={0.8} />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} strokeDasharray="3 3" />

        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />

        <Bar dataKey="value" fill="url(#barGradient)" radius={8}>
          <LabelList
            position="top"
            offset={12}
            className="fill-foreground"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}

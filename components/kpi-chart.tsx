'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

import { useKpiStore } from '@/store/kpi.store'

const datasets = {
  arpu: [
    { month: 'Jan', value: 2400 },
    { month: 'Feb', value: 2210 },
    { month: 'Mar', value: 2290 },
    { month: 'Apr', value: 2000 },
    { month: 'May', value: 2780 },
    { month: 'Jun', value: 1890 },
  ],
  retention: [
    { month: 'Jan', value: 80 },
    { month: 'Feb', value: 82 },
    { month: 'Mar', value: 78 },
    { month: 'Apr', value: 85 },
    { month: 'May', value: 88 },
    { month: 'Jun', value: 90 },
  ],
  conversion: [
    { month: 'Jan', value: 12 },
    { month: 'Feb', value: 15 },
    { month: 'Mar', value: 18 },
    { month: 'Apr', value: 14 },
    { month: 'May', value: 20 },
    { month: 'Jun', value: 22 },
  ],
  churn: [
    { month: 'Jan', value: 5 },
    { month: 'Feb', value: 4 },
    { month: 'Mar', value: 6 },
    { month: 'Apr', value: 3 },
    { month: 'May', value: 4 },
    { month: 'Jun', value: 2 },
  ],
}

const config = {
  arpu: {
    label: 'ARPU',
    color: 'hsl(var(--chart-1))',
  },
  retention: {
    label: 'Retention',
    color: 'hsl(var(--chart-2))',
  },
  conversion: {
    label: 'Conversion',
    color: 'hsl(var(--chart-3))',
  },
  churn: {
    label: 'Churn',
    color: 'hsl(var(--chart-4))',
  },
}

export function KpiChart() {
  const { activeKpi } = useKpiStore()

  const data = datasets[activeKpi]
  const chartConfig = config[activeKpi]

  return (
    <ChartContainer
      config={{
        value: {
          label: chartConfig.label,
          color: chartConfig.color,
        },
      }}
      className="h-62.5 w-full"
    >
      <AreaChart data={data}>
        <defs>
          <linearGradient id="kpiGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4DD4CE" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#244b57" stopOpacity={0.8} />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} strokeDasharray="3 3" />

        <XAxis dataKey="month" tickLine={false} axisLine={false} />

        <ChartTooltip content={<ChartTooltipContent />} />

        <Area
          dataKey="value"
          type="monotone"
          fill="url(#kpiGradient)"
          stroke="#4DD4CE"
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  )
}

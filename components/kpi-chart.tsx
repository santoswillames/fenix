'use client'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { useKpiStore } from '@/store/kpi.store'

type ChartDataPoint = {
  month: string
  value: number
}

type KpiChartProps = {
  data: ChartDataPoint[]
}

const config = {
  arpu: { label: 'ARPU', color: 'hsl(var(--chart-1))' },
  retention: { label: 'Retenção', color: 'hsl(var(--chart-2))' },
  conversion: { label: 'Conversão', color: 'hsl(var(--chart-3))' },
  churn: { label: 'Churn', color: 'hsl(var(--chart-4))' },
}

export function KpiChart({ data }: KpiChartProps) {
  const { activeKpi } = useKpiStore()
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
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#94a3b8', fontSize: 12 }}
          width={40}
        />

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

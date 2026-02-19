'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { KpiType, useKpiStore } from '@/store/kpi.store'
import { KpiChart } from './kpi-chart'

const tabs: { label: string; value: KpiType }[] = [
  { label: 'Retenção', value: 'retention' },
  { label: 'Conversão', value: 'conversion' },
  { label: 'Churn', value: 'churn' },
  { label: 'ARPU', value: 'arpu' },
]

export function KpiEvolutionCard() {
  const { activeKpi, setActiveKpi } = useKpiStore()

  return (
    <Card
      className={cn(
        'w-213 h-94',
        'rounded-3xl border',
        'p-6',
        'bg-linear-to-br from-[#0f172a] via-[#0b1220] to-[#0f172a]',
        'border-white/10',
        'shadow-xl',
      )}
    >
      <CardContent className="p-0 flex flex-col h-full">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-xl font-bold text-white">
            Evolução dos KPI&apos;s
          </h2>

          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full">
            {tabs.map((tab) => (
              <Button
                key={tab.value}
                variant="ghost"
                onClick={() => setActiveKpi(tab.value)}
                className={cn(
                  'rounded-full px-4 py-1 text-sm transition-all font-semibold cursor-pointer',
                  activeKpi === tab.value
                    ? 'bg-cyan-500 text-white shadow-md'
                    : 'text-muted-foreground hover:text-white hover:bg-white/10',
                )}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <KpiChart />
        </div>
      </CardContent>
    </Card>
  )
}

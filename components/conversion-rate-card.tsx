'use client'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import { ConversionRateChart } from './conversion-rate-chart'
import { Trend } from '@/types/dashboard'

interface ConversionRateCardProps {
  labels: string[]
  conversionTrend: Trend
}

export function ConversionRateCard({
  labels,
  conversionTrend,
}: ConversionRateCardProps) {
  return (
    <Card
      className={cn(
        'w-119.5 h-94',
        'rounded-3xl border',
        'p-6',
        'bg-linear-to-br from-[#0f172a] via-[#0b1220] to-[#0f172a]',
        'border-white/10',
        'shadow-xl',
      )}
    >
      <CardContent className="p-0 flex flex-col h-full">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-xl font-bold text-white">Taxa de conversão</h2>

          <ChevronRight className="size-6" />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <ConversionRateChart
            labels={labels}
            conversionTrend={conversionTrend}
          />
        </div>
      </CardContent>
    </Card>
  )
}

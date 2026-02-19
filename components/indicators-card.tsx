import { Card } from '@/components/ui/card'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RootProps {
  children: ReactNode
}

function Root({ children }: RootProps) {
  return <Card className="p-6 space-y-6">{children}</Card>
}

function Title({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold text-white">{children}</h3>
}

interface ItemProps {
  name: string
  conversion: number
  roi: number
  price: number
  highlight?: boolean
}

function Item({ name, conversion, roi, price, highlight }: ItemProps) {
  return (
    <div
      className={cn(
        'bg-slate-800 border border-slate-700 rounded-xl p-6 flex justify-between items-center transition-all',
        highlight && 'border-blue-500',
      )}
    >
      <div className="space-y-2">
        <p className="text-lg font-semibold text-white">{name}</p>

        <div className="flex gap-6 text-sm">
          <span>
            Conversão:{' '}
            <span className="text-green-400 font-medium">{conversion}%</span>
          </span>

          <span>
            ROI: <span className="text-green-400 font-medium">{roi}%</span>
          </span>
        </div>
      </div>

      <div className="text-lg font-semibold text-white">
        R$ {price.toFixed(2)}
      </div>
    </div>
  )
}

export const IndicatorsCard = {
  Root,
  Title,
  Item,
}

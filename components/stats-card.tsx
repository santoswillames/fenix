import { Card, CardContent } from '@/components/ui/card'
import { ReactNode } from 'react'

interface StatsCardProps {
  title: string
  data: string | number
  icon: ReactNode
}

export function StatsCard({ title, data, icon }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="h-32 w-81  flex flex-col  justify-between">
        <span className="text-sm text-muted-foreground">{title}</span>
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-white">{data}</span>
          {icon}
        </div>
      </CardContent>
    </Card>
  )
}

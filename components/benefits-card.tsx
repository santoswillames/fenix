import { Card } from '@/components/ui/card'
import { ReactNode } from 'react'

interface BenefitsCardRootProps {
  children: ReactNode
}

function Root({ children }: BenefitsCardRootProps) {
  return <Card className=" p-6  space-y-6 ">{children}</Card>
}

function Title({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold text-white">{children}</h3>
}

function List({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-3">{children}</div>
}

function Item({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 bg-slate-800 border border-slate-600 px-4 py-2 rounded-full text-sm text-white">
      <span className="w-2 h-2 bg-blue-500 rounded-full" />
      {children}
    </div>
  )
}

export const BenefitsCard = {
  Root,
  Title,
  List,
  Item,
}

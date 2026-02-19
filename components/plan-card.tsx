import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface PlanCardRootProps {
  children: ReactNode
  selected?: boolean
  onClick?: () => void
}

function PlanCardRoot({ children, selected, onClick }: PlanCardRootProps) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        'cursor-pointer p-6 rounded-xl border transition-all bg-slate-900',
        selected
          ? 'border-blue-500 ring-1 ring-blue-500/40'
          : 'border-slate-700 hover:border-slate-500',
      )}
    >
      {children}
    </Card>
  )
}

function Header({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">{children}</div>
  )
}

function Title({ children }: { children: ReactNode }) {
  return <p className="text-sm font-medium opacity-80">{children}</p>
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs bg-[#43D2CB] text-black px-2 py-1 rounded-full">
      {children}
    </span>
  )
}

function Price({ children }: { children: ReactNode }) {
  return <p className="text-2xl font-bold mt-2">{children}</p>
}

function Description({ children }: { children: ReactNode }) {
  return <p className="text-xs opacity-60 mt-1">{children}</p>
}

export const PlanCard = {
  Root: PlanCardRoot,
  Header,
  Title,
  Badge,
  Price,
  Description,
}

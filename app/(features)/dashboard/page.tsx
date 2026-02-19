import { Header } from '@/components/header'
import { KpiEvolutionCard } from '@/components/kpi-evolution-card'

export default function DashboardPage() {
  return (
    <div>
      <Header title="Dashboard" />
      <main className="pl-30 p-10">
        <div>
          <KpiEvolutionCard />
        </div>
      </main>
    </div>
  )
}

import { ClientsMap } from '@/components/clients-map-card'
import { ConversionRateCard } from '@/components/conversion-rate-card'
import { Header } from '@/components/header'
import { KpiEvolutionCard } from '@/components/kpi-evolution-card'

export default function DashboardPage() {
  return (
    <div>
      <Header title="Dashboard" />
      <main className="pl-30 p-10 flex flex-col gap-10">
        <div className="flex gap-10">
          <KpiEvolutionCard />
          <ConversionRateCard />
        </div>
        <ClientsMap />
      </main>
    </div>
  )
}

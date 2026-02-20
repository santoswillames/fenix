import { ClientsMap } from '@/components/clients-map-card'
import { ClientsTable } from '@/components/clients-table/clients-table'
import { ConversionRateCard } from '@/components/conversion-rate-card'
import { Header } from '@/components/header'
import { KpiEvolutionCard } from '@/components/kpi-evolution-card'
import { getDashboard, getDataMap } from '@/services/dashboard.service'

export default async function DashboardPage() {
  const dashboardData = await getDashboard()
  const mapData = await getDataMap()

  console.log(dashboardData)
  return (
    <div>
      <Header title="Dashboard" />
      <main className="pl-30 p-10 flex flex-col gap-10">
        <div className="flex gap-10">
          <KpiEvolutionCard kpisTrend={dashboardData.kpisTrend} />
          <ConversionRateCard
            labels={dashboardData.kpisTrend.labels}
            conversionTrend={dashboardData.kpisTrend.conversionTrend}
          />
        </div>
        <ClientsMap locations={mapData.data.locations} />
        <ClientsTable
          filters={dashboardData.activeClients.filters}
          data={dashboardData.activeClients.data}
        />
      </main>
    </div>
  )
}

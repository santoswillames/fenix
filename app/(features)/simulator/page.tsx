import { Header } from '@/components/header'
import { PlansSimulator } from '@/components/plans-simulator'

export default function SimulatorPage() {
  return (
    <div>
      <Header title="Simulador de planos" />
      <main className="pl-30 p-10 grid grid-cols-6 gap-10">
        <PlansSimulator />
      </main>
    </div>
  )
}

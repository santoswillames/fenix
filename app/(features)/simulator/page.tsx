import { BenefitsCard } from '@/components/benefits-card'
import { Header } from '@/components/header'
import { IndicatorsCard } from '@/components/indicators-card'
import { PlansSimulator } from '@/components/plans-simulator'

export default function SimulatorPage() {
  return (
    <div>
      <Header title="Simulador de planos" />
      <main className="pl-30 p-10 grid grid-cols-6 gap-10">
        <PlansSimulator />
        <div className="flex flex-col gap-10 col-span-2">
          <BenefitsCard.Root>
            <BenefitsCard.Title>Benefícios Inclusos</BenefitsCard.Title>

            <BenefitsCard.List>
              <BenefitsCard.Item>Tudo do básico</BenefitsCard.Item>
              <BenefitsCard.Item>Carro reserva</BenefitsCard.Item>
              <BenefitsCard.Item>Vidros</BenefitsCard.Item>
            </BenefitsCard.List>
          </BenefitsCard.Root>

          <IndicatorsCard.Root>
            <IndicatorsCard.Title>Indicadores</IndicatorsCard.Title>

            <div className="space-y-4">
              <IndicatorsCard.Item
                name="Básico"
                conversion={75}
                roi={80}
                price={89.9}
              />

              <IndicatorsCard.Item
                name="Intermediário"
                conversion={48}
                roi={114}
                price={145.9}
              />

              <IndicatorsCard.Item
                name="Premium"
                conversion={25}
                roi={176}
                price={225.9}
              />
            </div>
          </IndicatorsCard.Root>
        </div>
      </main>
    </div>
  )
}

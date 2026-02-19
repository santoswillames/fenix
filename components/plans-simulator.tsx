'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { PlanCard } from './plan-card'

type PlanType = 'basic' | 'intermediate' | 'premium'

const additionalCoverages = [
  { id: 'roubo', label: 'Cobertura contra roubo e furto', price: 25 },
  { id: 'colisao', label: 'Danos por colisão', price: 35 },
  { id: 'incendio', label: 'Cobertura contra incêndio', price: 20 },
  {
    id: 'naturais',
    label: 'Fenômenos naturais (granizo, enchente)',
    price: 30,
  },
]

export function PlansSimulator() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('intermediate')
  const [vehicleValue, setVehicleValue] = useState([50000])
  const [age, setAge] = useState([28])
  const [selectedCoverages, setSelectedCoverages] = useState<string[]>([
    'roubo',
    'colisao',
    'incendio',
  ])

  function toggleCoverage(id: string) {
    setSelectedCoverages((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  return (
    <Card className=" text-white p-8 flex-1 rounded-2xl border border-slate-700 space-y-8 col-span-4">
      <h2 className="text-xl font-semibold">Planos personalizados</h2>

      <div className="grid grid-cols-3 gap-6">
        <PlanCard.Root
          selected={selectedPlan === 'basic'}
          onClick={() => setSelectedPlan('basic')}
        >
          <PlanCard.Header>
            <PlanCard.Title>Básico</PlanCard.Title>
          </PlanCard.Header>

          <PlanCard.Price>R$ 89,90</PlanCard.Price>
          <PlanCard.Description>Por mês</PlanCard.Description>
        </PlanCard.Root>

        <PlanCard.Root
          selected={selectedPlan === 'intermediate'}
          onClick={() => setSelectedPlan('intermediate')}
        >
          <PlanCard.Header>
            <PlanCard.Title>Intermediário</PlanCard.Title>
          </PlanCard.Header>

          <PlanCard.Price>R$ 145,90</PlanCard.Price>
          <PlanCard.Description>Por mês</PlanCard.Description>
        </PlanCard.Root>

        <PlanCard.Root
          selected={selectedPlan === 'premium'}
          onClick={() => setSelectedPlan('premium')}
        >
          <PlanCard.Header>
            <PlanCard.Title>Premium</PlanCard.Title>
            <PlanCard.Badge>Recomendado</PlanCard.Badge>
          </PlanCard.Header>

          <PlanCard.Price>R$ 225,90</PlanCard.Price>
          <PlanCard.Description>Por mês</PlanCard.Description>
        </PlanCard.Root>
      </div>

      <div className="space-y-3">
        <p className="font-medium">
          Valor do veículo: R$ {vehicleValue[0].toLocaleString()}
        </p>

        <Slider
          min={10000}
          max={500000}
          step={5000}
          value={vehicleValue}
          onValueChange={setVehicleValue}
        />

        <div className="flex justify-between text-xs opacity-60">
          <span>R$ 10.000</span>
          <span>R$ 500.000</span>
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-medium">Idade do Cliente: {age[0]} anos</p>

        <Slider min={18} max={90} step={1} value={age} onValueChange={setAge} />

        <div className="flex justify-between text-xs opacity-60">
          <span>18 anos</span>
          <span>90 anos</span>
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-medium">Coberturas Adicionais</p>

        {additionalCoverages.map((coverage) => (
          <div key={coverage.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={selectedCoverages.includes(coverage.id)}
                onCheckedChange={() => toggleCoverage(coverage.id)}
              />
              <span className="text-sm">{coverage.label}</span>
            </div>

            <span className="text-sm opacity-80">
              + R$ {coverage.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}

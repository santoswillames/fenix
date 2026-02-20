'use client'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import dynamic from 'next/dynamic'
import { Location } from '@/types/dashboard'
import { useMemo, useState } from 'react'

const Map = dynamic(() => import('@/components/clients-map'), {
  ssr: false,
  loading: () => <p>Carregando mapa...</p>,
})

interface ClientsMapProps {
  locations: Location[]
}

export function ClientsMap({ locations }: ClientsMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const uniqueLocations = useMemo(
    () => [...new Set(locations.map((l) => l.id))],
    [locations],
  )

  const uniqueCategories = useMemo(
    () => [...new Set(locations.map((l) => l.category))],
    [locations],
  )

  const filtered = useMemo(() => {
    return locations.filter((loc) => {
      const matchesLocation =
        selectedLocation === 'all' || loc.id === selectedLocation
      const matchesCategory =
        selectedCategory === 'all' || loc.category === selectedCategory
      return matchesLocation && matchesCategory
    })
  }, [locations, selectedLocation, selectedCategory])

  // Recentrar mapa na primeira localização filtrada ou na localização padrão
  const mapCenter = useMemo<[number, number]>(() => {
    if (filtered.length > 0) return filtered[0].coordinates
    return [-34.8717, -8.0631]
  }, [filtered])

  return (
    <Card
      className={cn(
        'm-w-[1322px] h-88.5',
        'rounded-3xl border',
        'p-6',
        'bg-linear-to-br from-[#0f172a] via-[#0b1220] to-[#0f172a]',
        'border-white/10',
        'shadow-xl',
      )}
    >
      <CardContent className="p-0 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white">
            Mapa de clientes por região
          </h2>
          <div className="flex gap-4">
            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger>
                <SelectValue placeholder="Todos os locais" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">Todos os locais</SelectItem>
                  {uniqueLocations.map((id) => {
                    const loc = locations.find((l) => l.id === id)!
                    return (
                      <SelectItem key={id} value={id}>
                        {loc.name}
                      </SelectItem>
                    )
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Todos os tipos" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">Todos os tipos</SelectItem>
                  {uniqueCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center rounded-2xl overflow-hidden">
          <Map locations={filtered} center={mapCenter} zoom={13} />
        </div>
      </CardContent>
    </Card>
  )
}

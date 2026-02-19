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

const Map = dynamic(() => import('@/components/clients-map'), {
  ssr: false,
  loading: () => <p>Carregando mapa...</p>,
})

export function ClientsMap() {
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
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Todos os locais" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="sao-paulo">São Paulo</SelectItem>
                  <SelectItem value="rio">Rio de Janeiro</SelectItem>
                  <SelectItem value="bra">Brasília</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Todos os tipos" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="tipo1">Tipo 1</SelectItem>
                  <SelectItem value="tipo2">Tipo 2</SelectItem>
                  <SelectItem value="tipo3">Tipo 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center rounded-2xl overflow-hidden">
          <Map />
        </div>
      </CardContent>
    </Card>
  )
}

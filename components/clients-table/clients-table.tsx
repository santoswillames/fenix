'use client'

import { Input } from '@/components/ui/input'
import { columns } from './columns'
import { DataTable } from './data-table'
import type { Client } from '@/types/client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

const data: Client[] = [
  {
    id: '1',
    name: 'Ricardo Leite',
    email: 'ricardo@email.com',
    insuranceType: 'Seguro automóvel',
    monthlyValue: 185.9,
    status: 'ativo',
    renewal: '14/12/2024',
    region: 'São Paulo',
  },
  {
    id: '2',
    name: 'Maria Silva',
    email: 'maria@email.com',
    insuranceType: 'Seguro residencial',
    monthlyValue: 89.9,
    status: 'ativo',
    renewal: '14/12/2024',
    region: 'Rio de Janeiro',
  },
  {
    id: '3',
    name: 'João Costa',
    email: 'joao@email.com',
    insuranceType: 'Seguro viagem',
    monthlyValue: 230,
    status: 'pendente',
    renewal: '14/12/2024',
    region: 'Brasília',
  },
]

export function ClientsTable() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-6 space-y-6">
      <h2 className="text-xl font-bold ">Clientes ativos</h2>

      <div className="flex gap-4 flex-wrap">
        <Input
          placeholder="Buscar por nome ou email..."
          className="bg-white/5 border-white/10 flex-1"
        />
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Todos os status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="bra" defaultChecked>
                Todos
              </SelectItem>
              <SelectItem value="ativo">Ativo</SelectItem>
              <SelectItem value="pendente">Pendente</SelectItem>
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
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  )
}

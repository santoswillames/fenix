'use client'

import { Input } from '@/components/ui/input'
import { columns } from './columns'
import { DataTable } from './data-table'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Ticket } from '@/types/ticket'

const data: Ticket[] = [
  {
    id: '1',
    cliente: {
      name: 'Ricardo Leite',
      email: 'ricardo@email.com',
    },
    assunto: 'Solicitação de alteração',
    status: 'aberto',
    data: new Date('2024-12-14'),
    prioridade: 'urgente',
    responsavel: 'Ana Silva',
  },
  {
    id: '2',
    cliente: {
      name: 'Maria Silva',
      email: 'maria@email.com',
    },
    assunto: 'Dúvida sobre cobertura',
    status: 'aberto',
    data: new Date('2024-12-15'),
    prioridade: 'media',
    responsavel: 'Carlos Oliveira',
  },
  {
    id: '3',
    cliente: {
      name: 'João Costa',
      email: 'joao@email.com',
    },
    assunto: 'Problema com o seguro viagem',
    status: 'em-andamento',
    data: new Date('2024-12-16'),
    prioridade: 'alta',
    responsavel: 'Roberto Santos',
  },
]

export function TicketsTable() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-6 space-y-6">
      <h2 className="text-xl font-bold ">Lista de Tickets</h2>

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
            <SelectValue placeholder="Todas as Prioridades" />
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
            <SelectValue placeholder="Todos os responsáveis" />
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

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
import { useTicketDialog } from '@/store/ticket-dialog.store'

interface TicketsTableProps {
  data: Ticket[]
}

export function TicketsTable({ data }: TicketsTableProps) {
  const { openEdit } = useTicketDialog()

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

      <DataTable columns={columns(openEdit)} data={data} />
    </div>
  )
}

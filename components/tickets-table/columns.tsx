'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Ticket, TicketPriority, TicketStatus } from '@/types/ticket'
import { Pencil, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const priorityMap: Record<
  TicketPriority,
  { label: string; className: string }
> = {
  Baixa: {
    label: 'Baixa',
    className: 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30',
  },
  Média: {
    label: 'Média',
    className: 'bg-[#4DD4CE]/20 text-[#4DD4CE] hover:bg-[#4DD4CE]/30',
  },
  Alta: {
    label: 'Alta',
    className: 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30',
  },
  Urgente: {
    label: 'Urgente',
    className: 'bg-red-500/20 text-red-400 hover:bg-red-500/30',
  },
}

const statusMap: Record<TicketStatus, { label: string; className: string }> = {
  Aberto: {
    label: 'Aberto',
    className: 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30',
  },
  'Em andamento': {
    label: 'Em andamento',
    className: 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30',
  },
  Fechado: {
    label: 'Fechado',
    className: 'bg-green-500/20 text-green-400 hover:bg-green-500/30',
  },
}

export const columns = (
  openEdit: (ticket: Ticket) => void,
): ColumnDef<Ticket>[] => [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'priority',
    header: 'Prioridade',
    cell: ({ row }) => {
      const priority = row.original.priority as TicketPriority

      const config = priorityMap[priority]

      if (!config) {
        return (
          <Badge className="bg-gray-500/20 text-gray-400">
            {priority ?? 'Desconhecido'}
          </Badge>
        )
      }

      return <Badge className={config.className}>{config.label}</Badge>
    },
  },

  {
    accessorKey: 'cliente',
    header: 'Cliente',
    cell: ({ row }) => {
      const client = row.original

      return (
        <div className="flex flex-col">
          <span className="font-medium text-white">{client.client}</span>
          <span className="text-xs text-muted-foreground">{client.email}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'subject',
    header: 'Assunto',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status
      const config = statusMap[status]

      return <Badge className={config.className}>{config.label}</Badge>
    },
  },

  {
    accessorKey: 'data',
    header: 'Data',
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt)

      return (
        <span className="text-sm text-muted-foreground">
          {date.toLocaleDateString('pt-BR')}
        </span>
      )
    },
  },
  {
    accessorKey: 'responsible',
    header: 'Responsável',
  },
  {
    id: 'acoes',
    header: 'Ações',
    cell: ({ row }) => {
      const ticket = row.original

      return (
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={() => openEdit(ticket)}
          >
            <span className="flex items-center gap-2 text-muted-foreground">
              Editar
              <Pencil size={16} color="#1876D2" />
            </span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={() => console.log('Ver', ticket.id)}
          >
            <span className="flex items-center gap-2 text-muted-foreground">
              Ver
              <ChevronRight size={18} color="#1876D2" />
            </span>
          </Button>
        </div>
      )
    },
  },
]

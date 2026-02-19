'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Ticket } from '@/types/ticket'
import { Pencil, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const columns = (
  openEdit: (ticket: Ticket) => void,
): ColumnDef<Ticket>[] => [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'prioridade',
    header: 'Prioridade',
    cell: ({ row }) => {
      const status = row.original.prioridade

      return (
        <Badge
          className={
            status === 'media'
              ? 'bg-[#4DD4CE]/20 text-[#4DD4CE] hover:bg-[#4DD4CE]/30'
              : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
          }
        >
          {status === 'media' ? 'Média' : 'Urgente'}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'cliente',
    header: 'Cliente',
    cell: ({ row }) => {
      const client = row.original.cliente

      return (
        <div className="flex flex-col">
          <span className="font-medium text-white">{client.name}</span>
          <span className="text-xs text-muted-foreground">{client.email}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'assunto',
    header: 'Assunto',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status

      return (
        <Badge
          className={
            status === 'aberto'
              ? 'bg-[#4DD4CE]/20 text-[#4DD4CE] hover:bg-[#4DD4CE]/30'
              : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
          }
        >
          {status === 'aberto' ? 'Aberto' : 'Em Andamento'}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'data',
    header: 'Data',
    cell: ({ row }) => {
      const date = row.original.data

      return (
        <span className="text-sm text-muted-foreground">
          {date.toLocaleDateString('pt-BR')}
        </span>
      )
    },
  },
  {
    accessorKey: 'responsavel',
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

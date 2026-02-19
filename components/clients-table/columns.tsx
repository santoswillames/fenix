'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Client } from '@/types/client'

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => {
      const client = row.original

      return (
        <div className="flex flex-col">
          <span className="font-medium text-white">{client.name}</span>
          <span className="text-xs text-muted-foreground">{client.email}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'insuranceType',
    header: 'Tipo de Seguro',
  },
  {
    accessorKey: 'monthlyValue',
    header: 'Valor mensal',
    cell: ({ row }) => {
      const value = row.original.monthlyValue

      return (
        <span className="font-medium">
          {value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status

      return (
        <Badge
          className={
            status === 'ativo'
              ? 'bg-[#4DD4CE]/20 text-[#4DD4CE] hover:bg-[#4DD4CE]/30'
              : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
          }
        >
          {status === 'ativo' ? 'Ativo' : 'Pendente'}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'renewal',
    header: 'Renovação',
  },
  {
    accessorKey: 'region',
    header: 'Região',
  },
]

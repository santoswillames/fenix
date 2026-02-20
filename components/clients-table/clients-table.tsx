'use client'

import { useState } from 'react'
import { ColumnFiltersState } from '@tanstack/react-table'
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
import { ActiveClient } from '@/types/dashboard'

interface ClientsTableProps {
  filters: {
    status: string[]
    secureType: string[]
    locations: string[]
  }
  data: ActiveClient[]
}

export function ClientsTable({ filters, data }: ClientsTableProps) {
  const [globalFilter, setGlobalFilter] = useState('')
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  function handleColumnFilter(columnId: string, value: string) {
    setColumnFilters((prev) => {
      const others = prev.filter((f) => f.id !== columnId)
      if (value === 'all') return others
      return [...others, { id: columnId, value }]
    })
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-6 space-y-6">
      <h2 className="text-xl font-bold">Clientes ativos</h2>

      <div className="flex gap-4 flex-wrap">
        <Input
          placeholder="Buscar por nome ou email..."
          className="bg-white/5 border-white/10 flex-1"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />

        <Select onValueChange={(v) => handleColumnFilter('status', v)}>
          <SelectTrigger>
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">Todos os status</SelectItem>
              {filters.status
                .filter(
                  (s) =>
                    s.toLowerCase() !== 'all' && s.toLowerCase() !== 'todos',
                )
                .map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={(v) => handleColumnFilter('secureType', v)}>
          <SelectTrigger>
            <SelectValue placeholder="Filtrar por tipos" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">Todos os tipos</SelectItem>
              {filters.secureType
                .filter(
                  (s) =>
                    s.toLowerCase() !== 'all' && s.toLowerCase() !== 'todos',
                )
                .map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={(v) => handleColumnFilter('location', v)}>
          <SelectTrigger>
            <SelectValue placeholder="Filtrar por locais" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">Todos os locais</SelectItem>
              {filters.locations
                .filter(
                  (s) =>
                    s.toLowerCase() !== 'all' && s.toLowerCase() !== 'todos',
                )
                .map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={columns}
        data={data}
        columnFilters={columnFilters}
        globalFilter={globalFilter}
      />
    </div>
  )
}

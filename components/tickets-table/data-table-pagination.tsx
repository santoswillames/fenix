'use client'

import { Table } from '@tanstack/react-table'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-end gap-10 mt-6 text-white ">
      <button
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
        className="opacity-70 hover:opacity-100 disabled:opacity-30 transition"
      >
        <ChevronsLeft size={20} />
      </button>

      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        className="opacity-70 hover:opacity-100 disabled:opacity-30 transition"
      >
        <ChevronLeft size={20} />
      </button>

      <span className="text-sm font-medium tracking-wide">
        {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
      </span>

      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        className="opacity-70 hover:opacity-100 disabled:opacity-30 transition"
      >
        <ChevronRight size={20} />
      </button>

      <button
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
        className="opacity-70 hover:opacity-100 disabled:opacity-30 transition"
      >
        <ChevronsRight size={20} />
      </button>
    </div>
  )
}

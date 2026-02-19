'use client'
import { Button } from '@/components/ui/button'
import { useTicketDialog } from '@/store/ticket-dialog.store'
import { Plus } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const { openCreate } = useTicketDialog()
  const pathname = usePathname()

  return (
    <div className="h-22 w-full font-semibold bg-secondary flex items-center justify-between pl-30 px-10">
      {title}
      {pathname === '/tickets' && (
        <Button
          className="cursor-pointer rounded-full shadow-[0_0_10px_0_#1876D2] hover:shadow-[0_0_20px_2px_#1876D2] transition-all duration-300"
          onClick={openCreate}
        >
          <Plus className="mr-2" size={16} />
          Novo Ticket
        </Button>
      )}
    </div>
  )
}

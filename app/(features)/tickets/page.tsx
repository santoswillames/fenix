import { Header } from '@/components/header'
import { StatsCard } from '@/components/stats-card'
import { TicketsTable } from '@/components/tickets-table/tickets-table'
import { Button } from '@/components/ui/button'
import {
  CircleCheckBig,
  Clock,
  MessageCircleReply,
  Plus,
  Ticket,
} from 'lucide-react'

export default function TicketsPage() {
  return (
    <div>
      <Header title="Tickets">
        <Button className="cursor-pointer rounded-full shadow-[0_0_10px_0_#1876D2] hover:shadow-[0_0_20px_2px_#1876D2] transition-all duration-300">
          <Plus className="mr-2" size={16} />
          Novo Ticket
        </Button>
      </Header>
      <main className="pl-30 p-10 flex flex-col gap-10">
        <div className="flex gap-6 w-full">
          <StatsCard
            title="Tickets Abertos"
            data={15}
            icon={<Ticket size={28} color="#43D2CB" />}
          />
          <StatsCard
            title="Em andamento"
            data={8}
            icon={<MessageCircleReply size={28} color="#D2B843" />}
          />
          <StatsCard
            title="Resolvidos hoje"
            data={12}
            icon={<CircleCheckBig size={28} color="#43D2CB" />}
          />
          <StatsCard
            title="Tempo médio"
            data={15}
            icon={<Clock size={28} color="#59BCDD" />}
          />
        </div>
        <TicketsTable />
      </main>
    </div>
  )
}

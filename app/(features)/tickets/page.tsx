import { Header } from '@/components/header'
import { NewTicketDialog } from '@/components/new-ticket-dialog'
import { StatsCard } from '@/components/stats-card'
import { TicketsTable } from '@/components/tickets-table/tickets-table'
import { CircleCheckBig, Clock, MessageCircleReply, Ticket } from 'lucide-react'

export default function TicketsPage() {
  return (
    <div>
      <Header title="Tickets" />
      <main className="pl-30 p-10 flex flex-col gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 w-full">
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
      <NewTicketDialog />
    </div>
  )
}

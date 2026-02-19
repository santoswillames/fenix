export type TicketStatus = 'aberto' | 'em-andamento'
export type TicketPriority = 'baixa' | 'media' | 'alta' | 'urgente'

type Client = {
  name: string
  email: string
}

export interface Ticket {
  id: string
  prioridade: TicketPriority
  cliente: Client
  assunto: string
  status: TicketStatus
  data: Date
  responsavel: string
}

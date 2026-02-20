export type TicketPriority = 'Baixa' | 'Média' | 'Alta' | 'Urgente'

export type TicketStatus = 'Aberto' | 'Em andamento' | 'Fechado'

export interface CreateTicketDTO {
  priority: TicketPriority
  ticketId: string
  client: string
  email: string
  subject: string
  status: TicketStatus
  responsible: string
}

export interface UpdateTicketDTO extends Partial<CreateTicketDTO> {}

export interface Ticket extends CreateTicketDTO {
  id: string
  createdAt: string
  updatedAt: string
}

export interface TicketResponse {
  data: Ticket[]
  total: number
  listed: number
}

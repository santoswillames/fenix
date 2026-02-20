import { CreateTicketDTO, Ticket, TicketResponse } from '@/types/ticket'
import { apiFetch } from './api-client'

export async function getTicketById(id: string): Promise<Ticket> {
  return apiFetch(`/tickets/${id}`)
}

export async function createTicket(data: CreateTicketDTO): Promise<Ticket> {
  return apiFetch('/tickets', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function updateTicket(
  id: string,
  data: Partial<CreateTicketDTO>,
): Promise<Ticket> {
  return apiFetch(`/tickets/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  })
}

export async function deleteTicket(id: string): Promise<void> {
  return apiFetch(`/tickets/${id}`, {
    method: 'DELETE',
  })
}

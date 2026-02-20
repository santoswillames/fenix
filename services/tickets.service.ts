import { TicketResponse } from '@/types/ticket'
import { apiFetchServer } from './api-server'

export async function getTickets(): Promise<TicketResponse> {
  return apiFetchServer('/tickets')
}

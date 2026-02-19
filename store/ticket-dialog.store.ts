import { create } from 'zustand'
import { Ticket } from '@/types/ticket'

type TicketDialogMode = 'create' | 'edit'

interface TicketDialogStore {
  open: boolean
  mode: TicketDialogMode
  ticket?: Ticket

  openCreate: () => void
  openEdit: (ticket: Ticket) => void
  close: () => void
}

export const useTicketDialog = create<TicketDialogStore>((set) => ({
  open: false,
  mode: 'create',
  ticket: undefined,

  openCreate: () =>
    set({
      open: true,
      mode: 'create',
      ticket: undefined,
    }),

  openEdit: (ticket) =>
    set({
      open: true,
      mode: 'edit',
      ticket,
    }),

  close: () =>
    set({
      open: false,
      ticket: undefined,
    }),
}))

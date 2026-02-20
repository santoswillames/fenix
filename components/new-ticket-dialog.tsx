'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useTicketDialog } from '@/store/ticket-dialog.store'
import { TicketPriority } from '@/types/ticket'
import { useRouter } from 'next/navigation'
import { createTicket, updateTicket } from '@/services/tickets-client.service'

export const createTicketSchema = z.object({
  priority: z.enum(['Baixa', 'Média', 'Alta', 'Urgente']),
  client: z.string().min(3, 'Nome obrigatório'),
  email: z.email('Email inválido'),
  subject: z.string().min(3, 'Assunto obrigatório'),
  status: z.enum(['Aberto', 'Em andamento', 'Fechado']),
  responsible: z.string().min(3, 'Responsável obrigatório'),
})

function generateTicketId() {
  const random = Math.floor(1000 + Math.random() * 9000)
  return `TK-${random}`
}

export type CreateTicketFormData = z.infer<typeof createTicketSchema>
export const updateTicketSchema = createTicketSchema.partial()

export function NewTicketDialog() {
  const router = useRouter()
  const { open, close, mode, ticket } = useTicketDialog()
  const isEditing = mode === 'edit'

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateTicketFormData>({
    resolver: zodResolver(createTicketSchema),
    defaultValues: {
      priority: 'Baixa',
      client: '',
      email: '',
      subject: '',
      status: 'Aberto',
      responsible: '',
    },
  })

  useEffect(() => {
    if (isEditing && ticket) {
      reset({
        priority: ticket.priority,
        client: ticket.client,
        email: ticket.email,
        subject: ticket.subject,
        status: ticket.status,
        responsible: ticket.responsible,
      })
    } else {
      reset({
        priority: 'Baixa',
        client: '',
        email: '',
        subject: '',
        status: 'Aberto',
        responsible: '',
      })
    }
  }, [ticket, isEditing, reset])

  async function onSubmit(data: CreateTicketFormData) {
    console.log('disparado')
    try {
      setLoading(true)

      if (isEditing && ticket) {
        await updateTicket(ticket.id, data)
        toast.success('Ticket atualizado com sucesso')
      } else {
        const payload = {
          ...data,
          ticketId: generateTicketId(),
        }

        await createTicket(payload)

        toast.success('Ticket criado com sucesso')
      }

      close()
      reset()
      router.refresh()
    } catch (error) {
      console.error(error)
      toast.error('Erro ao salvar ticket')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="bg-[#0f172a] border border-white/10 text-white max-w-2xl rounded-2xl">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? 'Editar Ticket' : 'Novo Ticket'}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? 'Edite os dados do ticket abaixo.'
              : 'Preencha os dados para criar um novo ticket.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
          <div className="space-y-2">
            <label className="text-sm">Nome do cliente</label>
            <Input
              {...register('client')}
              className="bg-white/5 border-white/10"
            />
            {errors.client && (
              <p className="text-xs text-red-400">{errors.client.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm">Email</label>
            <Input
              {...register('email')}
              className="bg-white/5 border-white/10"
            />
            {errors.email && (
              <p className="text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm">Prioridade</label>
            <Select
              value={watch('priority')}
              onValueChange={(value) =>
                setValue('priority', value as TicketPriority)
              }
            >
              <SelectTrigger className="bg-white/5 border-white/10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Baixa">Baixa</SelectItem>
                <SelectItem value="Média">Média</SelectItem>
                <SelectItem value="Alta">Alta</SelectItem>
                <SelectItem value="Urgente">Urgente</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm">Responsável</label>
            <Input
              {...register('responsible')}
              className="bg-white/5 border-white/10"
            />
            {errors.responsible && (
              <p className="text-xs text-red-400">
                {errors.responsible.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm">Assunto</label>
            <Textarea
              {...register('subject')}
              className="bg-white/5 border-white/10 min-h-25"
            />
            {errors.subject && (
              <p className="text-xs text-red-400">{errors.subject.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={close}
              className="border-white/20 text-white"
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              disabled={loading}
              className="shadow-[0_0_10px_0_#1876D2]"
            >
              {loading ? 'Salvando...' : isEditing ? 'Atualizar' : 'Criar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

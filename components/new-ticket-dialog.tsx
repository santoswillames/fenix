'use client'

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

export function NewTicketDialog() {
  const { open: isDialogOpen, close, mode, ticket } = useTicketDialog()

  console.log('Ticket para edição:', ticket)

  return (
    <Dialog open={isDialogOpen} onOpenChange={close}>
      <DialogContent className="bg-[#0f172a] border border-white/10 text-white max-w-2xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            {mode === 'create' ? 'Novo Ticket' : 'Editar Ticket'}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {mode === 'create'
              ? 'Preencha os dados abaixo para registrar um novo ticket na plataforma.'
              : 'Edite os dados do ticket abaixo.'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 mt-4">
          <div className="space-y-2">
            <label className="text-sm">Nome do cliente</label>
            <Input
              placeholder="Nome da pessoa ou empresa que está solicitando o suporte"
              className="bg-white/5 border-white/10"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">Email</label>
            <Input
              placeholder="E-mail de contato para atualizações e resposta"
              className="bg-white/5 border-white/10"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">Prioridade</label>
            <Select>
              <SelectTrigger className="bg-white/5 border-white/10">
                <SelectValue placeholder="Selecione o nível de urgência do atendimento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="baixa">Baixa</SelectItem>
                <SelectItem value="media">Média</SelectItem>
                <SelectItem value="alta">Alta</SelectItem>
                <SelectItem value="urgente">Urgente</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm">Responsável</label>
            <Input
              placeholder="Quem será o responsável por esse ticket"
              className="bg-white/5 border-white/10"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">Assunto</label>
            <Textarea
              placeholder="Resumo breve do problema ou solicitação"
              className="bg-white/5 border-white/10 min-h-25"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5"
            onClick={() => close()}
          >
            Cancelar
          </Button>

          <Button className=" shadow-[0_0_10px_0_#1876D2]">Salvar</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

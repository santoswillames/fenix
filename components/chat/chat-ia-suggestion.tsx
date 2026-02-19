import { Button } from '@/components/ui/button'
import { ChatMessage } from '@/types/chat'

interface Props {
  message: ChatMessage
}

export function ChatAISuggestion({ message }: Props) {
  return (
    <div className="flex justify-end">
      <div className="bg-slate-600 text-white rounded-xl p-4 max-w-[65%] shadow-lg border border-blue-400/40">
        <div className="text-xs mb-2 opacity-70">Sugestão da IA</div>

        <p className="text-sm mb-4">{message.content}</p>

        <div className="flex gap-2">
          <Button size="sm">Enviar proposta</Button>
          <Button size="sm" variant="secondary">
            Fazer ligação
          </Button>
          <Button size="sm" variant="outline">
            Ver histórico
          </Button>
        </div>

        <div className="text-[10px] text-right opacity-60 mt-3">
          {message.timestamp}
        </div>
      </div>
    </div>
  )
}

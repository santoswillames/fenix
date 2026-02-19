import { cn } from '@/lib/utils'
import { ChatMessage as ChatMessageType } from '@/types/chat'
import { ChatAISuggestion } from './chat-ia-suggestion'

interface Props {
  message: ChatMessageType
}

export function ChatMessage({ message }: Props) {
  if (message.type === 'ai_suggestion') {
    return <ChatAISuggestion message={message} />
  }

  const isUser = message.type === 'user_message'

  return (
    <div
      className={cn('flex w-full', isUser ? 'justify-start' : 'justify-end')}
    >
      <div
        className={cn(
          'max-w-[60%] rounded-xl px-4 py-3 text-sm shadow-md',
          isUser ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-100',
        )}
      >
        <div className="text-xs opacity-70 mb-1">{message.author}</div>

        <p>{message.content}</p>

        <div className="text-[10px] text-right opacity-60 mt-2">
          {message.timestamp}
        </div>
      </div>
    </div>
  )
}

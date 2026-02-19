'use client'

import { useEffect, useRef } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChatMessage as ChatMessageType } from '@/types/chat'
import { ChatMessage } from './chat-message'

interface Props {
  messages: ChatMessageType[]
  bottomRef: React.RefObject<HTMLDivElement>
}

export function ChatScrollArea({ messages }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <ScrollArea className="h-full w-full pr-4">
      <div className="space-y-6 px-6 py-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div ref={bottomRef} />
    </ScrollArea>
  )
}

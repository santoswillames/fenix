'use client'

import { useEffect, useRef, useState } from 'react'
import type { ChatMessage, ChatResponse } from '@/types/chat'
import { ChatScrollArea } from './chat-scroll-area'
import { ChatInput } from './chat-input'

/**
 * Mock vindo da API
 */
const mockData: ChatResponse = {
  messages: [
    {
      id: 'msg_001',
      author: 'Ricardo Leite - Seguro Automotivo',
      content: 'Oi! Tudo certo! Gostaria de saber sobre o seguro automotivo',
      timestamp: '12:23',
      type: 'user_message',
    },
    {
      id: 'msg_002',
      author: 'Assistente',
      content: 'Oi, Rafael! Tudo ótimo e com você? Claro que sim...',
      timestamp: '12:23',
      type: 'assistant_message',
    },
    {
      id: 'msg_003',
      author: 'Ricardo Leite - Seguro Automotivo',
      content:
        'Isso! Mas agora fiquei pensando... tem alguma coisa além disso?',
      timestamp: '12:23',
      type: 'user_message',
    },
    {
      id: 'msg_004',
      author: 'Sugestão da IA',
      content:
        'Baseado no perfil do cliente, recomendo a oferta Premium com desconto de 15%. Cliente tem histórico positivo.',
      timestamp: '12:23',
      type: 'ai_suggestion',
    },
  ],
  iaSuggestion: 'Boa pergunta! Sim, a gente tem sim. Vou te explicar melhor...',
  conversationAnalysis: {
    insights: {
      title: 'Análise da IA',
      insights: [],
    },
    futureSteps: {
      title: 'Próximos passos',
      actions: [],
    },
  },
}

export function ChatContainer() {
  const [messages, setMessages] = useState<ChatMessage[]>(mockData.messages)

  const [analysis] = useState(mockData.conversationAnalysis)

  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleSend(content: string) {
    const newUserMessage: ChatMessage = {
      id: crypto.randomUUID(),
      author: 'Ricardo Leite - Seguro Automotivo',
      content,
      timestamp: new Date().toLocaleTimeString().slice(0, 5),
      type: 'user_message',
    }

    setMessages((prev) => [...prev, newUserMessage])

    simulateAIResponse()
  }

  function simulateAIResponse() {
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        author: 'Assistente',
        content: mockData.iaSuggestion,
        timestamp: new Date().toLocaleTimeString().slice(0, 5),
        type: 'assistant_message',
      }

      setMessages((prev) => [...prev, assistantMessage])
    }, 1200)
  }

  return (
    <div className="flex flex-col h-[75vh] bg-[#0B1125] rounded-xl border border-blue-500/30">
      <ChatScrollArea messages={messages} bottomRef={bottomRef} />

      <div className="border-t border-slate-700 p-4">
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  )
}

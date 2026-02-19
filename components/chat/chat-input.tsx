'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'

interface Props {
  onSend: (message: string) => void
}

export function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState('')

  function handleSend() {
    if (!value.trim()) return
    onSend(value)
    setValue('')
  }

  return (
    <div className="mt-4 flex items-center gap-3">
      <Input
        placeholder="Escreva aqui..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-slate-800 border-slate-700 text-white"
      />

      <Button onClick={handleSend}>
        <Send size={16} />
      </Button>
    </div>
  )
}

import { ChatContainer } from '@/components/chat/chat-container'
import { Header } from '@/components/header'

export default function ChatPage() {
  return (
    <div>
      <Header title="Chat & Assistente Virtual" />

      <main className="pl-30 p-10">
        <ChatContainer />
      </main>
    </div>
  )
}

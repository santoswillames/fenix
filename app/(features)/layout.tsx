import { Sidebar } from '@/components/sidebar'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[#0B1220] min-h-screen">
      <Sidebar />

      <main className="pl-20">{children}</main>
    </div>
  )
}

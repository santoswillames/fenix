'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  MessageSquare,
  Ticket,
  Calculator,
} from 'lucide-react'
import Image from 'next/image'
import { useAuthStore } from '@/store/auth.store'
import { SidebarSkeleton } from './sidebar-skeleton'

const navItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Chat',
    href: '/chat',
    icon: MessageSquare,
  },
  {
    label: 'Tickets',
    href: '/tickets',
    icon: Ticket,
  },
  {
    label: 'Simulator',
    href: '/simulator',
    icon: Calculator,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const user = useAuthStore((state) => state.user)
  const hasHydrated = useAuthStore.persist.hasHydrated()

  if (!hasHydrated) {
    return <SidebarSkeleton />
  }

  if (!user) return null

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-20 bg-secondary flex flex-col items-center py-6 rounded-tr-3xl rounded-br-3xl shadow-[4px_0px_20px_0px_#00000033]">
      <div className="mb-10">
        <Image
          src="/logo-minimal.svg"
          alt="Logo minimalista"
          width={40}
          height={40}
        />
      </div>

      <nav className="flex flex-col gap-6 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-200',
                isActive
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-muted-foreground hover:bg-white/5 hover:text-white',
              )}
            >
              <Icon className="h-5 w-5" />
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto">
        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-sm font-medium">
          {user.name.charAt(0).toUpperCase()}
        </div>
      </div>
    </aside>
  )
}

import { Skeleton } from '@/components/ui/skeleton'

export function SidebarSkeleton() {
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-20 bg-secondary flex flex-col items-center py-6 rounded-tr-3xl rounded-br-3xl shadow-[4px_0px_20px_0px_#00000033]">
      <div className="mb-10">
        <Skeleton className="h-10 w-10 rounded-lg bg-background" />
      </div>

      <div className="flex flex-col gap-6 flex-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-12 rounded-xl bg-background" />
        ))}
      </div>

      <div className="mt-auto">
        <Skeleton className="h-10 w-10 rounded-full bg-background" />
      </div>
    </aside>
  )
}

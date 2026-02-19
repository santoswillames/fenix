interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="h-22 w-full font-semibold bg-secondary flex items-center justify-between pl-30 px-10">
      {title}
    </div>
  )
}

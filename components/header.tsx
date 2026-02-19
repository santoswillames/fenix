import React from 'react'

interface HeaderProps {
  title: string
  children?: React.ReactNode
}

export function Header({ title, children }: HeaderProps) {
  return (
    <div className="h-22 w-full font-semibold bg-secondary flex items-center justify-between pl-30 px-10">
      {title}
      {children}
    </div>
  )
}

import Image from 'next/image'
import { LoginHero } from '@/components/login-hero'
import { LoginForm } from '@/components/login-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 relative">
      <div className="w-full max-w-350 grid lg:grid-cols-2 items-center gap-2">
        <div className="w-full max-w-120 mx-auto py-20">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="mb-16"
          />
          <LoginForm />
        </div>

        <div className="hidden min-[1000px]:flex justify-center">
          <LoginHero />
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

export function LoginHero() {
  return (
    <div className="relative w-full max-w-150 h-150 flex items-center justify-center">
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 to-blue-600/10 rounded-3xl blur-3xl" />

      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-900/40">
        <Image
          src="/image-login.png"
          alt="Login Illustration"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </div>
  )
}

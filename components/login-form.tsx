'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Eye, EyeOff, LoaderCircle } from 'lucide-react'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth.store'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'
import { toast } from 'sonner'

const loginSchema = z.object({
  email: z.email({ error: 'Digite um e-mail válido.' }),
  password: z
    .string({ error: 'O campo senha é obrigatório.' })
    .min(1, 'O campo senha é obrigatório.'),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const setUser = useAuthStore((state) => state.setUser)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: LoginFormValues) {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.message || 'Erro ao fazer login')
      }

      const accessToken = responseData.accessToken

      if (!accessToken) {
        throw new Error('Token não recebido')
      }

      const decoded = JSON.parse(atob(accessToken.split('.')[1]))
      const userId = decoded.id

      const userResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )

      if (!userResponse.ok) {
        throw new Error('Erro ao buscar usuário')
      }

      const user = await userResponse.json()

      setUser(user)

      router.push('/dashboard')
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : 'Erro inesperado ao fazer login'

      toast.error(message)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <h2 className="text-2xl font-regular font-space">Login</h2>
        <p className="text-foreground mt-2 text-sm font-inter">
          Entre com suas credenciais para acessar a sua conta.
        </p>
      </div>

      <div className="space-y-5">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="email" className="font-inter">
                Usuário
                <span className="text-destructive">*</span>
              </FieldLabel>
              <Input
                {...field}
                id="email"
                required
                aria-invalid={fieldState.invalid}
                placeholder="Digite o Usuário"
                className="h-12 rounded-xl font-inter"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              <FieldDescription className="text-muted-foreground font-inter">
                Insira o seu e-mail, CPF ou passaporte.
              </FieldDescription>
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="password" className="font-inter">
                Senha
                <span className="text-destructive">*</span>
              </FieldLabel>
              <div className="relative">
                <Input
                  {...field}
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  aria-invalid={fieldState.invalid}
                  placeholder="Digite sua senha"
                  className="h-12 rounded-xl pr-12 font-inter"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="font-inter">
              Lembrar meu usuário
            </label>
          </div>

          <button className="text-primary hover:underline font-inter">
            Esqueci minha senha
          </button>
        </div>

        <Button className="w-full h-12 mt-4 rounded-xl">
          {form.formState.isSubmitting ? (
            <div className="flex items-center gap-2">
              <LoaderCircle className="h-4 w-4 animate-spin" />
              <span>Entrando...</span>
            </div>
          ) : (
            'Entrar'
          )}
        </Button>
      </div>
    </form>
  )
}

'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Eye, EyeOff } from 'lucide-react'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'

const loginSchema = z.object({
  email: z.email({ error: 'Digite um e-mail válido.' }),
  password: z
    .string({ error: 'O campo senha é obrigatório.' })
    .min(1, 'O campo senha é obrigatório.'),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(data: LoginFormValues) {
    console.log('Dados do formulário:', data)
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

        <Button className="w-full h-12 mt-4 rounded-xl">Entrar</Button>
      </div>
    </form>
  )
}

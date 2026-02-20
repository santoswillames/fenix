export async function login({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Erro ao fazer login')
  }

  return data
}

export async function getCurrentUser() {
  const response = await fetch('/api/auth/me')

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Erro ao buscar usuário')
  }

  return data
}

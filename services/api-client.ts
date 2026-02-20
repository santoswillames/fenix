import { useAuthStore } from '@/store/auth.store'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function apiFetch(endpoint: string, options?: RequestInit) {
  const token = useAuthStore.getState().token

  console.log('TOKEN', token)

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options?.headers,
    },
  })

  if (!response.ok) {
    throw new Error('Erro na requisição')
  }

  return response.json()
}

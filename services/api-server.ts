// services/api-server.ts
import { cookies } from 'next/headers'

const API_URL = process.env.API_URL

export async function apiFetchServer(endpoint: string, options?: RequestInit) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

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

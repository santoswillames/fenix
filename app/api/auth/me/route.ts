import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

function decodeToken(token: string) {
  try {
    const payload = token.split('.')[1]
    const decoded = Buffer.from(payload, 'base64').toString('utf-8')
    return JSON.parse(decoded)
  } catch {
    return null
  }
}

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  if (!token) {
    return NextResponse.json({ message: 'Não autenticado' }, { status: 401 })
  }

  const decoded = decodeToken(token)

  if (!decoded?.id) {
    return NextResponse.json({ message: 'Token inválido' }, { status: 401 })
  }

  const response = await fetch(`${process.env.API_URL}/users/${decoded.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    return NextResponse.json(
      { message: 'Erro ao buscar usuário' },
      { status: response.status },
    )
  }

  const user = await response.json()

  return NextResponse.json(user)
}

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const apiResponse = await fetch(`${process.env.API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!apiResponse.ok) {
    return NextResponse.json(
      { message: 'Credenciais inválidas' },
      { status: apiResponse.status },
    )
  }

  const data = await apiResponse.json()

  if (!data.access_token) {
    return NextResponse.json(
      { message: 'Token não retornado pela API' },
      { status: 500 },
    )
  }

  const response = NextResponse.json({ accessToken: data.access_token })

  response.cookies.set('token', data.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
  })

  return response
}

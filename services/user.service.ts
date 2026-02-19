export async function getUserById(id: string, token: string) {
  const response = await fetch(
    `https://nortus-challenge.api.stage.loomi.com.br/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar usuário')
  }

  return response.json()
}

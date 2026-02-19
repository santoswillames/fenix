export type ClientStatus = 'ativo' | 'pendente'

export interface Client {
  id: string
  name: string
  email: string
  insuranceType: string
  monthlyValue: number
  status: ClientStatus
  renewal: string
  region: string
}

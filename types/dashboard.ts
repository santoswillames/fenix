export interface DashboardResponse {
  kpisTrend: KpisTrend
  kpisResume: KpisResume
  segments: {
    nome: string
    valor: number
  }[]
  activeClients: {
    filters: {
      status: string[]
      secureType: string[]
      locations: string[]
    }
    data: ActiveClient[]
  }
}

export interface KpisResume {
  arpu: Resume
  conversion: Resume
  retention: Resume
  churn: Resume
}

export interface KpisTrend {
  labels: string[]
  arpuTrend: Trend
  conversionTrend: Trend
  churnTrend: Trend
  retentionTrend: Trend
}

export interface Trend {
  name: string
  data: number[]
}

export interface Resume {
  valor: number
  variacao: number
}

export interface ActiveClient {
  id: string
  name: string
  email: string
  secureType: string
  monthValue: number
  status: string
  renewalDate: string
  location: string
}

export type LocationCategory =
  | 'tourism'
  | 'sports'
  | 'health'
  | 'education'
  | 'culture'
  | (string & {})

export type LocationIcon =
  | 'map-pin'
  | 'hospital'
  | 'star'
  | 'building'
  | (string & {})

export type Location = {
  id: string
  name: string
  description: string
  coordinates: [longitude: number, latitude: number]
  category: LocationCategory
  address: string
  icon: LocationIcon
  color: `#${string}`
}

export type LocationsApiResponse = {
  data: {
    locations: Location[]
  }
}

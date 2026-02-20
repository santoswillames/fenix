import { apiFetchServer } from './api-server'
import { DashboardResponse, LocationsApiResponse } from '@/types/dashboard'

export async function getDashboard(): Promise<DashboardResponse> {
  return apiFetchServer('/nortus-v1/dashboard')
}

export async function getDataMap(): Promise<LocationsApiResponse> {
  return apiFetchServer('/map/locations')
}

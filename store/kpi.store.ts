import { create } from 'zustand'

export type KpiType = 'retention' | 'conversion' | 'churn' | 'arpu'

interface KpiState {
  activeKpi: KpiType
  setActiveKpi: (kpi: KpiType) => void
}

export const useKpiStore = create<KpiState>((set) => ({
  activeKpi: 'arpu',
  setActiveKpi: (kpi) => set({ activeKpi: kpi }),
}))

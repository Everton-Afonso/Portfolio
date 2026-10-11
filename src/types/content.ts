import type { LocalizedText } from '@/types/locale'

export interface HeroMetric {
  id: string
  value: string
  label: LocalizedText
  description: LocalizedText
}

export interface PerformanceItem {
  id: string
  title: string
  description: LocalizedText
}

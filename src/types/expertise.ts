import type { LocalizedText } from '@/types/locale'

export type ExpertiseIcon = 'code' | 'shopping-cart' | 'plug' | 'gauge' | 'bug' | 'blocks'

export interface ExpertiseItem {
  id: string
  icon: ExpertiseIcon
  title: LocalizedText
  description: LocalizedText
}

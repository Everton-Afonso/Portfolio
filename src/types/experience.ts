import type { LocalizedText } from '@/types/locale'

export interface Experience {
  id: string
  company: string
  role: LocalizedText
  period: LocalizedText
  description: LocalizedText[]
  technologies: string[]
}

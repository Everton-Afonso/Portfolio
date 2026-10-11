import type { LocalizedText } from '@/types/locale'

export type ProjectStatus = 'completed' | 'in-progress'

export type ProjectCategory =
  | 'ecommerce'
  | 'frontend'
  | 'performance'
  | 'developer-tools'
  | 'chrome-extension'
  | 'web-applications'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: LocalizedText
  technologies: string[]
  image?: string
  githubUrl?: string
  liveUrl?: string
  status: ProjectStatus
}

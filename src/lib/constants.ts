import type { Locale } from '@/types/locale'

export const SITE = {
  name: 'Everton Afonso',
  role: 'Full Stack Developer',
  url: import.meta.env.VITE_SITE_URL ?? '',
} as const

export const CONTACT = {
  email: import.meta.env.VITE_CONTACT_EMAIL ?? '',
  github: import.meta.env.VITE_GITHUB_URL ?? '',
  linkedin: import.meta.env.VITE_LINKEDIN_URL ?? '',
} as const

export const RESUME_FILES: Record<Locale, string> = {
  'pt-BR': '/resume/Everton-Otavio-Afonso-pt.pdf',
  'en-US': '/resume/Everton-Otavio-Afonso-en.pdf',
}

export const LOCALES: readonly Locale[] = ['pt-BR', 'en-US']

export const DEFAULT_LOCALE: Locale = 'pt-BR'

export interface NavLink {
  id: string
  labelKey: string
}

export const NAV_ITEMS: readonly NavLink[] = [
  { id: 'home', labelKey: 'navigation.home' },
  { id: 'about', labelKey: 'navigation.about' },
  { id: 'projects', labelKey: 'navigation.projects' },
  { id: 'experience', labelKey: 'navigation.experience' },
  { id: 'skills', labelKey: 'navigation.skills' },
  { id: 'resume', labelKey: 'navigation.resume' },
  { id: 'contact', labelKey: 'navigation.contact' },
]

export const NAV_IDS: string[] = NAV_ITEMS.map((item) => item.id)

export function isConfigured(value: string): boolean {
  return value.trim().length > 0
}

import type { LocalizedText } from '@/types/locale'

export type ProfileInfoId = 'experience' | 'location' | 'availability'

export interface ProfileMeta {
  photo: string
  available: boolean
  location: string
  availability: string
}

export interface ProfileInfoSection {
  id: ProfileInfoId
  labelKey: string
}

export interface ProfileLanguage {
  id: string
  labelKey: string
  /**
   * Optional proficiency label. Left empty on purpose — no invented levels.
   */
  level?: LocalizedText
}

import type { ProfileInfoSection, ProfileLanguage, ProfileMeta } from '@/types/profile'

/**
 * Profile data lives here, separated from presentation.
 *
 * Personal values come from environment variables so nothing is invented and
 * every field stays configurable. Empty values are hidden by the component.
 */
export const profileMeta: ProfileMeta = {
  photo: import.meta.env.VITE_PROFILE_IMAGE?.trim() ?? '',
  available: import.meta.env.VITE_PROFILE_AVAILABLE === 'true',
  location: import.meta.env.VITE_PROFILE_LOCATION?.trim() ?? '',
  availability: import.meta.env.VITE_PROFILE_AVAILABILITY?.trim() ?? '',
}

export const profileInfoSections: readonly ProfileInfoSection[] = [
  { id: 'experience', labelKey: 'profile.info.experience' },
  { id: 'location', labelKey: 'profile.info.location' },
  { id: 'availability', labelKey: 'profile.info.availability' },
]

/**
 * Languages are shown without proficiency percentages unless `level` is filled.
 */
export const profileLanguages: readonly ProfileLanguage[] = [
  { id: 'pt-BR', labelKey: 'profile.languages.pt' },
  { id: 'en-US', labelKey: 'profile.languages.en' },
]

/**
 * Extra competencies that are not part of the core `technologies` list.
 * Technical terms, kept untranslated on purpose.
 */
export const additionalSkills: readonly string[] = [
  'REST APIs',
  'Headless Commerce',
  'Web Performance',
  'E-commerce',
]

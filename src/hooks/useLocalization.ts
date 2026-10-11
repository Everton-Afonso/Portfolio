import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { setLocale as changeLocale } from '@/i18n'
import type { Locale, LocalizedText } from '@/types/locale'

/**
 * Resolves content stored as `LocalizedText` (in /src/data) for the active language.
 */
export function useLocalizedText(): (text: LocalizedText) => string {
  const { i18n } = useTranslation()
  const language = i18n.language as Locale

  return useCallback((text: LocalizedText) => text[language] ?? text['en-US'] ?? '', [language])
}

/**
 * Active locale and a setter that persists the choice.
 */
export function useLocale(): [Locale, (locale: Locale) => void] {
  const { i18n } = useTranslation()
  const locale = i18n.language as Locale

  const setLocale = useCallback((next: Locale) => {
    void changeLocale(next)
  }, [])

  return [locale, setLocale]
}

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { DEFAULT_LOCALE, LOCALES } from '@/lib/constants'
import type { Locale } from '@/types/locale'

import enUS from './locales/en-US/common.json'
import ptBR from './locales/pt-BR/common.json'

const STORAGE_KEY = 'portfolio:locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && (LOCALES as readonly string[]).includes(stored)) {
    return stored as Locale
  }

  return DEFAULT_LOCALE
}

function persistLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    /* storage unavailable — language simply is not persisted */
  }
  document.documentElement.lang = locale
}

void i18n.use(initReactI18next).init({
  resources: {
    'pt-BR': { common: ptBR },
    'en-US': { common: enUS },
  },
  lng: getInitialLocale(),
  fallbackLng: DEFAULT_LOCALE,
  defaultNS: 'common',
  interpolation: { escapeValue: false },
  returnNull: false,
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language
}

export async function setLocale(locale: Locale): Promise<void> {
  await i18n.changeLanguage(locale)
  persistLocale(locale)
}

export function currentLocale(): Locale {
  return i18n.language as Locale
}

export default i18n

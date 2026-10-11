import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { useLocale } from '@/hooks/useLocalization'
import { LOCALES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { Locale } from '@/types/locale'

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { t } = useTranslation()
  const [locale, setLocale] = useLocale()

  const nextLocale = LOCALES.find((item) => item !== locale) ?? 'en-US'

  return (
    <button
      type="button"
      onClick={() => setLocale(nextLocale as Locale)}
      aria-label={`${t('navigation.switchLanguage')}`}
      className={cn(
        'inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-foreground/30',
        className,
      )}
    >
      <Globe className="size-3.5 text-accent-text" aria-hidden />
      <span aria-hidden>{locale === 'pt-BR' ? 'PT' : 'EN'}</span>
    </button>
  )
}

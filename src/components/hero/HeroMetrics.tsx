import { useTranslation } from 'react-i18next'

import { Reveal, RevealItem } from '@/components/layout/Reveal'
import { heroMetrics } from '@/data/content'
import { useLocalizedText } from '@/hooks/useLocalization'

export function HeroMetrics() {
  const { t } = useTranslation()
  const localized = useLocalizedText()

  return (
    <div className="mt-14 md:mt-20">
      <Reveal>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {t('hero.metricsTitle')}
        </p>
      </Reveal>

      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {heroMetrics.map((metric, index) => (
          <RevealItem
            key={metric.id}
            delay={index * 80}
            className="flex h-full flex-col gap-1 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card md:p-5"
          >
            <p className="font-display text-lg font-extrabold text-foreground md:text-xl">
              {metric.value}
            </p>
            <p className="text-xs font-medium text-foreground/70">{localized(metric.label)}</p>
            <p className="text-[11px] leading-snug text-muted-foreground">
              {localized(metric.description)}
            </p>
          </RevealItem>
        ))}
      </ul>
    </div>
  )
}

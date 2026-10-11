import { Activity } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Reveal, RevealItem } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { performanceItems } from '@/data/content'
import { useLocalizedText } from '@/hooks/useLocalization'

export function Performance() {
  const { t } = useTranslation()
  const localized = useLocalizedText()

  return (
    <Section id="performance" className="mx-auto w-full max-w-[1400px] px-4">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={t('performance.eyebrow')}
            title={t('performance.title')}
            description={t('performance.description')}
            className="mb-6"
          />

          <Reveal delay={120}>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <Activity className="mt-0.5 size-4 shrink-0 text-accent-text" aria-hidden />
              <p className="text-xs leading-relaxed text-muted-foreground">
                {t('performance.note')}
              </p>
            </div>
          </Reveal>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {performanceItems.map((item, index) => (
            <RevealItem
              key={item.id}
              delay={(index % 4) * 70}
              className="group flex h-full flex-col gap-2 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
                  {item.title}
                </h3>
                <span aria-hidden className="h-1.5 w-8 overflow-hidden rounded-full bg-muted">
                  <span className="block h-full w-2/3 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {localized(item.description)}
              </p>
            </RevealItem>
          ))}
        </ul>
      </div>
    </Section>
  )
}

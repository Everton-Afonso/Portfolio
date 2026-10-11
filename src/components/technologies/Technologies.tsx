import { useTranslation } from 'react-i18next'

import { RevealItem } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { technologies } from '@/data/technologies'

export function Technologies() {
  const { t } = useTranslation()

  return (
    <Section id="stack" className="pt-0 mx-auto w-full max-w-[1400px] px-4">
      <SectionHeading
        eyebrow={t('technologies.eyebrow')}
        title={t('technologies.title')}
        description={t('technologies.description')}
        align="center"
        className="mb-8 md:mb-10"
      />

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {technologies.map((technology, index) => (
          <RevealItem
            key={technology.id}
            delay={(index % 5) * 60}
            className="group flex h-full items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
          >
            <span
              aria-hidden
              className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft font-display text-sm font-extrabold text-accent-text transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
            >
              {technology.mark}
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-bold text-foreground">
                {technology.name}
              </span>
              <span className="block truncate text-[11px] uppercase tracking-wider text-muted-foreground">
                {t(`technologies.categories.${technology.category}`)}
              </span>
            </span>
          </RevealItem>
        ))}
      </ul>
    </Section>
  )
}

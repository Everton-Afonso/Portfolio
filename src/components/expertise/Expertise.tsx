import { Blocks, Bug, Code, Gauge, Plug, ShoppingCart, type LucideIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { RevealItem } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { expertise } from '@/data/expertise'
import { useLocalizedText } from '@/hooks/useLocalization'
import type { ExpertiseIcon } from '@/types/expertise'

const ICONS: Record<ExpertiseIcon, LucideIcon> = {
  code: Code,
  'shopping-cart': ShoppingCart,
  plug: Plug,
  gauge: Gauge,
  bug: Bug,
  blocks: Blocks,
}

export function Expertise() {
  const { t } = useTranslation()
  const localized = useLocalizedText()

  return (
    <Section id="skills" surface>
      <div className="mx-auto w-full max-w-[1400px] px-4">
        <SectionHeading
          eyebrow={t('expertise.eyebrow')}
          title={t('expertise.title')}
          description={t('expertise.description')}
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {expertise.map((item, index) => {
            const Icon = ICONS[item.icon]

            return (
              <RevealItem
                key={item.id}
                delay={(index % 3) * 90}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
              >
                <span
                  aria-hidden
                  className="absolute right-5 top-5 font-mono text-xs font-bold text-border transition-colors group-hover:text-primary/60"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-accent-text transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden />
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {localized(item.title)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {localized(item.description)}
                  </p>
                </div>
              </RevealItem>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

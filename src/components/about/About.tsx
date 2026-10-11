import { BadgeCheck, Gauge, Layers, Plug } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Reveal } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/layout/SectionHeading'

const INDICATORS = [
  { id: 'frontend', icon: Layers },
  { id: 'ecommerce', icon: BadgeCheck },
  { id: 'performance', icon: Gauge },
  { id: 'api', icon: Plug },
] as const

const HIGHLIGHTS = ['quality', 'performance', 'collaboration', 'ownership'] as const

export function About() {
  const { t } = useTranslation()

  return (
    <Section id="about" surface>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 mx-auto w-full max-w-[1400px] px-4">
        <div>
          <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} className="mb-8" />

          <Reveal delay={80} className="flex flex-col gap-4">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t('about.paragraph1')}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t('about.paragraph2')}
            </p>
            <p className="font-medium text-foreground md:text-lg">{t('about.paragraph3')}</p>
          </Reveal>

          <Reveal delay={160}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {INDICATORS.map(({ id, icon: Icon }) => (
                <li key={id}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground">
                    <Icon className="size-3.5 text-accent-text" aria-hidden />
                    {t(`about.indicators.${id}`)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <div
              aria-hidden
              className="absolute -right-3 -top-3 size-8 rotate-[26deg] border-2 border-primary/70 max-lg:-right-1"
            />

            <p className="font-display text-lg font-extrabold text-foreground">
              {t('about.highlightTitle')}
            </p>

            <ul className="mt-6 flex flex-col gap-4">
              {HIGHLIGHTS.map((highlight, index) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-soft font-mono text-[11px] font-bold text-accent-text"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {t(`about.highlights.${highlight}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

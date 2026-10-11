import { CalendarDays, Briefcase } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { RevealItem } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { experiences } from '@/data/experience'
import { useLocalizedText } from '@/hooks/useLocalization'
import { cn, isPlaceholder } from '@/lib/utils'

export function Experience() {
  const { t } = useTranslation()
  const localized = useLocalizedText()

  return (
    <Section id="experience" className="mx-auto w-full max-w-[1400px] px-4">
      <SectionHeading
        eyebrow={t('experience.eyebrow')}
        title={t('experience.title')}
        description={t('experience.description')}
      />

      <ol className="relative flex max-w-3xl flex-col gap-10 md:gap-12">
        <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-border" />

        {experiences.map((experience, index) => {
          const role = localized(experience.role)
          const period = localized(experience.period)

          return (
            <RevealItem key={experience.id} delay={index * 100} className="relative pl-8 md:pl-10">
              <span
                aria-hidden
                className={cn(
                  'absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-primary bg-card',
                  index === 0 && 'bg-primary',
                )}
              />

              <div className="flex flex-col gap-1">
                <h3 className="font-display text-xl font-extrabold text-foreground md:text-2xl">
                  {experience.company}
                </h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 font-medium text-foreground/80',
                      isPlaceholder(role) && 'font-mono text-xs text-muted-foreground',
                    )}
                  >
                    <Briefcase className="size-3.5 text-accent-text" aria-hidden />
                    {role}
                  </span>
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 text-muted-foreground',
                      isPlaceholder(period) && 'font-mono text-xs',
                    )}
                  >
                    <CalendarDays className="size-3.5" aria-hidden />
                    {period}
                  </span>
                </div>
              </div>

              <ul className="mt-4 flex flex-col gap-2">
                {experience.description.map((line) => {
                  const text = localized(line)

                  return (
                    <li
                      key={text}
                      className={cn(
                        'flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base',
                        isPlaceholder(text) && 'font-mono text-xs',
                      )}
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1 shrink-0 rounded-full bg-primary/70"
                      />
                      {text}
                    </li>
                  )
                })}
              </ul>

              <ul
                className="mt-4 flex flex-wrap gap-1.5"
                aria-label={t('experience.technologiesLabel')}
              >
                {experience.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-border bg-card px-2 py-1 font-mono text-[11px] text-foreground/80"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </RevealItem>
          )
        })}
      </ol>
    </Section>
  )
}

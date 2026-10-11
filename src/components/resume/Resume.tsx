import { Download, FileText } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Reveal } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { experiences } from '@/data/experience'
import { useLocale, useLocalizedText } from '@/hooks/useLocalization'
import { RESUME_FILES } from '@/lib/constants'
import { cn, isPlaceholder } from '@/lib/utils'

const SKILL_GROUPS = ['frontend', 'backend', 'ecommerce', 'data', 'tooling'] as const

function Placeholder({ value }: { value: string }) {
  return (
    <span
      className={cn(
        'font-mono text-xs text-muted-foreground',
        isPlaceholder(value) && 'rounded-md bg-muted px-2 py-1',
      )}
    >
      {value}
    </span>
  )
}

export function Resume() {
  const { t } = useTranslation()
  const [locale] = useLocale()
  const localized = useLocalizedText()

  const resumeLanguage = t('resume.currentLanguage')

  return (
    <Section id="resume" className="mx-auto w-full max-w-[1400px] px-4">
      <SectionHeading
        eyebrow={t('resume.eyebrow')}
        title={t('resume.title')}
        description={t('resume.description')}
      />

      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-8">
        <Reveal>
          <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-28">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary-soft text-accent-text">
              <FileText className="size-6" aria-hidden />
            </span>

            <div className="flex flex-col gap-2">
              <h3 className="font-display text-xl font-extrabold text-foreground">
                {t('resume.download')}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t('resume.description')}
              </p>
            </div>

            <Button asChild size="lg" className="mt-auto w-full">
              <a href={RESUME_FILES[locale]} download>
                <Download aria-hidden />
                {t('resume.downloadLanguage', { language: resumeLanguage })}
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-6 md:p-8">
            <section aria-label={t('resume.sections.summary')} className="flex flex-col gap-2">
              <h3 className="font-display text-base font-extrabold uppercase tracking-wider text-foreground">
                {t('resume.sections.summary')}
              </h3>
              <Separator />
              <p className="pt-2 text-sm leading-relaxed text-muted-foreground">
                {t('resume.summary')}
              </p>
            </section>

            <section aria-label={t('resume.sections.experience')} className="flex flex-col gap-2">
              <h3 className="font-display text-base font-extrabold uppercase tracking-wider text-foreground">
                {t('resume.sections.experience')}
              </h3>
              <Separator />
              <ul className="flex flex-col gap-4 pt-2">
                {experiences.map((experience) => (
                  <li key={experience.id} className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-display text-sm font-bold text-foreground">
                        {experience.company}
                      </p>
                      <Placeholder value={localized(experience.period)} />
                    </div>
                    <p className="text-sm text-muted-foreground">{localized(experience.role)}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-label={t('resume.sections.skills')} className="flex flex-col gap-2">
              <h3 className="font-display text-base font-extrabold uppercase tracking-wider text-foreground">
                {t('resume.sections.skills')}
              </h3>
              <Separator />
              <dl className="flex flex-col gap-3 pt-2">
                {SKILL_GROUPS.map((group) => {
                  const category = group === 'data' ? 'database' : group

                  return (
                    <div key={group} className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-accent-text">
                        {t(`technologies.categories.${category}`)}
                      </dt>
                      <dd className="text-sm text-muted-foreground">
                        {t(`resume.skills.${group}`)}
                      </dd>
                    </div>
                  )
                })}
              </dl>
            </section>

            <section aria-label={t('resume.sections.projects')} className="flex flex-col gap-2">
              <h3 className="font-display text-base font-extrabold uppercase tracking-wider text-foreground">
                {t('resume.sections.projects')}
              </h3>
              <Separator />
              <p className="pt-2 text-sm leading-relaxed text-muted-foreground">
                {t('resume.projectsText')}
              </p>
            </section>

            <div className="grid gap-8 sm:grid-cols-2">
              <section aria-label={t('resume.sections.education')} className="flex flex-col gap-2">
                <h3 className="font-display text-base font-extrabold uppercase tracking-wider text-foreground">
                  {t('resume.sections.education')}
                </h3>
                <Separator />
                <p className="pt-2">
                  <Placeholder value={t('common.todo')} />
                </p>
              </section>

              <section aria-label={t('resume.sections.languages')} className="flex flex-col gap-2">
                <h3 className="font-display text-base font-extrabold uppercase tracking-wider text-foreground">
                  {t('resume.sections.languages')}
                </h3>
                <Separator />
                <p className="pt-2">
                  <Placeholder value={t('common.todo')} />
                </p>
              </section>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

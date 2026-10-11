import { useTranslation } from 'react-i18next'

import { Reveal, RevealItem } from '@/components/layout/Reveal'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { inProgressProjects, projects } from '@/data/projects'
import { useLocalizedText } from '@/hooks/useLocalization'

export function Projects() {
  const { t } = useTranslation()
  const localized = useLocalizedText()

  return (
    <Section id="projects" className="mx-auto w-full max-w-[1400px] px-4">
      <SectionHeading
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        description={t('projects.description')}
      />

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <RevealItem key={project.id} delay={index * 90}>
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </ul>

      <div className="mt-16 rounded-2xl border border-border bg-surface p-6 md:mt-20 md:p-10">
        <Reveal className="mb-8 flex flex-col gap-2">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-text">
            <span aria-hidden className="size-1.5 rounded-full bg-primary" />
            {t('projects.inProgress.eyebrow')}
          </span>
          <h3 className="font-display text-2xl font-extrabold text-foreground">
            {t('projects.inProgress.title')}
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {t('projects.inProgress.description')}
          </p>
        </Reveal>

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {inProgressProjects.map((project, index) => (
            <RevealItem
              key={project.id}
              delay={index * 90}
              className="flex h-full flex-col gap-3 rounded-xl border border-dashed border-border bg-card p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-display text-base font-bold text-foreground">
                  {project.title}
                </h4>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-semibold text-accent-text">
                  <span className="size-1.5 animate-pulse rounded-full bg-primary" aria-hidden />
                  {t(`projects.status.${project.status}`)}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {localized(project.description)}
              </p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-foreground/80"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </ul>
      </div>
    </Section>
  )
}

import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { GitHubIcon } from '@/components/icons/GitHubIcon'
import { Badge } from '@/components/ui/badge'
import { useLocalizedText } from '@/hooks/useLocalization'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  className?: string
}

const MOCKUP_ACCENTS: Record<string, string> = {
  ecommerce: 'bg-primary',
  frontend: 'bg-foreground',
  performance: 'bg-[#4E8B24]',
  'developer-tools': 'bg-foreground',
  'chrome-extension': 'bg-primary',
  'web-applications': 'bg-foreground',
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { t } = useTranslation()
  const localized = useLocalizedText()

  const accent = MOCKUP_ACCENTS[project.category] ?? 'bg-primary'
  const statusLabel = t(`projects.status.${project.status}`)

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover',
        className,
      )}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface p-4">
        <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft">
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
            <span className="size-2 rounded-full bg-border" aria-hidden />
            <span className="size-2 rounded-full bg-border" aria-hidden />
            <span className="size-2 rounded-full bg-border" aria-hidden />
            <span className="ml-2 h-2 w-16 rounded-full bg-muted" aria-hidden />
          </div>
          <div className="grid flex-1 grid-cols-[64px_1fr] gap-2 p-3">
            <div className="flex flex-col gap-1.5" aria-hidden>
              <span className={cn('h-2 w-full rounded-full', accent)} />
              <span className="h-2 w-3/4 rounded-full bg-muted" />
              <span className="h-2 w-5/6 rounded-full bg-muted" />
              <span className="h-2 w-2/3 rounded-full bg-muted" />
            </div>
            <div className="flex flex-col gap-1.5" aria-hidden>
              <span className="h-6 w-full rounded-md bg-muted" />
              <div className="grid grid-cols-3 gap-1.5">
                <span className="h-10 rounded-md bg-muted" />
                <span className="h-10 rounded-md bg-primary-soft" />
                <span className="h-10 rounded-md bg-muted" />
              </div>
              <span className="h-2 w-1/2 rounded-full bg-muted" />
              <span className="h-2 w-2/3 rounded-full bg-muted" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="soft">{t(`projects.categories.${project.category}`)}</Badge>
          <Badge variant="outline">{statusLabel}</Badge>
        </div>

        <h3 className="font-display text-xl font-extrabold text-foreground transition-colors group-hover:text-accent-text">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {localized(project.description)}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label={t('projects.technologies')}>
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-foreground/80"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-4 border-t border-border pt-4">
          <a
            href={project.liveUrl ?? '#contact'}
            target={project.liveUrl ? '_blank' : undefined}
            rel={project.liveUrl ? 'noreferrer noopener' : undefined}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent-text"
          >
            {t('projects.viewCase')}
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <GitHubIcon className="size-4" />
              {t('projects.github')}
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t('projects.live')}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

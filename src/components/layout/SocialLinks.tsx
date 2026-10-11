import { useTranslation } from 'react-i18next'

import { useSocialLinks } from '@/hooks/useSocialLinks'
import { cn } from '@/lib/utils'

interface SocialLinksProps {
  variant?: 'icons' | 'list'
  className?: string
}

export function SocialLinks({ variant = 'icons', className }: SocialLinksProps) {
  const { t } = useTranslation()
  const links = useSocialLinks()
  const todo = t('common.todo')

  if (variant === 'list') {
    return (
      <ul className={cn('flex flex-col gap-3', className)}>
        {links.map(({ id, label, href, configured, Icon }) => (
          <li key={id}>
            <a
              href={configured ? href : '#contact'}
              title={configured ? undefined : todo}
              aria-disabled={!configured}
              className="group inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent-text"
            >
              <span className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-accent-text">
                <Icon className="size-4" aria-hidden />
              </span>
              <span className={cn(!configured && 'text-muted-foreground')}>
                {configured ? label : `${label} — ${todo}`}
              </span>
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {links.map(({ id, label, href, configured, Icon }) => (
        <a
          key={id}
          href={configured ? href : '#contact'}
          target={configured && id !== 'email' ? '_blank' : undefined}
          rel={configured && id !== 'email' ? 'noreferrer noopener' : undefined}
          title={configured ? undefined : todo}
          aria-label={configured ? label : `${label} — ${todo}`}
          className={cn(
            'inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
            !configured && 'opacity-70',
          )}
        >
          <Icon className="size-4" aria-hidden />
        </a>
      ))}
    </div>
  )
}

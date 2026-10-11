import {
  Briefcase,
  FileText,
  FolderKanban,
  Home,
  Mail,
  Sparkles,
  UserRound,
  type LucideIcon,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from '@/components/navigation/LanguageSwitcher'
import { NAV_ITEMS, SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

const NAV_ICONS: Record<string, LucideIcon> = {
  home: Home,
  about: UserRound,
  projects: FolderKanban,
  experience: Briefcase,
  skills: Sparkles,
  resume: FileText,
  contact: Mail,
}

interface FixedSidebarNavigationProps {
  activeId: string
}

export function FixedSidebarNavigation({ activeId }: FixedSidebarNavigationProps) {
  const { t } = useTranslation()
  const label = t('navigation.primary')

  return (
    <aside
      aria-label={label}
      className="fixed right-0 top-0 z-30 hidden h-viewport w-20 flex-col items-center border-l border-border bg-card py-6 lg:flex"
    >
      <a
        href="#home"
        aria-label={SITE.name}
        className="font-display text-base font-extrabold tracking-tight text-foreground"
      >
        {SITE.name.charAt(0)}
        <span className="text-primary" aria-hidden>
          .
        </span>
      </a>

      <nav aria-label={label} className="flex flex-1 items-center">
        <ul className="flex flex-col items-center gap-3">
          {NAV_ITEMS.map(({ id, labelKey }) => {
            const Icon = NAV_ICONS[id] ?? Home
            const active = activeId === id

            return (
              <li key={id} className="group relative flex justify-center">
                <a
                  href={`#${id}`}
                  aria-label={t(labelKey)}
                  aria-current={active ? 'true' : undefined}
                  className={cn(
                    'flex size-11 items-center justify-center rounded-full transition-colors duration-200',
                    active
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-primary-soft hover:text-accent-text',
                  )}
                >
                  <Icon className="size-5" aria-hidden />
                </a>

                <span
                  aria-hidden
                  className="pointer-events-none absolute left-full top-1/2 z-50 ml-3 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background opacity-0 shadow-card transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100"
                >
                  {t(labelKey)}
                </span>
              </li>
            )
          })}
        </ul>
      </nav>

      <LanguageSwitcher />
    </aside>
  )
}

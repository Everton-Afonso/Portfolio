import { Briefcase, Clock, Download, Languages, MapPin, type LucideIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { additionalSkills, profileInfoSections, profileLanguages, profileMeta } from '@/data/profile'
import { technologies } from '@/data/technologies'
import { useLocale } from '@/hooks/useLocalization'
import { useSocialLinks } from '@/hooks/useSocialLinks'
import { RESUME_FILES, SITE } from '@/lib/constants'
import type { ProfileInfoId } from '@/types/profile'

const INFO_ICONS: Record<ProfileInfoId, LucideIcon> = {
  experience: Briefcase,
  location: MapPin,
  availability: Clock,
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}

export function ProfileSidebar() {
  const { t } = useTranslation()
  const [locale] = useLocale()
  const socialLinks = useSocialLinks().filter((link) => link.configured)

  const infoValues: Record<ProfileInfoId, string> = {
    experience: t('common.role'),
    location: profileMeta.location,
    availability: profileMeta.availability,
  }

  const infoItems = profileInfoSections
    .map((section) => ({ ...section, value: infoValues[section.id] }))
    .filter((section) => section.value.trim().length > 0)

  return (
    <aside
      aria-label={t('profile.label')}
      className="fixed left-0 top-0 z-30 hidden h-viewport w-80 flex-col overflow-y-auto overscroll-contain border-r border-border bg-card px-6 py-8 xl:flex"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          {profileMeta.photo ? (
            <img
              src={profileMeta.photo}
              alt={t('profile.photoAlt', { name: SITE.name })}
              loading="lazy"
              className="size-24 rounded-full object-cover ring-4 ring-primary/15"
            />
          ) : (
            <span
              aria-hidden
              className="relative flex size-24 items-center justify-center rounded-full bg-primary-soft font-display text-2xl font-extrabold text-accent-text ring-4 ring-primary/15"
            >
              {getInitials(SITE.name)}

              <span className="absolute bottom-0 right-1 size-4 rounded-full bg-orange-500 ring-4 ring-white" />
            </span>
          )}

          {profileMeta.available ? (
            <span
              aria-hidden
              className="absolute bottom-1 right-1 size-4 rounded-full border-2 border-card bg-primary"
            />
          ) : null}
        </div>

        <h2 className="mt-4 font-display text-lg font-extrabold text-foreground">{SITE.name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{t('common.role')}</p>

        {profileMeta.available ? (
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
            <span aria-hidden className="size-2 rounded-full bg-success" />
            {t('profile.availability')}
          </p>
        ) : null}
      </div>

      {socialLinks.length > 0 ? (
        <ul className="mt-6 flex items-center justify-center gap-2">
          {socialLinks.map(({ id, label, href, Icon }) => (
            <li key={id}>
              <a
                href={href}
                target={id === 'email' ? undefined : '_blank'}
                rel={id === 'email' ? undefined : 'noreferrer noopener'}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-accent-text"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      <Separator className="my-6" />

      {infoItems.length > 0 ? (
        <section aria-labelledby="profile-info-title" className="flex flex-col gap-3">
          <h3
            id="profile-info-title"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
          >
            {t('profile.info.title')}
          </h3>
          <dl className="flex flex-col gap-3">
            {infoItems.map((item) => {
              const Icon = INFO_ICONS[item.id]

              return (
                <div key={item.id} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-4 shrink-0 text-accent-text" aria-hidden />
                  <div className="min-w-0">
                    <dt className="text-xs font-medium text-muted-foreground">
                      {t(item.labelKey)}
                    </dt>
                    <dd className="text-sm font-semibold text-foreground">{item.value}</dd>
                  </div>
                </div>
              )
            })}
          </dl>
        </section>
      ) : null}

      <Separator className="my-6" />

      <section aria-labelledby="profile-languages-title" className="flex flex-col gap-3">
        <h3
          id="profile-languages-title"
          className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
        >
          {t('profile.languages.title')}
        </h3>
        <ul className="flex flex-wrap gap-2">
          {profileLanguages.map((language) => (
            <li key={language.id}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-all duration-300 hover:border-primary/30 hover:shadow-card">
                <Languages className="size-3.5 text-accent-text" aria-hidden />
                {t(language.labelKey)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <Separator className="my-6" />

      <section aria-labelledby="profile-skills-title" className="flex flex-col gap-3">
        <h3
          id="profile-skills-title"
          className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
        >
          {t('profile.skills.title')}
        </h3>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li key={technology.id}>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:shadow-card">
                {technology.name}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="profile-additional-title" className="mt-6 flex flex-col gap-3">
        <h3
          id="profile-additional-title"
          className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
        >
          {t('profile.skills.additional')}
        </h3>
        <ul className="flex flex-wrap gap-2">
          {additionalSkills.map((skill) => (
            <li key={skill}>
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-200 border border-border hover:border-foreground/30">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8">
        <Button asChild size="lg" className="w-full">
          <a href={RESUME_FILES[locale]} download>
            <Download aria-hidden />
            {t('resume.downloadLanguage', { language: t('resume.currentLanguage') })}
          </a>
        </Button>
      </div>
    </aside>
  )
}

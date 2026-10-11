import { useTranslation } from 'react-i18next'

import { SocialLinks } from '@/components/layout/SocialLinks'
import { NAV_ITEMS, SITE } from '@/lib/constants'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-14 max-w-[1400px] px-4">
        <div className="flex max-w-sm flex-col gap-4">
          <a
            href="#home"
            className="font-display text-lg font-extrabold tracking-tight text-foreground"
          >
            {SITE.name}
            <span className="text-primary" aria-hidden>
              .
            </span>
          </a>
          <p className="text-sm leading-relaxed text-muted-foreground">{t('footer.tagline')}</p>
          <SocialLinks />
        </div>

        <nav aria-label={t('footer.navigation')}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t('footer.navigation')}
          </p>
          <ul className="flex flex-col gap-2.5">
            {NAV_ITEMS.map(({ id, labelKey }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t('footer.social')}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">{t('footer.builtWith')}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {SITE.name}. {t('footer.rights')}
          </p>
          <p className="font-mono">{t('footer.stack')}</p>
        </div>
      </div>
    </footer>
  )
}

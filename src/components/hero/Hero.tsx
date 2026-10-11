import { ArrowRight, Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Reveal } from '@/components/layout/Reveal'
import { SocialLinks } from '@/components/layout/SocialLinks'
import { HeroMetrics } from '@/components/hero/HeroMetrics'
import { HeroVisual } from '@/components/hero/HeroVisual'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/hooks/useLocalization'
import { RESUME_FILES } from '@/lib/constants'

export function Hero() {
  const { t } = useTranslation()
  const [locale] = useLocale()

  return (
    <Section id="home" className="relative overflow-hidden pt-10 md:pt-16 mx-auto w-full max-w-[1400px] px-4">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-text">
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {t('hero.badge')}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              {t('hero.titleLine1')}{' '}
              <span className="relative inline-block whitespace-nowrap text-accent-text">
                {t('hero.titleHighlight')}
                <svg
                  aria-hidden
                  viewBox="0 0 240 12"
                  fill="none"
                  className="absolute -bottom-2 left-0 h-3 w-full"
                >
                  <path
                    d="M3 9C60 3 180 3 237 8"
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t('hero.description')}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  {t('hero.primaryCta')}
                  <ArrowRight aria-hidden />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={RESUME_FILES[locale]} download>
                  <Download aria-hidden />
                  {t('hero.secondaryCta')}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex items-center gap-4">
              <SocialLinks />
              <span aria-hidden className="h-px w-10 bg-border" />
              <span className="font-mono text-xs text-muted-foreground">{t('hero.stackLine')}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-4">
          <HeroVisual />
        </Reveal>
      </div>

      <HeroMetrics />
    </Section>
  )
}

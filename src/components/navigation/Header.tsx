import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SocialLinks } from '@/components/layout/SocialLinks'
import { LanguageSwitcher } from '@/components/navigation/LanguageSwitcher'
import { MobileMenu } from '@/components/navigation/MobileMenu'
import { Button } from '@/components/ui/button'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface HeaderProps {
  activeId: string
  className?: string
}

export function Header({ activeId, className }: HeaderProps) {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 shadow-soft backdrop-blur-md'
          : 'border-b border-transparent bg-background/60 backdrop-blur-sm',
        className,
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20 max-w-[1400px] px-4">
        <a
          href="#home"
          className="font-display text-base font-extrabold tracking-tight text-foreground md:text-lg"
        >
          {SITE.name}
          <span className="text-primary" aria-hidden>
            .
          </span>
        </a>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden md:flex">
            <SocialLinks />
          </div>
          <LanguageSwitcher />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">
              {t('navigation.hire')}
              <ArrowUpRight aria-hidden />
            </a>
          </Button>
          <MobileMenu activeId={activeId} />
        </div>
      </div>
    </header>
  )
}

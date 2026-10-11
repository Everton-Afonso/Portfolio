import { ArrowUpRight, Menu } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SocialLinks } from '@/components/layout/SocialLinks'
import { LanguageSwitcher } from '@/components/navigation/LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  activeId: string
}

export function MobileMenu({ activeId }: MobileMenuProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label={t('navigation.openMenu')}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted lg:hidden"
        >
          <Menu className="size-5" aria-hidden />
        </button>
      </SheetTrigger>

      <SheetContent className="gap-8 p-6" closeLabel={t('navigation.closeMenu')}>
        <SheetTitle className="sr-only">{t('navigation.menu')}</SheetTitle>

        <nav aria-label={t('navigation.menu')}>
          <ul className="flex flex-col gap-1 max-lg:pt-7">
            {NAV_ITEMS.map(({ id, labelKey }) => {
              const active = activeId === id

              return (
                <li key={id}>
                  <SheetClose asChild>
                    <a
                      href={`#${id}`}
                      aria-current={active ? 'true' : undefined}
                      className={cn(
                        'flex items-center justify-between rounded-md px-3 py-3 font-display text-lg font-bold transition-colors',
                        active
                          ? 'bg-primary-soft text-accent-text'
                          : 'text-foreground hover:bg-muted',
                      )}
                    >
                      {t(labelKey)}
                      {active ? (
                        <span aria-hidden className="size-2 rounded-full bg-primary" />
                      ) : null}
                    </a>
                  </SheetClose>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mt-auto flex flex-col gap-4 border-t border-border pt-6">
          <div className="flex items-center justify-between">
            <LanguageSwitcher />
            <SocialLinks />
          </div>
          <SheetClose asChild>
            <Button asChild className="w-full">
              <a href="#contact">
                {t('navigation.hire')}
                <ArrowUpRight aria-hidden />
              </a>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

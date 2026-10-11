import { useTranslation } from 'react-i18next'
import type * as React from 'react'

import { Footer } from '@/components/footer/Footer'
import { FixedSidebarNavigation } from '@/components/navigation/FixedSidebarNavigation'
import { Header } from '@/components/navigation/Header'
import { ProfileSidebar } from '@/components/profile/ProfileSidebar'
import { useActiveSection } from '@/hooks/useActiveSection'
import { NAV_IDS } from '@/lib/constants'

interface PortfolioLayoutProps {
  children: React.ReactNode
}

/**
 * Shared layout that reserves space for both fixed sidebars.
 *
 * - Left rail: visible from `lg`, icon navigation.
 * - Right profile: visible from `xl`, internally scrollable.
 * - Below `lg` the existing `Header` (drawer + actions) handles navigation.
 */
export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const { t } = useTranslation()
  const activeId = useActiveSection(NAV_IDS)

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        {t('common.skipToContent')}
      </a>

      <Header activeId={activeId} className="lg:hidden" />

      <ProfileSidebar />

      <div className="lg:pl-[var(--layout-sidebar-left)] xl:pr-[var(--layout-sidebar-right)]">
        <main id="main" className="mx-auto w-full">
          {children}
        </main>
        <Footer />
      </div>

      <FixedSidebarNavigation activeId={activeId} />
    </div>
  )
}

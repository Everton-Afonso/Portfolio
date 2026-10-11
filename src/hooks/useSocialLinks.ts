import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { GitHubIcon } from '@/components/icons/GitHubIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { CONTACT, isConfigured } from '@/lib/constants'
import type * as React from 'react'

export type SocialId = 'github' | 'linkedin' | 'email'

export interface SocialLink {
  id: SocialId
  label: string
  href: string
  configured: boolean
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export function useSocialLinks(): SocialLink[] {
  const { t } = useTranslation()

  return [
    {
      id: 'github',
      label: 'GitHub',
      href: CONTACT.github,
      configured: isConfigured(CONTACT.github),
      Icon: GitHubIcon,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: CONTACT.linkedin,
      configured: isConfigured(CONTACT.linkedin),
      Icon: LinkedInIcon,
    },
    {
      id: 'email',
      label: t('contact.email'),
      href: CONTACT.email ? `mailto:${CONTACT.email}` : '',
      configured: isConfigured(CONTACT.email),
      Icon: Mail,
    },
  ]
}

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { SITE } from '@/lib/constants'

/**
 * Keeps <title>, meta description, canonical and html lang in sync with the active language.
 */
export function useDocumentMeta(): void {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('seo.title')

    const description = t('seo.description')
    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)

    if (SITE.url.trim().length > 0) {
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')

      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }

      canonical.setAttribute('href', SITE.url)
    }

    document.documentElement.lang = i18n.language
  }, [t, i18n.language])
}

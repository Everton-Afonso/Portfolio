import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view using a single IntersectionObserver.
 *
 * A narrow root margin turns the observer into a "scroll spy": the section
 * crossing the middle of the viewport becomes active, so no continuous scroll
 * listener is needed.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [activeId, setActiveId] = useState(() => ids[0] ?? '')

  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let next = ''
        let best = 0

        for (const id of ids) {
          const ratio = ratios.get(id) ?? 0
          if (ratio > best) {
            best = ratio
            next = id
          }
        }

        if (next) setActiveId(next)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    for (const element of elements) observer.observe(element)

    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && ids.includes(hash)) setActiveId(hash)
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', syncFromHash)
    }
  }, [ids])

  return activeId
}

import { useEffect, useState } from 'react'

const OFFSET = 120

/**
 * Returns the id of the section currently being read, based on scroll position.
 */
export function useScrollSpy(ids: string[]): string {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const getActive = () => {
      const position = window.scrollY + OFFSET

      let current = ids[0] ?? ''
      for (const id of ids) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= position) {
          current = id
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = ids[ids.length - 1] ?? current
      }

      setActiveId(current)
    }

    getActive()
    window.addEventListener('scroll', getActive, { passive: true })
    window.addEventListener('resize', getActive)

    return () => {
      window.removeEventListener('scroll', getActive)
      window.removeEventListener('resize', getActive)
    }
  }, [ids])

  return activeId
}

import { useCallback, useEffect, useRef, useState } from 'react'

type RevealState = {
  ref: (node: HTMLElement | null) => void
  visible: boolean
}

/**
 * Reveals elements with the `reveal` class once they enter the viewport.
 * Respects `prefers-reduced-motion` through CSS.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delay = 0): RevealState {
  const [visible, setVisible] = useState(false)
  const nodeRef = useRef<T | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const ref = useCallback(
    (node: HTMLElement | null) => {
      nodeRef.current = node as T | null

      if (!node) return

      if (typeof IntersectionObserver === 'undefined') {
        setVisible(true)
        return
      }

      observerRef.current?.disconnect()

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              if (delay > 0) {
                window.setTimeout(() => setVisible(true), delay)
              } else {
                setVisible(true)
              }
              observer.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
      )

      observer.observe(node)
      observerRef.current = observer
    },
    [delay],
  )

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return { ref, visible }
}

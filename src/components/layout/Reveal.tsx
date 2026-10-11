import * as React from 'react'

import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
}

export function Reveal({ delay = 0, className, children, ...props }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>(delay)

  return (
    <div ref={ref} data-visible={visible} className={cn('reveal', className)} {...props}>
      {children}
    </div>
  )
}

interface RevealItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  delay?: number
}

/**
 * List item with the same reveal animation — keeps `<ul>`/`<ol>` semantics valid.
 */
export function RevealItem({ delay = 0, className, children, ...props }: RevealItemProps) {
  const { ref, visible } = useReveal<HTMLLIElement>(delay)

  return (
    <li ref={ref} data-visible={visible} className={cn('reveal', className)} {...props}>
      {children}
    </li>
  )
}

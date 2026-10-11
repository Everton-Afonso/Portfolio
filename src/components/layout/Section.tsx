import * as React from 'react'

import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string
  surface?: boolean
  children: React.ReactNode
}

export function Section({ id, surface = false, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('section', surface && 'section-surface', className)} {...props}>
      {children}
    </section>
  )
}

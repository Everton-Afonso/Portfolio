import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'vtex-international-ecommerce',
    title: 'E-commerce VTEX',
    category: 'ecommerce',
    description: {
      'pt-BR':
        'TODO: ADD REAL INFORMATION — descreva o escopo do projeto, sua responsabilidade e os resultados entregues na operação internacional de e-commerce.',
      'en-US':
        'TODO: ADD REAL INFORMATION — describe the project scope, your responsibility and the outcomes delivered in the international e-commerce operation.',
    },
    technologies: ['VTEX IO', 'React', 'TypeScript', 'GraphQL', 'REST APIs'],
    status: 'completed',
  },
  {
    id: 'performance-intelligence',
    title: 'Performance Intelligence',
    category: 'performance',
    description: {
      'pt-BR':
        'TODO: ADD REAL INFORMATION — descreva a ferramenta, o problema que ela resolve e como você a construiu.',
      'en-US':
        'TODO: ADD REAL INFORMATION — describe the tool, the problem it solves and how you built it.',
    },
    technologies: ['React', 'TypeScript', 'Performance'],
    status: 'completed',
  },
  {
    id: 'chrome-extension',
    title: 'Chrome Extension',
    category: 'chrome-extension',
    description: {
      'pt-BR':
        'TODO: ADD REAL INFORMATION — descreva a extensão, o problema que ela resolve e as tecnologias utilizadas.',
      'en-US':
        'TODO: ADD REAL INFORMATION — describe the extension, the problem it solves and the technologies used.',
    },
    technologies: ['TypeScript', 'JavaScript', 'Chrome APIs'],
    status: 'completed',
  },
]

export const inProgressProjects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    category: 'frontend',
    description: {
      'pt-BR':
        'Portfólio profissional construído com React, TypeScript, Vite e Tailwind CSS, com i18n (PT-BR/EN-US), design system próprio e foco em performance e acessibilidade.',
      'en-US':
        'Professional portfolio built with React, TypeScript, Vite and Tailwind CSS, with i18n (PT-BR/EN-US), a custom design system and a focus on performance and accessibility.',
    },
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    status: 'in-progress',
  },
]

import type { ExpertiseItem } from '@/types/expertise'

export const expertise: ExpertiseItem[] = [
  {
    id: 'frontend-development',
    icon: 'code',
    title: {
      'pt-BR': 'Frontend Development',
      'en-US': 'Frontend Development',
    },
    description: {
      'pt-BR': 'React, TypeScript e arquitetura de componentes reutilizáveis e manteníveis.',
      'en-US': 'React, TypeScript and reusable, maintainable component architecture.',
    },
  },
  {
    id: 'ecommerce',
    icon: 'shopping-cart',
    title: {
      'pt-BR': 'E-commerce',
      'en-US': 'E-commerce',
    },
    description: {
      'pt-BR': 'VTEX IO, Headless Commerce e integrações para operações digitais.',
      'en-US': 'VTEX IO, Headless Commerce and integrations for digital operations.',
    },
  },
  {
    id: 'api-integration',
    icon: 'plug',
    title: {
      'pt-BR': 'API Integration',
      'en-US': 'API Integration',
    },
    description: {
      'pt-BR': 'REST, GraphQL, middlewares e serviços internos e externos.',
      'en-US': 'REST, GraphQL, middlewares and internal/external services.',
    },
  },
  {
    id: 'web-performance',
    icon: 'gauge',
    title: {
      'pt-BR': 'Web Performance',
      'en-US': 'Web Performance',
    },
    description: {
      'pt-BR': 'Core Web Vitals, CLS, LCP e otimização de bundle e de assets.',
      'en-US': 'Core Web Vitals, CLS, LCP and bundle/assets optimization.',
    },
  },
  {
    id: 'problem-solving',
    icon: 'bug',
    title: {
      'pt-BR': 'Problem Solving',
      'en-US': 'Problem Solving',
    },
    description: {
      'pt-BR': 'Investigação e correção de problemas em produção com foco em estabilidade.',
      'en-US': 'Production debugging and issue resolution with a focus on stability.',
    },
  },
  {
    id: 'developer-experience',
    icon: 'blocks',
    title: {
      'pt-BR': 'Developer Experience',
      'en-US': 'Developer Experience',
    },
    description: {
      'pt-BR':
        'Componentes reutilizáveis, arquitetura organizada e ferramentas que aceleram o time.',
      'en-US': 'Reusable components, organized architecture and tooling that speeds the team up.',
    },
  },
]

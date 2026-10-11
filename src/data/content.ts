import type { HeroMetric, PerformanceItem } from '@/types/content'

/**
 * Metric labels are qualitative on purpose — no invented numbers.
 */
export const heroMetrics: HeroMetric[] = [
  {
    id: 'react',
    value: 'React',
    label: {
      'pt-BR': 'Ecossistema principal',
      'en-US': 'Primary ecosystem',
    },
    description: {
      'pt-BR': 'Interfaces e aplicações',
      'en-US': 'Interfaces and applications',
    },
  },
  {
    id: 'vtex',
    value: 'VTEX',
    label: {
      'pt-BR': 'E-commerce',
      'en-US': 'E-commerce',
    },
    description: {
      'pt-BR': 'Operações digitais',
      'en-US': 'Digital operations',
    },
  },
  {
    id: 'typescript',
    value: 'TypeScript',
    label: {
      'pt-BR': 'Tipagem de ponta a ponta',
      'en-US': 'End-to-end type safety',
    },
    description: {
      'pt-BR': 'Código confiável',
      'en-US': 'Reliable code',
    },
  },
  {
    id: 'performance',
    value: 'Performance',
    label: {
      'pt-BR': 'Otimização web',
      'en-US': 'Web optimization',
    },
    description: {
      'pt-BR': 'Core Web Vitals',
      'en-US': 'Core Web Vitals',
    },
  },
]

export const performanceItems: PerformanceItem[] = [
  {
    id: 'core-web-vitals',
    title: 'Core Web Vitals',
    description: {
      'pt-BR':
        'Métricas essenciais de experiência de usuário monitoradas do desenvolvimento à produção.',
      'en-US': 'Essential user experience metrics tracked from development to production.',
    },
  },
  {
    id: 'lcp',
    title: 'LCP',
    description: {
      'pt-BR':
        'Largest Contentful Paint — priorização do conteúdo principal e de recursos críticos.',
      'en-US': 'Largest Contentful Paint — main content prioritization and critical resources.',
    },
  },
  {
    id: 'cls',
    title: 'CLS',
    description: {
      'pt-BR':
        'Cumulative Layout Shift — espaços reservados e fontes otimizadas para evitar saltos de layout.',
      'en-US':
        'Cumulative Layout Shift — reserved space and optimized fonts to avoid layout jumps.',
    },
  },
  {
    id: 'inp',
    title: 'INP',
    description: {
      'pt-BR':
        'Interaction to Next Paint — interações responsivas e trabalhando fora da thread principal.',
      'en-US': 'Interaction to Next Paint — responsive interactions and work off the main thread.',
    },
  },
  {
    id: 'bundle-optimization',
    title: 'Bundle Optimization',
    description: {
      'pt-BR':
        'Code splitting, tree shaking e análise de dependências para carregar apenas o necessário.',
      'en-US': 'Code splitting, tree shaking and dependency analysis to ship only what is needed.',
    },
  },
  {
    id: 'lazy-loading',
    title: 'Lazy Loading',
    description: {
      'pt-BR': 'Carregamento sob demanda de rotas, imagens e componentes não críticos.',
      'en-US': 'On-demand loading of routes, images and non-critical components.',
    },
  },
  {
    id: 'image-optimization',
    title: 'Image Optimization',
    description: {
      'pt-BR': 'Formatos modernos, dimensões corretas e lazy loading com espaço reservado.',
      'en-US': 'Modern formats, correct dimensions and lazy loading with reserved space.',
    },
  },
  {
    id: 'rendering-performance',
    title: 'Rendering Performance',
    description: {
      'pt-BR': 'Renders desnecessários evitados, memoização aplicada onde ela realmente ajuda.',
      'en-US': 'Unnecessary renders avoided, memoization applied where it actually helps.',
    },
  },
]

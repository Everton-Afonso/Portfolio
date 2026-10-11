export type TechnologyCategory = 'frontend' | 'backend' | 'ecommerce' | 'database' | 'tooling'

export interface Technology {
  id: string
  name: string
  mark: string
  category: TechnologyCategory
}

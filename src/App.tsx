import { PortfolioLayout } from '@/components/layout/PortfolioLayout'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { Home } from '@/pages/Home'

function App() {
  useDocumentMeta()

  return (
    <PortfolioLayout>
      <Home />
    </PortfolioLayout>
  )
}

export default App

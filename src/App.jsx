import { HashRouter, Route, Routes } from 'react-router'
import GreatVibes from './fonts/GreatVibes-Regular.ttf'
import PageWrapper from './Components/PageWrapper'
import HomePage from './pages/HomePage'
import ValentineTestPage from './pages/ValentineTestPage/ValentineTestPage'
import RealValentineTest from './pages/RealValentineTest/RealValentineTest'
import RealValentineTestResults from './pages/realValentineTestResults/realValentineTestResults'
import ReasonsToLove from './pages/ReasonsToLove/ReasonsToLove'
import Lovesongs from './pages/Lovesongs/Lovesongs'
import ConclusionPage from './pages/ConclusionPage/ConclusionPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="valentine-test" element={<ValentineTestPage />} />
          <Route path="real-valentine-test">
            <Route index element={<RealValentineTest />} />
            <Route path="results" element={<RealValentineTestResults />} />
          </Route>
          <Route path="reasons-to-love-you" element={<ReasonsToLove />} />
          <Route path="lovesongs" element={<Lovesongs />} />
          <Route path="conclusion" element={<ConclusionPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './context/CycleContext'
import { Router } from './router'

function App() {
  return (
    <BrowserRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </BrowserRouter>
  )
}

export default App

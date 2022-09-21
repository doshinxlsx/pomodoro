import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './context/CycleContext'
import { Router } from './router'

import { GlobalStyle } from './theme/global'
import { darkTheme } from './theme/dark'
import { lightTheme } from './theme/light'
import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  currentTheme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark')

  const toggleTheme = () => {
    currentTheme === 'dark' ? setCurrentTheme('light') : setCurrentTheme('dark')
  }

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App

import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { AllProductsContextProvider } from './contexts/AllProductsContext'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <AllProductsContextProvider>
          <Router />
        </AllProductsContextProvider>
      </ThemeProvider>
    </>
  )
}

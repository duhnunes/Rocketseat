import { ThemeProvider } from 'styled-components'
import { Outlet } from 'react-router-dom'

import { Header } from './components/Header'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './contexts/CartProvider'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  )
}
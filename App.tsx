import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import { AppProvider } from './src/hooks'
import { Routes } from './src/routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  )
}

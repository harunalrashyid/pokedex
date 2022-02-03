import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Offline from '@components/Offline'
import theme from '@styled/theme'

describe('Component Offline', () => {
  it('Should render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Offline />
      </ThemeProvider>
    )

    const title = screen.getByText(/It seems you were offline/i)
    const btnLabel = screen.getByText(/RELOAD/i)

    expect(title).toBeInTheDocument()
    expect(btnLabel).toBeInTheDocument()
  })
})
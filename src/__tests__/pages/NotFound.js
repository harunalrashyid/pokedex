import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import NotFound from '@pages/NotFound'
import theme from '@styled/theme'

describe('Pages NotFound', () => {
  it('Should render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <NotFound />
      </ThemeProvider>
    )

    const title = screen.getByText(/Not Found Page/i)
    expect(title).toBeInTheDocument()
  })
})
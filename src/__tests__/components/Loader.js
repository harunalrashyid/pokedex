import React from 'react'
import { render, screen } from '@testing-library/react'
import styled, { ThemeProvider } from 'styled-components'
import '@testing-library/jest-dom'

import Loader from '@components/Loader'
import theme from '@styled/theme'

describe('Component Loader', () => {
  it('Should render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Loader />
      </ThemeProvider>
    )

    const logo = screen.getByAltText(/loading/i)
    const content = screen.getByText('loading...')

    expect(logo).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })
})
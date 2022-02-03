import React from 'react'
import { render, screen } from '@testing-library/react'
import styled, { ThemeProvider } from 'styled-components'
import '@testing-library/jest-dom'

import Pagination from '@components/Pagination'
import theme from '@styled/theme'

describe('Component Pagination', () => {
  it('Should render correctly', () => {
    render(
      <ThemeProvider theme={ theme }>
        <Pagination />
      </ThemeProvider>
    )

    const content = screen.getByText(/load more/i)
    expect(content).toBeInTheDocument()
  })
})
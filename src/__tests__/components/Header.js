import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import '@testing-library/jest-dom'

import Header from '@components/Header'
import theme from '@styled/theme'

describe('Component Header', () => {
  it('Should render correctly', () => {
    render(
      <ThemeProvider theme={ theme }>
        <Header />
      </ThemeProvider>,
      { wrapper: MemoryRouter }
    )

    const title = screen.getByText('Pokédex')
    expect(title).toBeInTheDocument()
  })
})
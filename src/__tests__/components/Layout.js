import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import Layout from '@components/Layout'

describe('Component Layout', () => {
  it('Should render correctly', () => {
    render(
      <Layout />,
      { wrapper: MemoryRouter }
    )

    const title = screen.getByText('Pokédex')
    expect(title).toBeInTheDocument()
  })

  it('Should able render children correctly', () => {
    const childrenContent = 'Children layout content'

    render(
      <Layout>
        <h1>Children layout content</h1>
      </Layout>,
      { wrapper: MemoryRouter }
    )

    const content = screen.getByText(childrenContent)
    expect(content).toBeInTheDocument()
  })
})
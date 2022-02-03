import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components'
import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { initializeStore } from '@store'
import theme from '@styled/theme'

import Detail from '@pages/Detail'

describe('Pages Detail', () => {
  const store = initializeStore()

  afterEach(() => jest.clearAllMocks());

  it('Should render correctly', () => {
    render(
      <MockedProvider addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <ThemeProvider theme={theme}>
              <Detail />
            </ThemeProvider>
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    )

    const content = screen.getByText(/loading.../i)
    expect(content).toBeInTheDocument()
  })
})
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components'
import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import GET_SPECIES from '@services/schema/species/list'
import { initializeStore } from '@store'
import theme from '@styled/theme'

import Pokemon from '@components/Pokemon'

describe('Component Pokemon', () => {
  const store = initializeStore()
  const wait = () => new Promise(resolve => setTimeout(resolve, 0))

  const queryVariables = {
    limit: 10,
    offset: 0,
    orderBy: 'asc',
    types: {},
    generations: {}
  }

  const pokemonsMock = {
    request: {
      query: GET_SPECIES,
      variables: queryVariables
    },
    result: {
      data: {
        pokemons: [
          {
            id: 1,
            name: 'bulbasaur',
            types: [
              {
                item: {
                  id: 12,
                  name: 'grass'
                }
              },
              {
                item: {
                  id: 4,
                  name: 'poison'
                }
              }
            ]
          },
          {
            id: 2,
            name: 'ivysaur',
            types: [
              {
                item: {
                  id: 12,
                  name: 'grass'
                }
              },
              {
                item: {
                  id: 4,
                  name: 'poison'
                }
              }
            ]
          },
          {
            id: 3,
            name: 'venusaur',
            types: [
              {
                item: {
                  id: 12,
                  name: 'grass'
                }
              },
              {
                item: {
                  id: 4,
                  name: 'poison'
                }
              }
            ]
          }
        ],
      },
    }
  }

  const pokemonsErrorMock = {
    request: {
      query: GET_SPECIES,
      variables: queryVariables
    },
    error: new Error('An error occured')
  }

  beforeEach(() => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    })
    window.IntersectionObserver = mockIntersectionObserver
  });
  afterEach(() => jest.clearAllMocks());

  it('Should render correctly', async () => {
    render(
      <MockedProvider mocks={[pokemonsMock]} addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <ThemeProvider theme={theme}>
              <Pokemon />
            </ThemeProvider>
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    )

    await act(() => wait())

    const fetchTitle = screen.getByText(/Bulbasaur/i)
    const fetchLink = screen.getByText(/Bulbasaur/i)
    const fetchType = screen.getAllByText(/Grass/i)[0]

    expect(fetchTitle).toBeInTheDocument()
    expect(fetchTitle).toHaveAttribute('href', expect.stringContaining('bulbasaur'))
    expect(fetchType).toBeInTheDocument()
  })

  it('Should show error message when fetching fails', async () => {
    render(
      <MockedProvider mocks={[pokemonsErrorMock]} addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <ThemeProvider theme={theme}>
              <Pokemon />
            </ThemeProvider>
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    )

    await act(() => wait())

    const errorMessage = screen.getByText(/An error occured/i)
    expect(errorMessage).toBeInTheDocument()
  })
})
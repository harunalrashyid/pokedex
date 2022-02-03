import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components'
import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import GET_SPEC_DETAIL from '@services/schema/species/detail'
import { initializeStore } from '@store'
import theme from '@styled/theme'

import PokemonDetail from '@components/PokemonDetail'

describe('Component PokemonDetail', () => {
  const store = initializeStore()
  const wait = () => new Promise(resolve => setTimeout(resolve, 0))

  const queryVariables = {
    name: 'ivysaur'
  }

  const detailMock = {
    request: {
      query: GET_SPEC_DETAIL,
      variables: queryVariables
    },
    result: {
      data: {
        pokemons: [
          {
            id: 2,
            name: 'ivysaur',
            description: [
              {
                detail:
                  'When the bulb on\nits back grows\nlarge, it appears\fto lose the\nability to stand\non its hind legs.'
              }
            ],
            detail: [
              {
                height: 10,
                weight: 130,
                abilities: [
                  {
                    item: {
                      id: 34,
                      name: 'chlorophyll'
                    }
                  },
                  {
                    item: {
                      id: 65,
                      name: 'overgrow'
                    }
                  }
                ],
                specs: {
                  evolutions: {
                    species: [
                      {
                        id: 1,
                        name: 'bulbasaur'
                      },
                      {
                        id: 2,
                        name: 'ivysaur'
                      },
                      {
                        id: 3,
                        name: 'venusaur'
                      }
                    ]
                  }
                },
                stats: [
                  {
                    id: 7,
                    baseStat: 60,
                    item: {
                      name: 'hp'
                    }
                  },
                  {
                    id: 8,
                    baseStat: 62,
                    item: {
                      name: 'attack'
                    }
                  },
                  {
                    id: 9,
                    baseStat: 63,
                    item: {
                      name: 'defense'
                    }
                  },
                  {
                    id: 10,
                    baseStat: 80,
                    item: {
                      name: 'special-attack'
                    }
                  },
                  {
                    id: 11,
                    baseStat: 80,
                    item: {
                      name: 'special-defense'
                    }
                  },
                  {
                    id: 12,
                    baseStat: 60,
                    item: {
                      name: 'speed'
                    }
                  }
                ],
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
            ]
          }
        ]
      }
    }
  }

  // const detailErrorMock = {
  //   request: {
  //     query: GET_SPEC_DETAIL,
  //     variables: queryVariables
  //   },
  //   error: new Error('An error occured')
  // }

  afterEach(() => jest.clearAllMocks());

  it('Should render correctly', async () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true)
    window.scrollTo = jest.fn()

    render(
      <MockedProvider mocks={[detailMock]} addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <ThemeProvider theme={theme}>
              <PokemonDetail pokemonName={queryVariables.name} />
            </ThemeProvider>
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    )

    await act(() => wait())

    const title = screen.getAllByText(/ivysaur/i)[0]
    const height = screen.getByText('3.3" (1m)')
    const weight = screen.getByText('28.7 lbs (13 kg)')
    const abilities = screen.getByText('Chlorophyll, Overgrow')
    const stat = screen.getByText('Hp')
    const evolution = screen.getByText(/venusaur/i)

    expect(title).toBeInTheDocument()
    expect(height).toBeInTheDocument()
    expect(weight).toBeInTheDocument()
    expect(abilities).toBeInTheDocument()
    expect(stat).toBeInTheDocument()
    expect(evolution).toBeInTheDocument()
  })
})
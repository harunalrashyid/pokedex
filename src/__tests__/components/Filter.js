import React from 'react'
import { MockedProvider } from '@apollo/client/testing';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components'
import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import GET_TYPES from '@services/schema/type/list'
import GET_GENERATIONS from '@services/schema/generation/list'
import { initializeStore } from '@store'
import theme from '@styled/theme'

import Filter from '@components/Filter'

describe('Component Filter', () => {
  const store = initializeStore()
  const wait = () => new Promise(resolve => setTimeout(resolve, 0))

  const typesMock = {
    request: {
      query: GET_TYPES
    },
    result: {
      data: {
        types: [
          { id: 1, name: 'bug' },
          { id: 2, name: 'ghost' }
        ]
      }
    }
  }

  const generationMock = {
    request: {
      query: GET_GENERATIONS
    },
    result: {
      data: {
        generations: [
          { id: 1, name: 'generation-i' },
          { id: 2, name: 'generation-ii' }
        ]
      }
    }
  }

  it('Should render correctly', () => {
    render(
      <MockedProvider addTypename={false}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Filter />
          </ThemeProvider>
        </Provider>
      </MockedProvider>
    )

    const title = screen.getByText('Filters')
    const filterType = screen.getByText('By Types')
    const filterGeneartion = screen.getByText('By Generations')

    expect(title).toBeInTheDocument()
    expect(filterType).toBeInTheDocument()
    expect(filterGeneartion).toBeInTheDocument()
  })

  it('Should fetch filter types correctly', async () => {
    render(
      <MockedProvider mocks={[typesMock]} addTypename={false}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Filter />
          </ThemeProvider>
        </Provider>
      </MockedProvider>
    )

    await act(() => wait())

    const filterItem = screen.getByText(/bug/i)
    expect(filterItem).toBeInTheDocument()
  })

  it('Should fetch filter generations correctly', async () => {
    render(
      <MockedProvider mocks={[generationMock]} addTypename={false}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Filter />
          </ThemeProvider>
        </Provider>
      </MockedProvider>
    )

    await act(() => wait())

    const filterItem = screen.getByText('generation-i')
    expect(filterItem).toBeInTheDocument()
  })

  it('Click filter header should close sidebar', () => {
    render(
      <MockedProvider addTypename={false}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Filter />
          </ThemeProvider>
        </Provider>
      </MockedProvider>
    )

    const actionBtn = screen.getByText('Filters')
    userEvent.click(actionBtn)

    const state = store.getState()
    const filterState = state.app.sidebar

    expect(filterState).toHaveProperty('active', false)
  })

  it('Click save filter should handle correctly', async () => {
    render(
      <MockedProvider mocks={[typesMock, generationMock]} addTypename={false}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Filter />
          </ThemeProvider>
        </Provider>
      </MockedProvider>
    )

    await act(() => wait())

    const filterItemType = screen.getByText('bug')
    const filterItemGeneration = screen.getByText('generation-i')
    const actionBtn = screen.getByText(/Save Filter/i)

    userEvent.click(filterItemType)
    userEvent.click(filterItemGeneration)
    userEvent.click(actionBtn)

    await act(() => wait())

    const state = store.getState()
    const filterState = state.app.filter

    expect(filterState).toHaveProperty('count', 2)
  })
})
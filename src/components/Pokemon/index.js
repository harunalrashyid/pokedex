import React from 'react'
import styled from 'styled-components'
import { useQuery, NetworkStatus } from '@apollo/client'
import { InView } from 'react-intersection-observer'

import { Grid } from '@styled/common'
import GET_SPECIES from '@services/schema/species/list'
import Pagination from '@components/Pagination'
import { useSelector } from 'react-redux'

import PokemonToolbar from './PokemonToolbar'
import PokemonItem from './PokemonItem'

const gapItem = 15

const Pokemon = () => {
  const filterTypes = useSelector((state) => state.app.filter.types)
  const filterGenerations = useSelector((state) => state.app.filter.generations)

  const { networkStatus, error, data, fetchMore } = useQuery(GET_SPECIES, {
    notifyOnNetworkStatusChange: true,
    variables:{
      limit: 10,
      offset: 0,
      ...(filterTypes.length && {
        types: { _in: filterTypes }
      }),
      ...(filterGenerations.length && {
        generations: { _in: filterGenerations }
      })
    }
  })

  const handlePaginationChange = async (inView) => {
    if (inView) {
      const result = await fetchMore({
        variables: { offset: data.pokemons.length },
      })

      return result
    }
  }

  if (networkStatus === NetworkStatus.loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <PokemonGrid justify="center" wrap="wrap">
      <PokemonToolbar count={data.pokemons.length} />
      <PokemonList gap={gapItem}>
        {data.pokemons.map(item => (
          <PokemonItem
            key={item.id}
            data={item}
            gap={gapItem}
          />
        ))}
      </PokemonList>
      {networkStatus !== NetworkStatus.fetchMore &&
        <InView onChange={handlePaginationChange}>
          <Pagination />
        </InView>
      }
    </PokemonGrid>
  )
}

export default Pokemon

const PokemonGrid = styled(Grid)`
  padding-top: 2.625rem;
  padding-bottom: 1.5rem;
`

const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: ${props => props.gap}px;
  margin: 1.5rem 0;
`

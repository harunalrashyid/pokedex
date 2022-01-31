import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client';
import { InView } from 'react-intersection-observer'

import { Grid } from '@styled/common'
import GET_SPECIES from '@services/schema/species/list'
import Pagination from '@components/Pagination'

import PokemonItem from './PokemonItem'

const gapItem = 15

const Pokemon = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_SPECIES, {
    variables: { limit: 10, offset: 0 }
  })

  const handlePaginationChange = async (inView) => {
    if (inView) {
      const result = await fetchMore({
        variables: { offset: data.pokemons.length }
      })

      return result
    }
  }

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <Grid justify="center" wrap="wrap">
      <PokemonList gap={gapItem}>
        {data.pokemons.map(item => (
          <PokemonItem
            key={item.id}
            data={item}
            gap={gapItem}
          />
        ))}
      </PokemonList>
      <InView onChange={handlePaginationChange}>
        <Pagination />
      </InView>
    </Grid>
  )
}

export default Pokemon

const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.gap}px;
  margin: 1.5rem 0;
`

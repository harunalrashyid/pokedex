import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client';

import GET_SPECIES from '@services/schema/species/list'
import PokemonItem from './PokemonItem'

const gapItem = 15

const Pokemon = () => {
  const { loading, error, data } = useQuery(GET_SPECIES, {
    variables: { limit: 20, offset: 0 }
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <PokemonList gap={gapItem}>
      {data.pokemons.map(item => (
        <PokemonItem
          key={item.id}
          data={item}
          gap={gapItem}
        />
      ))}
    </PokemonList>
  )
}

export default Pokemon

const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.gap}px;
  margin: 1.5rem 0;
`

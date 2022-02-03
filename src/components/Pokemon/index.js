import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useQuery, NetworkStatus } from '@apollo/client'
import { isEmpty } from 'lodash'

import { Grid } from '@styled/common'
import GET_SPECIES from '@services/schema/species/list'
import Loader from '@components/Loader'

import PokemonToolbar from './PokemonToolbar'
import PokemonItem from './PokemonItem'
import PokemonMore from './PokemonMore'

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

  if (networkStatus === NetworkStatus.loading) return <Loader />
  if (error) return `Error! ${error.message}`

  return (
    <PokemonGrid justify="center" wrap="wrap">
      <PokemonToolbar count={data.pokemons.length} />
      {data && !isEmpty(data.pokemons) 
        ? <>
            <PokemonList gap={gapItem}>
              {data.pokemons.map(item => (
                <PokemonItem
                  key={item.id}
                  data={item}
                  gap={gapItem}
                />
              ))}
            </PokemonList>
            <PokemonMore
              data={data}
              fetchMore={fetchMore}
              networkStatus={networkStatus}
            />
          </>
        : 'No Data available'
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

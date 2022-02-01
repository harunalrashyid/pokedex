import React from 'react'
import { useQuery } from '@apollo/client'
import { isEmpty } from 'lodash'

import GET_SPEC_DETAIL from '@services/schema/species/detail'
import Layout from '@components/Layout'

import PokemonDetailImage from './PokemonDetailImage'
import PokemonDetailContent from './PokemonDetailContent'

const PokemonDetail = ({ pokemonName }) => {
  const { loading, error, data } = useQuery(GET_SPEC_DETAIL, {
    notifyOnNetworkStatusChange: true,
    variables: { name: pokemonName }
  })

  if (loading) return 'Loading...'

  if (error) return `Error! ${error.message}`

  if (data && isEmpty(data.pokemons)) return 'No Data'

  return (
    <>
      <PokemonDetailImage data={data} />
      <PokemonDetailContent data={data} />
    </>
  )
}

export default PokemonDetail

import React from 'react'
import { useQuery } from '@apollo/client'
import { isEmpty } from 'lodash'

import GET_SPEC_DETAIL from '@services/schema/species/detail'
import Offline from '@components/Offline'
import Loader from '@components/Loader'

import PokemonDetailImage from './PokemonDetailImage'
import PokemonDetailContent from './PokemonDetailContent'

const PokemonDetail = ({ pokemonName }) => {
  const { loading, error, data } = useQuery(GET_SPEC_DETAIL, {
    notifyOnNetworkStatusChange: true,
    variables: { name: pokemonName }
  })

  if (loading) return <Loader />

  if (!navigator.online && error) return <Offline />

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

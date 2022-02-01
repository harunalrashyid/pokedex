import React from 'react'
import { useParams } from 'react-router-dom'

import Layout from '@components/Layout'
import PokemonDetail from '@components/PokemonDetail'

const Detail = () => {
  const params = useParams()

  return (
    <Layout>
      <PokemonDetail pokemonName={params.pokemonName} />
    </Layout>
  )
}

export default Detail

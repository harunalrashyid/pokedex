import React, { useState } from 'react'
import { NetworkStatus } from '@apollo/client'
import { InView } from 'react-intersection-observer'

import Pagination from '@components/Pagination'

const PokemonMore = ({ data, fetchMore, networkStatus }) => {
  const [hasMore, setHasMore] = useState(data.pokemons.length)

  const handlePaginationChange = async (inView) => {
    if (inView) {
      const result = await fetchMore({
        variables: { offset: data.pokemons.length },
      })

      setHasMore(result.data.pokemons.length)
    }
  }

  if (networkStatus !== NetworkStatus.fetchMore && !hasMore) return 'No more to fetch'

  return (
    <InView onChange={handlePaginationChange}>
      <Pagination />
    </InView>
  )
}

export default PokemonMore

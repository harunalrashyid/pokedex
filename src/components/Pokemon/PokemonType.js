import React from 'react';
import { Badge } from '@styled/common'

const PokemonType = ({ type }) => {
  const { name } = type.item

  return (
    <Badge color={name}>
      {name}
    </Badge>
  )
}

export default PokemonType

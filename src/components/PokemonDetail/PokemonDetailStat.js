import React from 'react'
import { startCase, replace } from 'lodash'

import ProgressCircle from '@components/ProgressCircle'

const PokemonDetailStat = ({ data }) => {
  const { baseStat, item } = data

  const label = startCase(item.name).replace('Special', 'Sp.');
  const value = baseStat

  return (
    <ProgressCircle
      label={label}
      value={value}
      width="105px"
    />
  )
}

export default PokemonDetailStat

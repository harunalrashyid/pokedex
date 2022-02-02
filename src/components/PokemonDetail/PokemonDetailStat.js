import React from 'react'
import { startCase } from 'lodash'

import ProgressCircle from '@components/ProgressCircle'
import { Grid } from '@styled/common'

const PokemonDetailStat = ({ data }) => {
  const { baseStat, item } = data

  const label = startCase(item.name).replace('Special', 'Sp.');
  const value = baseStat

  return (
    <Grid col={4}>
      <ProgressCircle
        label={label}
        value={value}
      />
    </Grid>
  )
}

export default PokemonDetailStat

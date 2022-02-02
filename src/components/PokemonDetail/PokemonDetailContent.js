import React from 'react'
import styled from 'styled-components'
import { isEmpty, startCase, replace } from 'lodash'

import { Container, Grid } from '@styled/common'
import ProgressCircle from '@components/ProgressCircle'

import PokemonDetailStat from './PokemonDetailStat'

const PokemonDetailContent = ({ data }) => {
  const { id, name, description, detail } = data.pokemons[0]
  const pokeNumber = String(id).padStart(3, 0)
  const stats = detail[0].stats

  return (
    <Container gutterY={4}>
      <Grid wrap="wrap">
        <DetailHead col={12} align="center" justify="space-between">
          <DetailTitle>{name}</DetailTitle>
          <DetailId>#{pokeNumber}</DetailId>
        </DetailHead>
        <DetailBody col={12} wrap="wrap">
          <DetailDesc>
            {!isEmpty(description) && description[0].detail}
          </DetailDesc>
          <DetailItem>
            <DetailItemTitle active>Stats</DetailItemTitle>
            <DetailItemContent wrap="wrap" justify="space-between">
              {stats.map(stat => (
                <PokemonDetailStat key={stat.id} data={stat} />
              ))}
            </DetailItemContent>
          </DetailItem>
        </DetailBody>
      </Grid>
    </Container>
  )
}

export default PokemonDetailContent

const DetailHead = styled(Grid)`
  margin-bottom: 1rem;
`
const DetailTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  text-transform: capitalize;
`
const DetailId = styled.span`
  color: #777777;
  font-size: .875rem;
`
const DetailBody = styled(Grid)``
const DetailDesc = styled.p`
  margin-top: 0;
`
const DetailItem = styled.div`
  flex: 0 0 auto;
  width: 100%;
`
const DetailItemTitle = styled.h4`
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: .5rem;
  text-align: center;
`
const DetailItemContent = styled(Grid)``

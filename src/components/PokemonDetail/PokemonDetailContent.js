import React from 'react'
import styled from 'styled-components'
import { isEmpty, startCase, replace, last } from 'lodash'

import { Container, Grid } from '@styled/common'
import { toFeet, toPounds } from '@utilities/measurement'
import ProgressCircle from '@components/ProgressCircle'

import PokemonDetailInfo from './PokemonDetailInfo'
import PokemonDetailStat from './PokemonDetailStat'
import PokemonDetailEvolution from './PokemonDetailEvolution'

const PokemonDetailContent = ({ data }) => {
  const { id, name, description, detail } = data.pokemons[0]
  const pokeNumber = String(id).padStart(3, 0)
  const height = detail[0].height / 10
  const weight = detail[0].weight / 10
  const stats = detail[0].stats
  const evolutions = detail[0].specs.evolutions.species
  const abilities = !isEmpty(detail[0].abilities) 
    ? detail[0].abilities.map(val => startCase(val.item.name)).join(', ') 
    : '-'

  return (
    <Container gutterY={4}>
      <Grid wrap="wrap">
        <DetailHead col={12} align="center" justify="space-between">
          <DetailTitle>{name}</DetailTitle>
          <DetailId>#{pokeNumber}</DetailId>
        </DetailHead>
        <DetailBody col={12} wrap="wrap">
          <DetailDesc>
            <p>{!isEmpty(description) && description[0].detail}</p>
            <PokemonDetailInfo title="Height" value={`${toFeet(height)}" (${height}m)`} />
            <PokemonDetailInfo title="Weight" value={`${toPounds(weight)} lbs (${weight} kg)`} />
            <PokemonDetailInfo title="Abilities" value={abilities} />
          </DetailDesc>
          <DetailItem>
            <DetailItemTitle active>Stats</DetailItemTitle>
            <DetailItemContent wrap="wrap" justify="space-between">
              {stats.map(stat => (
                <PokemonDetailStat key={stat.id} data={stat} />
              ))}
            </DetailItemContent>
          </DetailItem>
          <DetailItem>
            <DetailItemTitle active>Evolution</DetailItemTitle>
            <DetailItemContent wrap="wrap">
              {evolutions.map((evolution, index) => (
                <PokemonDetailEvolution
                  key={evolution.id}
                  data={evolution}
                  isCurrent={name === evolution.name}
                />
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
const DetailDesc = styled.div`
  margin-bottom: 0.875rem;
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

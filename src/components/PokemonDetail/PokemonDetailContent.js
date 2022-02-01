import React from 'react'
import styled from 'styled-components'
import { isEmpty } from 'lodash'

import { Container, Grid } from '@styled/common'

const DetailContent = ({ data }) => {
  const { id, name, description } = data.pokemons[0]
  const pokeNumber = String(id).padStart(3, 0)

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
        </DetailBody>
      </Grid>
    </Container>
  )
}

export default DetailContent

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

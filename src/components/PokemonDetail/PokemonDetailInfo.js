import React from 'react'
import styled from 'styled-components'

const PokemonDetailInfo = ({ title, value }) => (
  <Info>
    <InfoLabel>{title}</InfoLabel>
    <InfoValue>{value}</InfoValue>
  </Info>
)

export default PokemonDetailInfo

const Info = styled.dl`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.875rem;

  &:last-child {
    margin-bottom: 0;
  }
`
const InfoLabel = styled.dt`
  color: ${props => props.theme.color.disabled};
  flex: 0 0 25%;
`
const InfoValue = styled.dd`
  margin: 0;
`

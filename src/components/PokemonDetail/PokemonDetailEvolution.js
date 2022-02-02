import React, { useEffect } from 'react'
import styled from 'styled-components'
import { startCase } from 'lodash'
import { Link, useLocation } from 'react-router-dom'

import { officialArtwork } from '@utilities/sprites'
import { Grid, Icon } from '@styled/common'

const PokemonDetailEvolution = ({ data, isCurrent }) => {
  const { id, name } = data
  const featuredImage = officialArtwork(id)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <EvolutionGrid col={4} wrap="wrap" justify="center">
      <EvolutionLink to={`/pokemon/${name}`} $isCurrent={isCurrent}>
        <EvolutionImage>
          <img
            width="90%"
            height="90%"
            loading="lazy"
            alt={name}
            src={featuredImage}
          />
          <EvolutionIcon size="1em">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path  d="M12.969 4.281 11.53 5.72 21.812 16l-10.28 10.281 1.437 1.438 11-11 .687-.719-.687-.719-11-11Z"/></svg>
          </EvolutionIcon>
        </EvolutionImage>
        <EvolutionTitle>{startCase(name)}</EvolutionTitle>
      </EvolutionLink> 
    </EvolutionGrid>
  )
}

export default PokemonDetailEvolution

const EvolutionLink = styled(Link)`
  ${props => props.$isCurrent && 'opacity: .5;'}
`
const EvolutionImage = styled.div`
  position: relative;
  text-align: center;
`
const EvolutionIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: -8px;
  transform: translateY(-50%);
`
const EvolutionTitle = styled.h4`
  text-align: center;
  margin: 0;
`
const EvolutionGrid = styled(Grid)`
  &:last-child ${EvolutionIcon} {
    display: none;
  }
`

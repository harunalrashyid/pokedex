import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { officialArtwork } from '@utilities/sprites'
import { slugify } from '@utilities/string'
import PokemonType from './PokemonType'

const PokemonItem = ({ data, gap }) => {
  const { id, name, types } = data
  const pokeNumber = String(id).padStart(3, 0)

  return (
    <PokemonBox gap={gap}>
      <PokemonImage>
        <img
          src={officialArtwork(id)}
          alt={name}
          loading="lazy"
          width="130"
          height="130"
        />
      </PokemonImage>
      <PokemonContent>
        <PokemonTypes>
          {types.map(type => (
            <PokemonType
              key={type.item.id}
              type={type}
            />
          ))}
        </PokemonTypes>
        <PokemonTitle>
          <PokemonLink to={`/pokemon/${slugify(name)}`}>{name}</PokemonLink>
        </PokemonTitle>
        <PokemonId>#{pokeNumber}</PokemonId>
      </PokemonContent>
    </PokemonBox>
  )
}

export default PokemonItem

const PokemonBox = styled.div`
  flex: 0 0 auto;
  width: calc(50% - ${props => props.gap / 2}px);

`
const PokemonImage = styled.div`
  background: ${props => props.theme.color.light};
  line-height: 0;
  text-align: center;
  border-radius: .25rem .25rem 0 0;
`
const PokemonContent = styled.div`
  padding: 1rem .5rem;
  border: 1px solid ${props => props.theme.color.light};
  border-radius: 0 0 .25rem .25rem;
`
const PokemonTypes = styled.div``

const PokemonTitle = styled.h3`
  text-transform: capitalize;
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
`
const PokemonLink = styled(Link)``
const PokemonId = styled.span`
  color: #777777;
  font-size: .75rem;
`

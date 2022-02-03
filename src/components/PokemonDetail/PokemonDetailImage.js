import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { clearFilter } from '@store/modules/app/actions'
import { Container, Grid, Icon, ButtonLink } from '@styled/common'
import Badge from '@styled/components/Badge'
import { officialArtwork } from '@utilities/sprites'

const PokemonDetailImage = ({ data }) => {
  const { id, name, detail } = data.pokemons[0]

  const navigate = useNavigate()
  const dispath = useDispatch()
  const featuredImage = officialArtwork(id)

  const handleBackBtn = () => {
    dispath(clearFilter())
    return navigate('/')
  }

  return (
    <ImageWrapper col={12}>
      <ImageContainer>
        <DetailBackBtn onClick={handleBackBtn}>
          <Icon size="1rem">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path fill="#000" d="m13.281 6.781-8.5 8.5-.687.719.687.719 8.5 8.5 1.438-1.438L7.938 17H28v-2H7.937l6.782-6.781L13.28 6.78Z"/></svg>
          </Icon>
          <DetailBackLabel>Back</DetailBackLabel>
        </DetailBackBtn>
        <Grid justify="center">
          <DetailImage>
            <img
              width="250"
              height="250"
              loading="lazy"
              alt={name}
              src={featuredImage}
            />
          </DetailImage>
        </Grid>
        <Grid>
          <DetailTypes>
            {detail[0].types.map(type => (
              <Badge key={type.item.id} color={type.item.name}>
                {type.item.name}
              </Badge>
            ))}
          </DetailTypes>
        </Grid>
      </ImageContainer>
    </ImageWrapper>
  )
}

export default PokemonDetailImage

const ImageWrapper = styled(Grid)`
  min-height: 300px;
  background: ${props => props.theme.color.light};
`
const ImageContainer = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const DetailBackBtn = styled(ButtonLink)`
  color: ${props => props.theme.color.black};
  gap: 6px;
`
const DetailBackLabel = styled.span`
  font-size: 0.875rem;
`
const DetailImage = styled.div``
const DetailTypes = styled.div``

import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Container, Grid } from '@styled/common'
import logoGray from '@assets/logo-gray.svg'

const Loader = () => (
  <Container>
    <LoaderGrid wrap="wrap" justify="center">
      <LoaderImage>
        <img
          src={logoGray}
          alt="Loading"
          loading="lazy"
          width="32"
          height="32"
        />
      </LoaderImage>
      <LoaderLabel>loading...</LoaderLabel>
    </LoaderGrid>
  </Container>
)

export default Loader

const blink = keyframes`
  0% { opacity: .5; }
  100% { opacity: .25; }
`

const LoaderGrid = styled(Grid)`
  margin-top: 30vh;
`
const LoaderImage = styled.div`
  display: inline-flex;
  animation: ${blink} .8s infinite alternate;
`
const LoaderLabel = styled.span`
  flex: 0 0 100%;
  display: block;
  color: ${props => props.theme.color.disabled};
  text-align: center;
  margin-top: 1rem;
`


import React from 'react'
import styled from 'styled-components'

import { Container, Grid } from '@styled/common'
import logoGray from '@assets/logo-gray.svg'

const Loader = () => (
  <Container>
    <Grid justify="center">
      <LoaderContent>
        <LoaderImage>
          <img
            src={logoGray}
            alt="Loading"
            loading="lazy"
            width="16px"
            height="16px"
          />
        </LoaderImage>
        <LoaderLabel>loading...</LoaderLabel>
      </LoaderContent>
    </Grid>
  </Container>
)

export default Loader

const LoaderContent = styled(Grid)`
  align-items: center;
  margin-bottom: 1.5rem;
`
const LoaderImage = styled.span`
  display: inline-flex;
`
const LoaderLabel = styled.span`
  display: inline-block;
  color: ${props => props.theme.color.disabled};
  margin-left: .5rem;
`


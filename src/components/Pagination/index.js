import React from 'react'
import styled from 'styled-components'

import { Container, Grid } from '@styled/common'
import logoGray from '@assets/logo-gray.svg'

const Pagination = () => (
  <Container>
    <Grid justify="center">
      <PaginationContent>
        <PaginationImage>
          <img
            src={logoGray}
            alt="Loading"
            loading="lazy"
            width="16px"
            height="16px"
          />
        </PaginationImage>
        <PaginationLabel>load more...</PaginationLabel>
      </PaginationContent>
    </Grid>
  </Container>
)

export default Pagination

const PaginationContent = styled(Grid)`
  align-items: center;
  margin-bottom: 1.5rem;
`
const PaginationImage = styled.span`
  display: inline-flex;
`
const PaginationLabel = styled.span`
  display: inline-block;
  color: ${props => props.theme.color.disabled};
  margin-left: .5rem;
`


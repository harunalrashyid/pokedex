import React from 'react'
import styled from 'styled-components'

import { Grid } from '@styled/common'
import logoGray from '@assets/logo-gray.svg'

const Pagination = () => (
  <PaginationContent align="center">
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
)

export default Pagination

const PaginationContent = styled(Grid)``
const PaginationImage = styled.span`
  display: inline-flex;
`
const PaginationLabel = styled.span`
  display: inline-block;
  color: ${props => props.theme.color.disabled};
  margin-left: .5rem;
`


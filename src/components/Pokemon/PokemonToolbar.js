import React from 'react'
import styled from 'styled-components'

import { Grid } from '@styled/common'
import Filter from '@components/Filter'

const PokemonToolbar = ({ count }) => (
  <ToolbarContainer col={12} justify="space-between" align="center">
    <ToolbarInfo>
      <ToolbarInfoLabel>Showing</ToolbarInfoLabel>
      <ToolbarInfoCount>{count}</ToolbarInfoCount>
    </ToolbarInfo>
    <ToolbarModule>
      <Filter />
    </ToolbarModule>
  </ToolbarContainer>
)

export default PokemonToolbar

const ToolbarContainer = styled(Grid)`
  position: sticky;
  background: ${props => props.theme.color.white};
  top: 70px;
`
const ToolbarInfo = styled.div`
  font-size: 0.875rem;

  & > * {
    font-size: inherit;
  }
`
const ToolbarInfoLabel = styled.span`
  display: inline-block;
  color: #777777;
  margin-right: 0.375rem;
`
const ToolbarInfoCount = styled.span`
  color: ${props => props.theme.color.black};
  font-weight: bold;
`
const ToolbarModule = styled.div``

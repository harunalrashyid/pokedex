import React from 'react'
import styled from 'styled-components'

import FilterItem from './FilterItem'

const FilterWidget = ({ title, data }) => (
  <WidgetWrapper>
    <WidgetTitle>{title}</WidgetTitle>
    <WidgetContent>
      {data && data.types.map(type => (
        <FilterItem key={type.id} data={type} />
      ))}
    </WidgetContent>
  </WidgetWrapper>
)

export default FilterWidget

const WidgetWrapper = styled.div``
const WidgetTitle = styled.h4``
const WidgetContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  gap: .5rem;
`

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Badge from '@styled/components/Badge'
import { updateFilter } from '@store/modules/app/actions'

const FilterItem = ({ data, field }) => {
  const [active, setActive] = useState(false)

  const dispatch = useDispatch()
  const filterState = useSelector((state) => state.app.filter[field])

  const handleItemLink = value => {
    const isInFilterState = filterState.filter(item => item === value).length
    
    if (isInFilterState) {
      const currentFilter = filterState.filter(item => item !== value)
      dispatch(updateFilter({ [field]: currentFilter })) 
    }

    if (!isInFilterState) {
      const currentFilter = [...filterState, value]
      dispatch(updateFilter({ [field]: currentFilter })) 
    }

    setActive(!active)
  }

  return (
    <Item>
      <ItemLink
        as="button"
        type="outline"
        active={active}
        onClick={e => handleItemLink(data.id)}
      >
        {data.name}
      </ItemLink>
    </Item>
  )
}

export default FilterItem

const Item = styled.li``
const ItemLink = styled(Badge)`
  font-size: 0.75rem;
  text-transform: capitalize;
`

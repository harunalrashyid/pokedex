import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Badge from '@styled/components/Badge'
import { updateFilter } from '@store/modules/app/actions'

const FilterItem = ({ data }) => {
  const [active, setActive] = useState(false)

  const dispatch = useDispatch()
  const filterList = useSelector((state) => state.app.filter.list)

  const handleItemLink = value => {
    const isInFilterList = filterList.filter(item => item === value).length
    
    if (isInFilterList) {
      const currentFilter = filterList.filter(item => item !== value)
      dispatch(updateFilter({ list: currentFilter })) 
    }

    if (!isInFilterList) {
      const currentFilter = [...filterList, value]
      dispatch(updateFilter({ list: currentFilter })) 
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

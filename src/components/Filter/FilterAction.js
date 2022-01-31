import React from 'react'
import styled from 'styled-components'
import { useApolloClient } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux'

import GET_SPECIES from '@services/schema/species/list'
import { updateSidebar, updateCountFilter } from '@store/modules/app/actions'
import { Button } from '@styled/common'

const FilterAction = () => {
  const client = useApolloClient()
  const dispatch = useDispatch()
  const filterTypes = useSelector((state) => state.app.filter.types)
  const filterGenerations = useSelector((state) => state.app.filter.generations)

  const handleFilter = async () => {
    const activeFilter = filterTypes.length + filterGenerations.length

    await client.refetchQueries({ include: [GET_SPECIES] })

    dispatch(updateCountFilter({ count: activeFilter }))
    dispatch(updateSidebar({ active: false }))

    return true
  }

  return (
    <ActionBtn onClick={handleFilter}>Save Filter</ActionBtn>
  )
}

export default FilterAction

const ActionBtn = styled(Button)`
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;
`

import React from 'react'
import styled from 'styled-components'
import { useApolloClient } from '@apollo/client'
import { useDispatch } from 'react-redux'

import GET_SPECIES from '@services/schema/species/list'
import { updateSidebar } from '@store/modules/app/actions'
import { Button } from '@styled/common'

const FilterAction = () => {
  const client = useApolloClient()
  const dispatch = useDispatch()

  const handleFilter = async () => {
    await client.refetchQueries({ include: [GET_SPECIES] })
    return dispatch(updateSidebar({ active: false }))
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

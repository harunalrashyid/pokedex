import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux'

import GET_TYPES from '@services/schema/type/list'
import { Icon } from '@styled/common'
import Sidebar from '@styled/components/Sidebar'
import { updateSidebar } from '@store/modules/app/actions'

import FilterWidget from './FilterWidget'
import FilterAction from './FilterAction'

const Filter = () => {
  const { loading: loadingTypes, error: errorTypes, data: dataTypes } = useQuery(GET_TYPES)
  const dispatch = useDispatch()
  const isSidebarActive = useSelector((state) => state.app.sidebar.active)

  const handleActive = () => dispatch(updateSidebar({ active: true }))
  const handleInActive = () => dispatch(updateSidebar({ active: false }))

  return (
    <>
      <FilterButton onClick={handleActive}>
        <Icon size="2rem">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M5 4v2.344l.219.281L13 16.344V28l1.594-1.188 4-3L19 23.5v-7.156l7.781-9.719.219-.281V4H5Zm2.281 2H24.72l-7.188 9H14.47L7.28 6ZM15 17h2v5.5L15 24v-7Z"/></svg>
        </Icon>
      </FilterButton>
      <FilterSidebar active={isSidebarActive}>
        <FilterSidebarContent>
          <FilterHeader>
            <button onClick={handleInActive}>
              <Icon size="1rem">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path fill="#000" d="m13.281 6.781-8.5 8.5-.687.719.687.719 8.5 8.5 1.438-1.438L7.938 17H28v-2H7.937l6.782-6.781L13.28 6.78Z"/></svg>
              </Icon>
              <FilterSidebarCloseLabel>Filters</FilterSidebarCloseLabel>
            </button>
          </FilterHeader>
          <FilterWidget
            title="By Types"
            loading={loadingTypes}
            error={errorTypes}
            data={dataTypes}
          />
          <FilterAction />
        </FilterSidebarContent>
      </FilterSidebar>
    </>
  )
}

export default Filter

const FilterButton = styled.button``
const FilterHeader = styled.header``
const FilterSidebar = styled(Sidebar)``
const FilterSidebarContent = styled.div`
  position: relative;
  height: inherit;
`
const FilterSidebarCloseLabel = styled.span`
  display: inline-flex;
  margin-left: .5rem;
`

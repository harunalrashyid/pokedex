import * as types from './types'

export const updateFilter = ({ ...rest }) => ({
  type: types.UPDATE_FILTER,
  payload: { ...rest } 
})

export const updateCountFilter = ({ count }) => ({
  type: types.UPDATE_COUNT_FILTER,
  payload: { count } 
})

export const clearFilter = () => ({
  type: types.CLEAR_FILTER
})

export const updateSidebar = ({ active }) => ({
  type: types.UPDATE_SIDEBAR,
  payload: { active } 
})

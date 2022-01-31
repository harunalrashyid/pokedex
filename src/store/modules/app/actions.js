import * as types from './types'

export const updateFilter = ({ list }) => ({
  type: types.UPDATE_FILTER,
  payload: { list } 
})

export const updateCountFilter = ({ count }) => ({
  type: types.UPDATE_COUNT_FILTER,
  payload: { count } 
})

export const clearToast = () => ({
  type: types.CLEAR_FILTER
})

export const updateSidebar = ({ active }) => ({
  type: types.UPDATE_SIDEBAR,
  payload: { active } 
})

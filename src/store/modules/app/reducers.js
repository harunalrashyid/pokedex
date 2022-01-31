import * as types from './types'
import { createReducer } from '@store/utils'

const initialState = {
  filter: {
    list: [],
    refetch: null,
    count: 0
  },
  sidebar: {
    active: false
  },
}

const AppReducer = createReducer(initialState) ({
  [types.UPDATE_FILTER]: (state, { payload }) => ({
    ...state,
    filter: {
      ...state.filter,
      list: payload.list
    }
  }),

  [types.UPDATE_COUNT_FILTER]: (state, { payload }) => ({
    ...state,
    filter: {
      ...state.filter,
      count: payload.count
    }
  }),

  [types.CLEAR_FILTER]: (state) => ({
    ...state,
    filter: initialState.filter
  }),

  [types.UPDATE_SIDEBAR]: (state, { payload }) => ({
    ...state,
    sidebar: {
      active: payload.active
    }
  }),
})

export default AppReducer

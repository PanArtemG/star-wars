import {actionTypes} from './actions'

const initialState = {
  value: '',
  items: []
}

export const searchReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SEARCH_HANDLE_VALUE:
      return {...state, value: payload}
    case actionTypes.SEARCH_HANDLE_ITEMS:
      return {...state, items: payload}
    default:
      return state
  }
}

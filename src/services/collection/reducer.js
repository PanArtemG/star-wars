import {actionTypes} from './actions'

const initialState = {
  collection: [],
  currentItem: []
}

export  const collectionReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.GET_COLLECTION_SUCCESS:
      return {...state, collection: payload}
    case actionTypes.GET_CURRENT_ITEM_SUCCESS:
      return {...state, currentItem: payload}
    default:
      return state
  }
}

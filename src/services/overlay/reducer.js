import {actionTypes} from './actions'

const initialState = {
  isOpenModal: false,
  details: {}
}

export const overlayReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.IS_OPEN_MODAL_TRUE:
      return {...state, isOpenModal: true, details: payload}
    case actionTypes.IS_OPEN_MODAL_FALSE:
      return {...state, isOpenModal: false}
    default:
      return state
  }
}

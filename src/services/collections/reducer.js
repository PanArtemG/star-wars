import {actionTypes} from './actions'

const initialState = {
  films: [],
  planets: [],
  starships: []
}

export const collectionsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.GET_FILMS_SUCCESS:
      return {...state, films: payload}
    case actionTypes.GET_PLANETS_SUCCESS:
      return {...state, planets: [...state.planets, ...payload]}
    case actionTypes.GET_STARSHIPS_SUCCESS:
      return {...state, starships: [...state.starships, ...payload]}
    case actionTypes.RESET_DETAILS:
      return {...initialState, films: state.films}
    default:
      return state
  }
}

import {actionTypes} from './actions'

const initialState = {
    planets: [],
    starships: []
}

export  const episodeReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.GET_PLANET_SUCCESS:
            return {...state, planets:  [...state.planets, payload]}
        case actionTypes.GET_STARSHIPS_SUCCESS:
            return {...state, starships: [...state.starships, payload]}
        default:
            return state
    }
}

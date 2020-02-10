export const actionTypes = {
  GET_FILMS_REQUEST: 'collections/GET_FILMS_REQUEST',
  GET_FILMS_SUCCESS: 'collections/GET_FILMS_SUCCESS',
  GET_FILMS_ERROR: 'collections/GET_FILMS_ERROR',

  GET_PLANETS_REQUEST: 'collections/GET_PLANETS_REQUEST',
  GET_PLANETS_SUCCESS: 'collections/GET_PLANETS_SUCCESS',
  GET_PLANETS_ERROR: 'collections/GET_PLANETS_ERROR',

  GET_STARSHIPS_REQUEST: 'collections/GET_STARSHIPS_REQUEST',
  GET_STARSHIPS_SUCCESS: 'collections/GET_STARSHIPS_SUCCESS',
  GET_STARSHIPS_ERROR: 'collections/GET_STARSHIPS_ERROR',

  RESET_DETAILS: 'collections/RESET_DETAILS'
}


export const get = {
  films: {
    request: () => ({
      type: actionTypes.GET_FILMS_REQUEST
    }),
    success: payload => ({
      type: actionTypes.GET_FILMS_SUCCESS,
      payload
    }),
    error: payload => ({
      type: actionTypes.GET_FILMS_ERROR,
      payload
    })
  },
  planets: {
    request: () => ({
      type: actionTypes.GET_PLANETS_REQUEST
    }),
    success: payload => ({
      type: actionTypes.GET_PLANETS_SUCCESS,
      payload
    }),
    error: payload => ({
      type: actionTypes.GET_PLANETS_ERROR,
      payload
    })
  },
  starships: {
    request: () => ({
      type: actionTypes.GET_STARSHIPS_REQUEST
    }),
    success: payload => ({
      type: actionTypes.GET_STARSHIPS_SUCCESS,
      payload
    }),
    error: payload => ({
      type: actionTypes.GET_STARSHIPS_ERROR,
      payload
    })
  },
}

export const reset = {
  details: () => ({
    type: actionTypes.RESET_DETAILS
  })
}

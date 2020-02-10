export const actionTypes ={
    GET_PLANET_REQUEST : 'GET_PLANET_REQUEST',
    GET_PLANET_SUCCESS : 'GET_PLANET_SUCCESS',
    GET_PLANET_ERROR : 'GET_PLANET_ERROR',

    GET_STARSHIPS_REQUEST : 'GET_STARSHIPS_REQUEST',
    GET_STARSHIPS_SUCCESS : 'GET_STARSHIPS_SUCCESS',
    GET_STARSHIPS_ERROR : 'GET_STARSHIPS_ERROR',
}


export const getEpisodeItems = {
    planet: {
        request: () => ({
            type: actionTypes.GET_PLANET_REQUEST
        }),
        success: payload => ({
            type: actionTypes.GET_PLANET_SUCCESS,
            payload
        }),
        error: payload => ({
            type: actionTypes.GET_PLANET_ERROR,
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

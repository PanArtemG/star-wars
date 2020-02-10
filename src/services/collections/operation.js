import axios from 'axios'
import {GET_COLLECTION_URL} from '../baseUrl'
import {get} from './actions'

export const getFilmsFetch = () => dispatch => {
  dispatch(get.films.request())

  const options = {
    method: 'GET',
    url: GET_COLLECTION_URL('films')
  }

  axios(options)
    .then(({data: {results}}) => dispatch(get.films.success(results)))
    .catch(error => error)
}

export const getPlanetsFetch = episode_id => (dispatch, getState) => {
  dispatch(get.planets.request())

  const getMaxOfArray = numArray => Math.ceil((Math.max.apply(null, numArray) + 1) / 10)

  const {films} = getState().collections
  const {planets} = films.find(film => film.episode_id === episode_id)
  const ids = planets.map(url => url
    .split(GET_COLLECTION_URL('planets'))[1]
    .split('/')[0])

  for (let i = 1 i < getMaxOfArray(ids) || i === 1 i++) {
    const options = {
      method: 'GET',
      url: GET_COLLECTION_URL('planets', i)
    }

    axios(options)
      .then(({data: {results}}) => {
        const newResults = results.filter(result => planets.includes(result.url))
        dispatch(get.planets.success(newResults))
      })
      .catch(error => dispatch(get.planets.error(error)))
  }
}

export const getStarshipsFetch = episode_id => (dispatch, getState) => {
  dispatch(get.starships.request())

  const getMaxOfArray = numArray => Math.ceil((Math.max.apply(null, numArray) + 1) / 10)

  const {films} = getState().collections
  const {starships} = films.find(film => film.episode_id === episode_id)
  const ids = starships.map(url => url
    .split(GET_COLLECTION_URL('starships'))[1]
    .split('/')[0])

  for (let i = 1 i < getMaxOfArray(ids) || i === 1 i++) {
    const options = {
      method: 'GET',
      url: GET_COLLECTION_URL('starships', i)
    }

    axios(options)
      .then(({data: {results}}) => {
        const newResults = results.filter(result => starships.includes(result.url))
        dispatch(get.starships.success(newResults))
      })
      .catch(error => dispatch(get.starships.error(error)))
  }
}

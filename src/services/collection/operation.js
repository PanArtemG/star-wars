import axios from 'axios'
import {GET_COLLECTION_URL, GET_CURRENT_ITEM_URL} from '../baseUrl'
import {get} from './actions'


export const getCollectionFetch = () => dispatch => {
  dispatch(get.collection.request())

  const options = {
    method: 'GET',
    url: GET_COLLECTION_URL('films')
  }

  axios(options)
    .then(({data: {results}}) => dispatch(get.collection.success(results)))
    .catch(error => dispatch(get.collection.error(error)))
}

export const getCurrentItemFetch = credential => dispatch => {
  dispatch(get.currentItem.request())
  console.log(GET_CURRENT_ITEM_URL(credential),'  vGET_CURRENT_ITEM_URL(credential)')
  const options = {
    method: 'GET',
    url: GET_CURRENT_ITEM_URL(credential),
  }

  axios(options)
    .then(({data}) => dispatch(get.currentItem.success(data)))
    .catch(error => dispatch(get.currentItem.error(error)))
}

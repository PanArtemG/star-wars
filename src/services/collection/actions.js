export const actionTypes ={
  GET_COLLECTION_REQUEST : 'GET_COLLECTION_REQUEST',
  GET_COLLECTION_SUCCESS : 'GET_COLLECTION_SUCCESS',
  GET_COLLECTION_ERROR : 'GET_COLLECTION_ERROR',
  GET_CURRENT_ITEM_REQUEST : 'GET_CURRENT_ITEM_REQUEST',
  GET_CURRENT_ITEM_SUCCESS : 'GET_CURRENT_ITEM_SUCCESS',
  GET_CURRENT_ITEM_ERROR : 'GET_CURRENT_ITEM_ERROR',
}

export const get = {
  collection : {
    request : () => ({
      type : actionTypes.GET_COLLECTION_REQUEST
    }),
    success : payload => ({
      type : actionTypes.GET_COLLECTION_SUCCESS,
      payload
    }),
    error : payload => ({
      type : actionTypes.GET_COLLECTION_ERROR,
      payload
    })
  },
  currentItem : {
    request : () => ({
      type : actionTypes.GET_CURRENT_ITEM_REQUEST
    }),
    success : payload => ({
      type : actionTypes.GET_CURRENT_ITEM_SUCCESS,
      payload
    }),
    error : payload => ({
      type : actionTypes.GET_CURRENT_ITEM_ERROR,
      payload
    })
  }
}

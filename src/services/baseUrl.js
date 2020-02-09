const base = 'https://swapi.co/api/'

export const GET_COLLECTION_URL = collection => base + collection
export const GET_CURRENT_ITEM_URL = id => `${GET_COLLECTION_URL('films')}/${id}`

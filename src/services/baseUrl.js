const base = 'https://swapi.co/api/'

export const GET_COLLECTION_URL = (collection, searchValue) => {
  const search = searchValue ? `?page=${searchValue}` : '/'
  return base + collection + search
}

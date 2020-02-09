export const actionTypes = {
  SEARCH_HANDLE_VALUE: 'SEARCH_HANDLE_VALUE',
  SEARCH_HANDLE_ITEMS: 'SEARCH_HANDLE_ITEMS',

}

export const handle = {
  value: payload => ({
    type: actionTypes.SEARCH_HANDLE_VALUE,
    payload
  }),
  item: payload => ({
    type: actionTypes.SEARCH_HANDLE_ITEMS,
    payload
  })
}

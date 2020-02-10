export const actionTypes = {
  IS_OPEN_MODAL_TRUE: 'modal/IS_OPEN_MODAL_TRUE',
  IS_OPEN_MODAL_FALSE: 'modal/IS_OPEN_MODAL_FALSE'
}

export const handleOpenModal = {
  setTrue: payload => ({
    type: actionTypes.IS_OPEN_MODAL_TRUE,
    payload
  }),
  setFalse: () => ({type: actionTypes.IS_OPEN_MODAL_FALSE}),
}

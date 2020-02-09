import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { getCurrentItemFetch} from '../../services/collection/operation'

const Episode = props => {
  const {location : {state}} = props

  const dispatch = useDispatch()

  console.log(state,'episode_id')

  // useEffect(() => {
  //   dispatch(getCurrentItemFetch(id))
  // }, [dispatch, id])


  return (
    <div>
      Episode
    </div>
  )
}

export default Episode

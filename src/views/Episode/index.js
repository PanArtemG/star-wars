import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

export const Episode = props => {
  const {location : {state}} = props
  const {title, episode_id, opening_crawl, director, producer, release_date, characters, planets, starships, vehicles, created, edited} = state
  console.log(state,'episode_id')
  // console.log(props,'props')

  // useEffect(() => {
  //   dispatch(getCurrentItemFetch(id))
  // }, [dispatch, id])

  return (
    <div className=''>
      <h2>"{title}"</h2>
      <h4>Episode : #{episode_id}</h4>
      <div>
        <p>{opening_crawl}</p>
        <p>Director : {director}</p>
        <p>Producer : {producer}</p>
        <p>Release date : {release_date}</p>
        <p>Characters : ???</p>
        <p>Planet : ???</p>
        <p>StarShips : ???</p>
        <p>Vehicles : ???</p>
        <p>Created : {created}</p>
        <p>Edited : {edited}</p>
      </div>
    </div>
  )
};

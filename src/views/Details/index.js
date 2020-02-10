import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getPlanetsFetch, getStarshipsFetch} from '../../services/collections/operation'
import {reset} from '../../services/collections/actions'
import {handleOpenModal} from '../../services/overlay/actions'
import {details, planets, starships} from '../../services/globalSelectors'

import styles from './Details.module.scss'

export const Details = () => {
  const dispatch = useDispatch()
  const planetsList = useSelector(planets)
  const starshipsList = useSelector(starships)

  const {
    title, episode_id, opening_crawl,
    director, producer, release_date,
    created, edited
  } = useSelector(details)


  const handleOpen = () => dispatch(handleOpenModal.setFalse())

  useEffect(() => {
    dispatch(getPlanetsFetch(episode_id))
    dispatch(getStarshipsFetch(episode_id))

    return () => dispatch(reset.details())
  }, [dispatch])

  return (
    <section className={styles.wrapper}>
      <div className='wrap '>
        <button
          className={styles.btn}
          onClick={handleOpen}
        >
          &lt Back
        </button>
        <div className='mt-5'>
          <h2 className=' mb-5'>'{title}'</h2>
          <h4>Episode : #{episode_id}</h4>
          <div className=''>
            <p>{opening_crawl}</p>
            <p>Director : {director}</p>
            <p>Producer : {producer}</p>
            <p>Release date : {release_date}</p>
            <p>Planet :</p>
            <ul>
              {
                !!planetsList.length
                  ? planetsList.map(el => <li key={el.name}>{el.name}</li>)
                  : <li>loading...</li>
              }
            </ul>
            <p>StarShips : </p>
            <div>
              <ul>
                {
                  !!starshipsList.length
                    ? starshipsList.map(el => <li key={el.name}>{el.name}</li>)
                    : <li>loading...</li>
                }
              </ul>
            </div>
            <p>Created : {created}</p>
            <p>Edited : {edited}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

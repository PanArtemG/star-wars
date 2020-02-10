import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPlanetsFetch, getStarshipsFetch} from "../../services/collections/operation";
import {planets, starships} from "../../services/collections/selectors";
import {Link} from "react-router-dom";

import styles from './Details.module.scss'
import {reset} from "../../services/collections/actions";
import {handleOpenModal} from "../../services/overlay/actions";
import {details} from "../../services/globalSelectors";

export const Details = () => {
  const {location: {state: locationState}} = useSelector(details)
  const {title, episode_id, opening_crawl, director, producer, release_date, created, edited} = locationState

  const dispatch = useDispatch()

  const handleOpen = () => dispatch(handleOpenModal.setFalse())

  useEffect(() => {
    dispatch(getPlanetsFetch(episode_id))
    // dispatch(getStarshipsFetch(episode_id))

    return () => dispatch(reset.details())
  }, [dispatch])

  return (
    <section className={styles.wrapper}>
      <div className='wrap '>
        <button onClick={handleOpen} style={{textDecoration: 'none', color: 'rgba(255, 255, 0, .8)'}}>
          &lt; Back
        </button>
        <div className='mt-5'>
          <h2 className=' mb-5'>"{title}"</h2>
          <h4>Episode : #{episode_id}</h4>
          <div className=''>
            <p>{opening_crawl}</p>
            <p>Director : {director}</p>
            <p>Producer : {producer}</p>
            <p>Release date : {release_date}</p>
            <p>Planet :</p>
            <div>
              planetsList
            </div>
            <p>StarShips : </p>
            <div>
              starshipsList
            </div>
            <p>Created : {created}</p>
            <p>Edited : {edited}</p>
          </div>
        </div>
      </div>
    </section>
  )
};

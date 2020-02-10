import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getEpisodeItemsFetch} from "../../services/episode/operation";
import {planets, starships} from "../../services/episode/selectors";
import {Link} from "react-router-dom";

import './style.scss'

export const Episode = props => {
    const {location: {state: locationState}} = props
    const {title, episode_id, opening_crawl, director, producer, release_date, created, edited} = locationState

    const dispatch = useDispatch()
    const getEpisodeFetch = () =>  dispatch(getEpisodeItemsFetch(locationState.planets, locationState.starships))

    const planetsList = useSelector(planets)
    const starshipsList = useSelector(starships)

    useEffect(() => {
        getEpisodeFetch()
    }, [dispatch])


    const Planets = () => planetsList.map(planet => <span>{planet}</span>)

    return (
        <div className='wrap '>
            <Link style={{ textDecoration: 'none', color: 'rgba(255, 255, 0, .8)' }} to='/'> &lt; Back </Link>
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
                        {planetsList.map(planet => planet)}
                    </div>
                    <p>StarShips : </p>
                    <Planets/>
                    <div>
                        {
                            !!starshipsList
                                ? planetsList.map((ships) => {
                                    console.log(ships);
                                    return (
                                        <span> {ships} </span>)
                                })
                                : console.log('null')
                        }
                    </div>
                    <p>Created : {created}</p>
                    <p>Edited : {edited}</p>
                </div>
            </div>
        </div>
    )
};

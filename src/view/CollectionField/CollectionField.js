import React, {useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {collectionSelector} from '../../services/mainPage/selectors'
import {getCollectionThunkCreator} from '../../services/mainPage/operation'
import {FilmCard} from '../../components/FilmCard/FilmCard'

import './style.scss'
import {AboutFilm} from '../../components/AboutFilm/AboutFilm'

export const CollectionField = connect(null, {AboutFilm}) (props => {
    const dispatch = useDispatch()
    const data = useSelector(collectionSelector)

    useEffect(() => {
        dispatch(getCollectionThunkCreator())
    }, [])

    return (
        <div className='d-flex h-100 pb-4 pt-4 flex-column align-items-center  justify-content-around'>
            <h2 className='title font-weight-bold'>Saga 'Star Wars'</h2>
            <div className='w-100 h-75 d-flex flex-wrap justify-content-center'>
                {
                    data.length > 0
                        ?
                        data.map((film, i) => {
                            return (
                                <FilmCard {...film} key={i}/>
                            )
                        })
                        :
                        <h2>LOADING... </h2>
                }
            </div>
        </div>
    )
})

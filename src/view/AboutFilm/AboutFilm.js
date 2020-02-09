import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {collectionSelector} from '../../services/mainPage/selectors'
import {getCollectionThunkCreator} from '../../services/mainPage/operation'


export const AboutFilm = ({match:{params:{episode_id}}}) => {
    const dispatch = useDispatch()
    const data = useSelector(collectionSelector)

    useEffect(() => {
        dispatch(getCollectionThunkCreator(episode_id))
    }, [])

    return (
        <div>
            <h1>About film</h1>
            {episode_id}
            {
                data.length > 0
                    ?
                    console.log(data)
                    :
                    null
            }
            {
                console.log(data)
            }
            <NavLink to='/'> Back </NavLink>
        </div>
    )
}





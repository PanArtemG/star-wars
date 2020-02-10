import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getFilmsFetch} from '../../services/collections/operation'
import {searchItems, searchValue, films} from '../../services/globalSelectors'

import {CollectionItem, Spinner, Search} from '../../components/'

import './style.scss'

export const Collection = () => {
  const dispatch = useDispatch()
  const collectionArr = useSelector(films)
  const searchItemsArr = useSelector(searchItems)
  const searchValueString = useSelector(searchValue)

  const currentArray = searchValueString ? searchItemsArr : collectionArr

  useEffect(() => {
    !collectionArr.length && dispatch(getFilmsFetch())
  }, [collectionArr.length, dispatch])

  return (
    <>
      <h2 className='header-title font-weight-bold'>Saga 'Star Wars'</h2>
      < div className='w-100 h-75 d-flex flex-column flex-wrap justify-content-center'>
        <div className='d-flex justify-content-around'>
          <Search/>
        </div>
        <div className='d-flex flex-wrap justify-content-center'>
          {!!currentArray.length
            ? currentArray.map((obj, index) =>
              <CollectionItem{...obj} key={index}/>
            )
            : <Spinner/>
          }
        </div>
      </div>
    </>
  )
}

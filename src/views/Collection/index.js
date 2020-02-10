import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCollectionFetch} from '../../services/collection/operation'
import {collection, searchItems, searchValue} from '../../services/globalSelectors'
import {CollectionItem, Spinner, Search} from '../../components/'

import './style.scss'

export const Collection = () => {
  const dispatch = useDispatch()
  const collectionArr = useSelector(collection)
  const searchItemsArr = useSelector(searchItems)
  const searchValueString = useSelector(searchValue)

  const currentArray = searchValueString ? searchItemsArr : collectionArr

  useEffect(() => {
    dispatch(getCollectionFetch())
  }, [])

  return (
    <>
      <div className='d-flex h-100 pb-4 pt-4 flex-column align-items-center  justify-content-around'>
        <h2 className='header-title font-weight-bold'>Saga 'Star Wars'</h2>
        <div className='w-100 h-75 d-flex flex-column flex-wrap justify-content-center'>
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
      </div>
    </>
  )
}

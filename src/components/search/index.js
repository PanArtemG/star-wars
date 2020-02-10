import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {handle} from "../../services/search/actions";
import {searchValue, collection} from "../../services/globalSelectors";

import './style.scss';

export const Search = () => {
  const dispatch = useDispatch()
  const value = useSelector(searchValue)
  const collectionItems = useSelector(collection)

  const handleValue = ({target: {value}}) => {
    const lowerCaseValue = value.toLowerCase()
    const filteredItems = collectionItems.filter(item => item.title.toLowerCase().includes(lowerCaseValue))
    const sortFilteredItems = filteredItems.sort((a, b) => a.title - b.title)

    dispatch(handle.value(lowerCaseValue))
    dispatch(handle.item(sortFilteredItems))
  }

  return (
    <>
      <input className='search' value={value} onChange={handleValue} type='text' placeholder='Search'/>
    </>
  )
}

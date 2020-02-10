import React from 'react'
import {useDispatch} from "react-redux";
import {handleOpenModal} from '../../services/overlay/actions'

import './collectionItem.scss'

export const CollectionItem = props => {
  const dispatch = useDispatch()
  const {title, episode_id, release_date, opening_crawl} = props

  const handleModal = () => dispatch(handleOpenModal.setTrue(props))

  return (
    <div className='wrap h-50 w-25 p-2'>
      <button className='film-wrap' onClick={handleModal}>
        <div className='film-wrap-title view view-cascade gradient-card-header peach-gradient'>
          <h3 className='card-title card-header-title mb-3'>'{title}'</h3>
          <div>
            <p className='card-subtitle font-weight-bold mb-0'>Episode : #{episode_id}</p>
            <p className='card-subtitle font-weight-bold mb-0'><i className='fas fa-calendar mr-2'/>Date
              release
              : {release_date}
            </p>
          </div>
        </div>
        <div className='card-body pb-0'>
          <h6 className='card-body-title'>Spoiler:</h6>
          <p className='card-body-text'>{opening_crawl.substr(0, 75)}...</p>
        </div>
      </button>
    </div>
  )
}

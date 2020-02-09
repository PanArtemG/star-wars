import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

const CollectionItem = props => {
  const {title, episode_id, release_date, opening_crawl} = props
  return (
    <div className='wrap h-50 w-25 p-2'>
      <Link className='film-wrap' to={{
        pathname: `/episode/`,
        state: {...props}
      }}>
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
      </Link>
    </div>
  )
}

export default CollectionItem

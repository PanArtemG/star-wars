import React from 'react'
import {Collection, Details} from './views'
import {useSelector} from "react-redux";
import {isOpenModal} from "./services/globalSelectors";

export const App = () => {
  const isOpen = useSelector(isOpenModal)

  return (
    <div className='d-flex h-100 pb-4 pt-4 flex-column align-items-center  justify-content-around'>
      {isOpen
        ? <Details/>
        : <Collection/>
      }
    </div>
  )
}

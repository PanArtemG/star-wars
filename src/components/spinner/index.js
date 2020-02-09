import React from 'react'
import styles from './spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}/>
    </div>
  )
}

export default Spinner

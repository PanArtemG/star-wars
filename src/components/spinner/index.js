import React from 'react'
import styles from './spinner.module.scss'

export const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}/>
    </div>
  )
}

import React from 'react'
import styles from './Cards.module.css'

export default function Cards() {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h3>Titulo</h3>
      </div>
      <div className={styles.text}>
        <p>
          Lorem 
        </p>
      </div>
    </div>
  )
}

import React from 'react'
import styles from './Cards.module.css'

export default function Cards({title = '404', desc = '404', tech, link, children}) {
  return (
    <div className={styles.card}>
      <div className={styles.divTitle}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
      </div>
      <div className={styles.text}>
        <p>
          {desc} 
        </p>
      </div>
      <div className={styles.inf}>
          <a href={link} target='_blank'>
            <button className={styles.link}>
              <span>  
              Link Projeto
              </span>
            </button>
          </a>
          <p className={styles.line}></p>
          <div className={styles.dvPhotos}>
            {children}
          </div>
      </div>
    </div>
  )
}

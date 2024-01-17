import React from 'react'
import Cards from '../../components/Cards/Cards'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <div className={styles.main}>
      <h3 className={styles.title}>Projects</h3>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
  )
}

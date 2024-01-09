import React from 'react'
import styles from './Techs.module.css'
import cssPhoto from '../../assets/techs/css.png'
import html5Photo from '../../assets/techs/html5.png'
import jsPhoto from '../../assets/techs/js.png'
import pyPhoto from '../../assets/techs/py.png'
import reactPhoto from '../../assets/techs/react.png'

export default function Techs() {
  return (
    <div className={styles.main}>
      <div className={styles.divTechs}>
        <h2>Techs</h2>
        <img className={styles.logoTech} src={html5Photo}/>
        <img className={styles.logoTech} src={cssPhoto}/>
        <img className={styles.logoTech} src={jsPhoto}/>
        <img className={styles.logoTech} src={reactPhoto}/>
        <img className={styles.logoTech} src={pyPhoto}/>
      </div>
    </div>
  )
}

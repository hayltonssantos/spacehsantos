import React from 'react'
import styles from '../Main/Main.module.css'
import minhaPhoto from '../../assets/minha_foto.jpg'

export default function Main() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.homeText}>
            'Hi there,
          <br/>
            My name is
          <br/>        
            Haylton
          <br/>
            Welcome to my space'
        </div>
        <div className={styles.photo}>
          <img src={minhaPhoto}/>
        </div>
      </div>
    </>
  )
}

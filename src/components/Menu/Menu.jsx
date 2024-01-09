import React from 'react'
import styles from '../Menu/Menu.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Menu() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h3 className={styles.logo}>
          Space HSantos
        </h3>
        <div className={styles.divList}>
          <ul className={styles.list}>
            <li className={styles.itemList}>
              <a href='#home'> Home </a>
            </li>
            <li className={styles.itemList}>
              <a href='#about'> About </a>
            </li>
            <li className={styles.itemList}>
              <a href='#tech'> Tech </a>
            </li>
            <li className={styles.itemList}>
              <a href='#projects'> Projects </a>
            </li>
            <li className={styles.itemList}>
              <a href='#contact'> Contact </a>
            </li>
          </ul>
          <ul className={styles.list}>
            <li className={styles.iconsList}>
              <a href='https://github.com/hayltonssantos' target="_blank">
                <FaGithub size={40} />
              </a>
            </li>
            <li className={styles.iconsList}>
              <a href='https://www.linkedin.com/in/hayltonssantos/' target="_blank">
                <FaLinkedin size={40} />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

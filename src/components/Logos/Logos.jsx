import React from "react";
import css from '../../assets/techs/css.png'
import html5 from '../../assets/techs/html5.png'
import js from '../../assets/techs/js.png'
import py from '../../assets/techs/py.png'
import react from '../../assets/techs/react.png'
import mysql from '../../assets/techs/mysql.png'
import styles from '../Logos/Logos.module.css'

export default function Logos({photo}){
  let imageSource;

  switch (photo) {
    case 'css':
      imageSource = css;
      break;
    case 'html5':
      imageSource = html5;
      break;
    case 'js':
      imageSource = js;
      break;
    case 'py':
      imageSource = py;
      break;
    case 'react':
      imageSource = react;
      break;
    case 'mysql':
      imageSource = mysql;
      break;
    default:
      break;
  }
  return(
    <img className={styles.photos} src={imageSource} alt={`Tech Logo - ${photo}`} />
 )
}
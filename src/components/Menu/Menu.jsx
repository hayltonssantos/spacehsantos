import React from 'react'
import Dark from '../Menu/MenuDark.module.css'
import Light from '../Menu/MenuLight.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useContext } from 'react'
import { ThemeContext } from '../../context/Theme';
import './Button.css'

export default function Menu() {
  const {theme, setTheme} = useContext(ThemeContext)

  const useTheme = () =>{
    let defaultTheme = '';
    if (theme === false){
      defaultTheme = Dark
    }
    
    if (theme === true){
      defaultTheme = Light
    }
    
    return (defaultTheme)
  }

  const style = useTheme()

  return (
    <div className={style.main}>
      <header className={style.header}>
        <h3 className={style.logo}>
          Space HSantos
        </h3>
        <div className={style.divList}>
          <ul className={style.list}>
            <li className={style.itemList}>
              <a href='#home'> Home </a>
            </li>
            <li className={style.itemList}>
              <a href='#about'> About </a>
            </li>
            <li className={style.itemList}>
              <a href='#stacks'> Stacks </a>
            </li>
            <li className={style.itemList}>
              <a href='#projects'> Projects </a>
            </li>
            <li className={style.itemList}>
              <a href='#contact'> Contact </a>
            </li>
          </ul>

          <div className={style.divListIcons}>              
              <ul className={style.list}>
                <li className={style.iconsList}>
                  <a href='https://github.com/hayltonssantos' target="_blank">
                    <FaGithub size={40} />
                  </a>
                </li>
                <li className={style.iconsList}>
                  <a href='https://www.linkedin.com/in/hayltonssantos/' target="_blank">
                    <FaLinkedin size={40} />
                  </a>
                </li>
              <label onChange={() => {
                setTheme(!theme)
              }} class="ui-switch">
                <input type="checkbox"/>
                <div class="slider">
                    <div class="circle"></div>
              </div>
              </label>
              </ul>
            </div>
          
        </div>
      </header>
    </div>
  )
}

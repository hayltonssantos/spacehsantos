import React, { useContext } from 'react'
import Dark from '../Main/MainDark.module.css'
import Light from '../Main/MainLight.module.css'
import minhaPhoto from '../../assets/minha_foto.jpg'
import { ThemeContext } from '../../context/Theme';
import photo1 from '../../assets/1.jpg'
import photo2 from '../../assets/2.jpg'

export default function Main() {

  const {theme} = useContext(ThemeContext)

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
    <>
      <div className={style.main} id='home'>
        <div className={style.homeText}>
            'Hi there,
          <br/>
            My name is
          <br/>        
            <span style={{
                color:'rgb(106, 125, 203)'
              }
            }>
              Haylton
            </span>
          <br/>
            Welcome to my space'
        </div>
        <div className={style.photo}> 
          <img className={style.profilePhoto} src={theme ? photo2 : photo1}/>
        </div>
      </div>
    </>
  )
}

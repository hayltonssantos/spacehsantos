import React, { useContext } from 'react'
import About from '../about/About'
import Main from '../../components/Main/Main'
import Stacks from '../stacks/Stacks'
import Bottom from '../../components/Bottom/Bottom'
import Projects from '../projects/Projects'
import { ThemeContext } from '../../context/Theme'
import Light from './HomeLight.module.css'
import Dark from './HomeDark.module.css'


export default function Home() {
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
    <div className={style.main}>
      <Main/>
      <About/>
      <Stacks/>
      <Projects/>
      <Bottom/>
    </div>
  )
}

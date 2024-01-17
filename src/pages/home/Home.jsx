import React from 'react'
import About from '../about/About'
import Main from '../../components/Main/Main'
import Techs from '../techs/Techs'
import Bottom from '../../components/Bottom/Bottom'
import Projects from '../projects/Projects'

export default function Home() {
  return (
    <>
      <Main/>
      <About/>
      <Techs/>
      <Projects/>
      <Bottom/>
    </>
  )
}

import React from 'react'
import About from '../about/About'
import Main from '../../components/Main/Main'
import Stacks from '../stacks/Stacks'
import Bottom from '../../components/Bottom/Bottom'
import Projects from '../projects/Projects'

export default function Home() {
  return (
    <>
      <Main/>
      <About/>
      <Stacks/>
      <Projects/>
      <Bottom/>
    </>
  )
}

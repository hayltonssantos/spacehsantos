import React from 'react'
import About from '../about/About'
import Main from '../../components/Main/Main'
import Knowledge from '../knowledge/Knowledge'
import Bottom from '../../components/Bottom/Bottom'
import Projects from '../projects/Projects'

export default function Home() {
  return (
    <>
      <Main/>
      <About/>
      <Knowledge/>
      <Projects/>
      <Bottom/>
    </>
  )
}

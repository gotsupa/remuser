import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Certificate from '../components/Certificate'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Experience from '../components/Experience'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Certificate />
      <Skills />
      <Education />
      <Experience />
    </>
  )
}

export default Home

// mobile
// tablet 768 - 1024
// desktop > 1024

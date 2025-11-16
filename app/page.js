import React from 'react'
import Navber from './components/Navber'
import Banner from './components/Banner'
import About from './components/About'
import Greetings from './components/Greetings'
import Services from './components/Services'
import Portal from './components/Portal'
import FAQ from './components/FAQ'

const page = () => {
  return (
    <>
      <Navber/>
      <Banner/>
      <About/>
      <Greetings/>
      <Services/>
      <Portal/>
      <FAQ/>
    </>
  )
}

export default page

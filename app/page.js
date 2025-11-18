import React from 'react'
import Banner from './components/Banner'
import About from './components/About'
import Greetings from './components/Greetings'
import Services from './components/Services'
import Portal from './components/Portal'
import FAQ from './components/FAQ'
const page = () => {
  return (
    <>
      <Banner/>
      <About/>
      <Greetings/>
      <Services/>
      {/* <Portal/>
      <FAQ/> */}
    </>
  )
}

export default page

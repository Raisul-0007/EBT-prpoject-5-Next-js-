import React from 'react'
import Navber from './components/Navber'
import Banner from './components/Banner'
import About from './components/About'
import Greetings from './components/Greetings'

const page = () => {
  return (
    <>
      <Navber/>
      <Banner/>
      <About/>
      <Greetings/>
    </>
  )
}

export default page

import React from 'react'
import Container from './Container'

const FAQ = () => {
  return (
    <div className='bg-black'>
      <Container>
        <div className=" lg:px-70 text-center">
            <h2 className='font-orbitron font-bold text-5xl text-white leading-15'>Frequently Asked <span className='text-transparent bg-clip-text bg-linear-to-r from-[#f0b71f] to-[#e03609]  '>Questions</span></h2>
      <p className='font-montserrat text-sm text-[#DDDD] leading-6 py-10'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 flex px-10 py-5 ">
          <h2 className='font-orbitron text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#f0b71f] to-[#e03609]'>01.</h2>
          <div className="px-12 border-b-2 border-transparent [border-image:linear-gradient(to_right,#e03609,#f0b71f)_1]">
            <h4 className='font-orbitron text-xl text-white'>How d I stay updated on new content and events?</h4>
            <p className='py-5 font-montserrat text-sm text-[#DDDD]'>A realm where advanced technology meets dystopian reality. Our website is your gateway....</p>
          </div>
          </div>
           <div className="w-1/2 flex px-10 py-5 ">
          <h2 className='font-orbitron text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#f0b71f] to-[#e03609]'>02.</h2>
          <div className="px-7 border-b-2 border-transparent [border-image:linear-gradient(to_right,#e03609,#f0b71f)_1]">
            <h4 className='font-orbitron text-xl text-white'>How can I contact customer cyber punk support?</h4>
            <p className='py-5 pr-5 font-montserrat text-sm text-[#DDDD]'>A realm where advanced technology meets dystopian reality. Our website is your gateway....</p>
          </div>
          </div>
           <div className="w-1/2 flex px-10 py-5">
          <h2 className='font-orbitron text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#f0b71f] to-[#e03609]'>03.</h2>
          <div className="px-7  border-b-2 border-transparent [border-image:linear-gradient(to_right,#e03609,#f0b71f)_1]">
            <h4 className='font-orbitron text-xl text-white'>Can I purchase cyberpunk-themed merchandise?</h4>
            <p className='py-5 pr-5 font-montserrat text-sm text-[#DDDD]'>A realm where advanced technology meets dystopian reality. Our website is your gateway....</p>
          </div>
          </div>
           <div className="w-1/2 flex px-10 py-5">
          <h2 className='font-orbitron text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#f0b71f] to-[#e03609]'>04.</h2>
          <div className="px-7 border-b-2 border-transparent [border-image:linear-gradient(to_right,#e03609,#f0b71f)_1]">
            <h4 className='font-orbitron text-xl text-white'>Are there any rules or guidelines for participating in the community?</h4>
            <p className='py-5 pr-5 font-montserrat text-sm text-[#DDDD]'>A realm where advanced technology meets dystopian reality. Our website is your gateway....</p>
          </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FAQ

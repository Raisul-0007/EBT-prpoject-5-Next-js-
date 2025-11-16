import React from 'react'
import Container from './Container'
import Image from 'next/image';
import portal from "../images/Portal.png"
import Link from 'next/link';
const Portal = () => {
  return (
    <div className='bg-black'>
      <Container className="flex py-20">
        <div className="w-1/2 p-10">
            <Image src={portal} alt="" />
        </div>
        <div className="w-1/2 py-20 px-15">
            <h2 className='font-orbitron font-bold text-5xl text-white py-10'>Your <span className=' text-transparent bg-clip-text bg-linear-to-r from-[#f0b71f] to-[#e03609]  leading-15'>Portal to a Gritty</span>, Tech-Driven Future.</h2>
            <p className='font-montserrat text-sm text-[#DDDD] leading-6 py-10'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. </p>
            <div className="flex gap-10">
                <Link className='bg-gradient-to-r from-[#f0b71f] to-[#e03609] px-3 py-2 rounded-md text-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#f0b71f] hover:to-[#e03609] border-1 border-black hover:border-white' href="">Read More</Link>
                <Link className='bg-gradient-to-r from-[#f0b71f] to-[#e03609] px-3 py-2 rounded-md text-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#f0b71f] hover:to-[#e03609] border-1 border-black hover:border-white' href="">Learn More</Link>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Portal

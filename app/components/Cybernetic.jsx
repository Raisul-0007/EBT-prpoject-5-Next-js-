import React from 'react' 
import Image from 'next/image'
import cyberone from "../images/cyberone.png"
import cybertwo from "../images/cybertwo.png"
import cyberthree from "../images/cyberthree.png"
import Container from './Container'
const Cybernetic = () => {
  return (
    <div className='bg-black'>
     <Container>
         <div className="lg:px-55">
        <h1 className='font-orbitron font-bold text-white text-center text-5xl  leading-15'>Dive into the Cybernetic <span className='text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f] '>Universe</span></h1>
        <p className='font-montserrat text-md text-[#DDDDDD] text-center py-8'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. </p>
      </div>
      <div className="flex py-20">
        <div className="w-1/3 flex">
            <div className=" w-20 h-13 py-3 px-4 mx-5  border border-white"> <Image  src={cyberone} alt='banner-image' /></div>
            <div className="px-10">
                <h5 className='font-montserrat text-2xl text-white'>Discover the Future</h5>
                <p className='font-montserrat text-md py-6 text-[#DDDD]'>Explore the high-tech, low-life world where the lines between humanity </p>
            </div>
        </div>
        <div className="w-1/3 flex">
            <div className="w-20 h-13 py-3 px-4 mx-5  border border-white"> <Image className='w-full'  src={cybertwo} alt='banner-image' /></div>
            <div className="px-10">
                <h5 className='font-montserrat text-2xl text-white'>Explore Features</h5>
            <p className='font-montserrat text-md py-6 text-[#DDDD]'>Explore the high-tech, low-life world where the lines between humanity </p>
            </div>
        </div>
        <div className="w-1/3 flex">
            <div className="w-20 h-13 py-3 px-4 mx-5 border border-white"> <Image   src={cyberthree} alt='banner-image' /></div>
            <div className="px-10">
                <h5 className='font-montserrat text-2xl text-white'>Stay Connected</h5>
            <p className='font-montserrat text-md py-6 text-[#DDDD]'>Explore the high-tech, low-life world where the lines between humanity </p>
            </div>
            
        </div>
      </div>
     </Container>
    </div>
  )
}

export default Cybernetic

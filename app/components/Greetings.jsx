import React from 'react'
import Container from './Container'
import { FaArrowRight } from "react-icons/fa6";

const Greetings = () => {
  return (
    <div className="bg-black py-10 flex">
      <Container className=" bg-[url('/greetings.png')] bg-cover bg-center relative">
        <div className="w-2/3 px-25 py-20 pt-40">
        <h2 className='font-orbitron text-6xl text-white font-bold leading-20 '>Greetings! Dive into the Cybernetic Universe</h2>
        <p className='font-montserrat text- text-[#DDDDDD] py-20'>Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
      </div>
      <div className="absolute right-10 top-20">
      <div className=" h-120 w-100 px-10 py-5 bg-[rgba(255,255,255,0.15)] rounded-2xl hover:scale-115 transition-transform duration-300 ease-in-out">
        <div className="flex items-center text-white cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className=" bg-[#f0b71f] p-1 h-3 w-3"></div>
            <div className="">
              <h4 className='font-montserrat text-2xl font-semibold pt-8 px-10'> Join the Revolution</h4>
            </div>
            <div className="font-montserrat text-2xl px-5">
              <FaArrowRight/>
            </div>
        </div>
        <div className="flex items-center text-white cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="bg-[#e03609] p-1 h-3 w-3 "></div>
            <h4 className='font-montserrat text-2xl font-semibold pt-8 px-10'>Art and Design</h4>
            <div className="font-montserrat text-2xl px-5">
              <FaArrowRight/>
            </div>
        </div>
        <div className="flex items-center text-white cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="bg-[#f0b71f]   p-1 h-3 w-3 "></div>
            <h4 className='font-montserrat text-2xl font-semibold pt-8  px-10'>Tech and Gear</h4>
            <div className="font-montserrat text-2xl px-5">
              <FaArrowRight/>
            </div>
        </div>
        <div className="flex items-center text-white cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="bg-[#e03609] p-1 h-3 w-3"></div>
            <h4 className='font-montserrat  text-2xl font-semibold pt-8 px-10'>Stories and Lore</h4>
            <div className="font-montserrat text-2xl px-5">
              <FaArrowRight/>
            </div>
        </div>
        
      </div>
      </div>
      </Container>
    </div>
  )
}

export default Greetings

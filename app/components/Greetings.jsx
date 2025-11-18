import React from 'react'
import Container from './Container'
import { FaArrowRight } from "react-icons/fa6";

const Greetings = () => {
  return (
    <div className="bg-black py-10 flex">
      <Container className=" bg-[url('/greetings.png')] bg-cover bg-center relative">
        <div className="lg:w-2/3 lg:px-25 py-20 lg:pt-40 lg:pb-0 pb-100">
        <h2 className='font-orbitron lg:text-6xl text-2xl text-white font-bold lg:eading-20 '>Greetings! Dive into the Cybernetic Universe</h2>
        <p className='font-montserrat text-sm text-[#DDDDDD] lg:py-20 py-10'>Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
      </div>
      <div className=" absolute right-10 lg:top-20 top-80">
      <div className=" lg:h-120 h-100 lg:w-100 w-80 px-10 py-5 bg-[rgba(255,255,255,0.15)] rounded-2xl hover:scale-115 transition-transform duration-300 ease-in-out">
        <div className="flex items-center text-white cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="w-1/7 ">
              <div className="bg-[#f0b71f] p-1 lg:h-3 h-2.5 lg:w-3 w-2.5"></div>
            </div>
            <div className="w-5/7 pt-8 pr-10">
              <h4 className='font-montserrat lg:text-2xl text-lg font-semibold '> Join the Revolution</h4>
            </div>
            <div className="w-1/7 ms-auto font-montserrat lg:text-2xl text-xl px-5">
              <FaArrowRight/>
            </div>
        </div>
        <div className="flex items-center text-white cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="w-1/7 ">
              <div className="bg-[#e03609] lg:h-3 h-2.5 lg:w-3 w-2.5"></div>
            </div>
            <div className="w-5/7 pt-8 pr-14">
              <h4 className='font-montserrat lg:text-2xl text-lg font-semibold '> Art and Design</h4>
            </div>
            <div className="w-1/7 ms-auto font-montserrat lg:text-2xl text-xl px-5">
              <FaArrowRight/>
            </div>
        </div>
        <div className="flex items-center text-white cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="w-1/7 ">
              <div className="bg-[#f0b71f] p-1 lg:h-3 h-2.5 lg:w-3 w-2.5"></div>
            </div>
            <div className="w-5/7 pt-8 pr-14">
              <h4 className='font-montserrat lg:text-2xl text-lg font-semibold'>Tech and Gearn</h4>
            </div>
            <div className="w-1/7 ms-auto font-montserrat lg:text-2xl text-xl px-5">
              <FaArrowRight/>
            </div>
        </div>
        <div className="flex items-center text-white cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="w-1/7 ">
              <div className="bg-[#e03609] p-1 lg:h-3 h-2.5 lg:w-3 w-2.5"></div>
            </div>
            <div className="w-5/7 pt-8 pr-14">
              <h4 className='font-montserrat lg:text-2xl text-lg font-semibold'>Stories and Lore</h4>
            </div>
            <div className="w-1/7 ms-auto font-montserrat lg:text-2xl text-xl px-5">
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

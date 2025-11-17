"use client"
import { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import logo from "../images/logo.png"
import Link from 'next/link'
import Container from './Container'
import Image from 'next/image'
const Navber = () => {
  let [menu, setMenu] = useState(false)
  return (
    <div className='bg-black py-3 text-white fixed top-0 right-0 left-0 z-[999] '>
     <Container className=' mx-auto lg:flex justify-between items-center py-4 relative'>
         <div className="">
          <Image src={logo} alt='logo'/>
      </div>
      <div className="">
        <ul className={`cursor-pointer lg:mb-0 lg:flex gap-10 lg:mt-0 ${menu == true ? " mt-3 mb-5 ": " -mt-50"}`}>
          <li  className='font-montserrat lg:text-md text-sm lg:py-0 py-1 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#f0b71f] hover:to-[#e03609] duration-100 ease-in-out '>Home</li>
          <li className='font-montserrat lg:text-md text-sm lg:py-0 py-1  hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#f0b71f] hover:to-[#e03609] duration-100 ease-in-out '>Pages</li>
          <li className='font-montserrat lg:text-md text-sm lg:py-0 py-1 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#f0b71f] hover:to-[#e03609] duration-100 ease-in-out '>Support</li>
          <li className='font-montserrat lg:text-md text-sm lg:py-0 py-1 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#f0b71f] hover:to-[#e03609] duration-100 ease-in-out '>Contact</li>
        </ul>
      </div>
      <div className="">
        <Link className=' font-montserrat lg:text-[16px] text-[12px] bg-gradient-to-r from-[#f0b71f] to-[#e03609] lg:px-3 lg:py-3 px-2 py-2 rounded-md text-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#f0b71f] hover:to-[#e03609] border-1 border-black hover:border-white' href="#">Get started free</Link>
      </div>
            <div className='lg:hidden absolute top-4 right-6' onClick={()=>setMenu(!menu)}>
                {menu ? <ImCross/> : <FiAlignJustify/>}
            </div>
     </Container>
    </div>
  )
}

export default Navber

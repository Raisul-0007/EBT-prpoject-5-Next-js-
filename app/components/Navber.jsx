import React from 'react'
import logo from "../images/logo.png"
import Link from 'next/link'
import Container from './Container'
import Image from 'next/image'
const Navber = () => {
  return (
    <div className='bg-black text-white'>
     <div className=' container mx-auto flex justify-between items-center py-4'>
         <div className="">
          <Image src={logo} alt='logo'/>
      </div>
      <div className="">
        <ul className='flex gap-10 text-gradient-to-r from-[#f0b71f] to-[#e03609]'>
          <li className=''>Home</li>
          <li>Pages</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="">
        <Link className='bg-gradient-to-r from-[#f0b71f] to-[#e03609] px-3 py-2 rounded-md text-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#f0b71f] hover:to-[#e03609] border-1 border-black hover:border-white' href="#">Get started free</Link>
      </div>
     </div>
    </div>
  )
}

export default Navber

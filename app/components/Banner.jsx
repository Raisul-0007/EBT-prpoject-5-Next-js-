import React from 'react'
import Container from './Container'
import Image from 'next/image'
import ban from '../images/ban.png'
import banTwo from '../images/banTwo.png'
import Link from 'next/link'
const Banner = () => {
  return (
    <div className='bg-black relative'>
        <Container className="">
            <div className="">
                <h1 className='font-orbitron font-bold text-white text-center text-[190px]'>Cyber Punk</h1>
            </div>
            <div className="flex justify-between items-center ">
                <div className="text-white w-1/5 py-30">
                    <h4 className='font-montserrat font-semibold text-2xl'>Stories & Lore</h4>
                    <p className='text-[#DDDDDD] font-montserrat text-sm py-4'>Dive into compelling narratives set in a dystopian future.</p>
                </div>
                <div className="w-3/5 absolute top-30 translate-x-[30%] ">
                <Image  src={ban} alt='banner-image' />
                </div>
                <div className="w-1/5 text-end py-30"> 
                    <h3 className='font-orbitron text-3xl text-[#DDDDDD] uppercase'>Events and <span className='font-semibold text-[33px]'>Updates</span></h3>
                    <p className='text-[#DDDDDD] font-montserrat text-sm py-10 '>Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
                    <Link className='bg-gradient-to-r from-[#f0b71f] to-[#e03609] px-2 py-2 rounded-md text-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#f0b71f] hover:to-[#e03609] border border-black hover:border-white ' href="#">Read More</Link>
                </div>
            </div>
            <div className="py-20 flex gap-20">
                <div className="w-3/7 lg:ml-10 z-1 flex border rounded-2xl border-white py-5 px-8 bg-[rgba(255,255,255,0.09)] hover:scale-x-115 hover:scale-y-120 transition-transform duration-300 ease-in-out">
                    <Image src={banTwo} alt='banTwo'/>
                    <div className="text-white px-7">
                        <h2 className='font-montserrat font-semibold text-4xl text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f] '>76,285K+</h2>
                        <h4 className='font-montserrat text-xl py-5 text-white'>Experience the Future</h4>
                        <p className='font-montserrat text-sm text-[#DDDDDD]'>Explore the high-tech, low-life world where the lines between</p>
                    </div>
                </div>
                <div className="w-4/7 flex justify-between text-white gap-5">
                    <div className="w-2/3 pl-20 pr-15">
                        <h4 className='font-montserrat font-semibold text-2xl uppercase'>Art and Design</h4>
                    <p className='font-montserrat text-sm text-[#DDDDDD] py-8'>Feast your eyes on stunning visuals and concept art that bring the cyberpunk</p>
                    </div>
                    <div className="w-1/3 px-10 border py-10 lg:mx-10 border-white bg-[rgba(255,255,255,0.11)] rounded-2xl hover:scale-115 transition-transform duration-300 ease-in-out">
                        <h2 className='font-montserrat font-semibold text-5xl text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f] '>17+</h2>
                        <h4 className='font-montserrat text-xl'>Years of Experiences</h4>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner

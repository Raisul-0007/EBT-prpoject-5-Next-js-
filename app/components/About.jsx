import React from 'react'
import Container from './Container'
import Image from 'next/image';
import aboutOne from '../images/aboutOne.png'
import aboutTwo from '../images/aboutTwo.png'
import aboutThree from '../images/aboutThree.png'

const About = () => {
  return (
    <div className='bg-black'>
        <Container>
            <div className="flex py-5">
                <div className="w-1/2 px-5 py-20">
                    <h1 className='font-orbitron font-bold text-5xl text-white'>Where <span className='text-transparent bg-clip-text bg-linear-to-r from-[#f0b71f] to-[#e03609]'>Neon Dreams & Digital</span> Nightmares Converge.</h1>
                    <p className='font-montserrat text-sm text-white py-20 pr-15'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
                    <div className="flex justify-between pr-10">
                        <div className="">
                            <h3 className='font-montserrat font-bold text-4xl text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f] '>89,2K+</h3>
                            <p className='font-montserrat text-sm text-white py-2'>Discover the Future</p>
                        </div>
                        <div className="">
                            <h3 className='font-montserrat font-bold text-4xl text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]'>7001+</h3>
                            <p className='font-montserrat text-sm text-white py-2'>Stories and Lore</p>
                        </div>
                        <div className="">
                            <h3 className='font-montserrat font-bold text-4xl text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]'>3,124+</h3>
                            <p className='font-montserrat text-sm text-white py-2'>Art and Design</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-10">
                    <Image src={aboutOne} alt='aboutOne'/>
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <Image className='h-[95%]' src={aboutTwo} alt='aboutTwo' />
                </div>
                <div className="w-1/2 px-15 py-20">
                    <div className="">
                        <h2 className='font-orbitron font-bold text-5xl text-white '>Unveil <span className='text-transparent bg-clip-text bg-linear-to-r from-[#f0b71f] to-[#e03609]'>the Secrets of the</span> Cybernetic Underworld</h2>
                        <p className='font-montserrat text-sm text-[#DDDDDD] pr-10 py-20'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. </p>
                    </div>
                    <div className="flex px-10 border border-white py-10 bg-[rgba(255,255,255,0.06)] rounded-xl hover:scale-115 transition-transform duration-300 ease-in-out">
                        <div className="w-2/5">
                            <Image src={aboutThree} alt="aboutThree"/>
                        </div>
                        <div className="w-3/5 pl-5 py-5">
                            <h4 className='font-montserrat text-2xl text-white'>Join the Revolution</h4>
                            <p className='font-montserrat text-sm text-[#DDDDDD] pt-5 leading-6'>Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default About

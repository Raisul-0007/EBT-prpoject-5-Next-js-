"use client"
import React from 'react'
import Container from './Container'
import Image from 'next/image';
import aboutOne from '../images/aboutOne.png'
import aboutTwo from '../images/aboutTwo.png'
import aboutThree from '../images/aboutThree.png'
import { useEffect, useRef, useState } from "react";
const About = () => {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  useEffect(() => {
    const observerOne = new IntersectionObserver(
      ([entry]) => setShowOne(entry.isIntersecting),
      { threshold: 0.3, rootMargin: "-50px 0px -50px 0px" }
    );
    if (refOne.current) observerOne.observe(refOne.current);

    const observerTwo = new IntersectionObserver(
      ([entry]) => setShowTwo(entry.isIntersecting),
      { threshold: 0.3, rootMargin: "-50px 0px -50px 0px" }
    );
    if (refTwo.current) observerTwo.observe(refTwo.current);
  }, []);
  return (
    <div className='bg-black'>
        <Container>
            <div className="flex py-5">
                <div className="lg:w-1/2 w-3/5 lg:px-5 lg:py-20 bg-black">
                    <h1 className='font-orbitron font-bold lg:text-5xl text-xl text-white'>Where <span className='text-transparent bg-clip-text bg-linear-to-r from-[#f0b71f] to-[#e03609]'>Neon Dreams & Digital</span> Nightmares Converge.</h1>
                    <p className='font-montserrat text-sm text-white lg:py-20 py-2 lg:pr-15'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
                    <div className="flex justify-between lg:pr-10 lg:py-0 py-10">
                        <div className="">
                            <h3 className='font-montserrat font-bold lg:text-4xl text-lg text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f] '>89,2K+</h3>
                            <p className='font-montserrat text-sm text-white py-2'>Discover the Future</p>
                        </div>
                        <div className="">
                            <h3 className='font-montserrat font-bold lg:text-4xl text-lg text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]'>7001+</h3>
                            <p className='font-montserrat text-sm text-white py-2'>Stories and Lore</p>
                        </div>
                        <div className="">
                            <h3 className='font-montserrat font-bold lg:text-4xl text-lg text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f]'>3,124+</h3>
                            <p className='font-montserrat text-sm text-white py-2'>Art and Design</p>
                        </div>
                    </div>
                </div>
                <div ref={refOne} className={`lg:w-1/2 w-2/5 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            ${showOne ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-52 scale-95"}`} >
                    <Image src={aboutOne} alt='aboutOne'/> 
                </div>
            </div>
            <div className="flex">
                <div  ref={refTwo}  className={`lg:w-1/2 w-2/5 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            ${showTwo ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-52 scale-95"}`}>
                    <Image className='h-[95%]' src={aboutTwo} alt='aboutTwo' />
                </div>
                <div className="lg:w-1/2 w-3/5 lg:px-15 lg:py-20">
                    <div className="">
                        <h2 className='font-orbitron font-bold lg:text-5xl text-xl text-white '>Unveil <span className='text-transparent bg-clip-text bg-linear-to-r from-[#f0b71f] to-[#e03609]'>the Secrets of the</span> Cybernetic Underworld</h2>
                        <p className='font-montserrat text-sm text-[#DDDDDD] lg:pr-10 lg:py-20 py-5'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. </p>
                    </div>
                    <div className="flex lg:px-10 border border-white lg:py-10 py-5 bg-[rgba(255,255,255,0.06)] rounded-xl hover:scale-115 transition-transform duration-300 ease-in-out">
                        <div className="w-2/5">
                            <Image src={aboutThree} alt="aboutThree"/>
                        </div>
                        <div className="w-3/5 lg:pl-5 lg:py-5">
                            <h4 className='font-montserrat lg:text-2xl text-lg text-white lg:py-0 py-5'>Join the Revolution</h4>
                            <p className='font-montserrat text-sm text-[#DDDDDD] pt-5 lg:leading-6'>Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default About

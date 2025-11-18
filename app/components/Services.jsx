import React from 'react' 
import Image from 'next/image'
import Container from './Container'
const Services = () => {
  return (
    <div className='bg-black'>
     <Container>
         <div className="lg:px-55 px-3">
        <h1 className='font-orbitron font-bold text-white text-center lg:text-5xl text-2xl  lg:leading-15'>Dive into the Cybernetic <span className='text-transparent bg-clip-text bg-linear-to-r from-[#e03609] to-[#f0b71f] '>Universe</span></h1>
        <p className='font-montserrat text-md text-[#DDDDDD] text-center lg;py-8 py-4 '>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. </p>
      </div>
      <div className="lg:flex py-20">
        <div className="lg:w-1/3 flex lg:py-0 py-5">
          <div className="lg:w-25.5 w-15 lg:h-15 h-10 py-2.5 px-3 mx-5 border-2 border-transparent [border-image:linear-gradient(to_right,#e03609,#f0b71f)_1]">
          <svg className='h-full w-full' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask-1" style={{ maskType: "alpha" }}  maskUnits="userSpaceOnUse" x="0" y="0" width="46" height="46">
          <rect x="0.5" y="0.5" width="45" height="45" fill="#D9D9D9" stroke="black"/>
          </mask>
          <g mask="url(#mask0_15_60)">
          <path d="M24.9167 28.7503V17.2503H29.7083V13.417H24.9167V1.91699H38.3333V13.417H33.5417V17.2503H38.3333V28.7503H24.9167ZM7.66666 44.0837V32.5837H12.4583V28.7503H7.66666V17.2503H12.4583V13.417H7.66666V1.91699H21.0833V13.417H16.2917V17.2503H21.0833V28.7503H16.2917V32.5837H21.0833V44.0837H7.66666Z" fill="url(#paint0_linear_15_60)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_15_60" x1="38.3333" y1="38.9846" x2="7.66666" y2="38.9846" gradientUnits="userSpaceOnUse">
          <stop offset="1" stopColor="#E03609"/>
          <stop offset="1" stopColor="#E03609"/>
          </linearGradient>
          </defs>
          </svg>
          </div>
            <div className="pl-4">
                <h5 className='font-montserrat lg:text-3xl text-2xl text-white'>Discover the Future</h5>
                <p className='pr-12 font-montserrat lg:text-md text-sm lg:py-6 py-3 text-[#DDDD]'>Explore the high-tech, low-life world where the lines between humanity </p>
            </div>
        </div>
        <div className="lg:w-1/3 flex lg:py-0 py-5">
            <div className="lg:w-25.5 w-15 lg:h-15 h-10 py-2.5 px-3 mx-5 border-2 border-transparent [border-image:linear-gradient(to_right,#e03609,#f0b71f)_1]"> 
              <svg className='w-full h-full' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask  id="mask-3" style={{ maskType: "alpha" }}  maskUnits="userSpaceOnUse" x="0" y="0" width="46" height="46">
              <rect width="46" height="46" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_15_92)">
              <path d="M36.9916 17.0585L43.125 23.1918L40.4417 25.8752L34.3083 19.7418C33.6375 20.1252 32.9187 20.4446 32.1521 20.7002C31.3854 20.9557 30.5708 21.0835 29.7083 21.0835C27.3125 21.0835 25.276 20.245 23.5989 18.5679C21.9219 16.8908 21.0833 14.8543 21.0833 12.4585C21.0833 10.0627 21.9219 8.0262 23.5989 6.34912C25.276 4.67204 27.3125 3.8335 29.7083 3.8335C32.1041 3.8335 34.1406 4.67204 35.8177 6.34912C37.4948 8.0262 38.3333 10.0627 38.3333 12.4585C38.3333 13.321 38.2055 14.1356 37.95 14.9022C37.6944 15.6689 37.375 16.3877 36.9916 17.0585ZM29.7083 17.2502C31.05 17.2502 32.184 16.787 33.1104 15.8606C34.0368 14.9342 34.5 13.8002 34.5 12.4585C34.5 11.1168 34.0368 9.9828 33.1104 9.05641C32.184 8.13002 31.05 7.66683 29.7083 7.66683C28.3666 7.66683 27.2326 8.13002 26.3062 9.05641C25.3798 9.9828 24.9166 11.1168 24.9166 12.4585C24.9166 13.8002 25.3798 14.9342 26.3062 15.8606C27.2326 16.787 28.3666 17.2502 29.7083 17.2502ZM7.66665 42.1668C6.61248 42.1668 5.71005 41.7915 4.95935 41.0408C4.20866 40.2901 3.83331 39.3877 3.83331 38.3335V11.5002C3.83331 10.446 4.20866 9.54357 4.95935 8.79287C5.71005 8.04218 6.61248 7.66683 7.66665 7.66683H18.2083C17.8569 8.46544 17.6173 9.28801 17.4896 10.1345C17.3618 10.9811 17.2979 11.8196 17.2979 12.6502C17.2979 16.1321 18.5278 19.0391 20.9875 21.371C23.4472 23.7029 26.3701 24.8689 29.7562 24.8689C30.3632 24.8689 30.9701 24.829 31.5771 24.7491C32.184 24.6693 32.8069 24.5335 33.4458 24.3418L38.3333 29.2293V38.3335C38.3333 39.3877 37.958 40.2901 37.2073 41.0408C36.4566 41.7915 35.5541 42.1668 34.5 42.1668H7.66665Z" fill="url(#paint0_linear_15_92)"/>
              </g>
              <defs>
              <linearGradient id="paint0_linear_15_92" x1="43.125" y1="37.5313" x2="3.83331" y2="37.5313" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F0B71F"/>
              <stop offset="1" stopColor="#E03609"/>
              </linearGradient>
              </defs>
              </svg>
            </div>
            <div className="px-4">
                <h5 className='font-montserrat  lg:text-3xl text-2xl text-white'>Explore Features</h5>
            <p className='font-montserrat pr-10 lg:text-md text-sm lg:py-6 py-3 text-[#DDDD]'>Explore the high-tech, low-life world where the lines between humanity </p>
            </div>
        </div>
        <div className="lg:w-1/3 flex lg:py-0 py-5">
            <div className="lg:w-25.5 w-15 lg:h-15 h-10 py-2.5 px-3 mx-5 border-2 border-transparent [border-image:linear-gradient(to_right,#e03609,#f0b71f)_1]">
              <svg className='w-full h-full' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.83333 34.5C3.29028 34.5 2.83507 34.3163 2.46771 33.949C2.10035 33.5816 1.91667 33.1264 1.91667 32.5833V30.6667H0V23C0 22.4569 0.183681 22.0017 0.551042 21.6344C0.918403 21.267 1.37361 21.0833 1.91667 21.0833H3.83333V7.66667C3.83333 5.55833 4.58403 3.75347 6.08542 2.25208C7.58681 0.750695 9.39167 0 11.5 0C13.6083 0 15.4132 0.750695 16.9146 2.25208C18.416 3.75347 19.1667 5.55833 19.1667 7.66667V26.8333C19.1667 27.8875 19.542 28.7899 20.2927 29.5406C21.0434 30.2913 21.9458 30.6667 23 30.6667C24.0542 30.6667 24.9566 30.2913 25.7073 29.5406C26.458 28.7899 26.8333 27.8875 26.8333 26.8333V13.4167H24.9167C24.3736 13.4167 23.9184 13.233 23.551 12.8656C23.1837 12.4983 23 12.0431 23 11.5V3.83333H24.9167V1.91667C24.9167 1.37361 25.1003 0.918403 25.4677 0.551042C25.8351 0.183681 26.2903 0 26.8333 0H30.6667C31.2097 0 31.6649 0.183681 32.0323 0.551042C32.3997 0.918403 32.5833 1.37361 32.5833 1.91667V3.83333H34.5V11.5C34.5 12.0431 34.3163 12.4983 33.949 12.8656C33.5816 13.233 33.1264 13.4167 32.5833 13.4167H30.6667V26.8333C30.6667 28.9417 29.916 30.7465 28.4146 32.2479C26.9132 33.7493 25.1083 34.5 23 34.5C20.8917 34.5 19.0868 33.7493 17.5854 32.2479C16.084 30.7465 15.3333 28.9417 15.3333 26.8333V7.66667C15.3333 6.6125 14.958 5.71007 14.2073 4.95937C13.4566 4.20868 12.5542 3.83333 11.5 3.83333C10.4458 3.83333 9.5434 4.20868 8.79271 4.95937C8.04201 5.71007 7.66667 6.6125 7.66667 7.66667V21.0833H9.58333C10.1264 21.0833 10.5816 21.267 10.949 21.6344C11.3163 22.0017 11.5 22.4569 11.5 23V30.6667H9.58333V32.5833C9.58333 33.1264 9.39965 33.5816 9.03229 33.949C8.66493 34.3163 8.20972 34.5 7.66667 34.5H3.83333Z" fill="url(#paint0_linear_15_97)"/>
              <defs>
              <linearGradient id="paint0_linear_15_97" x1="34.5" y1="30.3281" x2="-1.38092e-09" y2="30.3281" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F0B71F"/>
              <stop offset="1" stopColor="#E03609"/>
              </linearGradient>
              </defs>
              </svg>
            </div>
            <div className="px-4">
                <h5 className='font-montserrat  lg:text-3xl text-2xl text-white'>Stay Connected</h5>
            <p className='font-montserrat lg:text-md text-sm lg:py-6 py-3 pr-10 text-[#DDDD]'>Explore the high-tech, low-life world where the lines between humanity </p>
            </div>
            
        </div>
      </div>
     </Container>
    </div>
  )
}

export default Services

import React from 'react'
import Link from 'next/link'
const Product = () => {
  return (
   <>
    <div>
          <div className='flex justify-center items-center flex-col text-center p-8'>
               
                <h3 className='font-semibold text-3xl text-[#2d2d3e] '>Lamps We Provide</h3>
                <p className='font-normal p-2 text-[#888a8f]'>We Offer Different Lampshade To Improve ......</p>
            </div>

            <div id='service' className='flex flex-wrap justify-center items-start gap-6 px-4 lg:px-12'>

                <div className=' flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <img src="/Lampshade/ceiling/DE-43.jpg"/>
                    <Link href={""} className=''>Ceiling </Link>
                   
                </div>

                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <img src="/Lampshade/conical/DE-7.jpg"/>
                    <Link href={""} className=''>Conical</Link>
                </div>
                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <img src="/Lampshade/cylinder/DE-3.jpg"/>
                    <Link href={""} className=''>Cylinder</Link>
                    
                </div>
                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <img src="/Lampshade/half/DE-46.jpg"/>
                    <Link href={""} className=''>Half</Link>
                    
                </div>
                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <img src="/Lampshade/oval/DE-26.jpg"/>
                    <Link href={""} className=''>Oval</Link>
                    
                </div>
                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <img src="/Lampshade/pendant/DE-42.jpg"/>
                    <Link href={""} className=''>Pendant</Link>
                </div>
                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <img src="/Lampshade/pleated/DE-24.jpg"/>
                    <Link href={""} className=''>Pleated</Link>
                </div>
                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <img src="/Lampshade/rectangle/DE-34.jpg"/>
                    <Link href={""} className=''>Rectangle</Link>
                   
                </div>
                <div className='flex flex-col justify-center p-5 gap-3 w-full md:w-[260px] lg:w-[30%] shadow-lg rounded-md hover:-translate-y-2 transition-transform duration-500 ease-out'>
                    <img src="/Lampshade/square/DE-30.jpg"/>
                    <Link href={""} className=''>Square</Link>
                </div>   
            </div>
    </div>
   </>
  )
}

export default Product
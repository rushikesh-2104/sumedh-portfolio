"use client";
import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <>
    <div style={{ backgroundImage: "url('/bg3.png')" }} className='h-full w-full'>
    <div className="pr-2 md:pr-4 lg:pr-8 h-full w-full">
    <div className="bg-white h-full w-full flex flex-col">

     <div className="relative w-full h-full py-3 px-2">
                  <div className="relative">
                    <Image
                      src="/contactus.jpg"
                      alt="portfolio about page"
                      height={1500}
                      width={3550}
                      className="h-[50vh] w-full py-3 px-2 brightness-100"
                    />
    
                    
              <div className="absolute inset-0 flex flex-col lg:pt-40 md:pt-120 md:pl-8 pt-80 justify-start lg:pl-30 pl-5">
                <h1 className="text-white text-4xl font-bold">ABOUT ME</h1>
                <h4 className="text-white text-lg mt-1">HOME / ABOUT ME</h4>
          </div>
        </div>
      </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default About
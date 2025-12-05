import Image from 'next/image'
import React from 'react'
import {Anton,Merriweather} from "next/font/google";
import Link from "next/link";


const anton = Anton({
  subsets:["latin"],
  weight:"400",
});

const merriweather = Merriweather({
  subsets:["latin"],
  weight:"400",
});

const Services = () => {
  return (
    <>
    <div style={{ backgroundImage: "url('/bg3.png')" }} className="h-full w-full">
    <div className="pr-2 md:pr-4 lg:pr-8 h-full md:h-full lg:h-full w-auto">

    <div className="bg-white h-full w-full flex flex-col ">
    <div className="relative w-full h-full py-3 px-2">

    <div className="relative">
      <Image
        src="/contactus.jpg"
        alt="service"
        height={1500}
        width={3550}
        className="h-[50vh] w-full py-3 px-2 brightness-100"
      />
    
      {/* TEXT ON IMAGE */}
      <div className="absolute inset-0 flex flex-col lg:pt-40 md:pt-120 md:pl-8 pt-80 justify-start lg:pl-30 pl-5">
        <h1 className="text-white text-4xl font-bold ">SERVICE</h1> 
        <h4 className="text-white text-LG font-MEDIUM mt-1">HOME / SERVICE</h4>
      </div>
    </div>
    </div>


    <div className="grid grid-cols-1 grid-rows-2 gap-2 text-black md:mt-15 mt-15 lg:mt-15 ">
      <div className="flex flex-col justify-center items-center">
                <span className={anton.className + " lg:text-5xl md:text-5xl text-3xl font-bold text-gray-800" }>At Your Service</span>
                <div className="w-50 h-0.5 bg-yellow-400 my-2"></div>
                <span className={merriweather.className + " lg:text-2xl md:text-2xl text-[14px] px-5 md:text-[22px] md:px-5 text-center mt-8"}>
                  Where creativity meets culinary excellence — designed for your needs.
                </span>
              </div>
    </div>

    
    <div>
      

<div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-1 pr-2 md:pr-4 lg:pr-8 h-full md:h-full lg:h-full w-auto">

    <Link href="/services/menu-development">
    <div className='ml-2 brightness-60 hover:brightness-100 relative scale-97 hover:scale-100 transition '>
      <Image src="/menucard.png" alt='menucard' height={1200} width={3200} className='h-full w-full rounded-4xl'/>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white hover:text-slate-300 px-2">
        <h2 className="text-lg md:text-4xl font-bold">Menu Development</h2>
        <div className="w-12 md:w-45 h-0.5 bg-yellow-400 my-2"></div>
        <p className="text-sm md:text-2xl">Freshly prepared & delivered with care.</p>
      </div>
    </div>
    </Link>

    <Link href="/services/home-cooked-meals">
    <div className='m-2 brightness-60 hover:brightness-100 relative scale-97 hover:scale-100 transition '>
      <Image src="/mealbox.png" alt='menucard' height={1200} width={3200} className='h-full w-full rounded-4xl'/>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white hover:text-slate-300 px-2">
        <h2 className="text-lg md:text-4xl font-bold">Home Cooked Meals</h2>
        <div className="w-12 md:w-45 h-0.5 bg-yellow-400 my-2"></div>
        <p className="text-sm md:text-2xl">Tailored menus & culinary guidance for cafés and restaurants.</p>
      </div>
    </div>
    </Link>

    <Link href="/services/plating-styling">
    <div className='m-2 brightness-60 hover:brightness-100 relative hover:scale-100 scale-97 transition '>
      <Image src="/plating.png" alt='menucard' height={1200} width={3200} className='h-full w-full rounded-4xl'/>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white hover:text-slate-300 px-2">
        <h2 className="text-lg md:text-4xl font-bold">Plating & Styling</h2>
        <div className="w-12 md:w-45 h-0.5 bg-yellow-400 my-2"></div>
        <p className="text-sm md:text-2xl">Fine-dining style presentation crafted for visual elegance.</p>
      </div>
    </div>
    </Link>

    <Link href="/services/workshops-training">
    <div className=' m-2 brightness-60 hover:brightness-100 relative hover:scale-100 scale-97 transition '>
      <Image src="/workshop1.jpg" alt='menucard' height={1200} width={3200} className='h-full w-full rounded-4xl'/>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white hover:text-slate-300 px-2">
        <h2 className="text-lg md:text-4xl font-bold">Workshops & Training</h2>
        <div className="w-12 md:w-45 h-0.5 bg-yellow-400 my-2"></div>
        <p className="text-sm md:text-2xl">Hands-on learning sessions for home cooks & aspiring chefs.</p>
      </div>
    </div>
    </Link>

</div>
    
    
    </div>





    </div>

    </div>
    </div>
    </>
  )
}

export default Services
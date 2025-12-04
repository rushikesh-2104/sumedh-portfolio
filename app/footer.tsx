import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-full w-full pt-3' style={{ backgroundImage: "url('/bg3.png')" }}>
       
<div className="grid lg:grid-cols-1 lg:grid-rows-2 gap-2 ">

    <div className='lg:h-full h-full lg:w-full flex justify-center items-center '>
    <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1  lg:px-15 px-2 gap-x-8 lg:gap-30">
    
    <div className='h-full w-full flex flex-col lg:mt-10 lg:text-center'>
        <div className='text-2xl font-bold'>Menu</div>
        <div className='flex flex-col pt-5'>
            <span>Coastal Home Meal Menu</span>
            <span>Café & Fusion Signature Menu</span>
            <span>Fine-Dining Tasting Menu</span>
        </div>
    </div>

    <div className='h-full w-full flex flex-col lg:mt-10 lg:text-center'>
        <div className='text-2xl font-bold'>Social</div>
        <div className='flex flex-col pt-5'>
            <Link href="">Instagram</Link>
            <Link href="">LinkedIN</Link>
            <Link href="">Facebook</Link>
        </div>
    </div>

    <div className='h-full w-full flex flex-col lg:mt-10 lg:text-center'>
        <div className='text-2xl font-bold'>Service</div>
        <div className='flex flex-col pt-5'>
            <span>Menu Development</span>
            <span>Workshops & Chef Training</span>
            <span>Plating & Culinary Styling</span>
            <span>Home-Cooked Meal Solutions</span>
        </div>
    </div>

    <div className='h-full w-full flex flex-col lg:mt-10 lg:text-center'>
        <div className='text-2xl font-bold'>Contact</div>
        <div className='flex flex-col pt-5'>
            <span>Address</span>
            <span>+91 7208631101 </span>
            <span className='text-sm'>sumedhmhtr28@gmail.com </span>
        </div>
    </div>

</div>
    </div>

    <div className='flex justify-center items-center text-center mb-4 mt-4'>
        <h4 className='text-sm lg:text-md'>Developed By Rushikesh Mhatre © 2025. All Rights Reserved.</h4>
    </div>

</div>
    
    </div>
  )
}

export default Footer
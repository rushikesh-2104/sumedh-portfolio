import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-full w-full pt-3' style={{ backgroundImage: "url('/bg3.png')" }}>
       
<div className="grid lg:grid-cols-1 lg:grid-rows-2 gap-2 text-white">

    <div className='lg:h-full h-full lg:w-full flex justify-center items-center '>
    <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1  lg:px-15 px-2 gap-x-8 lg:gap-30">
    
    <div className='h-full w-full flex flex-col lg:mt-10 lg:text-center'>
        <div className='text-2xl font-bold'>Menu</div>
        <div className='flex flex-col pt-5'>
            <Link href="/user/menu">Coastal Home Meal Menu</Link> 
            <Link href="/user/menu">Café & Fusion Signature Menu</Link>
            <Link href="/user/menu">Fine-Dining Tasting Menu</Link>
        </div>
    </div>

    <div className='h-full w-full flex flex-col lg:mt-10 lg:text-center'>
        <div className='text-2xl font-bold'>Social</div>
        <div className='flex flex-col pt-5'>
            <Link href="https://www.instagram.com/sumedhmhatre28?igsh=MXd1aHdrbGN1ZWF5NQ==">Instagram</Link>
            <Link href="https://www.linkedin.com/in/sumedh-mhatre-943725225?utm_source=share_via&utm_content=profile&utm_medium=member_android">LinkedIN</Link>
        </div>
    </div>

    <div className='h-full w-full flex flex-col lg:mt-10 lg:text-center'>
        <div className='text-2xl font-bold'>Service</div>
        <div className='flex flex-col pt-5'>
            <Link href="/services/menu-development">Menu Development</Link>
            <Link href="/services/home-cooked-meals">Home-Cooked Meal Solutions</Link>
            <Link href="/services/plating-styling">Plating & Culinary Styling</Link>
            <Link href="/services/workshops-training">Workshops & Chef Training</Link>
        </div>
    </div>

    <div className='h-full w-full flex flex-col lg:mt-10 lg:text-center'>
        <div className='text-2xl font-bold'>Contact</div>
        <div className='flex flex-col pt-5'>
            <span>Aum Shree Apartments, Karanjade</span>
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
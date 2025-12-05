import Image from 'next/image'
import React from 'react'
import Testimonials from '@/app/components/Testimonials';

export const metadata = {
  title: "Chef Sumedh – Home-Cooked Meals, Menu Development & Culinary Workshops",
  description:
    "Experience authentic coastal flavours crafted with precision by Chef Sumedh. Offering home-cooked meal services, professional menu development, plating & styling, and culinary workshops for individuals, cafés, and restaurants.",
  keywords: [
    "Chef Sumedh",
    "home cooked meals",
    "coastal cuisine",
    "Malvani food",
    "menu development services",
    "chef workshops",
    "culinary training",
    "food plating and styling",
    "café menu consultant",
    "chef portfolio"
  ],
  openGraph: {
    title: "Chef Sumedh – Culinary Expertise & Premium Food Services",
    description:
      "Discover authentic flavour, expert techniques, and premium culinary services — from home-style meals to menu development and chef workshops.",
    url: "", 
    images: [
      {
        url: "/logo2.png", 
        width: 1200,
        height: 630,
        alt: "Chef Sumedh Culinary Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chef Sumedh – Culinary Services",
    description:
      "Home-cooked meals, menu development, plating & styling, and culinary workshops.",
    images: ["/logo2.png"],
  },
};



const Home = () => {
  return (
    <div style={{ backgroundImage: "url('/bg3.png')" }} className='h-full w-full'>
 
      <div className='pr-2 md:pr-4 lg:pr-8 h-[70vh] md:h-[70vh] lg:h-[87vh] w-auto'>
        <video src="/video1.mp4" preload="none" autoPlay muted loop playsInline className='h-full w-full object-cover border-r border-t border-b border-slate-300'/>
      </div>

      <div className="grid lg:grid-cols-4 grid-rows-1 gap-2 bg-white pt-2 md:pt-3 md:px-4 md:mr-4 pb-2 mr-2 px-1  lg:pt-2 lg:pb-2 lg:mr-8 lg:h-[30vh]">

          <div className="relative h-full w-full" >
          <Image src="/mealbox.png" alt='chef sumedh mealbox' loading="lazy" width={1500} height={1200} quality={75} className=' h-full w-full brightness-50 '/>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-2">
            <h2 className="text-lg md:text-xl font-bold">Home Cooked Meals</h2>
            <div className="w-12 h-0.5 bg-yellow-400 my-2"></div>
            <p className="text-sm md:text-base">Freshly prepared & delivered with care.</p>
          </div>
          </div>
          
          <div className="relative h-full w-full" >
            <Image src="/menucard.png" alt='sumedh menu' loading="lazy" width={1500} height={1200} quality={75} className='h-full w-full brightness-50 '/>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-2">
                <h2 className="text-lg md:text-xl font-bold">Menu Development</h2>
                <div className="w-12 h-0.5 bg-yellow-400 my-2"></div>
                <p className="text-sm md:text-base">Tailored menus & culinary guidance for cafés and restaurants.</p>
              </div> 
          </div>

          <div className="relative h-full w-full" >
            <Image src="/plating.png" alt='chef plating and styling' loading="lazy"  width={1500} height={1200} quality={75} className='h-full w-full brightness-50 '/>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-2">
                <h2 className="text-lg md:text-xl font-bold">Plating & Styling</h2>
                <div className="w-12 h-0.5 bg-yellow-400 my-2"></div>
                <p className="text-sm md:text-base">Fine-dining style presentation crafted for visual elegance.</p>
              </div>
          </div>

          <div className="relative h-full w-full">
            <Image src="/workshop.png" alt='sumedh workshop and training' loading="lazy" width={1500} height={1200} quality={75} className='h-full w-full brightness-50 '/>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-2">
                <h2 className="text-lg md:text-xl font-bold">Workshops & Training</h2>
                <div className="w-12 h-0.5 bg-yellow-400 my-2"></div>
                <p className="text-sm md:text-base">Hands-on learning sessions for home cooks & aspiring chefs.</p>
              </div>
          </div>

      </div>

      
      
        
<div className="grid lg:grid-cols-2 grid-rows-1 gap-4 bg-white  pb-2 mr-2 px-1  md:pt-3 md:px-4 md:mr-4   lg:pb-2 lg:mr-8 lg:h-[80vh]">
   
    <div>
      <Image src="/logo2.png" height={100} width={100} loading="lazy" alt='chef sumedh logo' className='object-fill h-full w-full p-8' />
    </div>
    
<div >  
<div className="grid lg:grid-cols-1 md:grid-rows-3 md:gap-4 ">
    <div className='text-black  h-[20vh] text-3xl font-extrabold pt-10 lg:pt-16 md:pt-14 text-center '>Experience Authentic Flavours Crafted With Precision</div>
    <div className='text-black px-5 '>
      I brings together the richness of Indian coastal cuisine and the finesse of fine-dining techniques to create memorable culinary experiences. With hands-on experience in 5-star hotels, specialty regional kitchens, and modern cafés, his cooking reflects deep authenticity, skilled craftsmanship, and a passion for flavour.

Whether im preparing comforting home-style meals, developing signature menus for cafés and restaurants, styling dishes for premium presentations, or conducting interactive workshops, my approach remains the same — ingredients with integrity, techniques with purpose, and food that tells a story.

Every dish he creates carries the essence of tradition while embracing the creativity of modern cuisine, crafted to elevate everyday dining into something truly special.
    </div>
    <div >
      <button className='border border-amber-500 text-amber-600 rounded-4xl  ml-30 mt-4 md:ml-65 lg:md-60 md:mt-7 md:py-5 md:px-7 py-3 px-5 '>Explore My Journey</button>
    </div>
</div>
</div>

</div>


    
<div className=" bg-white pt-2 pb-2 mr-2 px-1 md:pt-3 md:px-4 md:mr-4  lg:pt-2 lg:pb-2 lg:mr-8 lg:h-[95vh]">


<div className="relative lg:w-[95vw] md:w-[93vw] lg:h-[90vh] h-[58vh] ">

  
  <Image 
    src="/menu2.png"
    alt="chef sumedh menu box"
    width={3880}
    height={2180}
    quality={100}
    className="h-full w-full"
    loading="lazy"
  />


  <div className="absolute inset-0 bg-black/40"></div>

  
  <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-20">
    <div className="text-white max-w-xl space-y-6">

      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        At Your Service
      </h1>

      <p className="text-gray-300">
Discover a range of culinary services thoughtfully crafted from years of hands-on experience in fine-dining kitchens, regional Indian cuisine, and modern café operations. I help individuals and businesses elevate their food experience through creativity, precision, and flavour-driven craftsmanship.      </p>

      <div className="text-yellow-300 font-semibold">
        I can provide :
        <ul className="grid grid-cols-2 gap-y-2 text-white text-sm mt-2">
          <li>Menu Development</li>
          <li>Plating & Culinary Styling</li>
          <li>Workshops & Chef Training</li>
          <li>Home-Cooked Meal Solutions</li>
        </ul>
      </div>

      <button className="mt-4 px-8 py-3 border border-yellow-300 text-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition">
        GET STARTED
      </button>

    </div>
  </div>
</div>
</div>      


<div className=" bg-white pt-2 pb-2 mr-2 px-1 md:pt-3 md:px-4 md:mr-4  lg:pt-2 lg:mr-8 lg:h-[92vh]">


<div className="relative lg:w-[95vw] md:w-[93vw] lg:h-[90vh] h-[65vh] ">

  
  <video
  src="/menu.mp4"
  muted
  autoPlay
  loop
  playsInline
  preload="none"
  height={1200}
  width={3500}
  className='h-full w-full object-fill'
  />


  <div className="absolute inset-0 bg-black/40"></div>

  
  <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-20">
    <div className="text-white max-w-xl space-y-2">

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-5">
        Menus
      </h2>

      <p className="text-gray-300">
Browse our traditional menus or let us create
something new for you. </p>

<div className='flex flex-col w-[60vw] lg:mt-15 mt-5'>

<div className=" lg:h-[13vh] lg:w-full  mb-2">
    <div className='font-bold text-yellow-300 '>Coastal Home Meal Menu</div>
    <div className="col-start-2">Authentic Malvani and coastal dishes freshly prepared with homestyle comfort.</div>
</div>

<div className=" lg:h-[13vh] lg:w-full  mb-2">
    
    <div className='font-bold text-yellow-300'>Café & Fusion Signature Menu</div>
    <div className="col-start-2">A creative blend of modern café plates, salads, sandwiches, and fusion flavours.</div>
</div>

<div className=" lg:h-[13vh] lg:w-full mb-2">
    
    <div className='font-bold text-yellow-300'>Fine-Dining Tasting Menu</div>
    <div className="col-start-2">A curated multi-course experience showcasing premium ingredients and refined techniques.</div>
</div>
</div>

      <button className="lg:mt-2 mb-2 px-8 py-3 border border-yellow-300 text-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition">
        Explore More
      </button>

    </div>
  </div>
</div>
</div>
    
<div className=" bg-white pt-2 pb-2 mr-2 px-1 md:pt-3 md:px-4 md:mr-4  lg:pt-2 lg:mr-8 lg:h-full">
  <Testimonials/>
</div>

</div>
    
  )
}

export default Home
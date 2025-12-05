"use client";

import Image from "next/image";
import React from "react";
import { Anton, Merriweather } from "next/font/google";
import { Carousel_001 } from "@/app/components/ui/skiper-ui/skiper47";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "400",
});


const images = [
  { src: "/avacado.png", alt: "chef avacado" },
  { src: "/biryani.png", alt: "chef biryani" },
  { src: "/doeuvres.png", alt: "chef doeuvres" },
  { src: "/mazze.png", alt: "chef mazze" },
  { src: "/salad.png", alt: "chef salad" },
  { src: "/stuffed.png", alt: "chef stuffed" },
  { src: "/teriyaki.png", alt: "chef teriyaki" },
];

export default function Menu() {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/bg3.png')" }}
        className="h-full w-full"
      >
        <div className="pr-2 md:pr-4 lg:pr-8 h-full w-full">
          <div className="bg-white h-full w-full flex flex-col">
           
            <div className="relative w-full h-full py-3 px-2">
              <div className="relative">
                <Image
                  src="/contactus.jpg"
                  alt="portfolio menu page"
                  height={1500}
                  width={3550}
                  className="h-[50vh] w-full py-3 px-2 brightness-100"
                />

                
                <div className="absolute inset-0 flex flex-col lg:pt-40 md:pt-120 md:pl-8 pt-80 justify-start lg:pl-30 pl-5">
                  <h1 className="text-white text-4xl font-bold">MENU</h1>
                  <h4 className="text-white text-lg mt-1">HOME / MENU</h4>
                </div>
              </div>
            </div>

            
            <div className="grid grid-cols-1 grid-rows-2 gap-2 text-black lg:mt-15">
              <div className="flex flex-col justify-center items-center">
                <span
                  className={
                    anton.className +
                    " lg:text-5xl md:text-5xl text-3xl font-bold text-gray-800"
                  }
                >
                  Explore My Signature Menus
                </span>

                <div className="w-50 md:w-80 h-0.5 bg-yellow-400 my-2 md:my-3"></div>

                <span
                  className={
                    merriweather.className +
                    " lg:text-2xl md:text-2xl text-[14px] md:text-[22px] md:px-5 text-center mt-8"
                  }
                >
                  Authentic coastal flavours, modern café plates, and fine-dining
                  dishes crafted with passion.
                </span>
              </div>
            </div>

            
            <div className="h-full w-full lg:px-10 flex justify-center items-center">
                  <Carousel_001
                    images={images}
                    showPagination={true}
                    showNavigation={true}
                    loop={true}
                    autoplay={true}
                    spaceBetween={40}
                  />
            </div>
            
              
           
          
          </div>
        </div>
      </div>
    </>
  );
}

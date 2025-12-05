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
              <div className="flex flex-col justify-center items-center mt-15 lg:mt-0">
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


            <div>
           <div className="bg-white min-h-screen  md:py-10 px-6 md:px-16">
  <div className="grid md:grid-cols-2 gap-12">

    <div>
      <h3 className="text-lg font-semibold text-gray-800">
        Coastal Prawn Curry
      </h3>
      <p className="text-gray-600 mt-2 w-[90%]">
        A traditional coastal-style curry made with fresh prawns, coconut milk, and aromatic spices.
      </p>
      <hr className="my-5 border-gray-300" />
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-800">
        Malvani Chicken Sukka
      </h3>
      <p className="text-gray-600 mt-2 w-[90%]">
        Tender chicken cooked with roasted Malvani masala, coconut, and ghee for authentic home-style flavor.
      </p>
      <hr className="my-5 border-gray-300" />
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-800">
        Chef’s Signature Stuffed Paratha
      </h3>
      <p className="text-gray-600 mt-2 w-[90%]">
        Whole wheat paratha filled with spiced paneer, veggies, and herbs—perfect for café brunch menus.
      </p>
      <hr className="my-5 border-gray-300" />
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-800">
        Home-Style Fish Fry
      </h3>
      <p className="text-gray-600 mt-2 w-[90%]">
        Fresh fish marinated with coastal spices and pan-fried until crispy and golden.
      </p>
      <hr className="my-5 border-gray-300" />
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-800">
        Creamy Chicken Pasta
      </h3>
      <p className="text-gray-600 mt-2 w-[90%]">
        Café-style pasta tossed in creamy sauce, herbs, and sautéed chicken—Sumedh’s fusion twist.
      </p>
      <hr className="my-5 border-gray-300" />
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-800">
        Fresh Garden Salad Bowl
      </h3>
      <p className="text-gray-600 mt-2 w-[90%]">
        A refreshing blend of greens, veggies, and light dressing—perfect for menu development projects.
      </p>
      <hr className="my-5 border-gray-300" />
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-800">
        Egg Masala Curry
      </h3>
      <p className="text-gray-600 mt-2 w-[90%]">
        Hard-boiled eggs simmered in onion-tomato gravy with traditional spices.
      </p>
      <hr className="my-5 border-gray-300" />
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-800">
        Veg Thali Experience
      </h3>
      <p className="text-gray-600 mt-2 w-[90%]">
        A complete home-style vegetarian meal with sabzi, dal, rice, roti, and condiments.
      </p>
      <hr className="my-5 border-gray-300" />
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-800">
        Chicken Tawa Fry
      </h3>
      <p className="text-gray-600 mt-2 w-[90%]">
        Spicy, flavourful chicken cooked on tawa with onions, chillies, and chef’s coastal seasoning.
      </p>
      <hr className="my-5 border-gray-300" />
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-800">
        Homemade Biryani
      </h3>
      <p className="text-gray-600 mt-2 w-[90%]">
        Aromatic biryani layered with marinated chicken, fried onions, and basmati rice—slow-cooked to perfection.
      </p>
      <hr className="my-5 border-gray-300" />
    </div>

  </div>
</div>


            </div>          


            
            <div className="h-full w-full lg:px-10 px-2 flex justify-center items-center">
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

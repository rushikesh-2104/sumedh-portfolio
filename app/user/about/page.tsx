"use client";
import Image from "next/image";
import React from "react";
import { Anton, Merriweather } from "next/font/google";
import { Timeline } from "@/app/components/ui/skiper-ui/aceternity/timeline";
import { AnimatedNumber_002 } from "@/app/components/ui/skiper-ui/skiper37";


const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  const data = [
    {
      title: "Childhood – Early Inspiration",
      content: (
        <p>
          Growing up in a coastal family kitchen, I discovered my passion for
          cooking at a young age — learning the art of spices, fresh fish &
          traditional coastal techniques.
        </p>
      ),
    },
    {
      title: "First Home Meals",
      content: (
        <p>
          I began cooking for family and friends — simple home-style meals that
          carried warmth, comfort, and authentic flavour.
        </p>
      ),
    },
    {
      title: "Professional Training Phase",
      content: (
        <p>
          I trained myself in plating, kitchen hygiene, recipe standardization,
          and food-safety practices to deliver restaurant-quality results.
        </p>
      ),
    },
    {
      title: "2021 – Freelance Chef Begins",
      content: (
        <p>
          Started offering custom home-cooked meals & tiffin services in Mumbai
          and Navi Mumbai — specialising in coastal cuisine.
        </p>
      ),
    },
    {
      title: "Menu Card Creation & Collaborations",
      content: (
        <p>
          Designed menus for cafés and small businesses, introducing signature
          coastal dishes & modern plating styles.
        </p>
      ),
    },
    {
      title: "Workshops & Culinary Training",
      content: (
        <p>
          Conducted hands-on workshops — teaching coastal flavours, technique, and
          presentation skills to home-chefs & small kitchens.
        </p>
      ),
    },
    {
      title: "Today – Coastal Chef & Meal Specialist",
      content: (
        <p>
          Offering curated coastal meals, custom menus, and catering services —
          blending tradition with modern presentation.
        </p>
      ),
    },
  ];

  return (
    <>
      <div style={{ backgroundImage: "url('/bg3.png')" }} className="w-full h-full">
        <div className="pr-2 md:pr-4 lg:pr-8 h-full w-full">
          <div className="bg-white w-full flex flex-col">

            
            <div className="relative w-full h-full py-3 px-2">
              <div className="relative">
                <Image
                  src="/contactus.jpg"
                  alt="portfolio about page"
                  height={1500}
                  width={3550}
                  className="h-[50vh] w-full py-3 px-2 object-cover brightness-100"
                />

                <div className="absolute inset-0 flex flex-col justify-start lg:pt-40 md:pt-28 pt-48 lg:pl-20 md:pl-10 pl-5">
                  <h1 className="text-white text-4xl font-bold">ABOUT ME</h1>
                  <h4 className="text-white text-lg mt-1">HOME / ABOUT ME</h4>
                </div>
              </div>
            </div>

            
            <div className="mt-16 mb-20 px-4">
              <Timeline data={data} />
            </div>

            <div  className=" gap-1 text-black ">
              <div className="flex flex-col justify-center items-center text-center">
                <span className={`${anton.className} text-3xl md:text-5xl font-bold text-gray-800`}>
                  The Way I Approach Dish
                </span>

                <div className="w-40 md:w-64 h-0.5 bg-yellow-400 my-3"></div>

                <span className={`${merriweather.className} text-[20px] md:text-[20px] px-4 md:px-34 mt-5 mb-3 text-center`}>
                  My cooking philosophy is rooted in honesty, tradition, and flavour. I believe every dish should tell a story — one inspired by coastal cuisine, fresh ingredients, and the warmth of home-cooked meals. I approach food with patience and intention, respecting traditional techniques while adding modern presentation and professional kitchen discipline. From handcrafted spice blends to hygiene-first cooking, I focus on creating balanced, authentic flavours that comfort, satisfy, and connect people. For me, great cooking isn’t just a skill — it’s a craft shaped by experience, emotion, and a deep love for sharing good food.
                </span>

                

              </div>
            </div>


            {/* <div className="grid grid-cols-1 gap-2 text-black mt-10">
              <div className="flex flex-col justify-center items-center text-center">
                <span className={`${anton.className} text-3xl md:text-5xl font-medium text-gray-800`}>
                  Custom Recipes Created
                </span>

               

                <span>
                 <AnimatedNumber_002/>
                </span>
              </div>
            </div> */}
            


          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useState } from "react";
import { Bonheur_Royale ,Gravitas_One } from "next/font/google";
import Link from "next/link";


const bonheur = Bonheur_Royale({
  subsets: ["latin"],
  weight: "400",
});

const gravitas = Gravitas_One({
  subsets:["latin"],
  weight:"400",
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <div className="w-full px-5 py-4 relative z-50" style={{ backgroundImage: "url('/bg3.png')" }} >
       
        <div className="flex items-center justify-between">
          
          {/* Left Menu (Desktop Only) */}
          <div className="hidden sm:flex gap-4 md:pl-2 lg:pl-45 lg:gap-9 ">
            <Link href="/" className={gravitas.className}>HOME</Link>
            <Link href="/user/menu" className={gravitas.className}>MENU</Link>
            <Link href="/services" className={gravitas.className}>SERVICE</Link>
          </div>

          
          <div className="flex flex-col md:flex md:flex-col md:pl-2 lg:pr-5 text-amber-200 justify-center flex-1 sm:flex-none">
            <span className={bonheur.className + " lg:text-5xl md:text-3xl text-4xl"}>
              Sumedh Culinary
            </span>
            <span className="text-[8px] md:text-[10px] tracking-xs text-slate-100 opacity-70 md:pr-2  lg:pl-13">
              PERSONAL CHEF & CATERING
            </span>
          </div>

          
          <div className="hidden sm:flex gap-4 md:pr-3 lg:pr-35 lg:gap-9">
            <Link href="/user/about" className={gravitas.className}>ABOUT ME</Link>
            <Link href="/user/contact" className={gravitas.className}>CONTACT</Link>
          </div>

          {/* Mobile Hamburger */}
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="sm:hidden text-3xl text-white"
            >
              ☰
            </button>
          )}

          {/* Mobile Close Button */}
          {open && (
            <button
              onClick={() => setOpen(false)}
              className="sm:hidden text-3xl"
            >
              ✕
            </button>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="sm:hidden flex flex-col gap-3 mt-4 z-50 relative">
            <Link href="/" onClick={() => setOpen(false)}>HOME</Link>
            <Link href="/user/menu" onClick={() => setOpen(false)}>MENU</Link>
            <Link href="/services" onClick={() => setOpen(false)}>SERVICE</Link>
            <Link href="/user/about" onClick={() => setOpen(false)}>ABOUT ME</Link>
            <Link href="/user/contact" onClick={() => setOpen(false)}>CONTACT</Link>
          </div>

        )}
      </div>

      {/* ⭐ BLUR BACKGROUND ⭐ */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 backdrop-blur-md bg-black/20 sm:hidden z-40"
        ></div>
      )}
    </>
  );
};

export default Navbar;

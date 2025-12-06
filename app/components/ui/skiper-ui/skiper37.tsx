"use client";

import NumberFlow from "@number-flow/react";
import { motion, useSpring } from "framer-motion";
import { animate, useMotionValue } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Skiper37 = () => {
  return (
    <section className="relative h-[calc(100vh-1rem)] w-full snap-y snap-mandatory overflow-y-scroll bg-[#f5f4f3]">
      
      <div className="snap-start">
        <AnimatedNumber_002 />
      </div> 
      
    </section>
  );
};



export { Skiper37 };

export const AnimatedNumber_002 = () => {
  const finalCount = 2500;
  const [displaySubs, setDisplaySubs] = useState(0);

  // Animating sub count from 0 to subscriberCount prop
  const springSubCount = useSpring(0, {
    bounce: 1500,
    duration: 1000,
  });

  springSubCount.on("change", (value) => {
    setDisplaySubs(Math.round(value));
  });

  const animate = () => {
    springSubCount.set(finalCount);
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-white text-black ">

  {/* Animated Number */}
  <motion.div
    onViewportEnter={animate}
    onViewportLeave={() => {
      springSubCount.set(0);
    }}
    className="font-medium text-[22vw] md:text-[14vw] lg:text-[8vw] tracking-tight leading-none"
  >
    {displaySubs}
  </motion.div>

</div>

  );
};



function AnimatedNumber_004() {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(3);
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      animate(count, 100, {
        duration: 1,
        ease: "easeInOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
        onComplete: () => {
          console.log("complete");
        },
      });
    } else {
      setDisplayValue(3);
    }
  }, [inView, count]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3] text-black">
      <div className="top-22 absolute left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
        <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-[#f5f4f3] after:to-black after:content-['']">
          from x to y value in view [number-flow]
        </span>
      </div>
      <div ref={ref} className="font-bebas-neue text-[20vw] tracking-tight">
        <NumberFlow value={displayValue} prefix="$" suffix="K USD" />
      </div>
    </div>
  );
}

/**
 * Skiper 37 AnimatedNumber — React + Number Flow + Framer Motion
 * Design Inspired by https://number-flow.barvian.me/
 * Code Inspired by https://number-flow.barvian.me/
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */

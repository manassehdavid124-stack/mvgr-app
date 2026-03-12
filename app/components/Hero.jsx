
// import React from 'react'

// const Hero = () => {
//   return (
//     <div className='flex flex-col items-center justify-center bg-gray-400 pt-24 pb-20'>

//       <div className="inline-flex lg:hidden items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-in"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//         className="lucide lucide-wrench w-4 h-4 text-primary">
//         <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
//         <span className="text-primary text-sm font-medium">Trusted Auto Repair Since 2010</span></div>

//       <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white mt-10'>
//         MIGHTY VESSELS
//       </h1>

//       <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-red-600'>
//         GLOBAL RESOURCES
//       </h1>

//       <p className='text-center mt-4 text-lg sm:text-xl md:text-2xl font-extralight px-4'>
//         Expert mechanical repairs, professional spray painting, and reliable<br className='hidden sm:block' />
//         maintenance services for Japanese, Ford, and Chevy vehicles.
//       </p>

//       <div className='mt-8 flex flex-col sm:flex-row gap-4'>
//         <button className='bg-red-500 text-white px-6 py-3 text-lg sm:text-xl font-medium hover:bg-red-600 transition'>
//           Book a repair
//         </button>

//         <button className='bg-gray-600 text-red-500 px-6 py-3 text-lg sm:text-xl font-medium hover:bg-gray-200 transition'>
//           Get a quote
//         </button>
//       </div>


//       <div className='flex flex-col sm:flex-row gap-10 sm:gap-20 mt-16'>

//         <div className='text-center'>
//           <h3 className='text-4xl sm:text-5xl text-red-600'>14+</h3>
//           <p className='opacity-50'>Years Experience</p>
//         </div>

//         <div className='text-center'>
//           <h3 className='text-4xl sm:text-5xl text-red-600'>500+</h3>
//           <p className='opacity-50'>Vehicles Repaired</p>
//         </div>

//         <div className='text-center'>
//           <h3 className='text-4xl sm:text-5xl text-red-600'>100%</h3>
//           <p className='opacity-50'>Satisfaction</p>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Hero

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.4,     // writing hold
      staggerChildren: 0.18,  // gap animation
    },
  },
};

// Child pop-in animation
const item = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center bg-gray-400 pt-24 pb-20"
      id="Home"
    >
      {/* Badge */}
      <motion.div
        variants={item}
        className="inline-flex lg:hidden items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-primary"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
        <span className="text-primary text-sm font-medium">
          Trusted Auto Repair Since 2010
        </span>
      </motion.div>

      {/* Headings */}
      <motion.h1
        variants={item}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white mt-10"
      >
        MIGHTY VESSELS
      </motion.h1>

      <motion.h1
        variants={item}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-red-600"
      >
        GLOBAL RESOURCES
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={item}
        className="text-center mt-4 text-lg sm:text-xl md:text-2xl font-extralight px-4"
      >
        Expert mechanical repairs, professional spray painting, and reliable
        <br className="hidden sm:block" />
        maintenance services for Japanese, Ford, and Chevy vehicles.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={item}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

          <Link
            href="/book"
            className="bg-red-500 text-white px-6 py-3 text-lg sm:text-xl font-medium rounded-lg hover:bg-red-600 transition text-center"
          >
            Book a Repair
          </Link>

          <Link
            href="/quote"
            className="bg-gray-600 text-white px-6 py-3 text-lg sm:text-xl font-medium rounded-lg hover:bg-gray-700 transition text-center"
          >
            Get a Quote
          </Link>

        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={item}
        className="flex flex-col sm:flex-row gap-10 sm:gap-20 mt-16"
      >
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl text-red-600">14+</h3>
          <p className="opacity-50">Years Experience</p>
        </div>

        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl text-red-600">500+</h3>
          <p className="opacity-50">Vehicles Repaired</p>
        </div>

        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl text-red-600">100%</h3>
          <p className="opacity-50">Satisfaction</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

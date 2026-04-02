// import React from 'react'

// const navbar = () => {
//   return (
//     <div className='flex mt-0 ml-5 bg-gray-400  items-center h-16 pt-10 pb-10 fixed ' >
//       <div className='text-red-700 font-bold p-4 text-2xl'>
//         MVGR
//       </div>
//       <div className='text-black font-bold'>
//         MIGHTY VESSELS<br/>  
//        GLOBAL RESOURCES
//       </div>
//         <div className='ml-160 font-medium p-5 gap-1 items-end right space-x-4'>
//         <a href="/" className='p-4 bg-none text-black rounded-4xl hover:bg-white/20  font-black transition:200s'>HOME</a>
//         <a href="/about" className='p-4 bg-none text-black rounded-4xl font-black  hover:bg-white/20'>ABOUT US</a>
//         <a href="/contact" className='p-4 bg-none text-black rounded-4xl font-black hover:bg-white/20'>SERVICES</a>
//         <a href="/contact" className='p-4 bg-none text-black font-black rounded-4xl hover:bg-white/20'>CONTACT</a>
//         <a href="/contact" className='p-4 bg-red-500 text-black font-black rounded hover:bg-white/20'>Book a Repair</a>
//       </div>
//     </div>

//   )
// }

// export default navbar


// import React from 'react'

// const Navbar = () => {
//   return (
//         <nav className='fixed top-0 left-0 right-0 z-50 
//             bg-gray-400 flex items-center 
//             h-16 px-2 sm:px-8 md:px-16 lg:px-32'>


//       <div className='flex items-center gap-3'>
//         <div className='text-red-700 font-bold text-2xl'>MVGR</div>

//         <div className='text-black font-bold leading-tight text-sm sm:text-base text-md  md:text-xl'>
//           MIGHTY VESSELS <br />
//           GLOBAL RESOURCES
//         </div>
//       </div>

//       <div className='ml-auto hidden md:flex gap-4 font-bold'>
//         <a href="/" className='p-2 rounded-xl hover:bg-white/20'>HOME</a>
//         <a href="/about" className='p-2 rounded-xl hover:bg-white/20'>ABOUT US</a>
//         <a href="/services" className='p-2 rounded-xl hover:bg-white/20'>SERVICES</a>
//         <a href="/contact" className='p-2 rounded-xl hover:bg-white/20'>CONTACT</a>

//         <a href="/book" className='px-3 py-3 bg-red-500 text-white rounded 
//                               hover:bg-red-600 '>
//           Book a Repair
//         </a>
//       </div>

//     </nav>
//   )
// }

// export default Navbar

// "use client"
// import React, { useState } from 'react'
// import { Link, Menu, X } from 'lucide-react'

// const Navbar = () => {
//   const [open, setOpen] = useState(false)

//   return (
//     <nav className='fixed top-0 left-0 right-0 z-50 
//                     bg-gray-400 flex items-center 
//                     h-16 px-3 sm:px-8 md:px-10 lg:px-32'>

      
//       <div className='flex items-center gap-3'>
//         <div className='text-red-700 font-bold text-2xl sm:text-3xl'>MVGR</div>

//         <div className='text-black font-bold leading-tight 
//                         text-xs sm:text-sm md:text-base lg:text-xl'>
//           MIGHTY VESSELS <br />
//           GLOBAL RESOURCES
//         </div>
//       </div>

      
//       <div className='ml-auto hidden lg:flex items-center gap-4 font-bold'>
//         <a href="/" className='px-3 py-2 rounded-xl hover:bg-white/20'>HOME</a>
//         <a href="/about" className='px-3 py-2 rounded-xl hover:bg-white/20'>ABOUT US</a>
//         <Link href="/components/Body" className='px-3 py-2 rounded-xl hover:bg-white/20'>SERVICES</Link>
//         <a href="/contact" className='px-3 py-2 rounded-xl hover:bg-white/20'>CONTACT</a>

//         <a href="/book" className='px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600'>
//           Book a Repair
//         </a>
//       </div>

      
//       <button 
//         onClick={() => setOpen(!open)} 
//         className='ml-auto lg:hidden text-black'
//       >
//         {open ? <X size={28} /> : <Menu size={28} />}
//       </button>

    
//       {open && (
//         <div className='absolute top-16 left-0 right-0 bg-gray-400  
//                         flex flex-col gap-4 py-4 px-6 font-bold lg:hidden
//                         border-t border-white/20'>

//           <a href="/" className='py-2 rounded hover:bg-white/20'>HOME</a>
//           <a href="/about" className='py-2 rounded hover:bg-white/20'>ABOUT US</a>
//           <a href="/services" className='py-2 rounded hover:bg-white/20'>SERVICES</a>
//           <a href="/contact" className='py-2 rounded hover:bg-white/20'>CONTACT</a>

//           <a href="/book" className='py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 text-center'>
//             Book a Repair
//           </a>
//         </div>
//       )}

//     </nav>
//   )
// }

// export default Navbar

"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav  className="fixed top-0 left-0 right-0 z-50 \r\n                    bg-white/70 flex items-center \r\n                    h-16 px-3 sm:px-8 md:px-10 lg:px-32">


      <div className='flex items-center gap-3'>
        <div className='text-red-700 font-bold font-sans text-2xl sm:text-3xl'>MVGR</div>

        <div className="text-black font-bold font-sans leading-tight \r\n                        text-xs ">
          MIGHTY VESSELS <br />
          GLOBAL RESOURCES
        </div>
      </div>

      <div className='ml-auto hidden lg:flex items-center gap-4 font-bold text-black/65'>
        <Link href="#Home" className='scroll-mt-24 px-3 py-2 rounded-xl hover:bg-white/20'>HOME</Link>
        <Link href="#about" className='px-3 py-2 rounded-xl hover:bg-white/20'>ABOUT US</Link>
        <Link href="#services" className='px-3 py-2 rounded-xl hover:bg-white/20'>SERVICES</Link>
        <Link href="#contact" className='px-3 py-2 rounded-xl hover:bg-white/20'>CONTACT</Link>

        <Link
          href="/book"
          className='px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600'
        >
          Book a Repair
        </Link>
      </div>

      <button 
        onClick={() => setOpen(!open)} 
        className='ml-auto lg:hidden text-black'
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className='absolute top-16 left-0 right-0 bg-gray-400  
                        flex flex-col gap-4 py-4 px-6 font-bold lg:hidden
                        border-t border-white/20'>

          <Link href="/" className='py-2 rounded hover:bg-white/20'>HOME</Link>
          <Link href="#about" className='py-2 rounded hover:bg-white/20'>ABOUT US</Link>
          <Link href="#services" className='py-2 rounded hover:bg-white/20'>SERVICES</Link>
          <Link href="#contact" className='py-2 rounded hover:bg-white/20'>CONTACT</Link>

          <Link
            href="/book"
            className='py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 text-center'
          >
            Book a Repair
          </Link>
        </div>
      )}

    </nav>
  )
}

export default navbar

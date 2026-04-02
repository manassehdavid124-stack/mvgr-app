import React from 'react'
import Link from 'next/link'

const EndFooter = () => {
  return (
    <div className='relative overflow-hidden'>

      {/* 🔥 Animated Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-gray-100 via-red-50 to-white animate-gradient" />

      {/* 🧊 Glass overlay */}
      <div className="absolute inset-0 -z-10 backdrop-blur-[6px]" />

      <div className='flex flex-col items-center gap-10 p-6 lg:flex-row lg:justify-between lg:px-16 text-black/70'>

        {/* Logo */}
        <div className='flex gap-3 items-center'>
          <div className='text-red-600 font-bold text-2xl sm:text-3xl'>MVGR</div>

          <div className="font-bold leading-tight text-xs text-black">
            MIGHTY VESSELS <br />
            GLOBAL RESOURCES
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center lg:justify-start text-sm gap-6">

          <Link href="/" className="hover:text-red-500 transition">
            Home
          </Link>

          <Link href="#about" className="hover:text-red-500 transition">
            About Us
          </Link>

          <Link href="#services" className="hover:text-red-500 transition">
            Services
          </Link>

          <Link href="#contact" className="hover:text-red-500 transition">
            Contact
          </Link>

          <Link href="/book" className="hover:text-red-500 transition">
            Book a Repair
          </Link>

        </div>

        {/* Copyright */}
        <div className='text-center text-sm opacity-70'>
          <p>&copy; {new Date().getFullYear()} MVGR Auto Services. All rights reserved.</p>
        </div>

      </div>

    </div>
  )
}

export default EndFooter
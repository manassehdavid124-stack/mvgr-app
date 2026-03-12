import React from 'react'
import Link from 'next/link'

const EndFooter = () => {
    return (
        <div className=' flex flex-col items-center gap-10 bg-gray-600 text-white p-6 lg:flex-row lg:gap-16'>

            <div className='flex gap-3'>
                <div className='text-red-700 font-bold text-2xl sm:text-3xl'>MVGR</div>

                <div className="text-black font-bold leading-tight \r\n                        text-xs ">
                    MIGHTY VESSELS <br />
                    GLOBAL RESOURCES
                </div>
            </div>
            <div className="             lg:flex lg:flex-row lg:items-center flex flex-row text-sm lg:gap-16 \r\n  "  >
                <Link href="/">Home</Link>
                <Link href="/about" className='ml-4'>About Us</Link>
                <Link href="/services" className='ml-4'>Services</Link>
                <Link href="/contact" className='ml-4'>Contact</Link>
                <Link href="/book" className='ml-4'>Book a Repair</Link>
            </div>

            <div className=' flex items-center justify-center'>
                <p>&copy; {new Date().getFullYear()} MVGR Auto Services. All rights reserved.</p>
            </div>
        </div>
    )
}

export default EndFooter

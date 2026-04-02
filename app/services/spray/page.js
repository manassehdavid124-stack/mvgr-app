// "use client"

// import React, { useState } from "react"
// import Link from "next/link"
// import { Menu, X } from "lucide-react"

// const Page = () => {

//     const [open, setOpen] = useState(false)

//     return (
//         <div className="font-serif min-h-screen">

//             <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-400 flex items-center h-16 px-3 sm:px-8 md:px-10 lg:px-32">

//                 <div className="flex items-center gap-3">
//                     <div className="text-red-700 font-bold text-2xl sm:text-3xl">MVGR</div>

//                     <div className="text-black font-bold leading-tight text-xs">
//                         MIGHTY VESSELS <br />
//                         GLOBAL RESOURCES
//                     </div>
//                 </div>

//                 <div className="ml-auto hidden lg:flex items-center gap-4 font-bold">
//                     <Link href="#home" className="scroll-mt-24 px-3 py-2 rounded-xl hover:bg-white/20">HOME</Link>
//                     <Link href="#about" className="px-3 py-2 rounded-xl hover:bg-white/20">ABOUT US</Link>
//                     <Link href="#services" className="px-3 py-2 rounded-xl hover:bg-white/20">SERVICES</Link>
//                     <Link href="#contact" className="px-3 py-2 rounded-xl hover:bg-white/20">CONTACT</Link>

//                     <Link
//                         href="/book"
//                         className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
//                     >
//                         Book a Repair
//                     </Link>
//                 </div>

//                 <button
//                     onClick={() => setOpen(!open)}
//                     className="ml-auto lg:hidden text-black"
//                 >
//                     {open ? <X size={28} /> : <Menu size={28} />}
//                 </button>

//                 {open && (
//                     <div className="absolute top-16 left-0 right-0 bg-gray-400 flex flex-col gap-4 py-4 px-6 font-bold lg:hidden border-t border-white/20">

//                         <Link href="/" className="py-2 rounded hover:bg-white/20">HOME</Link>
//                         <Link href="/about" className="py-2 rounded hover:bg-white/20">ABOUT US</Link>
//                         <Link href="/services" className="py-2 rounded hover:bg-white/20">SERVICES</Link>
//                         <Link href="/contact" className="py-2 rounded hover:bg-white/20">CONTACT</Link>

//                         <Link
//                             href="/book"
//                             className="py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 text-center"
//                         >
//                             Book a Repair
//                         </Link>

//                     </div>
//                 )}

//             </nav>

//             <div>
//                 <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary overflow-hidden">
//                     <div id="bg"></div>
//                     <div className="container mx-auto px-4 relative z-10"><a className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8" href="/#services">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 mr-2"><path d="m12 19-7-7 7-7"></path>
//                             <path d="M19 12H5"></path></svg>Back to Services</a><div className="flex items-center gap-4 mb-6">
//                             <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench w-8 h-8 text-primary-foreground"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg></div><div><p className="text-primary font-semibold uppercase tracking-wider text-sm">Complete Engine &amp; Transmission Solutions</p><h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">Mechanical Repairs</h1></div></div><p className="text-muted-foreground text-lg max-w-3xl">Complete engine overhauls, transmission repairs, and general mechanical work by certified engineers.</p>
//                     </div>
//                 </section>
//             </div>

//             <div className="flex bg-white flex-col justify-center ">
//                 <h1 className=" flex justify-center text-red-500 text-3xl">OUR WORK</h1>
//                 <h1 className="flex justify-center text-amber-300 font-extralight text-4xl mt-3">GALLERY</h1>
//                 <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-7 p-6">

//                     <img
//                         src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop"
//                         alt="Gallery Image 1"
//                         className="w-full h-64 object-cover rounded-lg"
//                     />

//                     <img
//                         src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
//                         alt="Gallery Image 2"
//                         className="w-full h-64 object-cover rounded-lg"
//                     />

//                     <img
//                         src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
//                         alt="Gallery Image 3"
//                         className="w-full h-64 object-cover rounded-lg"
//                     />

//                     <img
//                         src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
//                         alt="Gallery Image 4"
//                         className="w-full h-64 object-cover rounded-lg"
//                     />

//                     <img
//                         src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
//                         alt="Gallery Image 5"
//                         className="w-full h-64 object-cover rounded-lg"
//                     />

//                     <img
//                         src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
//                         alt="Gallery Image 6"
//                         className="w-full h-64 object-cover rounded-lg"
//                     />

//                 </section>
//             </div>

//             <div>
//                 <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-400 overflow-hidden">

//                     {/* About this service */}
//                     <div className="space-y-4">
//                         <h1 className="text-red-500 font-sans text-xl md:text-2xl">ABOUT THIS SERVICE</h1>
//                         <h2 className="text-amber-300 font-extralight font-sans text-lg md:text-xl">WHAT WE OFFER</h2>
//                         <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
//                             Our mechanical repair services cover everything from routine maintenance to complete engine rebuilds.
//                             With decades of combined experience, our certified mechanical engineers diagnose and repair all types of mechanical issues with precision and care.
//                             We specialize in Japanese, Ford, and Chevrolet vehicles, ensuring your car receives expert attention from technicians who understand your specific make and model.
//                         </p>
//                     </div>

//                     {/* What to expect */}
//                     <div className="px-4 py-6 bg-white/55 rounded-lg space-y-4">
//                         <h2 className="text-amber-300 text-2xl font-semibold">What to Expect</h2>
//                         <ol className="list-decimal list-inside space-y-3 text-black">
//                             <li className="text-muted-foreground leading-relaxed text-lg">
//                                 Comprehensive diagnostics to identify the root cause of mechanical issues.
//                             </li>
//                             <li className="text-muted-foreground leading-relaxed text-lg">
//                                 Transparent estimates and clear communication throughout the repair process.
//                             </li>
//                             <li className="text-muted-foreground leading-relaxed text-lg">
//                                 Use of high-quality parts and advanced tools to ensure lasting repairs.
//                             </li>
//                             <li className="text-muted-foreground leading-relaxed text-lg">
//                                 Expertise in handling a wide range of mechanical problems, from engine performance issues to transmission repairs.
//                             </li>
//                         </ol>
//                     </div>

//                 </section>
//             </div>

//         </div>
//     )
// }

// export default Page

"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X, CheckCircle, Phone, ArrowLeft } from "lucide-react"
import Image from "next/image"

const Page = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="font-serif min-h-screen">

            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm flex items-center h-16 px-3 sm:px-8 md:px-10 lg:px-32">

                <div className="flex items-center gap-3">
                    <div className="text-red-600 font-bold text-2xl">MVGR</div>
                    <div className="text-black font-bold text-xs leading-tight">
                        MIGHTY VESSELS <br /> GLOBAL RESOURCES
                    </div>
                </div>

                <div className="ml-auto hidden lg:flex gap-4 font-bold items-center text-black/70">
                    <Link href="/" className="hover:text-red-500">HOME</Link>
                    <Link href="/#about" className="hover:text-red-500">ABOUT</Link>
                    <Link href="/#services" className="hover:text-red-500">SERVICES</Link>
                    <Link href="/#contact" className="hover:text-red-500">CONTACT</Link>

                    <Link href="/book" className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600">
                        Book a Repair
                    </Link>
                </div>

                <button onClick={() => setOpen(!open)} className="ml-auto lg:hidden">
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>

                {open && (
                    <div className="absolute top-16 left-0 right-0 bg-white/80 backdrop-blur-xl flex flex-col gap-4 p-6">
                        <Link href="/">HOME</Link>
                        <Link href="/#about">ABOUT</Link>
                        <Link href="/#services">SERVICES</Link>
                        <Link href="/#contact">CONTACT</Link>
                        <Link href="/book" className="bg-red-500 text-white py-2 rounded text-center">Book</Link>
                    </div>
                )}
            </nav>

            {/* HERO */}
            <section className="relative pt-24 pb-16 overflow-hidden">

                <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-red-50 to-white animate-gradient" />
                <div className="absolute inset-0 -z-10 backdrop-blur-[6px]" />

                <div className="container mx-auto px-4 space-y-6">

                    <Link href="/#services" className="flex items-center gap-2 hover:text-red-500 text-black/70 transition">
                        <ArrowLeft size={16} /> Back to Services
                    </Link>

                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center">
                            <CheckCircle className="text-white" />
                        </div>

                        <div>
                            <p className="text-red-500 uppercase text-sm">Factory Paint Finishes</p>
                            <h1 className="text-4xl md:text-6xl font-bold text-black/70">Spray Booth</h1>
                        </div>
                    </div>

                    <p className="text-gray-600 max-w-2xl">
                        Professional automotive painting with oven-bake technology for perfect finishes.
                    </p>

                </div>
            </section>

            {/* GALLERY */}
            <section className="bg-white py-10 text-center">
                <h1 className="text-red-500 text-3xl">OUR WORK</h1>
                <h2 className="text-4xl font-light mb-6 text-black/70">GALLERY</h2>

                <div className="grid md:grid-cols-3 gap-6 px-6">

                    <Image src="/img/spraypaint-1.jpeg" width={500} height={300} className="rounded-xl shadow hover:scale-105 transition" alt="" />
                    <Image src="/img/spraypaint-2.jpeg" width={500} height={300} className="rounded-xl shadow hover:scale-105 transition" alt="" />
                    <Image src="/img/spraypaint-3.jpeg" width={500} height={300} className="rounded-xl shadow hover:scale-105 transition" alt="" />

                </div>
            </section>

            {/* ABOUT */}
            <section className="relative grid md:grid-cols-2 gap-8 p-10 overflow-hidden">

                <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-red-50 to-white animate-gradient" />
                <div className="absolute inset-0 -z-10 backdrop-blur-[6px]" />

                <div>
                    <h1 className="text-red-500">ABOUT THIS SERVICE</h1>
                    <h2 className="text-2xl font-light text-black/70">WHAT WE OFFER</h2>
                    <p className="text-gray-600 mt-4">
                        Our oven-bake spray booth delivers showroom-quality paint finishes with precision and durability.
                    </p>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border p-6 rounded-xl shadow">
                    <h2 className="font-semibold mb-4 text-black/70">What to Expect</h2>
                    <ul className="space-y-3 text-gray-600">
                        <li>✔ Surface preparation</li>
                        <li>✔ Primer & curing</li>
                        <li>✔ Paint application</li>
                        <li>✔ Clear coat finish</li>
                    </ul>
                </div>

            </section>

            {/* BENEFITS */}
            <section className="py-20 px-6 text-center bg-white overflow-hidden">

                <h2 className="text-4xl font-bold mb-10 text-black/70">Customer Benefits</h2>

                <div className="grid md:grid-cols-4 gap-6 items-center">

                    {[1,2,3,4].map((i)=>(
                        <div key={i} className="bg-white/40 backdrop-blur-xl border p-6 rounded-xl shadow hover:scale-105 transition">
                            <CheckCircle className="text-red-500 mb-3" />
                            <h3 className="font-semibold text-black/70">Premium Finish</h3>
                            <p className="text-gray-600 text-sm">High quality results</p>
                        </div>
                    ))}

                </div>

            </section>

            {/* CTA */}
            <section className="relative text-white py-20 text-center overflow-hidden">

                <div className="absolute inset-0 -z-10 bg-linear-to-br from-red-500 via-red-600 to-red-700 animate-gradient" />

                <h2 className="text-4xl font-bold mb-4">READY TO GET STARTED?</h2>
                <p className="mb-6">Book your service today</p>

                <div className="flex justify-center gap-4">

                    <Link href="/book" className="bg-black px-6 py-3 rounded-lg">
                        Book Now
                    </Link>

                    <Link href="/" className="border px-6 py-3 rounded-lg hover:bg-white hover:text-red-600">
                        Back Home
                    </Link>

                </div>

            </section>

            {/* FOOTER */}
            <footer className="relative py-8 text-center text-black/70 overflow-hidden">

                <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-red-50 to-white animate-gradient" />
                <div className="absolute inset-0 -z-10 backdrop-blur-[6px]" />

                <p>© 2026 MVGR Auto Services</p>

            </footer>

        </div>
    )
}

export default Page
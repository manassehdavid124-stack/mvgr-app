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
import { Menu, X } from "lucide-react"
import { CheckCircle } from "lucide-react"
import { Phone, ArrowLeft } from "lucide-react"

const Page = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="font-serif min-h-screen">

            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-400 flex items-center h-16 px-3 sm:px-8 md:px-10 lg:px-32">
                <div className="flex items-center gap-3">
                    <div className="text-red-700 font-bold font-sans text-2xl sm:text-3xl">MVGR</div>
                    <div className="text-black font-bold leading-tight text-xs font-sans">
                        MIGHTY VESSELS <br /> GLOBAL RESOURCES
                    </div>
                </div>

                <div className="ml-auto hidden lg:flex items-center gap-4 font-bold">
                    <Link href="#home" className="scroll-mt-24 px-3 py-2 rounded-xl hover:bg-white/20 font-sans">HOME</Link>
                    <Link href="#about" className="px-3 py-2 rounded-xl hover:bg-white/20 font-sans">ABOUT US</Link>
                    <Link href="#services" className="px-3 py-2 rounded-xl hover:bg-white/20 font-sans">SERVICES</Link>
                    <Link href="#contact" className="px-3 py-2 rounded-xl hover:bg-white/20 font-sans">CONTACT</Link>
                    <Link href="/book" className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 font-sans">Book a Repair</Link>
                </div>

                <button onClick={() => setOpen(!open)} className="ml-auto lg:hidden text-black">
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>

                {open && (
                    <div className="absolute top-16 left-0 right-0 bg-gray-400 flex flex-col gap-4 py-4 px-6 font-bold lg:hidden border-t border-white/20">
                        <Link href="/" className="py-2 rounded hover:bg-white/20 font-sans">HOME</Link>
                        <Link href="/about" className="py-2 rounded hover:bg-white/20 font-sans">ABOUT US</Link>
                        <Link href="/services" className="py-2 rounded hover:bg-white/20 font-sans">SERVICES</Link>
                        <Link href="/contact" className="py-2 rounded hover:bg-white/20 font-sans">CONTACT</Link>
                        <Link href="/book" className="py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 text-center font-sans">Book a Repair</Link>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary overflow-hidden">
                <div id="bg"></div>
                <div className="container mx-auto px-4 relative z-10 space-y-6">
                    <a href="/#services" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-sans">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 mr-2">
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg>
                        Back to Services
                    </a>

                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench w-8 h-8 text-primary-foreground">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <p className="text-primary font-semibold uppercase tracking-wider text-sm font-sans">Factory-Quality paint finishes</p>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">Oven-Bake Spray Booth</h1>
                        </div>
                    </div>

                    <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed font-serif">
                        Professional automative painting with our state-of-the-art oven bake spray booth for factory-quality finishes.
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <div className="flex flex-col items-center bg-white py-10 space-y-4">
                <h1 className="text-red-500 text-3xl font-sans">OUR WORK</h1>
                <h2 className="text-amber-300 font-extralight text-4xl font-sans">GALLERY</h2>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6">

                    <img
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                        alt="Gallery Image 1"
                        className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1493238792000-8113da705763"
                        alt="Gallery Image 2"
                        className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
                        alt="Gallery Image 3"
                        className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc"
                        alt="Gallery Image 4"
                        className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
                        alt="Gallery Image 5"
                        className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
                        alt="Gallery Image 6"
                        className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    />

                </section>
            </div>

            {/* About & What to Expect */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-400 overflow-hidden">
                <div className="space-y-4">
                    <h1 className="text-red-500 font-sans text-xl md:text-2xl">ABOUT THIS SERVICE</h1>
                    <h2 className="text-amber-300 font-extralight font-sans text-lg md:text-xl">WHAT WE OFFER</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-serif">
                        Our state-of-the-art oven-bake spray booth delivers showroom-quality paint finishes that rival factory standards. Using advanced painting techniques and premium automotive paints, our skilled painters transform your vehicle with flawless color matching and durable finishes. The controlled environment of our spray booth ensures dust-free application and perfect curing for long-lasting results.</p>
                </div>

                <div className="px-4 py-6 bg-white/55 rounded-lg space-y-4">
                    <h2 className="text-amber-300 text-2xl font-semibold font-sans">What to Expect</h2>
                    <ol className="list-decimal list-inside space-y-3 text-black font-serif">
                        <li className="leading-relaxed text-lg text-muted-foreground">
                            Surface preparation and sanding
                        </li>
                        <li className="leading-relaxed text-lg text-muted-foreground">
                            primer application and curing
                        </li>
                        <li className="leading-relaxed text-lg text-muted-foreground">
                            Paint application and curing
                        </li>
                        <li className="leading-relaxed text-lg text-muted-foreground">
                            Base coat aplication in controlled environment
                        </li>
                        <li className="leading-relaxed text-lg text-muted-foreground">
                            Clear coat application and final curing for a glossy finish
                        </li>
                    </ol>
                </div>
            </section>

            <section className="bg-gray-100 py-20 px-6">

                <div className="max-w-7xl mx-auto text-center mb-14">
                    <p className="text-red-500 font-semibold tracking-widest uppercase">
                        Why Choose Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                        Customer Benefits
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">

                    {/* Card */}
                    <div className="bg-white rounded-xl border p-8 shadow-sm">
                        <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-6">
                            <CheckCircle className="text-red-500 w-6 h-6" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Factory Finish
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our oven-bake technology ensures paint cures to factory specifications.
                        </p>
                    </div>


                    <div className="bg-white rounded-xl border p-8 shadow-sm">
                        <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-6">
                            <CheckCircle className="text-red-500 w-6 h-6" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Perfect color match
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Computerized color matching for seamless repairs and full resprays.
                        </p>
                    </div>


                    <div className="bg-white rounded-xl border p-8 shadow-sm">
                        <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-6">
                            <CheckCircle className="text-red-500 w-6 h-6" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Fair Pricing
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Competitive rates with no hidden fees—transparent pricing from start to finish.
                        </p>
                    </div>


                    <div className="bg-white rounded-xl border p-8 shadow-sm">
                        <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-6">
                            <CheckCircle className="text-red-500 w-6 h-6" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Skilled Painters
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our painters have years of experience with all vechile types and colors.
                        </p>
                    </div>

                </div>

            </section>

            {/* CTA SECTION */}

            <section className="bg-red-600 text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        READY TO GET STARTED?
                    </h2>

                    <p className="text-lg text-white/90 mb-10">
                        Book this service today and experience the MVGR difference. Our team is
                        ready to help you.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">

                        <Link
                            href="/book"
                            className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 px-6 py-3 rounded-lg font-semibold"
                        >
                            <Phone size={18} />
                            Book This Service
                        </Link>

                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition"
                        >
                            <ArrowLeft size={18} />
                            Back to Home
                        </Link>

                    </div>

                </div>
            </section>



            {/* FOOTER */}

            <footer className="bg-gray-500 text-white py-8 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <span className="text-red-600 font-bold text-2xl">MVGR</span>

                        <div className="text-sm leading-tight">
                            MIGHTY VESSELS <br />
                            GLOBAL RESOURCES
                        </div>
                    </div>


                    {/* Links */}
                    <div className="flex gap-6 text-sm">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact</Link>
                    </div>


                    {/* Copyright */}
                    <p className="text-sm text-black">
                        © 2024 MVGR. All rights reserved.
                    </p>

                </div>
            </footer>

        </div>
    )
}

export default Page
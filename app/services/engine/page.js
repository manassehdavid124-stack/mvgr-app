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

                    <Link href="/#services" className="flex items-center gap-2 hover:text-red-500">
                        <ArrowLeft size={16} /> Back
                    </Link>

                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center">
                            <CheckCircle className="text-white" />
                        </div>

                        <div>
                            <p className="text-red-500 uppercase text-sm">Advanced Diagnostics</p>
                            <h1 className="text-4xl md:text-6xl font-bold text-black/70">Engine Diagnostics</h1>
                        </div>
                    </div>

                    <p className="text-gray-600 max-w-2xl">
                        Advanced computer diagnostics to identify and resolve engine issues quickly and accurately.
                    </p>

                </div>
            </section>

            {/* GALLERY */}
            <section className="bg-white py-10 text-center">
                <h1 className="text-red-500 text-3xl">OUR WORK</h1>
                <h2 className="text-4xl font-light mb-6 text-black/70">GALLERY</h2>

                <div className="grid md:grid-cols-3 gap-6 px-6">

                    <Image src="/img/engine-2.jpg" width={500} height={400} className="rounded-xl shadow hover:scale-105 transition" alt="engine" />
                    <Image src="/img/engine-1.jpg" width={500} height={400} className="rounded-xl shadow hover:scale-105 transition" alt="engine" />

                    <img
                        src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc"
                        className="rounded-xl shadow hover:scale-105 transition h-full object-cover"
                        alt="engine"
                    />

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
                        Our advanced diagnostics use modern scanning tools to detect faults accurately and prevent unnecessary repairs.
                    </p>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border p-6 rounded-xl shadow">
                    <h2 className="font-semibold mb-4 text-black/70">What to Expect</h2>
                    <ul className="space-y-3 text-gray-600">
                        <li>✔ OBD-II scanning</li>
                        <li>✔ Fault code analysis</li>
                        <li>✔ Live data monitoring</li>
                        <li>✔ Full inspection</li>
                        <li>✔ Repair recommendations</li>
                    </ul>
                </div>

            </section>

            {/* BENEFITS */}
            <section className="py-20 px-6 text-center bg-white overflow-hidden">

                <h2 className="text-4xl font-bold mb-10 text-black/70">Customer Benefits</h2>

                <div className="grid md:grid-cols-4 gap-6 ">

                    {[
                        "Quick & Accurate",
                        "Save Money",
                        "Fast Turnaround",
                        "Detailed Reports"
                    ].map((title, i) => (
                        <div key={i} className="bg-white/40 backdrop-blur-xl items-center border p-6 rounded-xl shadow hover:scale-105 transition">
                            <CheckCircle className="text-red-500 mb-3 " />
                            <h3 className="font-semibold text-black/70">{title}</h3>
                            <p className="text-black/70 text-sm">Reliable and professional service</p>
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
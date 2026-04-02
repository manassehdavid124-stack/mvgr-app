import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Body = () => {
    return (
        <div className='flex flex-col bg-white m-0  items-center justify-center  sm:flex-col sm:gap-1  gap-6'>
            <h5 id='services' className='text-2xl text-red-500 font-sans mt-25'>Our Services</h5>
            <h1 className='lg:text-5xl text-black font-extrabold items-center sm:text-4xl'>WHAT WE OFFER</h1>
            <p className='lg:flex text-black/49 items-center sm:text-2xl m-5'>From minor repairs to complete overhauls, we provide comprehensive automotive<br />
                services with guaranteed quality and competitive pricing.</p>


            <div className='lg:grid lg:grid-cols-3 sm:flex sm:flex-col'>
                <div className='flex flex-col items-center hover:scale-110 justify-center gap-4 p-10 m-10 border-2 border-gray-200 rounded-lg hover:shadow-lg transition duration-300'>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-wrench w-7  h-7 text-primary group-hover:text-primary-foreground text-red-400">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>

                        <h3 className='font-bold text-black'>MECHANICAL REPAIRS</h3>

                        <p className="text-muted-foreground leading-relaxed mb-4 text-black opacity-50">Complete engine overhauls, transmission repairs, and general mechanical work by certified engineers.</p>

                        <Link href='services/mech' className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all text-red-600">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-red-600 w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></Link>
                    </div>
                </div>

                <div className='flex flex-col hover:scale-110 items-center justify-center gap-4 p-10 m-10 border-2 border-gray-200 rounded-lg hover:shadow-lg transition duration-300'>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-paintbrush text-red-500 w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors"><path d="m14.622 17.897-10.68-2.913"></path>
                            <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z">
                            </path><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"></path>

                        </svg>
                        <h3 className='font-bold text-black'>SPRAY PAINTING</h3>

                        <p className="text-muted-foreground leading-relaxed mb-4 text-black opacity-50">High-quality spray painting services using advanced techniques for a flawless finish.</p>

                        <Link href='/services/spray' className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all text-red-600">Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-arrow-right text-red-600 w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></Link>
                    </div>
                </div>


                <div className='flex flex-col items-center hover:scale-110 justify-center gap-4 p-10 m-10 border-2 border-gray-200 rounded-lg hover:shadow-lg transition duration-300'>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-tools w-7 h-7 text-primary group-hover:text-primary-foreground text-red-400">
                            <path d="M4 14h4l10-10a4.5 4.5 0 0 1 6.36 6.36L14 20l-4-4H4v-2a2 2 0 0 1 2-2h2l2-2H6a2 2 0 0 1-2-2z"></path>
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>

                        <h3 className='font-bold text-black'>ENGINE DIAGNOSTICS</h3>

                        <p className="text-muted-foreground leading-relaxed mb-4 text-black opacity-50">Advanced engine diagnostics to identify and resolve issues quickly and accurately.</p>

                        <Link href='/services/engine' className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all text-red-600">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-red-600 w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></Link>
                    </div>
                </div>


                <div className='flex flex-col hover:scale-110 items-center justify-center gap-4 p-10 m-10 border-2 border-gray-200 rounded-lg hover:shadow-lg transition duration-300 '>
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-car w-7 h-7 text-primary  text-red-500 group-hover:text-primary-foreground transition-colors">
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle>
                            <path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>

                        <h3 className='font-bold text-black'>BODY AND PANEL BEATING WORK</h3>

                        <p className="text-muted-foreground leading-relaxed mb-4  text-black opacity-50">Expert collision repair, dent removal, and complete body restoration services.</p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center gap-4 p-10 m-10 border-2 border-gray-200 rounded-lg hover:shadow-lg hover:scale-110 transition duration-300'>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-zap w-7 h-7 hover:scale-110 text-red-500 text-primary group-hover:text-primary-foreground transition-colors">
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>

                        <h3 className='font-bold text-black'>ELECTRICAL SYSTEMS</h3>

                        <p className="text-muted-foreground leading-relaxed mb-4  text-black opacity-50">Full electrical diagnostics and repairs including wiring, alternators, starters, and more.</p>
                    </div>
                </div>

                <div className='flex flex-col hover:scale-110 items-center justify-center gap-4 p-10 m-10 border-2 border-gray-200 rounded-lg hover:shadow-lg transition duration-300'>
                    <div className=''>
                        <h3 className='font-bold text-black'>CUSTOMER SATISFACTION </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4  text-black opacity-50">Dedicated to providing exceptional customer service and ensuring complete satisfaction with every job.</p>

                    </div>
                </div>
            </div>

            <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:p-10 lg:m-10 m-5">

                <h3 className=' lg:text-4xl lg:font-bold lg:text-black lg:mt-5 sm:text-3xl flex sm:text-black text-black sm:justify-center'> VEHICLE SPECIALIZATION</h3>
                <p className='text-black/49 mt-5 mb-10'>Specializing in Japanese, Ford, and Chevy vehicles to provide expert care tailored to your car's specific needs.</p>
                <div className='lg:flex lg:flex-row Lg:gap-6 sm:flex sm:flex-col'>
                    <div>
                        <h3 className='font-bold text-red-500 text-2xl'>JAPANESE VEHICLES</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4  text-black opacity-50">Comprehensive services for Toyota, Honda, Nissan, Mazda, Subaru, and more.</p>
                    </div>

                    <div>
                        <h3 className='font-bold text-red-500 text-2xl'>FORD VEHICLES</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4  text-black opacity-50">Expert repairs and maintenance for all Ford models, ensuring optimal performance and reliability.</p>
                    </div>

                    <div>
                        <h3 className='font-bold text-red-500 text-2xl'>CHEVY VEHICLES</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4  text-black opacity-50">Specialized services for Chevrolet vehicles, from classic models to the latest releases.</p>
                    </div>
                </div>
            </div>

            <div id='about' className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 mb-10">

                <div className="relative bg-gray-400 overflow-hidden rounded-3xl shadow-lg p-10 m-5 md:p-16">


                    <div className="absolute top-6 right-6 w-16 h-16 md:w-20 md:h-20 border-2 border-primary/30 bg-red-600 rounded-lg" />
                    <div className="absolute bottom-6 left-6 w-24 h-24 md:w-32 md:h-32 border-2 border-primary/20 rounded-full" />

                    <div className="text-center relative z-10">
                        <p className="font-display text-6xl md:text-8xl text-primary mb-4">
                            MVGR
                        </p>
                        <p className="text-secondary-foreground/50 text-sm uppercase tracking-widest mb-6">
                            Excellence in Auto Care
                        </p>

                        <div className="inline-block bg-primary text-primary-foreground p-5 rounded-xl shadow-2xl">
                            <p className="font-display text-4xl md:text-5xl">14+</p>
                            <p className="text-sm opacity-90">Years of Excellence</p>
                        </div>
                    </div>

                </div>


                <div className="bg-white lg p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-3xl font-semibold mb-4 text-red-400">
                        About MVGR Auto Care
                    </h3>

                    <p className="text-sm md:text-base text-secondary-foreground/70 leading-relaxed mb-4 text-black/60">
                        Mighty Vessels Global Resources (MVGR) has been providing exceptional automotive repair and maintenance services since 2010.
                        Our team of skilled engineers and professional painters are committed to delivering quality workmanship at affordable prices.
                    </p>

                    <p className="text-sm md:text-base text-secondary-foreground/70 leading-relaxed text-black/60">
                        Whether you need a simple oil change, complete engine overhaul, or a factory-quality respray,
                        our modern facility equipped with an oven-bake spray booth ensures your vehicle receives the best care possible.
                    </p>

                    <div className='lg:grid lg:grid-cols-2 sm:flex sm:flex-col gap-8 text-black/60 mt-6'>

                        <p>🛠️ Over 14 years of trusted automotive service</p>

                        <p>👨‍🔧 Factory-trained mechanical engineers</p>

                        <p>🏭 State-of-the-art facility with oven-bake spray booth</p>

                        <p>🛠️ Transparent pricing with no hidden fees</p>


                        <p>🛠️ Genuine and quality replacement parts</p>

                        <p>👨‍🔧 Customer satisfaction guaranteed</p>

                    </div>
                </div>

                <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                   <Image src="/img/mvgrlogo.jpeg" width={500} height={300} alt="MVGR Auto Care" className=" object-cover" />

                </section>






            </div>
        </div>
    )
}
export default Body


"use client"
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Body from './components/Body'
import Footer from './components/Footer'
import EndFooter from './components/EndFooter'
const page = () => {
  return (
    <div className='font-serif '>
      <Navbar />
      <Hero />
      <Body />
      <Footer />
      <EndFooter />

    </div>
  )
}

export default page

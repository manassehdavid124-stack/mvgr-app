import React from 'react'
import { MapPin, Phone, Mail, Building2, Facebook, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <div className='relative grid grid-cols-1 lg:grid-cols-2 min-h-[400px] overflow-hidden' id='contact'>

      {/* 🔥 Animated Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-red-50 to-white animate-gradient" />

      {/* 🧊 Glass blur overlay */}
      <div className="absolute inset-0 -z-10 backdrop-blur-[6px]" />

      {/* Contact Section */}
      <div className='text-black/70 p-10 flex flex-col space-y-4'>

        <h2 className='text-2xl font-bold'>Get In Touch</h2>
        <h1 className='text-3xl font-extrabold text-black'>VISIT OUR WORKSHOP</h1>

        <p className='leading-relaxed'>
          Ready to get your vehicle serviced? Visit us at our workshop or give us a call
          to schedule an appointment. We're here to help with all your automotive needs.
        </p>

        <div className="flex items-center gap-2">
          <Building2 size={18} className="text-red-500" />
          <p>Km 4 East West Road Rumuodara Obioakpor Port Harcourt Rivers State, Nigeria</p>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-red-500" />
          <p>Port Harcourt, Rivers State, Nigeria</p>
        </div>

        <div className="flex items-center gap-2">
          <Phone size={18} className="text-red-500" />
          <p>+234 80-3706-1037</p>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={18} className="text-red-500" />
          <p>info@mvgr.com</p>
        </div>

      </div>


      {/* CTA Section */}
      <div className="relative bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl p-12 m-5 md:p-16">

        <h2 className='text-2xl font-bold mb-4 text-black'>READY TO GET STARTED?</h2>

        <p className='mb-6 text-black/70'>
          Contact us today to schedule your vehicle service or repair.
          Our team of experts is ready to assist you and ensure your vehicle is running smoothly.
        </p>

        <div className='flex items-center gap-6 text-lg'>

          <a href="https://www.facebook.com/share/1Fy83rJyeW/" className='flex items-center text-black/70 gap-2 hover:text-red-500 transition'>
            <Facebook size={20} />
            Facebook
          </a>

          <a href="https://wa.me/2349061598394?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services." className='flex items-center text-black/70 gap-2 hover:text-red-500 transition'>
            <MessageCircle size={20} />
            WhatsApp
          </a>

        </div>

      </div>

    </div>
  )
}

export default Footer
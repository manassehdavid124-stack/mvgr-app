import React from 'react'
import { MapPin, Phone, Mail, Building2, Facebook, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 bg-gray-500' id='contact'>

        {/* Contact Section */}
        <div className='text-white p-10 flex flex-col space-y-3'>

            <h2 className='text-2xl font-bold'>Get In Touch</h2>
            <h1 className='text-3xl font-extrabold'>VISIT OUR WORKSHOP</h1>

            <p>
                Ready to get your vehicle serviced? Visit us at our workshop or give us a call
                to schedule an appointment. We're here to help with all your automotive needs.
            </p>

            <div className="flex items-center gap-2">
                <Building2 size={18} />
                <p>1234 Auto Repair St.</p>
            </div>

            <div className="flex items-center gap-2">
                <MapPin size={18} />
                <p>City, State, ZIP</p>
            </div>

            <div className="flex items-center gap-2">
                <Phone size={18} />
                <p>+234 80-3706-1037</p>
            </div>

            <div className="flex items-center gap-2">
                <Mail size={18} />
                <p>info@mvgr.com</p>
            </div>

        </div>


        {/* CTA Section */}
        <div className="relative bg-gray-400 overflow-hidden rounded-3xl shadow-lg p-12 m-5 md:p-16">

            <h2 className='text-2xl font-bold mb-4'>READY TO GET STARTED?</h2>

            <p className='mb-6'>
                Contact us today to schedule your vehicle service or repair.
                Our team of experts is ready to assist you and ensure your vehicle is running smoothly.
            </p>

            <div className='flex items-center gap-6 text-lg'>

                <a href="#" className='flex items-center gap-2 hover:text-red-300 transition'>
                    <Facebook size={20} />
                    Facebook
                </a>

                <a href="#" className='flex items-center gap-2 hover:text-red-300 transition'>
                    <MessageCircle size={20} />
                    WhatsApp
                </a>

            </div>

        </div>

    </div>
  )
}

export default Footer
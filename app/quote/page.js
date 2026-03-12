"use client"
import React from "react"
import { useForm, ValidationError } from "@formspree/react"

export default function QuotePage() {

    const [state, handleSubmit] = useForm("xdawzazq")

    if (state.succeeded) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-gray-400">
                <p className="text-2xl font-semibold text-white">
                    Your Quote request has been sent! 
                   <br> An estimate will be sent shortly</br>
                </p>
            </section>
        )
    }
    return (
        <section className="min-h-screen bg-gray-400 py-20 px-6 text-black">
            <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow text-black">

                <h1 className="text-3xl font-bold mb-6 text-center text-red-500">
                    Get a Quote
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            className="w-full border p-3 rounded-lg"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>


                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="w-full border p-3 rounded-lg"
                    />


                    {/* Phone */}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="w-full border p-3 rounded-lg"
                    />


                    {/* Car Brand */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Vehicle Brand
                        </label>

                        <select
                            name="vehicle"
                            required
                            className="w-full border p-3 rounded-lg"
                        >
                            <option value="">Choose a vehicle brand</option>
                            <option>Toyota</option>
                            <option>Nissan</option>
                            <option>Lexus</option>
                            <option>Ford</option>
                            <option>Acura</option>
                            <option>Chevrolet</option>
                            <option>Mazda</option>
                            <option>Honda</option>
                            <option>Hyundai</option>
                            <option>Volvo</option>
                            <option>Dodge</option>
                            <option>Lincoln</option>
                            <option>Other Japanese Cars</option>
                        </select>
                    </div>


                    {/* Service Type */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Service Type
                        </label>

                        <select
                            name="service"
                            required
                            className="w-full border p-3 rounded-lg"
                        >
                            <option value="">Select Service</option>
                            <option>Engine Repair</option>
                            <option>Brake Service</option>
                            <option>Oil Change</option>
                            <option>Transmission Repair</option>
                            <option>Suspension Work</option>
                            <option>Electrical Repair</option>
                            <option>Air Conditioning Service</option>
                            <option>Exhaust Repair</option>
                            <option>Wheel Alignment</option>
                            <option>Other</option>
                        </select>
                    </div>




                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Describe the issue with your vehicle"
                        rows="4"
                        className="w-full border p-3 rounded-lg"
                    ></textarea>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-red-500 text-white px-6 py-3 text-lg font-medium rounded-lg hover:bg-red-600 transition"
                    >
                        Submit Request
                    </button>

                </form>

            </div>
        </section>
    )
}
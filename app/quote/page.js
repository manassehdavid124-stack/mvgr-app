"use client"
import React from "react"
import { useForm, ValidationError } from "@formspree/react"

export default function QuotePage() {

    const [state, handleSubmit] = useForm("xwvrblvq")

    if (state.succeeded) {
        return (
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-red-50 to-white animate-gradient" />
                <div className="absolute inset-0 -z-10 backdrop-blur-[6px]" />

                <div className="bg-white/40 backdrop-blur-xl border p-10 rounded-xl shadow text-center">
                    <h1 className="text-3xl font-bold text-red-500 mb-4">
                        Request Sent ✅
                    </h1>

                    <p className="text-gray-700">
                        Your quote request has been sent successfully.
                        <br />
                        An estimate will be sent shortly.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section className="min-h-screen py-20 px-6 relative overflow-hidden text-black/70">

            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-red-50 to-white animate-gradient" />
            <div className="absolute inset-0 -z-10 backdrop-blur-[6px]" />

            <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-xl border p-10 rounded-xl shadow">

                <h1 className="text-3xl font-bold mb-6 text-center text-red-500">
                    Get a Quote
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="w-full border p-3 rounded-lg focus:outline-none text-black/70 focus:ring-2 focus:ring-red-400"
                    />

                    {/* Phone */}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="w-full border p-3 rounded-lg text-black/70 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />

                    {/* Vehicle */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Vehicle Brand
                        </label>

                        <select
                            name="vehicle"
                            required
                            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
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
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Service */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Service Type
                        </label>

                        <select
                            name="service"
                            required
                            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            <option value="">Select Service</option>
                            <option>Engine Repair</option>
                            <option>Brake Service</option>
                            <option>Oil Change</option>
                            <option>Transmission Repair</option>
                            <option>Suspension Work</option>
                            <option>Electrical Repair</option>
                            <option>Air Conditioning</option>
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
                        className="w-full border p-3 rounded-lg text-black/70 focus:outline-none focus:ring-2 focus:ring-red-400"
                    ></textarea>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-red-500 text-white px-6 py-3 text-lg font-medium rounded-lg hover:bg-red-600 transition hover:scale-[1.02]"
                    >
                        {state.submitting ? "Sending..." : "Submit Request"}
                    </button>

                </form>

            </div>
        </section>
    )
}
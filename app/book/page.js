import Link from "next/link";

export default function BookPage() {
    return (
        <section className="min-h-screen bg-gray-400 py-20 px-6 text-black">
            <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow">

                <h1 className="text-3xl font-bold mb-6 text-center text-red-500">
                    Book a Repair
                </h1>

                <form className="space-y-6">

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border p-3 rounded-lg text-black"
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border p-3 text-black rounded-lg"
                    />

                    {/* Car Brand Dropdown */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Select Vehicle Brand
                        </label>

                        <select className="w-full border p-3 rounded-lg">
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

                    <textarea
                        placeholder="Describe the issue with your vehicle"
                        rows="4"
                        className="w-full border p-3 rounded-lg"
                    />

                    <div>
                        <label className="block mb-2 font-medium">
                            Preferred Service Date
                        </label>

                        <input
                            type="date"
                            className="w-full border p-3 rounded-lg"
                        />
                    </div>

                    {/* Service Type Dropdown */}



                    <label className="block mb-2 font-medium">
                        Select Service Type
                    </label>
                    <select className="w-full border p-3 rounded-lg">

                        <option>Engine Repair</option>
                        <option>Brake Service</option>
                        <option>Oil Change</option>
                        <option>Transmission Repair</option>
                        <option>Suspension Work</option>
                        <option>Electrical System Repair</option>
                        <option>Air Conditioning Service</option>
                        <option>Exhaust System Repair</option>
                        <option>Wheel Alignment</option>
                        <option>Other Services</option>
                    </select>

                </form>

                <Link href="/confirmation" className="bg-red-500 text-white px-6 py-3 text-lg sm:text-xl font-medium rounded-lg hover:bg-red-600 transition text-center block mt-8">
                    Submit Request
                </Link>

            </div>
        </section>
    )
}
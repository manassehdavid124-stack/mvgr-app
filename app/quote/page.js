export default function QuotePage() {
  return (
    <section className="min-h-screen bg-gray-400 py-20 px-6 text-black">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow text-black">

        <h1 className="text-3xl font-bold mb-6 text-center text-red-500">
          Get a Quote
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg text-black"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Vehicle Model"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Describe the service you need"
            rows="4"
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <button
            className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Request Quote
          </button>

        </form>

      </div>
    </section>
  )
}
export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Contact Us</h2>
        <form className="bg-gray-50 p-8 rounded-xl shadow-md flex flex-col gap-6">
          <input type="text" placeholder="Your Name" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Your Email" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Your Message" rows="4" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

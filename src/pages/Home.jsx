export default function Home() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Professional ID Cards in Minutes
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Upload your Excel data, customize your ID card, and download PDFs instantly. Perfect for companies, schools, and events.
          </p>
          <a href="/generator" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            Get Started
          </a>
        </div>
        <div className="flex-1">
          <img src="/id-card/hero-idCard.png" alt="ID Card Preview" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}

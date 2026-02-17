export default function HowItWorks() {
  const steps = [
    "Upload your Excel or CSV data.",
    "Edit and customize your ID cards.",
    "Preview the cards live.",
    "Download PDFs instantly."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4 font-bold">{idx + 1}</div>
              <p className="text-gray-600 text-center">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white font-bold mb-3 text-lg">ID Card Generator</h2>
          <p className="text-gray-400 text-sm">
            Create professional ID cards easily. Upload Excel data, customize, and download PDFs instantly.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-3 text-gray-400">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ID Card Generator. All rights reserved.
      </div>
    </footer>
  );
}

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center">
            ID
          </div>
          <span className="font-semibold text-gray-800">
            ID Card Generator
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">How it Works</li>
          <li className="hover:text-blue-600 cursor-pointer">Templates</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* CTA */}
        <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}
